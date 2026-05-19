---
layout: default
title: Permissions
nav_order: 6
---

# Permissions

PasteFlow never reads your page content, browsing history, or personal data. Here is exactly what each permission is used for and what it cannot do.

---

## Chrome permissions

| Permission | Why PasteFlow needs it | What it cannot do |
|---|---|---|
| `activeTab` | Inject the typing engine into the tab you're actively using | Access any tab you haven't clicked on |
| `scripting` | Execute the typing loop in the destination tab | Read the page's content or user data |
| `storage` | Save your speed preference, Plus status, license key, and Snippets locally | Send data anywhere |
| `sidePanel` | Register and open the Composer View as a Chrome side panel | Anything beyond showing the panel |
| `webNavigation` | Detect iframe layout in complex editors (Google Docs, Word Online) to choose the correct typing path | Track browsing history or navigation outside the active session |

## Host permission

| Permission | Why PasteFlow needs it | What it cannot do |
|---|---|---|
| `<all_urls>` | Inject the typing engine into any page you navigate to | Read page content, access history, or operate without you opening a destination tab |

The `<all_urls>` permission is required because Chrome needs to know in advance which pages an extension can inject scripts into. Without it, PasteFlow could not type into Google Docs, Word Online, or any other site. PasteFlow only injects when you actively use it — it does not run passively on pages you visit.

---

## What PasteFlow does not request

- `tabs` — PasteFlow cannot read your open tabs list or browsing history
- `history` — PasteFlow has no access to your browser history
- `clipboardRead` — not requested; PasteFlow never reads the clipboard programmatically. Text enters the Composer via normal browser paste (Cmd/Ctrl+V) or typing. Optional **writes** occur only when you choose actions such as **Copy remaining** or copying the checkout link when a popup is blocked.
- `cookies` — PasteFlow does not access cookies on any site
- Any network permission beyond `pasteflow-license-worker.roman-bc7.workers.dev` (license activation only)
