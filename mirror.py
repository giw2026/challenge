#!/usr/bin/env python3
"""Re-harvest the Gamma source site into this repo's pristine sources.

    python3 mirror.py --check    # report what changed upstream; write nothing
    python3 mirror.py            # refresh src/pages/, src/mapping.json, _next/, assets/

Run build.py afterwards to regenerate the published pages. The full procedure,
including the steps this script deliberately leaves to a human, is in
MIRRORING.md.

Gamma redeploys its own frontend under a new id (assets.gammahosted.com/<id>)
and re-renders every slide screenshot whenever the doc is republished, so a
refresh is always a full re-harvest, never a patch. Nothing is written until
every file has been fetched successfully.
"""
import concurrent.futures as cf, difflib, hashlib, json, os, re, shutil, sys
import urllib.parse, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://untitled-w5qr52y.gamma.site'
SRC_PAGES, MAPPING = os.path.join(HERE, 'src', 'pages'), os.path.join(HERE, 'src', 'mapping.json')
STAGING = os.path.join(HERE, '.mirror-staging')
BASE_MARKER = os.path.join(HERE, '.mirror-base')
# Google Fonts serves ttf, not woff2, to agents it does not recognise
UA = ('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) '
      'Chrome/140.0.0.0 Safari/537.36')
# Hosts whose assets are part of the site and must all be mirrored
OWN_HOSTS = {'assets.gammahosted.com', 'cdn.gamma.app', 'imgproxy.gamma.app',
             'assets.api.gamma.app', 'iconscdn.pictographic.ai',
             'fonts.googleapis.com', 'fonts.gstatic.com'}
# Favicons and preview thumbnails of the sites Gamma link cards point at. Not
# Gamma's, so they are mirrored best-effort: a failure here leaves the remote
# URL in place and costs one third-party request, not a broken build.
IMG_EXTS = ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico')
URL_RE = re.compile(r'https://[^\s"\'<>)\\]+')
CHUNK_RE = re.compile(r'static/immutable/chunks/[A-Za-z0-9_.-]+\.(?:js|css)')
CSS_URL_RE = re.compile(r'url\((["\']?)([^)"\']+)\1\)')


def md5(s, n=16):
    return hashlib.md5(s.encode()).hexdigest()[:n]


