# Session start — public support site

Use this file first when the **`pasteflowapp.github.io`** repo root is loaded.

## Bootstrap order

1. **`README.md`** — three-repo model and edit workflow.
2. **Product handoff** — extension/CI session notes live in sibling **`../PasteFlow/LATEST.md`** (not here).
3. After editing **`support/*.md`**:
   ```bash
   npm run docs:search-index
   npm run check:docs-links
   ```
4. Commit **`assets/search-index.json`** with Markdown changes; push **`main`** for GitHub Pages.

## Do not edit here

Chrome extension source, Worker, private issues, or agent SOPs — those belong in **`rbediner/pasteflow`** and **`pasteflow-issue-project-repo`**.

## Local layout

This repo is a **sibling** of **`PasteFlow/`** under **`Projects/PasteF/`** on Google Drive. It may also live at **`PasteFlow/pasteflowapp.github.io/`** (nested inside the product repo); `scripts/resolve-support-site-root.sh` supports both layouts.
