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
ORIGIN = 'https://giw2026.github.io'
EMAIL = 'healthcareai.knih@gmail.com'
ROUTES = ['/', '/대회-소개', '/데이터-일정', '/참가-안내', '/추진-배경']
PAGES = {'index.html': 'index.html',
         '대회-소개.html': '대회-소개/index.html',
         '데이터-일정.html': '데이터-일정/index.html',
         '참가-안내.html': '참가-안내/index.html',
         '추진-배경.html': '추진-배경/index.html'}

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
        for r in ROUTES:                              # nav links live in BOTH the server-rendered
            tgt = base + r                            # markup and the __NEXT_DATA__ hydration
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
    return base

if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    b = build(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else '')
    print(f'built {len(PAGES)} pages into {sys.argv[1]}  base={b or "/"}')
