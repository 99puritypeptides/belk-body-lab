# 13 — Design & Style Notes

> Premium, professional, scientific. The visual language should feel like a research instrument
> readout, not a supplement store.

## Mood
Clinical confidence. Clean, precise, data-forward, trustworthy. Think analytical lab report meets
modern SaaS landing page.

## Palette (suggested)
- **Base / ink:** deep navy `#0B1F3A` (authority, science)
- **Background:** near-white `#F7F9FB` with generous whitespace
- **Surface / cards:** white `#FFFFFF` with soft 1px borders `#E3E8EF`
- **Accent / CTA:** a single confident accent — teal `#0E8C8B` or electric blue `#1E6BFF`. Use it
  ONLY for CTAs and key data highlights so the conversion path stands out.
- **Text:** `#1A2433` body, `#5A6B82` secondary.

## Typography
- **Headings:** a precise grotesque/geometric sans (e.g. Inter, Söhne, Neue Haas). Tight, confident.
- **Body:** highly legible sans at 16–18px, 1.6 line-height.
- **Data accents:** a monospace face (e.g. IBM Plex Mono) for figures like `≥99%`, lot IDs, and
  method labels — reinforces the analytical feel.

## Components
- **CTA buttons:** solid accent fill, generous padding, subtle hover lift. Primary CTAs larger.
  Keep label text scientific and action-led ("View COA Reports", not "Click here").
- **Cards:** soft shadow, rounded `12px`, thin border. Use for method blocks and standards grid.
- **Chromatogram motif:** consider a subtle line-graph / peak SVG as a recurring visual element
  (hero background, section dividers). Decorative but on-theme.
- **Step flow** (batch traceability): numbered nodes connected by a thin line.
- **Accordion** (FAQ): minimal, clear +/- affordance.

## Layout
- Mobile-first. Single column on mobile; 2-up grids collapse to 1-up.
- Hero + primary CTA above the fold on a 375px viewport.
- Sticky header so the COA CTA is always one tap away.
- Generous section spacing; let the content breathe — premium feel comes from whitespace.

## Imagery rules
- Abstract scientific visuals: chromatography traces, data tables, document-on-screen, lab glassware
  in a neutral/clinical context.
- **Avoid:** people consuming anything, syringes framed for use, before/after visuals, physique
  imagery, anything implying human application.

## Performance
- Lazy-load below-fold images, inline critical CSS for hero, defer non-critical JS.
- Target fast LCP — paid traffic abandons slow pages.

## Accessibility
- AA contrast minimum, especially CTA text on accent fill.
- Accordion keyboard-operable; focus states visible on all CTAs.
