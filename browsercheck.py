#!/usr/bin/env python3
"""Render the built mirror in a real browser and compare it against the source.

    python3 browsercheck.py . /challenge
    python3 browsercheck.py . /challenge --skip-upstream

verify.py checks the files; this checks what a browser actually ends up with.
The failures that matter here are invisible in the served HTML: a page that
never hydrates, and content that only exists after hydration -- Gamma inlines
and recolours its SVG icons at runtime, so a broken icon reference produces an
empty box, no request and no console error.

The pages are rebuilt into a temp directory with ORIGIN pointed at the local
server, because assets listed in build.ABSOLUTE are referenced by absolute URL
and would otherwise be fetched from the live site instead of the tree under test.

Needs a Chromium; it looks in PATH and in the Playwright and Puppeteer caches.
"""
import asyncio, functools, glob, http.server, json, os, shutil, socketserver, subprocess
import sys, tempfile, threading, time, urllib.parse, urllib.request

import build

PORT = 8791
UPSTREAM = 'https://untitled-w5qr52y.gamma.site'
# Both sites 404 on it; Gamma never ships one. Not worth failing a check over.
IGNORE_404 = ('/favicon.ico',)
SCROLL = """
(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const h = () => document.documentElement.scrollHeight;
  for (let y = 0; y < h(); y += Math.round(window.innerHeight * 0.7)) { window.scrollTo(0, y); await sleep(400); }
  window.scrollTo(0, h()); await sleep(1200);
  return JSON.stringify({
    body: document.body.className,
    next: document.getElementById('__next') ? document.getElementById('__next').innerHTML.length : -1,
    // Gamma inlines recolourable icons as <svg width="1024">; they exist only after hydration
    icons: [...document.querySelectorAll('svg')].filter(s => s.getAttribute('width') === '1024').length,
    imgs: document.querySelectorAll('img').length,
    height: h(),
  });
})()
"""


def find_chrome():
    for name in ('chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable'):
        p = shutil.which(name)
        if p:
            return p
    pats = ('~/.cache/ms-playwright/chromium-*/chrome-linux*/chrome',
            '~/.cache/puppeteer/chrome/*/chrome-linux*/chrome')
    found = [p for pat in pats for p in glob.glob(os.path.expanduser(pat))]
    return sorted(found)[-1] if found else None


async def probe(chrome, url, port, settle=6.0, scroll_budget=90.0):
    """Load a page, scroll it to the bottom, and report what it fetched and rendered."""
    import websockets
    prof = tempfile.mkdtemp(prefix='browsercheck-')
    proc = subprocess.Popen([chrome, '--headless', '--no-sandbox', '--disable-gpu',
                             '--disable-dev-shm-usage', f'--remote-debugging-port={port}',
                             f'--user-data-dir={prof}', '--window-size=1400,1000', 'about:blank'],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    ws_url = None
    for _ in range(80):
        try:
            tabs = json.load(urllib.request.urlopen(f'http://127.0.0.1:{port}/json'))
            ws_url = next(t['webSocketDebuggerUrl'] for t in tabs if t['type'] == 'page')
            break
        except Exception:
            time.sleep(0.5)
    if not ws_url:
        proc.terminate(); shutil.rmtree(prof, ignore_errors=True)
        raise RuntimeError('could not attach to the browser')
    reqs, status, info = [], {}, {}
    try:
        async with websockets.connect(ws_url, max_size=200_000_000) as ws:
            seq = [0]
            async def send(method, params=None):
                seq[0] += 1
                await ws.send(json.dumps({'id': seq[0], 'method': method, 'params': params or {}}))
                return seq[0]
            for m in ('Network.enable', 'Page.enable', 'Runtime.enable'):
                await send(m)
            await send('Page.navigate', {'url': url})
            deadline, scrolling = time.time() + settle, None
            while True:
                try:
                    msg = json.loads(await asyncio.wait_for(ws.recv(), max(0.05, deadline - time.time())))
                except asyncio.TimeoutError:
                    if scrolling is not None:
                        break
                    scrolling = await send('Runtime.evaluate',
                                           {'expression': SCROLL, 'awaitPromise': True, 'returnByValue': True})
                    deadline = time.time() + scroll_budget
                    continue
                if msg.get('method') == 'Network.requestWillBeSent':
                    reqs.append(msg['params']['request']['url'])
                elif msg.get('method') == 'Network.responseReceived':
                    status[msg['params']['response']['url']] = msg['params']['response']['status']
                elif scrolling is not None and msg.get('id') == scrolling:
                    if 'result' in msg and 'exceptionDetails' not in msg['result']:
                        info = json.loads(msg['result']['result']['value'])
                    deadline = time.time() + 3
    finally:
        proc.terminate(); proc.wait(); shutil.rmtree(prof, ignore_errors=True)
    return {'requests': sorted(set(reqs)), 'status': status, 'info': info}


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def serve(root, port):
    handler = functools.partial(QuietHandler, directory=root)
    httpd = socketserver.ThreadingTCPServer(('127.0.0.1', port), handler)
    httpd.daemon_threads = True
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main(out, base, skip_upstream=False):
    chrome = find_chrome()
    if not chrome:
        sys.exit('no Chromium found: install one, or run the browser checks in MIRRORING.md by hand')
    base = base.rstrip('/')
    tmp = tempfile.mkdtemp(prefix='browsercheck-site-')
    origin = f'http://127.0.0.1:{PORT}'
    saved, build.ORIGIN = build.ORIGIN, origin       # so ABSOLUTE assets resolve to the tree under test
    try:
        build.build(os.path.join(tmp, base.lstrip('/')) if base else tmp, base)
    finally:
        build.ORIGIN = saved
    httpd = serve(tmp, PORT)
    bad = []
    try:
        for route, (slug, _) in build.ROUTES.items():
            mine = asyncio.run(probe(chrome, f'{origin}{base}{slug}', PORT + 100))
            i = mine['info']
            if i.get('body') != 'chakra-ui-light':
                bad.append(f'{slug}: did not hydrate (body class {i.get("body")!r}); the page will read as blank')
            for u, s in mine['status'].items():
                if s >= 400 and not u.endswith(IGNORE_404):
                    bad.append(f'{slug}: {s} on {u}')
            third = {urllib.parse.urlsplit(u).netloc for u in mine['requests']} - {f'127.0.0.1:{PORT}'}
            note = f'  third-party: {sorted(third)}' if third else ''
            if skip_upstream:
                print(f'{slug:<12} icons={i.get("icons")} imgs={i.get("imgs")} '
                      f'hydrated={i.get("body") == "chakra-ui-light"}{note}')
                continue
            up = asyncio.run(probe(chrome, UPSTREAM + urllib.parse.quote(route), PORT + 101))
            j = up['info']
            print(f'{slug:<12} icons={i.get("icons")}/{j.get("icons")}  imgs={i.get("imgs")}/{j.get("imgs")}  '
                  f'height={i.get("height")}/{j.get("height")}{note}')
            for k, label in (('icons', 'inline SVG icons'), ('imgs', 'images')):
                if i.get(k) != j.get(k):
                    bad.append(f'{slug}: {i.get(k)} {label} rendered, the source renders {j.get(k)}')
    finally:
        httpd.shutdown()
        shutil.rmtree(tmp, ignore_errors=True)
    for b in bad:
        print('FAIL ', b)
    print(f'\n{len(bad)} problem(s)' if bad else '\nok: every page hydrates and renders what the source renders')
    return 1 if bad else 0


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if not args:
        sys.exit(__doc__)
    sys.exit(main(args[0], args[1] if len(args) > 1 else '', '--skip-upstream' in sys.argv))
