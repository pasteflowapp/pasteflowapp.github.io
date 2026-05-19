---
layout: default
title: Release Notes
nav_order: 9
---

# Release Notes

What changed in each version of PasteFlow.

---

## v1.0.1 — In progress

> This release is in active development. The items below are implemented and in UAT; the version has not yet been promoted to a stable Chrome Web Store release.

- **License activation retry** — PasteFlow now retries activation silently up to 5 times with a short delay between attempts, eliminating false “key not found” errors caused by Cloudflare KV propagation delay.
- **Plus device limit** — activation sends a stable per-browser `install_id`; the license server allows up to **three** devices per key. Past that, activation returns a clear error — email **pasteflow.support@gmail.com** for a reset after purchase verification.
- **Help site search** — [Search](https://pasteflowapp.github.io/support/search/) page on the support site with a client-side index over public docs.
- **Human Mode** — the Composer toggle is labeled **Human Mode** with a clearer tooltip; the speed section separates Base Speed (Safe/Slow/Normal/Fast) from the Human Mode overlay toggle.
- **Google Docs architecture** — Docs routing/inspect remain explicit on the content-script web-editor adapter with MAIN-world sink bridge/focus handoff; when Docs rejects a bridge commit, the content-script run asks the service worker for a Docs-only native-input character while Pause/Resume/Stop stay in the same run loop.
- **Partial run recovery** — if typing stops mid-run, PasteFlow saves your position and offers to resume exactly where it left off when you reopen the panel (up to 4 hours).
- **Live WPM counter** — a live words-per-minute estimate appears alongside the progress bar during an active run.
- **Run completion summary** — after each run, a brief summary shows characters typed, time elapsed, and approximate WPM.
- **Composer ↔ background sync** — the Composer correctly resets or re-adopts “typing in progress” after tab switches, closed tabs, or side-panel refocus.

---

## v1.0.0 — Initial Release

> This is the first public release of PasteFlow.

### Typing engine
- Character-by-character typing into Google Docs, Word Online, Excel Online, web forms, and generic contenteditable fields
- **Speeds + Human Mode** — four **base** presets (**Safe**, **Slow**, **Normal**, **Fast**) plus a separate **Human** timing row; **Human Mode** is a toggle that layers mistakes and corrections on top of your base speed when the field is safe (automatically skipped on `password` / `email` / `url` / `number` / `tel` inputs and on SharePoint-hosted Word/Excel Online frames)
- **Google Docs** — typed through the content-script web-editor pipeline using the Docs MAIN-world sink bridge; success is verified per character (caret motion alone never counts as a commit), and bridge-commit failures are surfaced as explicit errors rather than silent fake-success
- SharePoint-hosted Word/Excel Online: WAC frame detection for corporate tenants
- Pause / Resume mid-run — suspend at the current character, resume exactly where you left off
- Stop at any time with the **Stop** button or **Escape** key from the destination tab

### Composer View
- **Typing progress bar** — thin gradient bar shows estimated completion during a run
- **Keyboard shortcuts** — Cmd/Ctrl+Enter to start, Cmd/Ctrl+. to stop, Cmd+Shift+I to inspect, Cmd+Shift+R to refresh
- **Inspect Target** — probes the destination and reports mode, element type, and iframe status
- **Diagnostic Probe** — detailed diagnostic JSON for troubleshooting (Advanced Diagnostics)
- **Destination dropdown** — auto-follows the active browser tab with favicon display; selecting a tab focuses it in the browser
- **Snippets** — save frequently used texts by name; reload them instantly with the dropdown
- **What's New banner** — shown once after each silent extension update
- **Build number** — visible in the header (`Preview · 1.0.0-preview+sha` in staging; `1.0.0` in the stable release)

### Review prompt
- After your first successful typing run, PasteFlow asks if it worked for you
- One-time prompt only — appears once per install and is not shown again after you respond

### Licensing
- Free tier: 10,000 lifetime typed characters (counted post-delivery, not pre-typing)
- Plus tier: unlimited typing — one-time purchase of $4.99, no subscription
- Manage License panel: view status, enter license key, open payment link
- Soft upgrade prompt when Free balance drops below 2,000 characters

### Privacy
- All text stays local — no data leaves your browser except the license activation request
- No clipboard reads, no analytics, no telemetry

---

*Older releases will appear here as they ship. For the full commit history, see [GitHub](https://pasteflowapp.github.io/support/release-notes/).*
