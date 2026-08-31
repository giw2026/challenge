#!/usr/bin/env python3
"""Regenerate the static mirror for a given base path.

    python3 build.py .            /challenge   # subdirectory deploy (this repo)
    python3 build.py ../root-site            # root deploy, no prefix

Pages are always regenerated from the pristine Gamma HTML in src/pages/, which
is never modified in place. Assets under _next/ and assets/ are content-only
and need no rewriting, so they are reused as-is.

Refreshing those pristine sources from the live Gamma site is mirror.py's job;
the whole procedure is in MIRRORING.md.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC_PAGES = os.path.join(HERE, 'src', 'pages')
MAPPING = os.path.join(HERE, 'src', 'mapping.json')
BASE_MARKER = '.mirror-base'   # records the base currently baked into the _next chunks
ORIGIN = 'https://giw2026.github.io'
EMAIL = 'healthcareai.knih@gmail.com'
JSON_AMP = chr(92) + 'u0026'   # how '&' is spelled inside __NEXT_DATA__
# Source route as it appears in the pristine Gamma HTML -> (ASCII slug it is
# published under, its file in src/pages/). The source site uses Korean paths;
# the mirror serves ASCII-only URLs. Page titles and body copy stay in Korean.
# Slugs keep their trailing slash: each page is published as <slug>/index.html,
# and GitHub Pages 301-redirects the slashless form, so linking without it costs
# an extra round trip per navigation. It also keeps location.pathname equal to
# the path recorded in the hydration payload.
ROUTES = {'/':           ('/',           'index.html'),
          '/추진-배경':    ('/rationale/', 'rationale.html'),
          '/대회-소개':    ('/overview/',  'overview.html'),
          '/데이터-일정':  ('/data/',      'data.html')}
# Slugs the source site no longer serves. `/참가-안내` was a duplicate of the
# home page's lower half and was deleted upstream on 2026-08-31; its slug stays
# as a redirect stub so links already printed, emailed or QR-coded keep working.
REDIRECTS = {'/apply/': '/'}
# Assets that have to be referenced by absolute URL. Gamma recolours icons by
# fetching the SVG and inlining it, and that path starts with `new URL(src)`
# with no base argument, which throws on a root-relative URL. The throw is
# swallowed, the icon is judged not to be an SVG, and the component renders an
# empty box: no request, no console error, nothing to see in the served HTML.
# Verified in Chromium -- an absolute URL restores the icons, a query string
# makes no difference.
ABSOLUTE = ('/assets/icons/',)
# Source file in src/pages/ -> published path
PAGES = {src: (slug.strip('/') + '/index.html' if slug != '/' else 'index.html')
         for slug, src in ROUTES.values()}


def spellings(url, path):
    """The same rewrite, in every spelling a served page can use.

    Gamma writes each URL at least twice: once as an HTML attribute, where `&`
    arrives as `&amp;`, and once inside the __NEXT_DATA__ JSON, where `/` and
    `&` are each escaped or not independently of one another. Missing one
    spelling leaves a live request to Gamma or Google in an otherwise complete
    mirror, which nothing in the rendered page reveals.
    """
    out = []
    for u, p in ((url, path), (url.replace('/', r'\/'), path.replace('/', r'\/'))):
        out.append((u, p))
        if '&' in u:
            out.append((u.replace('&', JSON_AMP), p))
    if '&' in url:
        out.append((url.replace('&', '&amp;'), path))
    return sorted(out, key=lambda kv: -len(kv[0]))


def gamma_prefix(mapping):
    """The Gamma frontend deploy the pristine pages were harvested from.

    Gamma redeploys under a fresh id (assets.gammahosted.com/<id>), so this is
    read back from the mapping rather than pinned in the source.
    """
    for u in mapping:
        m = re.match(r'(https://assets\.gammahosted\.com/[^/]+)/_next/', u)
        if m:
            return m.group(1)
    sys.exit('src/mapping.json has no assets.gammahosted.com entry; re-run mirror.py')


def patch_chunks(out, base, pristine, mapping):
    """Retarget the chunk base URL baked into the JavaScript bundles.

    Turbopack's runtime hardcodes its chunk base as
    `r="<prefix>/_next/"`, and ~300 more absolute chunk URLs are embedded in
    the bundles. These live in JavaScript, not HTML, so rewriting the pages
    alone leaves the runtime fetching chunks from Gamma's CDN: it then bails
    out with a bare `return` -- no console error, no failed request -- and the
    page renders as unhydrated, invisible markup.

    The base in effect is recorded in .mirror-base so this is idempotent and
    can be retargeted later. Tokens always include `/_next/` so an empty base
    (a root deploy) never degenerates into an empty search string.
    """
    marker = os.path.join(out, BASE_MARKER)
    # a fresh out_dir has no marker yet, but its chunks were copied from HERE,
    # so fall back to HERE's marker before assuming pristine Gamma chunks
    for cand in (marker, os.path.join(HERE, BASE_MARKER)):
        if os.path.isfile(cand):
            old = open(cand, encoding='utf-8').read().strip(); break
    else:
        old = pristine
    # '/_next/' is the chunk base; '/assets/' catches URLs a previous run swept
    # out of the bundles (below), which carry the base too and must move with it
    toks = [((old + sfx).encode(), (base + sfx).encode()) for sfx in ('/_next/', '/assets/')]
    toks = [(o, t) for o, t in toks if o != t]
    n = 0
    if toks:
        for dp, _, fs in os.walk(os.path.join(out, '_next')):
            for fn in fs:
                if not fn.endswith(('.js', '.css')): continue
                p = os.path.join(dp, fn)
                d = d0 = open(p, 'rb').read()
                for o, t in toks:
                    n += d.count(o)
                    d = d.replace(o, t)
                if d != d0: open(p, 'wb').write(d)
    # Gamma also hardcodes a few asset URLs in the bundles -- the Inter stylesheet
    # is injected as a <link> by React at runtime, so it never appears in the
    # served HTML and a page rewrite cannot reach it. Sweeping the mapping over
    # the chunks catches those. It is naturally idempotent: once rewritten the
    # source URL is gone.
    swept = 0
    hardcoded = [(u.encode(), (base + p).encode()) for u, p in mapping.items()]
    for dp, _, fs in os.walk(os.path.join(out, '_next')):
        for fn in fs:
            if not fn.endswith(('.js', '.css')): continue
            path = os.path.join(dp, fn)
            d = d0 = open(path, 'rb').read()
            for u, p in hardcoded:
                if u in d:
                    swept += d.count(u)
                    d = d.replace(u, p)
            if d != d0: open(path, 'wb').write(d)
    open(marker, 'w', encoding='utf-8').write(base + '\n')
    return n, swept


def redirect_stub(target, canonical):
    """A page for a slug the source site dropped.

    GitHub Pages serves static files only, so a 301 is not available; a
    meta refresh plus location.replace is the closest equivalent, and
    replace() keeps the dead slug out of the back-button history.
    """
    return f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>KNIH-KSBi Joint Healthcare AI Challenge 2026</title>
<link rel="canonical" href="{canonical}"/>
<meta http-equiv="refresh" content="0; url={target}"/>
<meta name="robots" content="noindex, follow"/>
<script>location.replace("{target}" + location.hash);</script>
<style>body{{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;margin:4rem auto;max-width:34rem;
padding:0 1.5rem;line-height:1.7;color:#1a202c}}a{{color:#2b6cb0}}</style>
</head>
<body>
<p>이 페이지는 <a href="{target}">참가 안내가 있는 홈</a>으로 옮겨졌습니다.</p>
<p>자동으로 이동하지 않으면 위 링크를 눌러 주세요.</p>
</body>
</html>
'''


def build(out, base=''):
    base = base.rstrip('/')          # '' for a root deploy, '/challenge' for a subdirectory
    mapping = json.load(open(MAPPING, encoding='utf-8'))
    pristine = gamma_prefix(mapping)
    # longest URL first: imgproxy URLs embed a cdn.gamma.app URL, and specific chunk
    # URLs must be replaced before the bare asset prefix they start with
    rules = sorted(((u, (ORIGIN if p.startswith(ABSOLUTE) else '') + base + p)
                    for u, p in mapping.items()), key=lambda kv: -len(kv[0]))
    # Next builds runtime chunk URLs as `${assetPrefix}/_next/...`, so the prefix carries the base
    rules.append((pristine, base))

    if os.path.abspath(out) != HERE:
        import shutil
        for name in ('_next', 'assets'):
            dst = os.path.join(out, name)
            if os.path.isdir(dst): shutil.rmtree(dst)
            shutil.copytree(os.path.join(HERE, name), dst)
    os.makedirs(out, exist_ok=True)
    open(os.path.join(out, '.nojekyll'), 'w').close()

    for src, dst in PAGES.items():
        t = open(os.path.join(SRC_PAGES, src), encoding='utf-8').read()
        for url, path in rules:                       # asset + runtime chunk URLs
            for u, p in spellings(url, path):
                t = t.replace(u, p)
        for r, (slug, _) in ROUTES.items():           # nav links live in BOTH the server-rendered
            tgt = base + slug                         # markup and the __NEXT_DATA__ hydration
            t = t.replace(f'href="{r}"', f'href="{tgt}"')      # payload; rewrite both together
            t = t.replace(f'"path":"{r}"', f'"path":"{tgt}"')  # so hydration does not mismatch
        # social previews require absolute URLs
        t = re.sub(r'(content=")(' + re.escape(base) + r'/assets/screenshots/[^"]+)(")',
                   lambda m: m.group(1) + ORIGIN + m.group(2) + m.group(3), t)
        # Cloudflare email obfuscation: decode now, its /cdn-cgi/ decoder does not exist here
        t = re.sub(r'<span class="__cf_email__"[^>]*>.*?</span>', EMAIL, t)
        t = re.sub(r'<script data-cfasync="false" src="/cdn-cgi/scripts/[^"]*"></script>', '', t)
        t = t.replace('https://gamma.app/external-link?url=[mailto%3A' + EMAIL.replace('@', '%40') + ']',
                      'mailto:' + EMAIL)
        # Gamma stamps this on every non-custom-domain site
        t = re.sub(r'<meta name="robots" content="noindex, nofollow"[^>]*/>', '', t)
        p = os.path.join(out, dst)
        os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, 'w', encoding='utf-8').write(t)

    for slug, target in REDIRECTS.items():
        p = os.path.join(out, slug.strip('/'), 'index.html')
        os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, 'w', encoding='utf-8').write(redirect_stub(base + target, ORIGIN + base + target))
    return base, patch_chunks(out, base, pristine, mapping)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    b, (n, swept) = build(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else '')
    print(f'built {len(PAGES)} pages + {len(REDIRECTS)} redirects into {sys.argv[1]}  '
          f'base={b or "/"}  chunk-url rewrites: {n}  asset URLs swept from bundles: {swept}')
