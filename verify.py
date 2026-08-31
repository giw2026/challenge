#!/usr/bin/env python3
"""Check a built mirror before it is committed.

    python3 verify.py .            /challenge
    python3 verify.py ../out       /other

Catches what a browser would only reveal by rendering: a reference that still
points at Gamma, a local path that does not exist, or a chunk base that was not
retargeted. It cannot prove the page hydrates -- for that, see the browser
check in MIRRORING.md step 5.
"""
import json, os, re, sys
import build

REF_RE = re.compile(r'(?:href|src)="([^"]*)"|url\((["\']?)([^)"\']+)\2\)')
REMOTE_RE = re.compile(r'https://(?:assets\.gammahosted\.com|cdn\.gamma\.app|imgproxy\.gamma\.app'
                       r'|iconscdn\.pictographic\.ai|fonts\.gstatic\.com|fonts\.googleapis\.com'
                       r'|assets\.api\.gamma\.app)/[^\s"\'<>)\\]*')


def refs(text):
    for m in REF_RE.finditer(text):
        yield m.group(1) if m.group(1) is not None else m.group(3)


def main(out, base):
    base, bad = base.rstrip('/'), []
    for src, dst in build.PAGES.items():
        p = os.path.join(out, dst)
        if not os.path.isfile(p):
            bad.append(f'{dst}: not built'); continue
        t = open(p, encoding='utf-8').read()

        for ref in refs(t):
            if not ref.startswith(base + '/'):
                continue
            rel = ref[len(base) + 1:].split('#')[0].split('?')[0]
            f = os.path.join(out, rel, 'index.html') if rel.endswith('/') or not rel else os.path.join(out, rel)
            if not os.path.isfile(f):
                bad.append(f'{dst}: dangling reference {ref}')
        # og:image and twitter:image must stay absolute, and still resolve locally
        for m in re.finditer(r'content="(%s%s/assets/screenshots/[^"]+)"' % (re.escape(build.ORIGIN), re.escape(base)), t):
            if not os.path.isfile(os.path.join(out, m.group(1)[len(build.ORIGIN) + len(base) + 1:])):
                bad.append(f'{dst}: social preview {m.group(1)} has no local file')
        if 'assets/screenshots/' in t and build.ORIGIN not in t:
            bad.append(f'{dst}: social preview URLs are not absolute')
        # nothing may still point at Gamma or Google
        left = {u for u in REMOTE_RE.findall(t.replace(r'\/', '/'))}
        if left:
            bad.append(f'{dst}: {len(left)} reference(s) still remote, e.g. {sorted(left)[0][:90]}')
        # every nav link must carry the base and hydration must agree with it
        for route, (slug, _) in build.ROUTES.items():
            if f'href="{route}"' in t or f'"path":"{route}"' in t:
                bad.append(f'{dst}: source route {route} was not rewritten')
            if f'"path":"{base + slug}"' not in t:
                bad.append(f'{dst}: hydration payload is missing {base + slug}')

    for slug, target in build.REDIRECTS.items():
        p = os.path.join(out, slug.strip('/'), 'index.html')
        if not os.path.isfile(p):
            bad.append(f'{slug}: redirect stub not built'); continue
        t = open(p, encoding='utf-8').read()
        if base + target not in t:
            bad.append(f'{slug}: stub does not point at {base + target}')
        dest = os.path.join(out, target.strip('/'), 'index.html') if target != '/' else os.path.join(out, 'index.html')
        if not os.path.isfile(dest):
            bad.append(f'{slug}: redirects to {target}, which is not built')

    marker = os.path.join(out, build.BASE_MARKER)
    if not os.path.isfile(marker) or open(marker).read().strip() != base:
        bad.append(f'{build.BASE_MARKER} does not record {base or "/"}')
    # the Turbopack runtime carries the chunk base in JS, where no page rewrite reaches it
    runtimes = [os.path.join(dp, f) for dp, _, fs in os.walk(os.path.join(out, '_next'))
                for f in fs if f.startswith('turbopack-') and f.endswith('.js')]
    if not runtimes:
        bad.append('no turbopack runtime chunk found under _next/')
    for f in runtimes:
        if ('r="%s/_next/"' % base).encode() not in open(f, 'rb').read():
            bad.append(f'{os.path.relpath(f, out)}: chunk base is not {base}/_next/')

    # a chunk the runtime asks for and cannot find is the silent-blank-page failure,
    # so walk the same reference graph mirror.py harvested and confirm it closed
    nxt = os.path.join(out, '_next')
    for dp, _, fs in os.walk(nxt):
        for fn in fs:
            f = os.path.join(dp, fn)
            if fn.endswith('.js'):
                for c in set(re.findall(r'static/immutable/chunks/[A-Za-z0-9_.-]+\.(?:js|css)',
                                        open(f, encoding='utf-8', errors='replace').read())):
                    if not os.path.isfile(os.path.join(nxt, c)):
                        bad.append(f'{os.path.relpath(f, out)}: references missing chunk {c}')
            elif fn.endswith('.css'):
                for _, ref in re.findall(r'url\((["\']?)([^)"\']+)\1\)',
                                         open(f, encoding='utf-8', errors='replace').read()):
                    if ref.startswith(('data:', '#', '%23', 'http')):
                        continue
                    if not os.path.isfile(os.path.normpath(os.path.join(dp, ref.split('?')[0]))):
                        bad.append(f'{os.path.relpath(f, out)}: missing {ref}')

    mapping = json.load(open(build.MAPPING, encoding='utf-8'))
    missing = [p for p in set(mapping.values()) if not os.path.isfile(os.path.join(out, p.lstrip('/')))]
    if missing:
        bad.append(f'{len(missing)} mapped assets are not on disk, e.g. {missing[0]}')

    for b in bad:
        print('FAIL ', b)
    print(f'\n{len(bad)} problem(s)' if bad else
          f'ok: {len(build.PAGES)} pages, {len(build.REDIRECTS)} redirects, {len(mapping)} assets, base={base or "/"}')
    return 1 if bad else 0


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    sys.exit(main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else ''))