def fetch(url, tries=3):
    last = None
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': '*/*'})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as e:                      # noqa: BLE001 - retried, then reported
            last = e
    raise RuntimeError(f'{url}: {last}')


def urls_in(text):
    """Every absolute URL in a served page, in the spelling `text` uses.

    Gamma embeds the same URLs twice: once in HTML attributes and once inside
    the __NEXT_DATA__ JSON, where `/` and `&` arrive escaped. Undo both before
    scanning so the two copies collapse to one URL; build.py puts the escaping
    back when it rewrites the pages.
    """
    t = text.replace(r'\/', '/').replace(r'\u0026', '&').replace('&amp;', '&')
    return {u.rstrip('.,;:') for u in URL_RE.findall(t)}


def local_path(url):
    """Path this asset takes in the mirror, or None if it is not mirrored.

    The naming is content-addressed by URL so a re-harvest of an unchanged
    asset lands on the same filename and produces no diff.
    """
    p = urllib.parse.urlsplit(url)
    host, path, seg = p.netloc, p.path, p.path.strip('/').split('/')
    if host == 'assets.gammahosted.com':
        m = re.match(r'/[^/]+/_next/(.+)', path)    # /<gamma build id>/_next/...
        return '/_next/' + m.group(1) if m else None
    if host == 'assets.api.gamma.app':              # slide screenshots, theme previews: no extension
        return f'/assets/screenshots/{md5(url)}.png'
    if host == 'imgproxy.gamma.app':                # resize proxy wrapping a cdn.gamma.app URL
        inner = url.split('/https://', 1)[-1]
        return f'/assets/img/proxy-{md5(url)}{os.path.splitext(inner)[1] or ".png"}'
    if host == 'cdn.gamma.app':
        if seg[0] == 'theme_images':                # theme_images/<theme>/<file>
            return '/assets/img/theme_images-' + seg[-1]
        if len(seg) >= 3 and seg[1] == 'generated-images':
            return f'/assets/img/{seg[0]}-{seg[-1]}'
        if len(seg) == 4:                           # <doc>/<hash>/<original|optimized>/<name>
            return f'/assets/img/{seg[1][:16]}-{seg[3]}'
        return f'/assets/img/{md5(url)}-{seg[-1]}'
    if host == 'iconscdn.pictographic.ai':          # ?stroke=45 selects a variant of the same id
        stem, ext = os.path.splitext(seg[-1])
        return f'/assets/icons/{stem}-{md5(p.query, 6)}{ext}' if p.query else f'/assets/icons/{stem}{ext}'
    if host == 'fonts.googleapis.com':
        return f'/assets/fonts/{md5(url)}.css'
    if host == 'fonts.gstatic.com':
        return f'/assets/fonts/{md5(url)}{os.path.splitext(path)[1]}'
    if path.lower().endswith(IMG_EXTS):             # link-card favicon or thumbnail
        return f'/assets/img/ext-{md5(url)}{os.path.splitext(path)[1].lower()}'
    return None


def page_text(html_text):
    """Visible text of a page, for diffing content across harvests."""
    m = re.search(r'<div id="__next".*?(?=<script id="__NEXT_DATA__")', html_text, re.S)
    t = m.group(0) if m else html_text
    t = re.sub(r'<(script|style)\b.*?</\1>', ' ', t, flags=re.S)
    import html as _h
    return [l for l in (l.strip() for l in _h.unescape(re.sub(r'<[^>]+>', '\n', t)).split('\n')) if l]


def next_data(html_text):
    m = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html_text, re.S)
    return json.loads(m.group(1))


def upstream_pages():
    """Routes the source site currently serves, in navigation order.

    The list is dug out of the hydration payload rather than the nav markup:
    it carries pageOrder and the publish timestamps, and it is the same list
    the client router uses.
    """
    home = fetch(SITE + '/').decode('utf-8')
    found = []

    def walk(node):
        if isinstance(node, dict):
            v = node.get('pages')
            if isinstance(v, list) and v and all(isinstance(e, dict) and 'path' in e and 'pageOrder' in e for e in v):
                found.append(v)
            for e in node.values():
                walk(e)
        elif isinstance(node, list):
            for e in node:
                walk(e)

    walk(next_data(home))
    if not found:
        raise RuntimeError('no page list in __NEXT_DATA__; the source site layout changed')
    return home, sorted(max(found, key=len), key=lambda p: p['pageOrder'])


def harvest_assets(pages_html):
    """Download every asset the pages reach, following JS and CSS references.

    Three reference graphs have to be walked, not just the HTML:
      - chunk names appear inside the JS bundles as bare `static/.../x.js`
        paths, resolved at runtime against the chunk base URL;
      - the _next CSS pulls KaTeX faces via relative `url(../media/...)`;
      - the Google Fonts stylesheet names its woff2 files.
    Returns {url: (local path, bytes)}; entries whose local path is under
    /_next/static/immutable/media/ are reached relatively and need no mapping.
    """
    def wanted(u):
        # the bare assetPrefix also appears as a URL on an own host, but is not a file
        return local_path(u) is not None

    got, skipped, seen, queue = {}, [], set(), set()
    for t in pages_html:
        queue |= {u for u in urls_in(t) if wanted(u)}
    while queue:
        batch = sorted(queue)
        seen |= queue                               # attempted, so a skip never re-queues
        queue = set()
        with cf.ThreadPoolExecutor(8) as pool:
            for url, res in zip(batch, pool.map(_try, batch)):
                if res is None:
                    skipped.append(url)
                else:
                    got[url] = (local_path(url), res)
                    queue |= refs_from(url, *got[url])
        queue = {u for u in queue if u not in seen and wanted(u)}
    return got, skipped


def refs_from(url, path, data):
    """URLs this asset pulls in turn: chunk names in JS, url() targets in CSS."""
    if path.startswith('/_next/') and path.endswith('.js'):
        base = re.match(r'(https://assets\.gammahosted\.com/[^/]+/_next/)', url).group(1)
        return {base + c for c in CHUNK_RE.findall(data.decode('utf-8', 'replace'))}
    if path.endswith('.css'):
        return {urllib.parse.urljoin(url, ref) for _, ref in CSS_URL_RE.findall(data.decode('utf-8', 'replace'))
                if not ref.startswith(('data:', '#', '%23'))}
    return set()


def _try(url):
    """Fetch, but tolerate a dead third-party link-card image."""
    try:
        return fetch(url)
    except RuntimeError as e:
        if urllib.parse.urlsplit(url).netloc in OWN_HOSTS:
            raise
        print(f'  ! skipped (kept remote): {e}', file=sys.stderr)
        return None


def relink_font_css(got):
    """Point the Google Fonts stylesheets at the woff2 next to them.

    Left alone, the mirrored stylesheet still names fonts.gstatic.com, so every
    visitor fetches the faces from Google even though the mirror ships them.
    Relative names keep the stylesheet independent of the deploy base path.
    """
    n = 0
    for url, (path, data) in list(got.items()):
        if not path.startswith('/assets/fonts/') or not path.endswith('.css'):
            continue
        text = data.decode('utf-8')
        for u2, (p2, _) in got.items():
            if p2.startswith('/assets/fonts/') and not p2.endswith('.css') and u2 in text:
                text, n = text.replace(u2, os.path.basename(p2)), n + 1
        got[url] = (path, text.encode('utf-8'))
    return n


def write_out(pages, pages_html, got):
    """Stage everything, then swap it in, so a failed run leaves the mirror intact."""
    if os.path.isdir(STAGING):
        shutil.rmtree(STAGING)
    for url, (path, data) in got.items():
        p = os.path.join(STAGING, path.lstrip('/'))
        os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, 'wb').write(data)
    for name in ('_next', 'assets'):
        old, new = os.path.join(HERE, name), os.path.join(STAGING, name)
        if os.path.isdir(old):
            shutil.rmtree(old)
        shutil.move(new, old)
    shutil.rmtree(STAGING)

    os.makedirs(SRC_PAGES, exist_ok=True)
    keep = set()
    for pg, text in zip(pages, pages_html):
        fn = pg['file']
        keep.add(fn)
        open(os.path.join(SRC_PAGES, fn), 'w', encoding='utf-8').write(text)
    for fn in sorted(set(os.listdir(SRC_PAGES)) - keep):
        os.remove(os.path.join(SRC_PAGES, fn))
        print(f'  removed stale source page src/pages/{fn}')

    mapping = {u: p for u, (p, _) in sorted(got.items())
               if not p.startswith('/_next/static/immutable/media/')}
    with open(MAPPING, 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=1, sort_keys=True)
        f.write('\n')
    # chunks are pristine again: record the base they carry so build.py retargets them
    prefix = next(re.match(r'(https://assets\.gammahosted\.com/[^/]+)/', u).group(1)
                  for u in mapping if u.startswith('https://assets.gammahosted.com/'))
    open(BASE_MARKER, 'w', encoding='utf-8').write(prefix + '\n')
    return mapping, prefix


def report(pages, pages_html, mapping_old):
    """--check: what moved upstream since the last harvest."""
    old_files = set(os.listdir(SRC_PAGES)) if os.path.isdir(SRC_PAGES) else set()
    changed = False
    print(f'upstream routes ({len(pages)}):')
    for pg in pages:
        known = pg['file'] in old_files
        print(f"  {pg['path']:<14} -> {pg.get('file') or '(no slug in build.ROUTES)':<16}"
              f"  published={pg.get('publishedTime', '?')[:19]}  {'' if known else '** NEW **'}")
        changed |= not known
    for fn in sorted(old_files - {p.get('file') for p in pages}):
        print(f'  ** GONE ** src/pages/{fn} has no upstream route any more')
        changed = True
    for pg, text in zip(pages, pages_html):
        old = os.path.join(SRC_PAGES, pg['file'] or '')
        if not os.path.isfile(old):
            continue
        a, b = page_text(open(old, encoding='utf-8').read()), page_text(text)
        d = list(difflib.unified_diff(a, b, f"local/{pg['file']}", f"upstream{pg['path']}", lineterm='', n=1))
        if d:
            changed = True
            print('\n'.join([''] + d))
    up = set()
    for t in pages_html:
        up |= {u for u in urls_in(t) if local_path(u)}
    new = {u for u in up if u not in mapping_old}
    if new:
        changed = True
        print(f'\n{len(new)} asset URLs not in src/mapping.json (a Gamma redeploy renames all of them):')
        for u in sorted(new)[:10]:
            print('  ', u[:120])
        if len(new) > 10:
            print(f'   ... and {len(new) - 10} more')
    print('\nno changes' if not changed else '\nupstream has changed: run `python3 mirror.py` to re-harvest')
    return changed


def main(argv):
    check = '--check' in argv
    try:
        import build
        slugs = {route: src for route, (_, src) in build.ROUTES.items()}
    except Exception as e:                          # noqa: BLE001 - reported, not fatal for --check
        print(f'warning: could not read ROUTES from build.py ({e})', file=sys.stderr)
        slugs = {}
    home, pages = upstream_pages()
    for pg in pages:
        pg['file'] = slugs.get(pg['path'])
    unknown = [pg['path'] for pg in pages if not pg['file']]
    if unknown and not check:
        sys.exit('new upstream route(s) with no slug: ' + ', '.join(unknown) +
                 '\nadd them to ROUTES in build.py first (see MIRRORING.md step 2)')

    print(f'fetching {len(pages)} pages from {SITE}')
    pages_html = [home if pg['path'] == '/' else fetch(SITE + urllib.parse.quote(pg['path'])).decode('utf-8')
                  for pg in pages]
    if check:
        old = json.load(open(MAPPING, encoding='utf-8')) if os.path.isfile(MAPPING) else {}
        return 1 if report(pages, pages_html, old) else 0

    print('walking the asset graph')
    got, skipped = harvest_assets(pages_html)
    print(f'  {len(got)} assets, {relink_font_css(got)} font URLs relinked'
          + (f', {len(skipped)} left remote' if skipped else ''))
    mapping, prefix = write_out(pages, pages_html, got)
    print(f'wrote {len(pages)} source pages and {len(mapping)} mapping entries; '
          f'chunk base is {prefix}\nnow run: python3 build.py . /challenge')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
