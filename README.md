# PasteFlow public support site

Customer-facing help for PasteFlow, published at **https://pasteflowapp.github.io/** (hub: **https://pasteflowapp.github.io/support/**).

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
