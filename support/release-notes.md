---
layout: default
title: Release Notes
nav_order: 9
---

# Release Notes

What changed in each version of PasteFlow.

---

## v1.1.0 — Windows Chrome support · Speed preset overhaul · Human Mode improvements

- **Windows Chrome:** Improved compatibility for Windows Chrome users, including correct speed picker display and more consistent typing behavior.
- **Speed presets overhauled:** Slow, Safe, Normal, and Fast are now clearly distinct — the difference between presets is meaningful and predictable.
- **Human Mode on the fly:** Toggle Human Mode on or off at any point during a run, no pause required.
- **Stability and bug fixes:** Activation retries automatically when the license backend is still propagating. Partial runs recover more cleanly with clearer progress feedback.

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
