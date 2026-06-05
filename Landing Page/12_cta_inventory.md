# 12 — CTA Inventory (Master List)

> **Every** CTA on the page points to the COA repository. Same destination, same link attributes,
> unique tracking value. Wire them all from this table.

**Universal destination:** `https://99puritypeptides.com/certificates`
**Universal link attributes:** `target="_blank" rel="noopener noreferrer nofollow"`

| # | Location | Button / link label | `data-cta` value | Style class |
|---|----------|---------------------|------------------|-------------|
| 1 | Header | `View COA Reports` | `header-view-coa` | `cta-coa` |
| 2 | Hero | `View the COA Repository` | `hero-view-coa` | `cta-coa cta-primary` |
| 3 | What Is a COA | `See real COA documents` | `whatis-view-coa` | `cta-coa` |
| 4 | Analytical Methods | `Review chromatograms and analytical data` | `methods-view-coa` | `cta-coa` |
| 5 | Batch Verification | `Compare COAs across batches` | `batch-view-coa` | `cta-coa` |
| 6 | How to Read a COA | `Open a COA and follow along` | `howto-view-coa` | `cta-coa` (inline) |
| 7 | Trust & Standards | `Access the Full COA Repository` | `trust-view-coa` | `cta-coa cta-primary` |
| 8 | FAQ | `Go to the COA Repository` | `faq-view-coa` | `cta-coa` |
| 9 | Final CTA band | `View COA Reports Now` | `final-view-coa` | `cta-coa cta-primary cta-final` |
| 10 | Footer | `View the COA Repository` | `footer-view-coa` | `cta-coa` |

## Example markup
```html
<a href="https://99puritypeptides.com/certificates"
   target="_blank"
   rel="noopener noreferrer nofollow"
   class="cta-coa cta-primary"
   data-cta="hero-view-coa">
  View the COA Repository
</a>
```

## Tracking note
The `data-cta` attribute lets you fire a single click event and segment by location in your ad
platform / analytics (e.g. `gtag('event','click', { cta: el.dataset.cta })`). All ten share one
conversion goal: a click through to the COA repository.
