---
layout: default
title: FAQ
nav_order: 2
---

# Frequently Asked Questions

---

## Quick answers

| Question | Answer |
|---|---|
| Does it work on Google Docs? | Yes — primary supported editor (use **Safe** speed; always **Inspect Target** first) |
| Does it work on Word Online? | Yes — primary supported editor (use **Safe** speed; always **Inspect Target** first) |
| Does it store my text? | No — text stays in your browser only |
| Do I need an account? | No — no sign-in, no email |
| Does it auto-submit forms? | Never — PasteFlow only types |
| Free tier limit? | 10,000 characters |
| Plus price? | $4.99 one-time, no subscription |

---

## Compatibility

**Does PasteFlow work on Google Docs and Word Online?**

Yes. Google Docs and Word Online are two of PasteFlow's primary supported editors. Both use a custom editor that requires character-by-character keystroke injection — standard paste doesn't work reliably in either. PasteFlow routes both through the same **content-script web-editor** typing pipeline. Use **Safe** speed for best results, and always run **Inspect Target** on the exact field you plan to type into before starting a long run.

---

**Does it work on job application portals?**

Most do. Many applicant tracking portals use standard HTML form fields that PasteFlow types into natively. Use **Normal** speed. Always click **Inspect Target** on the specific field you want to type into — if it shows **Ready**, PasteFlow can type there. Some portals use iframes or proprietary widgets that are not currently supported.

---

**Will it work on sites not listed in the Compatibility page?**

Most likely. Click into the field you want to type into, then click **Inspect Target** in the Composer. If the status shows **Ready**, PasteFlow can type there. If it shows "No editable field," the site may use a canvas-based or custom input that isn't currently supported. See [Compatibility]({{ '/support/compatibility/' | relative_url }}) for the full list.

---

## Privacy and data

**Does PasteFlow store my text?**

No. Text you paste into the Composer lives only in your browser for the duration of the session. It is never sent to any server. PasteFlow has no cloud storage and makes no network calls except for optional Plus license activation.

PasteFlow **never submits** forms, clicks navigation buttons, or completes workflows for you — it only sends keystrokes into the field you selected after **Inspect Target** shows **Ready**.

---

**Do I need an account?**

No. PasteFlow works immediately after installation with no sign-in, no account, and no email required.

---

**What does it do with my clipboard?**

PasteFlow does **not** read your clipboard through extension APIs. Stage text by pasting into the Composer with **Cmd/Ctrl+V** (or typing), like any normal textarea. The only clipboard **writes** are optional actions you click yourself — for example **Copy remaining** after a mid-run stop, or copying the checkout link if a popup blocker prevents opening Stripe.

---

**Does it work offline?**

Yes — typing is fully local. PasteFlow only needs an internet connection when activating a Plus license for the first time.

---

**What permissions does PasteFlow need and why?**

See the full [Permissions]({{ '/support/permissions/' | relative_url }}) page for a plain-language explanation of each Chrome permission PasteFlow requests.

---

## Licensing and payment

**What's the difference between Free and Plus?**

Both tiers include all features and all supported platforms. The only difference is a character limit.

| | Free | Plus |
|---|---|---|
| All features | ✓ | ✓ |
| All supported platforms | ✓ | ✓ |
| Lifetime typed characters | 10,000 | Unlimited |
| Price | Free | $4.99 one-time |
| Subscription | None | None |

---

**How do I upgrade to Plus?**

1. Open the Composer View (click PasteFlow in your toolbar).
2. Click **Manage License** in the footer, or click **Upgrade to Plus** when prompted.
3. Click **Get PasteFlow Plus — $4.99** to open the payment page.
4. Complete payment. You'll land on a confirmation page with your license key.
5. Copy the key, return to PasteFlow, paste it into the license key field, and click **Activate Plus**.

---

**How do I activate Plus after purchasing?**

1. Open the Composer View.
2. Click **Manage License** in the footer.
3. Paste your license key into the input field.
4. Click **Activate Plus**.

The header will update to **Plus · Unlimited** immediately.

---

**My license key says "not found" — but I just purchased. What do I do?**

This usually happens if you activate within seconds of purchasing. License keys are processed in real time, but it can take up to 60 seconds for your key to become available on all servers.

1. Wait 30 seconds and click **Activate Plus** again.
2. If it still doesn't work after a minute, close and reopen the PasteFlow panel and try again.
3. Still stuck? Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) with your Stripe order number.

Your purchase is recorded immediately — this is a temporary propagation delay, not a billing issue.

> **Starting with v1.0.1**, PasteFlow will automatically retry activation up to 5 times, so most propagation delays will be invisible to you.

---

**The upgrade page never opened when I clicked "Get Plus". What happened?**

Chrome may have blocked the payment page as a popup. Look for a "popup blocked" notification in Chrome's address bar (small icon on the right) and click **Allow**. Or email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) to request the payment link directly.

---

**I lost my license key. Can I get it back?**

Yes. Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) with the email address you used at checkout or your Stripe order number. We'll send your key again within one business day.

---

**Can I use my Plus license on multiple computers?**

