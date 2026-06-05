# 01 — `<head>` Meta, Robots & Schema

> Place all of this inside the page `<head>`. This page is **paid-traffic only** and must stay
> out of search indexes.

## Page title
```
Laboratory Verification & Certificate of Analysis (COA) Transparency | Belk Body Lab
```

## Meta description
```
See how analytical testing, batch verification, and Certificates of Analysis (COA) document quality and traceability. Review the full COA repository and verify the data for yourself.
```

## Robots (REQUIRED)
```html
<meta name="robots" content="noindex, nofollow">
<meta name="googlebot" content="noindex, nofollow">
```

## Core head tags
```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0B1F3A">
<title>Laboratory Verification & Certificate of Analysis (COA) Transparency | Belk Body Lab</title>
<meta name="description" content="See how analytical testing, batch verification, and Certificates of Analysis (COA) document quality and traceability. Review the full COA repository and verify the data for yourself.">
```

## Open Graph (kept minimal — for ad/social link previews only)
```html
<meta property="og:title" content="Laboratory Verification & COA Transparency">
<meta property="og:description" content="How analytical testing and Certificates of Analysis document quality, purity, and batch traceability. Review the COA repository.">
<meta property="og:type" content="website">
```

## Optional JSON-LD (cosmetic only — page is noindex)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Laboratory Verification & Certificate of Analysis (COA) Transparency",
  "about": "Analytical testing, batch verification, and Certificate of Analysis (COA) documentation for research-use-only reagents.",
  "isAccessibleForFree": true
}
</script>
```

## robots.txt note (handle outside the page)
Add the page path to `robots.txt`:
```
User-agent: *
Disallow: /lab-verification-coa-transparency/
```
And exclude the URL from any XML sitemap.
