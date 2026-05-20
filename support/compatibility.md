---
layout: default
title: Compatibility
nav_order: 4
---

# Compatibility

PasteFlow uses character-by-character keyboard event simulation to type into web editors. This approach works precisely where standard paste fails — in editors that intercept keyboard events at a deep level, like Google Docs and Word Online.

---

## Fully supported in v1

| Platform | Notes |
|---|---|
| **Google Docs** | Full support through the **web-editor** content-script path with MAIN-world sink bridge/focus handoff; if a bridge commit fails, the content-script run can request a Docs-only native-input character broker. Use **Safe** speed. |
| **Google Sheets** | Supported in cell edit mode. Double-click a cell or press F2 to enter edit mode before inspecting. |
| **Word Online** | Full support on `word.cloud.microsoft` / `word.office.com`. SharePoint-hosted Word embeds are currently treated as unsupported in v1 instead of faking success. Use **Safe** speed. |
| **Excel Online** | Supported in cell edit mode on office.com and SharePoint. Double-click a cell or press F2 before inspecting. |
| **Standard `<input>` and `<textarea>` fields** | Works on any page — job applications, survey forms, web portals, admin dashboards. Normal speed. |
| **Generic `contenteditable` fields** | Works on most rich-text editors not listed above — other web editors, CMS platforms, comment boxes. Normal speed. |

---

## Languages and Unicode text

PasteFlow types **Unicode text**, not English or ASCII only. Your staged text can mix scripts in one run — for example English, Russian, Hindi, accented Latin, emoji, and symbols — as long as the **destination editor** accepts those characters when you type normally.

### What that means in practice

- **European and Latin-script languages** — French, German, Spanish, Polish, Vietnamese (Latin letters), etc. work the same way as English.
- **Cyrillic** — Russian, Ukrainian, Bulgarian, etc.
- **Greek, Hebrew, Arabic, Devanagari (Hindi), Thai, CJK** (Chinese, Japanese, Korean), and other scripts encoded in Unicode are typed **one grapheme at a time** (user-visible character), using the browser’s grapheme segmentation when available.
- **Emoji and combined characters** — PasteFlow aims to send whole grapheme clusters (e.g. skin-tone emoji) as single steps where the browser supports `Intl.Segmenter`.

There is **no separate language pack** and **no list of “supported languages.”** If you can paste the text into the field yourself, Inspect Target is **Ready**, and a short test run looks correct, that script is supported for **normal typing**.

### Human Mode and non-English text

**Human Mode** (the Composer toggle) adds realistic pauses and variable timing for **any Unicode letters**, not only A–Z.

| Where you type | Human Mode behavior |
| --- | --- |
| **Google Docs** | **Timing only** for all languages — cadence, recall pauses, and punctuation pauses apply; deliberate typo + backspace “corrections” are **not** used in Docs because delete transport is unreliable there. Final text stays correct. |
| **Google Sheets, standard inputs, most `contenteditable` fields** | Full Human Mode when the field allows it — timing **plus** occasional visible mistakes and corrections on Unicode words (Cyrillic, accented Latin, etc.), same idea as English. |
| **Password, email, URL, number, phone fields** | Human Mode is **off** automatically (any language) — mid-word correction would corrupt these field types. |

### Right-to-left and complex scripts

**Arabic, Hebrew, Persian, Urdu**, and other **right-to-left** languages use Unicode like any other script. PasteFlow still injects keystrokes in logical order; **how the editor displays cursor position and line direction** depends on Google Docs, Word Online, or the site’s own editor. If something looks wrong visually but the characters are correct after the run, that is usually editor layout — email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com?subject=PasteFlow%20Support%20Request) with Diagnostic Probe output.

**Complex shaping** (connected Arabic letters, some Indic stacks) is handled by the **host application**, not by PasteFlow choosing glyph shapes. Use **Safe** speed on heavy web editors if characters are dropped at Fast speed.

### What is *not* a “language” limitation

These are **platform or field** limits from the table above, not Unicode exclusions:

- **Gmail, Google Slides, native desktop apps** — not supported in v1 (see below).
- **Canvas-only or custom input widgets** that reject keyboard input — may fail Inspect Target regardless of language.
- **Legacy encodings** (e.g. old desktop files not opened in the browser) — web pages already use Unicode; PasteFlow does not target non-Unicode encodings separately.

---

## Speed recommendations by platform

| Platform | Recommended speed | Why |
|---|---|---|
| Google Docs | **Safe** | Docs canvas is sensitive to fast keystroke injection |
| Word Online | **Safe** | Same architecture — fast input can miss characters |
| Excel Online | **Safe** | Cell editors can drop fast keystrokes |
| Google Sheets | **Normal** | Cell inputs handle Normal speed well |
| Web forms / inputs | **Normal** | Standard DOM inputs handle Normal speed cleanly |
| Simple text areas | **Fast** | Non-rate-limited inputs can take full speed |

---

## Not supported in v1

| Platform | Status | Why |
|---|---|---|
| **Gmail** | Not supported | Gmail's compose editor uses a non-standard accessibility model that requires a separate implementation path. |
| **Google Slides** | Not supported | Same architecture constraints as Gmail's editor. |
| **Native desktop apps** | Not supported | Chrome extensions can only inject into web pages. PasteFlow cannot type into Word, Notepad, or any other native application. |

---

## Unlisted sites

Most standard input fields and `contenteditable` elements are compatible with PasteFlow, even if the site isn't listed above.

**To test any unlisted site:**
1. Click into the field you want to type into.
2. Open the Composer View and click **Inspect Target**.
3. If status shows **Ready**, PasteFlow can type there.
4. For more detail, click **Run Diagnostic Probe** in Advanced Diagnostics to see exactly how PasteFlow detected the field.

If Inspect Target returns "No editable field" even after clicking directly into a text area, the site may be using a canvas-based editor or a custom input method that isn't currently supported. Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com?subject=PasteFlow%20Support%20Request) with the site URL and **Diagnostic Probe** output if you can — we'll investigate.

---

## Human Mode compatibility

**Human Mode** is the toggle in the Composer that adds realistic typing mistakes and self-corrections on top of your chosen base speed. It works on all fully-supported platforms **except**:

- **Password, email, URL, number, and phone inputs** — mid-word backspacing corrupts these field types, so Human mode is automatically disabled.
- **Word Online and Excel Online hosted via SharePoint (WAC editors)** — WAC frame behavior with backspace is not yet validated and is disabled until QA confirms it works correctly.

On Google Docs, Google Sheets, standard inputs, and generic `contenteditable` fields, Human Mode is available and overlays mistake-and-correction behavior on top of whichever base speed you have selected.

---

## Reporting a compatibility issue

If PasteFlow doesn't work on a site you'd expect it to support, email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com?subject=PasteFlow%20Support%20Request). Include:
- The site URL
- Which field type you're trying to type into
- The **Diagnostic Probe** JSON from the Composer when you can run it

This helps us diagnose and add support faster.
