---
layout: default
title: Privacy Policy
nav_order: 5
---

# Privacy Policy

**Effective date:** May 6, 2026  
**Contact:** [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com)

This policy covers **what data PasteFlow stores and why**. For a dedicated, line-by-line explanation of each Chrome permission, see the [Permissions]({{ '/support/permissions/' | relative_url }}) page.

---

## What PasteFlow does with your data

### Text you paste into the Composer

Text you paste into the Composer View exists only in your browser tab for the duration of your session. It is never sent to any server. PasteFlow does not log, store, or transmit the content you type.

### Local storage

PasteFlow stores values in `chrome.storage.local` on your device, including:

| Key | What it stores | Why |
|---|---|---|
| `free_chars_typed` | Lifetime count of characters successfully typed (Free tier only) | To enforce the 10,000-character free limit |
| `plus_status` | `"free"` or `"plus"` | To know whether to enforce the limit |
| `license_key` | Your Plus license key, if activated | For display in Manage License only |
| `install_id` | A random ID generated on first use of this browser profile | Sent with license activation so the server can allow up to **three** personal devices per key (see below) |
| `pf_snippets` | Names and text of saved Snippets | To reload them across sessions |

This data never leaves your browser except as described below.

### License activation (Plus users only)

When you activate a Plus license, PasteFlow sends **your license key** and your local **`install_id`** to a Cloudflare Worker at `pasteflow-license-worker.roman-bc7.workers.dev`. The worker stores a **cryptographic hash** of the key (not the plaintext key) in its database, along with a list of up to **three** `install_id` values that have successfully activated — so your license works on a few personal devices, but cannot be shared broadly. Your name, email, and personal information are **not** required for activation. After activation succeeds, **no further network requests** are made for typing or license checks.

### Payment (Stripe)

Payment is handled entirely by Stripe. PasteFlow never sees your card number, billing address, or any payment details.

When Stripe confirms your payment, it sends a webhook notification to PasteFlow's fulfillment server. That server generates your license key and stores two records:

| Record | What it contains | Retention |
|---|---|---|
| Purchase record | License key and the email address Stripe provides with the order, if any | **30 days**, then automatically deleted |
| License record | A cryptographic hash of your license key, purchase metadata, and up to three browser `install_id` values that have activated | **10 years** (your license is valid for life) |

The email from Stripe is used only to associate your purchase with your key. It is never used for marketing, never shared with third parties, and automatically deleted after 30 days. You do not need to provide an email to activate PasteFlow.

---

## What PasteFlow never does

- Read your clipboard via extension APIs (you paste into the Composer with normal browser paste only)
- Read page content from tabs you haven't chosen as a destination
- Send your text to any server
- Use analytics, tracking pixels, or third-party SDKs
- Create or require an account
- Store typed text after your session ends

---

## Permissions

PasteFlow uses five Chrome permissions: `activeTab`, `scripting`, `storage`, `webNavigation`, and `sidePanel`. PasteFlow also declares `host_permissions: <all_urls>`. See the [Permissions]({{ '/support/permissions/' | relative_url }}) page for a plain-language explanation of each.

---

## Changes to this policy

If this policy changes materially, the effective date above will be updated. Continued use of PasteFlow after a policy change constitutes acceptance of the updated policy.

---

## Contact

Questions about privacy? Email [pasteflow.support@gmail.com](mailto:pasteflow.support@gmail.com).
