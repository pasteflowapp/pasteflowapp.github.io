---
layout: default
title: Getting Started
nav_order: 1
---

# Getting Started with PasteFlow

PasteFlow turns pasted text into character-by-character typing — exactly like a human typing your content into the destination. Paste once into the Composer, and PasteFlow handles the rest.

**Takes about 60 seconds to type your first document.**

---

## Step 1 — Pin PasteFlow to your toolbar

After installing, click the **puzzle piece icon** (🧩) in Chrome's toolbar, find **PasteFlow** in the list, and click the **pin icon** next to it. PasteFlow's icon will appear in your toolbar for one-click access from any tab.

---

## Step 2 — Open the Composer View

Click the **PasteFlow icon** in your toolbar. A side panel opens and stays attached to your browser window — it stays visible while you switch tabs, which is exactly what you need when typing into another page.

---

## Step 3 — Paste your text into the Composer

Click inside the large text area and paste the text you want typed. You'll see a live count of characters, words, lines, and an estimated time at the selected speed.

> **Tip:** Paste first, then pick your destination. The Composer holds your text while you navigate to the right tab.

---

## Step 4 — Pick a base speed

Choose a **base speed** for keystroke timing. The Composer shows **Safe**, **Slow**, **Normal**, and **Fast** — four timing presets (see the speed buttons in the panel).

| Speed | Pace | Best for |
|---|---|---|
| **Safe** | 180–260 ms/char | Google Docs, Word Online, Excel Online — complex editors that need slower input |
| **Normal** | 40–70 ms/char | Standard web forms, CMS blocks, most fields — natural human typing rhythm |
| **Slow** | 120–180 ms/char | Sensitive fields where Normal feels too fast |
| **Fast** | 5–14 ms/char | Simple inputs where speed matters and the site isn't rate-limited |

There is also a **Human** speed row in the grid — that is a **fixed “human-speed” timing preset** (80–140 ms/char). It is **not** the same control as **Human Mode** (the separate toggle below).

> **Not sure which to pick?** Start with **Safe** for Google Docs and Word Online. Use **Normal** for everything else. You can always change speed and re-run.

---

<a id="human-mode"></a>

## Human Mode (Composer toggle)

**Human Mode** is the toggle in the Composer next to your speed presets (it is **not** the same thing as choosing the **Human** row in the speed grid — that row is only a fixed “human-speed” timing preset).

When **Human Mode** is **On**, PasteFlow can add **occasional realistic mistakes** (wrong letter, double letter, swap) and **fix them with Backspace** on top of whatever **base speed** you already picked (**Normal**, **Safe**, etc.). Timing still follows that base speed; the toggle only adds the mistake-and-correction layer so the result looks more **hand-typed**.

- Use it when you want extra authenticity (some surveys, validators, or demos).
- It is **automatically disabled** on passwords, emails, URLs, numbers, and similar fields where mid-word corrections would be unsafe. See [Human mode compatibility]({{ '/support/compatibility/' | relative_url }}#human-mode-compatibility).

More background: [FAQ — Human mode]({{ '/support/faq/' | relative_url }}).

---

## Step 5 — Select your destination tab

Use the **Destination** dropdown to choose the tab where typing should land. PasteFlow auto-selects the most recently active tab. Click **Refresh** if you don't see the tab you opened after launching the Composer.

---

## Step 6 — Click into the field and inspect

This is the most important step:

1. **Click into the field or document** where you want text to appear — your Google Doc, Word Online file, or other web field.
2. Return to the Composer and click **Inspect Target**.
3. Wait for the status to show **Ready** with the field type confirmed.

> **Why this step?** PasteFlow can only type into a field that has keyboard focus. Inspect Target verifies the field is active and tells PasteFlow exactly how to type there.

If Inspect Target shows **"No editable field"**: click directly into the text area on the destination page (not the browser address bar) and try again.

---

## Step 7 — Confirm and start typing

Check the **"I clicked into the destination field and confirm PasteFlow should type there"** checkbox, then click **Start Typing**.

PasteFlow will begin typing character by character into the destination field. You don't need to keep the Composer visible — it runs in the side panel while you can watch the text appear in your destination.

---

## Step 8 — Control the run

While typing is in progress:

| Action | How |
|---|---|
| **Pause** | Click Pause — typing suspends between characters |
| **Resume** | Click Resume (same button) — continues exactly where you left off |
| **Stop** | Click Stop, or press **Escape** anywhere | 
| **Keyboard start** | `Cmd/Ctrl+Enter` when checkbox is checked |
| **Keyboard stop** | `Cmd/Ctrl+.` during a run |

Characters already typed are always preserved — stopping never deletes anything from the destination.

---

## Saving text for reuse: Snippets

> **Snippets:** Save reusable text in the Composer (**Snippets** section). See [FAQ — Snippets]({{ '/support/faq/' | relative_url }}) for save, load, export, and import.

Snippets let you save any block of text under a name and reload it instantly.

1. Paste or type your text in the Composer.
2. In the **Snippets** section, click **Save**.
3. Give the snippet a name and click **OK**.

To use a snippet later: open the **Snippets** dropdown, select the name — your text loads instantly, ready to type.

Snippets are saved locally in your browser and never leave your device.

---

## Common first-run issues

**Status shows "No editable field"**
→ Click directly inside a text area on the destination page (not the page header or toolbar), then click Inspect Target again.

**Typing appears in the wrong place**
→ The Composer types into whatever field had focus when you last clicked Inspect Target. Click into the correct field, click Inspect Target again, and confirm Ready before starting.

**Text is garbled or cut off in Google Docs**
→ Switch to **Safe** speed. Google Docs is sensitive to fast input.

**The destination tab isn't in the dropdown**
→ Click **Refresh** to re-scan open tabs.

---

## Next steps

- [Keyboard Shortcuts]({{ '/support/keyboard-shortcuts/' | relative_url }}) — control everything from your keyboard
- [Compatibility]({{ '/support/compatibility/' | relative_url }}) — full list of supported editors and sites
- [FAQ]({{ '/support/faq/' | relative_url }}) — free tier, Plus licensing, and common questions
- [Troubleshooting]({{ '/support/troubleshooting/' | relative_url }}) — detailed fixes with Diagnostic Probe guidance
