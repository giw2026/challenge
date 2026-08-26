# KNIH-KSBi Joint Healthcare AI Challenge 2026

Static mirror of the challenge website, served via GitHub Pages at
<https://giw2026.github.io/challenge/>.

Source site: <https://untitled-w5qr52y.gamma.site/> (Gamma)

## Pages

| Path | Title |
| --- | --- |
| `/challenge/` | KNIH-KSBi Joint Healthcare AI Challenge 2026 |
| `/challenge/추진-배경/` | 추진 배경 |
| `/challenge/대회-소개/` | 대회 소개 |
| `/challenge/데이터-일정/` | 데이터 · 일정 |
| `/challenge/참가-안내/` | 참가 안내 |

## Layout

```
index.html, <page>/index.html   server-rendered pages
_next/                          Next.js CSS + JS chunks, KaTeX fonts
assets/img/                     images
assets/icons/                   inline SVG icons
assets/fonts/                   Inter (woff2) + stylesheet
assets/screenshots/             social preview images
.nojekyll                       required so _next/ is published
build.py                        regenerates the pages for a given base path
```

## The base path

This site is served from a subdirectory, so every internal reference carries a
`/challenge` prefix. Three separate things need it, and all three are handled
by `build.py`:

1. `href`/`src`/`url()` references in the five pages.
2. The Next.js `assetPrefix`, set to `/challenge`. Next builds runtime chunk
   URLs as `${assetPrefix}/_next/...` in JavaScript, so these never appear in
   the HTML and a find-and-replace over the served files would miss them.
3. Navigation links, which exist twice per page: once in the server-rendered
   markup and once in the `__NEXT_DATA__` hydration payload
   (`props.pageProps...pages[].path`). Both are rewritten in the same pass so
   they stay in sync and hydration does not mismatch.

Next's own router fields (`page`, `query`) are deliberately left alone; they
reference `/published/[docId]`, not the content routes.

**The path is tied to the repository name.** GitHub Pages serves a project
repo at `/<repo-name>/`, so renaming this repo changes the live URL and the
build must be regenerated with the new base.

## Rebuilding

`build.py` regenerates the pages from pristine source HTML for any base path:

```sh
python3 build.py <out_dir> /challenge   # subdirectory deploy
python3 build.py <out_dir>              # root deploy
```

It needs the original Gamma HTML in `pages/` and the URL map in
`mapping.json`; the source HTML is never modified in place.

## How this mirror was produced

All assets were pulled from the Gamma CDNs and rewritten to site-relative
paths, so the deployed site makes no runtime requests to Gamma:

- `assets.gammahosted.com/<id>/_next/*` to `/challenge/_next/*`
- `cdn.gamma.app`, `imgproxy.gamma.app` to `/challenge/assets/img/`
- `iconscdn.pictographic.ai` to `/challenge/assets/icons/`
- `assets.api.gamma.app` to `/challenge/assets/screenshots/` (kept absolute in
  `og:image`/`twitter:image`, which require full URLs)
- `fonts.googleapis.com` / `fonts.gstatic.com` to `/challenge/assets/fonts/`

Page content is server-rendered in the HTML, so the site renders even if
JavaScript fails to load.

### Intentional differences from the source

- Cloudflare email obfuscation was decoded at build time and its loader
  script removed; the origin's `/cdn-cgi/` decoder does not exist here, so
  without this the contact address would show as a placeholder.
- The contact link pointed at `gamma.app/external-link?url=[mailto:...]`; it
  is now a direct `mailto:` link.
- `<meta name="robots" content="noindex, nofollow">` was removed so the site
  can be indexed. Gamma adds it to every non-custom-domain site.
