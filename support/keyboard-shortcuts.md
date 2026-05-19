---
layout: default
title: Keyboard Shortcuts
nav_order: 3
---

# Keyboard Shortcuts

Press **Escape** at any time to stop typing immediately. Characters typed up to that point are preserved in the destination.

---

## During a typing session

| Key | Action |
|---|---|
| `Escape` | Stop typing immediately (works even when Composer View is not focused) |

---

## In the Composer View

The following shortcuts work when the Composer View (side panel) has keyboard focus. Click anywhere inside the panel first.

| Shortcut | State | Action |
|---|---|---|
| `Cmd / Ctrl + Enter` | Ready (checkbox checked) | Start typing |
| `Cmd / Ctrl + .` | Typing in progress | Stop typing |
| `Cmd / Ctrl + Shift + I` | Any | Inspect Target |
| `Cmd / Ctrl + Shift + R` | Any | Refresh destination tab list |

---

## What each shortcut does

**Cmd/Ctrl + Enter — Start typing**  
Equivalent to clicking the **Start Typing** button. Text must be staged in the composer and the "I'm ready" checkbox must be checked.

**Cmd/Ctrl + . — Stop typing**  
Stops the current run immediately. Characters already typed are preserved; the remaining text is not entered.

**Cmd/Ctrl + Shift + I — Inspect Target**  
Probes the field currently focused in the selected destination tab. Reports:
- Detected input mode (Google Docs, standard `<input>`, `contenteditable`, etc.)
- Whether PasteFlow can type into it
- iframe context if applicable  

Use this when you're unsure if a field is supported before starting a run.

**Cmd/Ctrl + Shift + R — Refresh tab list**  
Re-scans your open browser tabs and updates the destination dropdown. Useful when you opened a new tab after the panel was already open, or when tabs have been rearranged.

---

## Pause and resume

PasteFlow supports mid-session **Pause** and **Resume**. While typing is in progress:

1. Click **Pause** in the Composer View — typing suspends between characters at the current position.
2. Click **Resume** (same button) — typing continues from exactly where it left off.
3. Click **Stop** at any time (including while paused) — typing ends and characters typed so far are preserved.

---

## Tips

- **Keyboard shortcuts need panel focus:** Cmd/Ctrl shortcuts only fire when the side panel (Composer View) has keyboard focus. Click inside the panel if they aren't responding.
- **Escape always works:** Unlike the other shortcuts, Escape is captured by the content script in the destination tab — it works even when you're typing into Google Docs with the panel out of focus.
- **Starting a run:** You must check the "I'm ready" confirmation checkbox before Cmd+Enter will start. This is a safety check to prevent accidental runs.
