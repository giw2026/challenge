# Refreshing the mirror

The published site is a static copy of a Gamma document. Whenever that document
is republished, run this procedure. It is six steps; only step 2 needs judgement.

```sh
python3 mirror.py --check          # 1. what changed upstream?
$EDITOR build.py                   # 2. only if routes were added or removed
python3 mirror.py                  # 3. re-harvest
python3 build.py . /challenge      # 4. regenerate the published pages
python3 verify.py . /challenge     # 5a. file-level checks
python3 browsercheck.py . /challenge   # 5b. render it and compare against the source
git add -A && git commit && git push  # 6. deploy
```

## Why every refresh is a full re-harvest

Gamma changes more than the copy when a document is republished:

- **The frontend deploy id rotates.** Assets move from
  `assets.gammahosted.com/<id>/_next/...` to a new `<id>`, and the chunk
  filenames change with it, so none of the ~120 JS/CSS chunks can be reused.
- **Every slide screenshot is re-rendered** under a new content hash, so all
  the `og:image`/`twitter:image` previews change.
- **Theme changes cascade.** A different theme means different theme images and
  a different webfont, pulled from hosts the previous harvest never touched.

So there is no meaningful "patch the changed page" path. `mirror.py` downloads
the whole closure, and nothing is written until every file has arrived.

## 1. Check what changed

```sh
python3 mirror.py --check
```

Writes nothing. Exits 0 when the mirror is current, 1 when it is not. It prints:

- the routes the source site serves now, with their publish timestamps, marking
  `** NEW **` routes with no slug yet and `** GONE **` pages that upstream dropped;
- a unified diff of each page's visible text, mirror versus upstream;
- how many asset URLs are new (after a Gamma redeploy this is "all of them",
  which is expected and not a signal about the content).

## 2. Update the route table — the only manual step

`ROUTES` in `build.py` maps each Korean source route to the ASCII slug the
mirror publishes and to its file in `src/pages/`. `mirror.py` will not invent a
slug, because the slug is a published URL and naming it is a decision:

```python
ROUTES = {'/':          ('/',           'index.html'),
          '/추진-배경':  ('/rationale/', 'rationale.html'),
          ...}
REDIRECTS = {'/apply/': '/'}
```

- **`** NEW **` route** — add a `ROUTES` entry. Keep the slug short, ASCII and
  lowercase, with a trailing slash.
- **`** GONE **` page** — remove its `ROUTES` entry and add the slug to
  `REDIRECTS`, pointing at wherever the content went. Do not simply delete it:
  the slug may already be in print, in email or behind a QR code, and a static
  host cannot 301. `build.py` writes a redirect stub for every `REDIRECTS` entry.
- **Never rename an existing slug** for cosmetic reasons. If you must, the old
  slug goes into `REDIRECTS`.

`mirror.py` refuses to run while any upstream route has no slug.

## 3. Re-harvest

```sh
python3 mirror.py
```

Fetches the pages, then walks the asset graph — which is not just the HTML:

| Reference | Where it hides |
| --- | --- |
| Lazily loaded chunks | bare `static/immutable/chunks/*.js` strings inside the JS bundles |
| KaTeX faces | relative `url(../media/...)` inside the `_next` CSS |
| Webfont files | the Google Fonts stylesheet, which is fetched with a browser UA so it returns woff2 rather than ttf |
| Link-card favicons | third-party hosts; mirrored best-effort, and left remote if unreachable |

It then rewrites the Google Fonts stylesheets to name the woff2 files sitting
next to them (otherwise the mirror ships the fonts but still loads them from
Google), stages everything, and only then replaces `_next/`, `assets/`,
`src/pages/` and `src/mapping.json`. Stale source pages are deleted, and
`.mirror-base` is reset to the new pristine Gamma prefix.

Asset filenames are derived from their source URL, so an unchanged asset lands
on the same name and shows up as no diff. One exception is not worth chasing:
Cloudflare obfuscates the contact address with a key that rotates per response,
so `src/pages/index.html` shows a one-line diff after every harvest even when
nothing changed. `build.py` decodes the address, so the published page is
unaffected — and `--check` compares visible text, so it is not fooled either.

## 4. Regenerate

```sh
python3 build.py . /challenge
```

Unchanged from before: it rewrites asset URLs, nav links and the hydration
payload for the base path, retargets the chunk base compiled into the bundles,
and writes the redirect stubs. See the README for what the base path touches
and why the chunk base is the trap.

## 5. Verify

```sh
python3 verify.py . /challenge
```

Checks that every local reference resolves, that nothing still points at Gamma
or Google, that the nav links and hydration payload agree, that the redirect
stubs land on a page that exists, and that the Turbopack runtime carries the
right chunk base.

**This is not sufficient**, because the failures that matter do not show up in
the files. Two of them:

- The page never hydrates. Every asset returns 200, nothing errors, and the
  page reads as blank.
- Content that only exists after hydration goes missing. Gamma recolours its
  SVG icons by fetching them and inlining them, and that path begins with
  `new URL(src)` with no base argument. A root-relative URL throws there, the
  throw is swallowed, and the icon renders as an empty box -- no request, no
  console error, nothing in the served HTML to look at. `build.ABSOLUTE` lists
  the asset prefixes that must therefore carry the origin.

```sh
python3 browsercheck.py . /challenge
```

drives a headless Chromium: it rebuilds into a temp directory with `ORIGIN`
pointed at its own local server, loads each page, scrolls to the bottom so
lazily loaded images fire, and compares the result against the same page on the
source site -- hydration, inline icon count, image count and page height. It
takes about two minutes. `--skip-upstream` reports the numbers without
comparing, for when the source site is unreachable.

It finds a browser in `PATH` or in the Playwright/Puppeteer caches. With no
browser available, check by hand instead: `document.body.className` should be
`chakra-ui-light`, `document.getElementById('__next').innerHTML.length` roughly
50 KB rather than ~230 KB, and `/challenge/apply/` should bounce to the home page.

One request is expected to stay third-party: `cdn.iframe.ly/embed.js`, which
Gamma loads for link-card embeds on the source site too. `/favicon.ico` 404s on
both sites; Gamma does not ship one.

## 6. Deploy

Commit and push to `main`. `.github/workflows/pages.yml` publishes the repo
root to GitHub Pages; there is no build step on the runner.

## Where things live

| | |
| --- | --- |
| `mirror.py` | harvests the Gamma source into `src/` + `_next/` + `assets/` |
| `build.py` | route table, redirects, and page generation for a base path |
| `verify.py` | post-build file checks |
| `browsercheck.py` | renders the build and compares it against the source |
| `src/pages/` | pristine Gamma HTML, never edited in place |
| `src/mapping.json` | source asset URL -> path in the mirror |
| `.mirror-base` | base currently compiled into the JS chunks |

The source document is `https://untitled-w5qr52y.gamma.site/` (`SITE` in
`mirror.py`). If the organisers move it, that constant is the only thing to change.
