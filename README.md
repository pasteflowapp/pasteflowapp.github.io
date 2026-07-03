# PasteFlow public support site

Customer-facing help for PasteFlow, published at **https://pasteflowapp.github.io/** (hub: **https://pasteflowapp.github.io/support/**).

## Architecture

This repo is a **Jekyll static site** hosted on **GitHub Pages** (the `pasteflowapp.github.io` user site). It contains only public help content — no product source. PasteFlow itself is a Chrome extension (in a separate private repo) that types pasted text character-by-character into Google Docs, Word Online, forms, and web editors; this site documents it.

**Tech stack**

- **Jekyll** with the `minima` theme (`dark` skin), configured in `_config.yml`. GitHub Pages builds and serves it on push to `main`.
- **Content**: Markdown pages under `support/` with front matter (`layout`, `title`, `nav_order`); pages are wired into nav via `header_pages` in `_config.yml`.
- **Client-side search**: a JSON index (`assets/search-index.json`) consumed by `assets/js/site-search.js`; the header search box lives in `_includes/header.html`.
- **Tooling scripts**: Node ≥20 ESM scripts in `scripts/` (no runtime deps). See `package.json`.

**Directory layout**

- `_config.yml` — Jekyll site config, theme, nav pages, permalinks (`pretty`).
- `_includes/` — theme overrides: `header.html` (nav + search), `footer.html`, `custom-head.html` (favicons, fonts, search bootstrap).
- `assets/` — `main.scss` / `css/style.scss` (styles), `js/site-search.js`, `images/`, and the generated `search-index.json`.
- `support/` — the help center: `index.md` (hub, includes contact intake) plus topic pages (getting-started, faq, troubleshooting, compatibility, keyboard-shortcuts, privacy, permissions, terms, release-notes, search).
- `index.html` — root page that meta-redirects `/` → `/support/`.
- `sandbox/` — a self-contained public typing harness (`sandbox/index.html`), synced from the product repo.
- `scripts/` — `build-docs-search-index.mjs` (regenerates the search index), `check-docs-links.mjs` (validates internal Markdown links), `clean-drive-drift.sh` (Drive guardrail).
- `.githooks/` — `pre-commit`, `post-merge`, `post-checkout` hooks that run the drift cleanup.

**Build / run / deploy**

- Edit Markdown under `support/`, then run `npm run docs:search-index` and `npm run check:docs-links`; commit the regenerated `assets/search-index.json` alongside content.
- Push to `main`; GitHub Pages rebuilds and publishes automatically. There is no separate CI build step in this repo.

## Three-repo model

| Repo | Purpose |
| --- | --- |
| **`pasteflowapp/pasteflowapp.github.io`** (this repo) | Public help, FAQ, privacy, release notes |
| **`rbediner/pasteflow`** (private) | Chrome extension, worker, CI, internal docs |
| **`rbediner/pasteflow-issue-project-repo`** (private) | Issues and Kanban |

## Edit workflow

1. Clone this repo and edit Markdown under **`support/`** (hub = `support/index.md`; contact intake is folded into the hub).
2. After content changes:

```bash
npm run docs:search-index
npm run check:docs-links
```

3. Commit **`assets/search-index.json`** with the Markdown changes.
4. Push to **`main`** — GitHub Pages rebuilds automatically.

## URL layout

- `/` → redirects to `/support/`
- `/support/` — help center hub (email support intake included)
- `/support/faq/`, `/support/getting-started/`, … — topic pages
- `/sandbox/` — public typing harness (synced from product repo when needed)

## Do not add here

Product source, worker code, agent SOPs, secrets, or private handoff docs.

## Google Drive drift

This repository is checked out inside Google Drive and synced across machines. Google Drive creates conflict-copies (filenames ending in ` 2`, ` 3`, or ` (1)`) — including inside `.git` — which corrupt the repo. A guardrail auto-removes them:

- `scripts/clean-drive-drift.sh --fix` — remove conflict-copies then verify with `git fsck` (`--check` to only report).
- Runs automatically via git hooks (`pre-commit`, `post-merge`, `post-checkout`) and, for Claude, on session start via `.claude/settings.json`.
- Never commit a file whose name ends in ` 2`/` 3` — it is Google Drive junk, not a real file.
