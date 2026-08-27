#!/usr/bin/env python3
"""Regenerate the static mirror for a given base path.

    python3 build.py .            /challenge   # subdirectory deploy (this repo)
    python3 build.py ../root-site            # root deploy, no prefix

Pages are always regenerated from the pristine Gamma HTML in src/pages/, which
is never modified in place. Assets under _next/ and assets/ are content-only
and need no rewriting, so they are reused as-is.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC_PAGES = os.path.join(HERE, 'src', 'pages')
MAPPING = os.path.join(HERE, 'src', 'mapping.json')
GAMMA_PREFIX = 'https://assets.gammahosted.com/l6bos9u9r'
BASE_MARKER = '.mirror-base'   # records the base currently baked into the _next chunks
ORIGIN = 'https://giw2026.github.io'
EMAIL = 'healthcareai.knih@gmail.com'
# Source route as it appears in the pristine Gamma HTML -> ASCII slug it is
# published under. The source site used Korean paths; the mirror serves
# ASCII-only URLs. Page titles and body copy stay in Korean.
# Slugs keep their trailing slash: each page is published as <slug>/index.html,
# and GitHub Pages 301-redirects the slashless form, so linking without it costs
# an extra round trip per navigation. It also keeps location.pathname equal to
# the path recorded in the hydration payload.
ROUTES = {'/': '/',
          '/대회-소개': '/overview/',
          '/데이터-일정': '/data/',
          '/참가-안내': '/apply/',
          '/추진-배경': '/rationale/'}
# Source file in src/pages/ -> published path
PAGES = {'index.html': 'index.html',
         'overview.html': 'overview/index.html',
         'data.html': 'data/index.html',
         'apply.html': 'apply/index.html',
         'rationale.html': 'rationale/index.html'}

def patch_chunks(out, base):
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
        old = GAMMA_PREFIX
    old_tok, new_tok = (old + '/_next/').encode(), (base + '/_next/').encode()
    n = 0
    if old_tok != new_tok:
        for dp, _, fs in os.walk(os.path.join(out, '_next')):
            for fn in fs:
                if not fn.endswith(('.js', '.css')): continue
                p = os.path.join(dp, fn)
                d = open(p, 'rb').read()
                if old_tok not in d: continue
                n += d.count(old_tok)
                open(p, 'wb').write(d.replace(old_tok, new_tok))
    open(marker, 'w', encoding='utf-8').write(base + '\n')
    return n


def build(out, base=''):
    base = base.rstrip('/')          # '' for a root deploy, '/challenge' for a subdirectory
    mapping = {u: (p.replace('/assets/next/', '/_next/', 1) if p.startswith('/assets/next/') else p)
               for u, p in json.load(open(MAPPING, encoding='utf-8')).items()}
    # longest URL first: imgproxy URLs embed a cdn.gamma.app URL, and specific chunk
    # URLs must be replaced before the bare asset prefix they start with
    rules = sorted(((u, base + p) for u, p in mapping.items()), key=lambda kv: -len(kv[0]))
    # Next builds runtime chunk URLs as `${assetPrefix}/_next/...`, so the prefix carries the base
    rules.append((GAMMA_PREFIX, base))

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
            t = t.replace(url, path)
            t = t.replace(url.replace('/', r'\/'), path.replace('/', r'\/'))
        for r, slug in ROUTES.items():                # nav links live in BOTH the server-rendered
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
    return base, patch_chunks(out, base)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    b, n = build(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else '')
    print(f'built {len(PAGES)} pages into {sys.argv[1]}  base={b or "/"}  chunk-url rewrites: {n}')
