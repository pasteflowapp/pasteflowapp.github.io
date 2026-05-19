---
layout: default
title: Troubleshooting
nav_order: 7
---

# Troubleshooting

---

## Quick diagnosis

**What's happening?** Jump straight to the right section:

| Symptom | Go to |
|---|---|
| Session starts but nothing appears in the destination | [Nothing typed](#nothing-typed--session-starts-but-no-text-appears) |
| Typing stopped mid-run | [Typing stopped unexpectedly](#typing-stopped-unexpectedly) |
| Text appeared in the wrong field or tab | [Wrong field or wrong tab](#text-typed-in-the-wrong-place) |
| Google Docs not working | [Google Docs](#google-docs-not-working) |
| Word Online / Excel Online not working | [Word / Excel Online](#word-online-or-excel-online-not-working) |
| License key shows "not found" or "invalid format" | [Key not found](#license-key-activation-fails--key-not-found) · [Invalid format](#license-key-activation-fails--invalid-key-format) |
| "Device limit reached" when activating Plus | [Device limit](#license-key-activation-fails--device-limit) |
| Extension stopped responding | [After Chrome update](#extension-stopped-responding-after-a-chrome-update) |
| Human mode produced garbled text | [Human mode](#human-mode-typed-an-extra-character-or-produced-garbled-text) |

---

## Nothing typed — session starts but no text appears

1. Make sure you clicked into the destination field **before** clicking Inspect Target.
2. Click **Inspect Target** again and wait for the status to show **Ready**.
3. Check the confirmation checkbox before clicking **Start Typing**.
4. If the status shows **No editable field**, try clicking directly into a text area on the destination page and inspecting again.

> **Most common cause:** the confirmation checkbox isn't checked, or Inspect Target wasn't run after clicking into the field.

---

## Typing stopped unexpectedly

**Most likely causes:**

- You pressed **Escape** — this always stops typing immediately.
- Focus moved away from the destination typing surface (another field, browser tab, or window) — PasteFlow may **stop the run** so text is not delivered to the wrong place.
- The destination page navigated away mid-session.

**What to do:** Your text is preserved in the Composer. Click into the destination field, click **Inspect Target** to confirm Ready, then click **Start Typing** again.

---

## Text typed in the wrong place

The Composer types into whatever field was active when you last clicked Inspect Target. If typing landed in the wrong field:

1. Click into the correct field on the destination tab.
2. Back in the Composer, click **Inspect Target** again.
3. Confirm the status shows the correct field, then start typing.

---

## Google Docs not working

1. Click inside the document body (not the title field at the top).
2. Make sure no dialog or menu is open in Docs — they can intercept keyboard events.
3. Click **Inspect Target** and confirm the status shows **Ready** with a Google Docs field label (for example **Ready — Google Docs**).
4. If text is garbled or dropped, switch to **Safe** speed — Google Docs is sensitive to fast keystroke injection.
5. If you see **“extension context conflict”** after clicking Start Typing: another Chrome extension may have left focus inside its own overlay iframe inside Docs (Grammarly-style companions are common). Click directly inside the document canvas once, run **Diagnostic Probe**, click **Inspect Target** again, then retry — or temporarily disable overlapping extensions on `docs.google.com`.

> **Tip:** For very long texts, consider pasting in sections of a few hundred characters at a time.

---

## Word Online or Excel Online not working

1. Click **directly inside the editing area** of the document (not the toolbar or a menu).
2. For Excel Online, double-click a cell to enter edit mode before inspecting.
3. Try switching to **Safe** speed — Word Online and Excel Online can be sensitive to fast input.
4. Click **Inspect Target** again after entering edit mode.
5. For SharePoint-hosted instances: the WAC frame is detected automatically, but you must click inside the document body (not the header) before inspecting.

---

## How to read the Diagnostic Probe output

Click **Run Diagnostic Probe** in the Advanced Diagnostics panel to see detailed diagnostics about the detected field.

| Field | What it means |
|---|---|
| `mode` | How PasteFlow will type: `google-editor` (Docs/Sheets), `web-editor` (Word/Excel Online), `dom-editable` (standard inputs and contenteditable), or `none` |
| `active` | The HTML tag of the focused element (`TEXTAREA`, `DIV`, `IFRAME`, `BODY`, etc.) |
| `docsIframe` | Whether the Google Docs canvas iframe was found |
| `iframeTarget` | Whether PasteFlow found a valid injection target inside the iframe |
| `selectedTargetSource` | How the target was found: `focused-iframe`, `docs-texteventtarget-iframe`, `fallback-iframe-active-element`, `top-doc`, or `none` |

**Reading the output:**
- If `mode` is `none` or `active` is `BODY`, the cursor is not in an editable field — click into the field again.
- If `mode` is `google-editor` but text is dropping, switch to **Safe** speed.
- If `selectedTargetSource` is `none`, PasteFlow could not find an injection target — the site may use a canvas-based or custom editor.

---

## Human mode typed an extra character or produced garbled text

Human mode is designed to only work on fields where backspacing is safe. If you see garbled output:

1. Switch to **Normal** or **Safe** speed — Human mode should never produce garbled text in supported fields, so this indicates the field type is incompatible.
2. Human mode is automatically disabled on password, email, URL, number, and phone inputs. If it still triggered, email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com?subject=PasteFlow%20Support%20Request) with the site URL, your Chrome version, and **Diagnostic Probe** JSON if you can run it ([help center]({{ '/support/#email-support' | relative_url }}) — Step 2).
3. For Word Online hosted via SharePoint (corporate accounts), use Normal or Safe speed — Human mode is disabled on WAC-hosted editors.

---

## License key activation fails — "invalid key format"

If PasteFlow shows **"Invalid license key format."** when you click Activate:

1. **Full format:** `PASTE-XXXXX-XXXXX-XXXXX-XXXXX` (four groups of five base32-style characters after `PASTE-`). If you only copied the middle part (`XXXXX-XXXXX-XXXXX-XXXXX`), **PasteFlow still accepts it** — Activate will normalize it.
2. **Copy and paste** the key directly — don't retype it by hand. Copying from the confirmation page preserves the exact format.
3. **Watch for invisible characters.** If you copied the key from an email, ensure no extra spaces were included before or after the key.

---

## License key activation fails — "key not found"

If PasteFlow shows a "key not found" or activation error right after purchasing:

1. **Wait 30 seconds and try again.** License keys are written to a distributed network after purchase. In rare cases there is a short propagation delay before the key is reachable.
2. **Check for typos.** Copy the key directly from your confirmation page or receipt email — do not retype it by hand.
3. **Still failing after 60 seconds?** Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) with your Stripe order number. We'll verify the key and send a replacement if needed.

> **Starting with v1.0.1**, PasteFlow will automatically retry activation up to 5 times with a short delay between attempts, so most propagation delays will be invisible to you.

---

## License key activation fails — "device limit"

Plus licenses may be activated on up to **three** different browser installs (each install has its own stable ID). If you see **"Device limit reached (max 3). Please contact support to reset."**:

1. Confirm you are not trying to share one purchase across a large team — the limit exists to prevent that while still allowing a few personal machines.
2. If you replaced a computer, reinstalled Chrome, or use many profiles, you may have used all three slots. Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) and we can reset the device list after verifying your purchase.

---

## Extension stopped responding after a Chrome update

Chrome silently updates extensions and occasionally the service worker (background script) needs to be restarted.

1. Right-click the PasteFlow icon in the toolbar and choose **Manage Extension**.
2. Toggle the extension **off**, wait a few seconds, then toggle it back **on**.
3. Close and reopen the Composer View (click the PasteFlow icon again).

If the issue persists after toggling:
- Visit `chrome://extensions`, locate PasteFlow, and click **Remove**.
- Reinstall from the Chrome Web Store.

> ⚠️ **Your license key and Snippets are stored in local Chrome storage and will be removed when you uninstall.** Re-enter your license key in **Manage License** after reinstalling. If you have saved Snippets you want to keep, note them before removing the extension — they are not automatically restored.

---

## Still stuck?

- Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com?subject=PasteFlow%20Support%20Request) for bugs — include **Diagnostic Probe** JSON when you can, your Chrome version, and the site URL (see [help center]({{ '/support/#email-support' | relative_url }})).
- Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) for license or payment issues.
- [help center]({{ '/support/#email-support' | relative_url }}) — step-by-step guide with common fixes.