Yes — for **personal** use on up to **three** distinct browser installs (for example your laptop, desktop, and a second Chrome profile). Each profile gets a stable random **install ID** stored only on your device; when you activate, that ID is registered on the license server. If you hit the limit and need a reset (new machine, reformatted disk, etc.), email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com).

---

**I was charged twice. What should I do?**

Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) with your Stripe order number. We'll refund the duplicate charge immediately — no questions asked. Refunds typically appear within 5–10 business days depending on your bank.

---

**What is the refund policy?**

14 days from purchase, no questions asked. Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) with your Stripe order number and we'll process the refund within one business day.

---

**How do I check whether I'm on Free or Plus?**

Open the Composer View. The header below the PasteFlow logo shows your tier:
- **Free · X chars left** — Free tier with X characters remaining
- **Plus · Unlimited** — Plus license is active

If you've entered a key but still see Free, click **Manage License** and re-enter the key.

---

**My Free limit reached 0 — what happens?**

Typing stops at the start of any run where the staged text is longer than your remaining balance. PasteFlow never stops mid-run for a balance reason — it always checks before starting, so partial runs can't happen due to quota.

You can still use PasteFlow with shorter texts that fit your remaining balance. Upgrade to Plus for unlimited typing — one-time $4.99.

---

## Using PasteFlow

**What does "Inspect Target" do?**

Inspect Target probes the field or document you've clicked into and tells PasteFlow how to type there. It reports the field type (Google Docs, Word Online, standard textarea, etc.) and whether PasteFlow is ready.

You must click into your destination field **before** clicking Inspect Target — PasteFlow inspects whatever has keyboard focus at that moment. Once it reports **Ready**, you can start typing.

---

**Can I pause and resume mid-typing?**

Yes. Click **Pause** while typing is in progress to suspend at the current character. Click **Resume** (same button) to continue exactly where you left off. You can also stop completely with **Stop** or **Escape** — characters already typed are always preserved.

---

**What is Human mode and when should I use it?**

Human mode makes PasteFlow type with occasional realistic errors — an adjacent-key substitution, a doubled letter, transposed letters — that it catches and corrects by backspacing and retyping. The result looks genuinely hand-typed.

Use Human mode when you want the output to appear authentically typed: survey platforms that screen for automation patterns, response validators, or any context where a suspiciously uniform typing rhythm might be flagged.

Human mode is automatically disabled on `password`, `email`, `url`, `number`, and `tel` inputs (and on a few fragile editors such as SharePoint-hosted Word/Excel Online) where mid-word backspacing could corrupt the input.

---

**What are Snippets and how do I use them?**

Snippets save a block of text under a name for instant reload — great for cover letters, boilerplate responses, or any text you type repeatedly.

1. Paste or type your text in the Composer.
2. Click **Save** in the Snippets section.
3. Give the snippet a name and click **OK**.

To use a saved snippet: open the **Snippets** dropdown, choose the name — your text loads instantly. To remove a snippet, select it and click **Delete**.

---

**Will PasteFlow auto-submit my form or document?**

Never. PasteFlow only types. It does not press Enter to submit, click Submit buttons, or trigger any form submission. You stay in complete control.

---

**Does PasteFlow have keyboard shortcuts?**

Yes. While the Composer View is focused:

| Shortcut | Action |
|---|---|
| `Cmd/Ctrl+Enter` | Start typing |
| `Cmd/Ctrl+.` | Stop immediately |
| `Cmd/Ctrl+Shift+I` | Inspect Target |
| `Cmd/Ctrl+Shift+R` | Refresh tab list |

`Escape` always stops typing, even when the Composer isn't focused. See [Keyboard Shortcuts]({{ '/support/keyboard-shortcuts/' | relative_url }}) for the full reference.

---

**Why did typing stop unexpectedly?**

Common causes:
- You pressed **Escape** or clicked **Stop**
- Focus moved away from the destination typing surface (another field, tab, or window) — PasteFlow may **stop the run** so characters are not delivered to the wrong target
- The page navigated away mid-session

See [Troubleshooting]({{ '/support/troubleshooting/' | relative_url }}) for detailed fixes including the [quick diagnosis table]({{ '/support/troubleshooting/' | relative_url }}#quick-diagnosis).

---

**What happens to my Snippets and license key if I reinstall?**

All PasteFlow data (Snippets, license key, usage counter) is saved to `chrome.storage.local` — local to your current Chrome profile on this device.

- **Reinstalling:** All local data is removed when the extension is uninstalled. Re-enter your license key in **Manage License** after reinstalling. Your Snippets will also be lost.
- **Switching computers:** Data does not transfer automatically. Your license key works on any device — just re-enter it.
- **Need your key again?** Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com) with your Stripe order number.

Snippet export/import exists in the Composer when the Snippets panel is enabled for your build. If you do not see Snippets yet, everything is still stored locally in `chrome.storage.local` on this profile.

---

**Why did PasteFlow ask me to leave a review?**

After your first completed typing run, PasteFlow shows a one-time prompt asking if it worked for you. Clicking **Yes** takes you to the Chrome Web Store review page. Clicking **Not yet** dismisses it permanently. The prompt appears only once per install and only after a successful run.
