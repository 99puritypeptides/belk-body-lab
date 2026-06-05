# BUILD PROMPT — Laboratory Transparency & Verification Landing Page (Belk Body Lab)

> **Read this file first.** It is the master instruction set. The other `.md` files in this
> folder contain the finished, copy-ready content for each section of the page. Your job is to
> assemble them into a single, standalone, high-converting landing page.

---

## 1. What you are building

A **single standalone landing page** hosted on **Belk Body Lab** focused on **laboratory
transparency, analytical testing, batch verification, quality documentation, and Certificates of
Analysis (COAs).**

The page exists to **educate** visitors about how analytical verification works and to **drive
them to the COA repository** hosted on 99PurityPeptides.

**Primary conversion goal (every CTA serves this):**
Send the visitor to the COA / certificate repository:
`https://99puritypeptides.com/certificates`

This is a **paid-traffic landing page** (ads will run to it). Treat it accordingly: fast, focused,
one clear job, no distractions, no leaks.

---

## 2. Hard technical requirements

1. **Standalone page.** Custom header and footer built specifically for THIS page. Do **not**
   inherit or pull in the main Belk Body Lab site navigation/menu.
2. **No incoming internal links** from the rest of the Belk Body Lab site. This page lives on its
   own.
3. **Indexing: `noindex, nofollow`.** Add to `<head>`:
   ```html
   <meta name="robots" content="noindex, nofollow">
   ```
   Also exclude from any sitemap and add a matching `Disallow` for the page path in `robots.txt`
   if the platform allows. Do not let it surface in search.
4. **Outbound CTA links** to `https://99puritypeptides.com/certificates` should open in a **new
   tab** (`target="_blank" rel="noopener noreferrer nofollow"`). Use `nofollow` on outbound links.
5. **Conversion tracking ready.** Wrap every CTA button in a trackable class/ID
   (e.g. `class="cta-coa" data-cta="view-coa"`) so ad-platform conversion events and click
   tracking can be wired in without re-editing copy.
6. **Mobile-first, fast-loading.** Paid traffic skews mobile. Defer non-critical JS, lazy-load
   images, keep LCP element (hero headline + primary CTA) above the fold.
7. **No login walls, no popups that block content, no exit-intent that hides the CTA.**

---

## 3. Tone & content guardrails (NON-NEGOTIABLE)

The brand voice is **premium, professional, scientific, analytical**. Match it.

**You MUST NOT include any of the following anywhere on the page:**
- Health claims, medical claims, treatment / cure / diagnosis claims
- Dosage, dosing, administration, or reconstitution-for-use instructions
- Performance claims, weight-loss claims, muscle-building claims, anti-aging claims
- Any reference to human consumption, ingestion, injection, or veterinary use
- Promotion of any specific product (no product names as "buy this")

**You MUST keep the framing strictly on:**
- Analytical testing methods (HPLC, LC-MS, etc.)
- Batch / lot verification and traceability
- Quality documentation and Certificates of Analysis (COAs)
- Transparency and how to read/verify the data

If any provided copy ever seems to drift toward a prohibited claim, keep the analytical/documentation
framing and drop the claim. When in doubt, describe the *document* and the *method*, never an *effect*.

---

## 4. File map — assemble in this order

| Order | File | Renders as |
|-------|------|-----------|
| 1 | `01_meta_and_head.md` | `<head>` meta, title, robots, schema |
| 2 | `02_header.md` | Custom standalone header |
| 3 | `03_hero.md` | Hero section + primary CTA |
| 4 | `04_what_is_a_coa.md` | Educational: what a COA is |
| 5 | `05_analytical_testing_methods.md` | HPLC / LC-MS / methods explainer |
| 6 | `06_batch_verification.md` | Batch & lot traceability |
| 7 | `07_how_to_read_a_coa.md` | How to read/verify the document |
| 8 | `08_trust_and_standards.md` | Transparency / standards trust block |
| 9 | `09_faq.md` | FAQ (verification-focused) |
| 10 | `10_final_cta.md` | Closing CTA band |
| 11 | `11_footer_and_disclaimer.md` | Custom footer + compliance disclaimer |
| — | `12_cta_inventory.md` | Master list of every CTA + destination |
| — | `13_design_style_notes.md` | Visual/design direction |

---

## 5. Step-by-step instructions for Antigravity

**Step 1 — Set up the scaffold.**
Create one HTML page (or framework equivalent). Add the `<head>` exactly per `01_meta_and_head.md`,
including the `noindex, nofollow` robots tag and the JSON-LD schema block.

**Step 2 — Build the custom header** from `02_header.md`. Logo + a single primary CTA only.
No multi-item navigation menu. The header CTA points to the COA repository.

**Step 3 — Build the hero** from `03_hero.md`. Headline, subhead, primary CTA above the fold.
This is the LCP target — keep it light.

**Step 4 — Build the educational body sections** in order from files `04`–`08`. Each section is
self-contained. Place a contextual CTA (text provided in each file) at the end of sections `05`,
`06`, and `08`.

**Step 5 — Build the FAQ** from `09_faq.md` as an accordion (collapsible). Keep one item open by
default for content visibility / SEO-neutral UX. Add FAQPage JSON-LD only if desired — note the
page is noindex, so schema is optional and cosmetic here.

**Step 6 — Build the final CTA band** from `10_final_cta.md`. Big, unmissable, single action.

**Step 7 — Build the custom footer** from `11_footer_and_disclaimer.md`. Include the full
compliance disclaimer verbatim. Minimal footer links (legal/compliance only — NOT the main site nav).

**Step 8 — Wire every CTA** using `12_cta_inventory.md`. Every button → COA repository, new tab,
`rel="noopener noreferrer nofollow"`, tracking attributes attached.

**Step 9 — Apply design** per `13_design_style_notes.md`.

**Step 10 — QA pass against this checklist:**
- [ ] `noindex, nofollow` present in head
- [ ] No links INTO this page from main site; no main-site nav ON this page
- [ ] Every CTA resolves to `https://99puritypeptides.com/certificates`
- [ ] Zero prohibited claims (health/medical/dosage/consumption/performance/product promo)
- [ ] Disclaimer present in footer
- [ ] Mobile renders cleanly; hero + CTA above fold
- [ ] CTA tracking hooks present

---

## 6. Reference: source brand voice

The voice was derived from 99PurityPeptides. Signature vocabulary to reuse:
*reversed-phase HPLC chromatograms, LC-MS identity confirmation, ≥99% purity, Certificate of
Analysis (COA), impurity profiles, batch-to-batch consistency, analytical traceability,
documented molecular weight accuracy, research-use-only (RUO), analytical transparency,
quality systems, experiment validation, protocol documentation.*

Tone exemplar sentence to match:
> "Our COAs provide the analytical transparency research laboratories require for experiment
> validation and protocol documentation."
