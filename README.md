# KNIH-KSBi Joint Healthcare AI Challenge 2026

Static mirror of the challenge website, served via GitHub Pages at
<https://giw2026.github.io/challenge/>.

Source site: <https://untitled-w5qr52y.gamma.site/> (Gamma)

## Pages

| Path | Title |
| --- | --- |
| `/challenge/` | KNIH-KSBi Joint Healthcare AI Challenge 2026 |
| `/challenge/rationale/` | 추진 배경 |
| `/challenge/overview/` | 대회 소개 |
| `/challenge/data/` | 데이터 · 일정 |
| `/challenge/apply/` | redirect to `/challenge/` (page removed upstream 2026-08-31) |

## Layout

```
index.html, <page>/index.html   server-rendered pages
_next/                          Next.js CSS + JS chunks, KaTeX fonts
assets/img/                     images
assets/icons/                   inline SVG icons
assets/fonts/                   Inter + Barlow (woff2) + stylesheets
assets/screenshots/             social preview images
.nojekyll                       required so _next/ is published
mirror.py                       re-harvests the Gamma source site
build.py                        regenerates the pages for a given base path
verify.py                       post-build checks
MIRRORING.md                    the refresh procedure, start to finish
src/                            pristine Gamma HTML + URL map, for rebuilds
.mirror-base                    base URL currently compiled into the chunks
```

## The base path

This site is served from a subdirectory, so every internal reference carries a
`/challenge` prefix. Four separate things need it, and all four are handled
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

4. **The chunk base URL compiled into the JavaScript bundles.** This one is
   invisible in the HTML and is the trap. Turbopack's runtime carries its own
   hardcoded base, `r="<prefix>/_next/"`, and roughly 300 further absolute
   chunk URLs are embedded across nine bundles. Rewriting only the pages
   leaves the runtime resolving chunks against Gamma's CDN.

   The failure mode is silent. The runtime begins with a bare
   `if (!Array.isArray(globalThis.TURBOPACK)) return;`, so when its
   expectations are not met it simply stops: no console error, no failed
   request, every asset returning 200. React never hydrates, the
   server-rendered ProseMirror markup is left in place unstyled, and the page
   reads as blank. The tell is `document.body.className` being empty instead
   of `chakra-ui-light`, and `#__next` still holding the full ~230 KB of
   server markup rather than the ~50 KB React renders in its place.

   `.mirror-base` records the base currently compiled into the bundles, so
   `build.py` can retarget them and is safe to re-run.

**The path is tied to the repository name.** GitHub Pages serves a project
repo at `/<repo-name>/`, so renaming this repo changes the live URL and the
build must be regenerated with the new base.

## Refreshing from the source site

When the Gamma document is republished, follow **[MIRRORING.md](MIRRORING.md)**:
`mirror.py --check` reports what moved, `mirror.py` re-harvests, `build.py`
regenerates and `verify.py` checks the result. A republish rotates Gamma's
frontend deploy id and re-renders every screenshot, so a refresh is always a
full re-harvest rather than a patch.

## Rebuilding

`build.py` regenerates the pages from pristine source HTML for any base path:

```sh
python3 build.py . /challenge      # rebuild this repo in place
python3 build.py ../out /other     # deploy under a different base
python3 build.py ../out            # root deploy, no prefix
```

Pages are regenerated from the pristine Gamma HTML in `src/pages/`, which is
never modified in place; the URL map lives in `src/mapping.json`. Rebuilding
also retargets the chunk base URLs described above.

Verifying a rebuild means loading it in a real browser, not just checking for
HTTP 200s: the failure this guards against produces no errors and no failed
requests. Confirm `document.body.className` is `chakra-ui-light` and that
`#__next` shrinks to roughly 50 KB.

## How this mirror was produced

`mirror.py` pulls every asset from the Gamma CDNs and rewrites the references
to site-relative paths, so the deployed site makes no runtime requests to Gamma
or Google:

- `assets.gammahosted.com/<id>/_next/*` to `/challenge/_next/*`
- `cdn.gamma.app`, `imgproxy.gamma.app` to `/challenge/assets/img/`
- `iconscdn.pictographic.ai` to `/challenge/assets/icons/`
- `assets.api.gamma.app` to `/challenge/assets/screenshots/` (kept absolute in
  `og:image`/`twitter:image`, which require full URLs)
- `fonts.googleapis.com` / `fonts.gstatic.com` to `/challenge/assets/fonts/`,
  with the stylesheets relinked to the woff2 files beside them
- favicons and preview thumbnails of the sites the link cards point at, to
  `/challenge/assets/img/ext-*` (best-effort: an unreachable one is left remote)

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
- URLs are ASCII-only. The source site uses Korean paths (`/대회-소개`); the
  mirror publishes `/overview`, `/data` and `/rationale` instead, which avoids
  percent-encoded links in email, print and QR codes. Page titles and body copy
  are unchanged. The old Korean paths are not kept as redirects, so any link to
  them breaks. `ROUTES` in `build.py` holds the mapping.
- Slugs outlive their source page. `/참가-안내` was deleted upstream on
  2026-08-31 (it duplicated the lower half of the home page), but
  `/challenge/apply/` is still served as a redirect stub, because the slug may
  already be in print or behind a QR code and a static host cannot 301.
  `REDIRECTS` in `build.py` holds these.
