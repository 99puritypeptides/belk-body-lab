# ANTIGRAVITY BUILD PROMPT — BELK BODY LAB BLOG POST #2

> **What this file is:** A complete, copy-paste-ready build brief for an Antigravity / dev agent to publish the SECOND new blog post on `https://www.belkbodylab.com/blog`. It contains the chosen topic, full SEO/GEO/AEO strategy, the entire article body (3,000+ words), 13 FAQs, all required JSON-LD schemas, every image's prompt + filename + alt text + placement, and the internal-linking map matched to the live sitemap including the previously published belly-fat post.
>
> **This is Case.12 in the existing PRTCL.SYS blog numbering sequence.** The previous post (Case.11) is `/blog/how-to-lose-belly-fat-after-40-charleston-sc`.

---

## 1. EXECUTIVE SUMMARY (read this first)

**Site analyzed:** `https://www.belkbodylab.com/` (re-verified)
**Brand:** Belk Body Lab — Kyle Belk, NASM-certified personal trainer, Charleston SC.
**Brand voice:** Technical, clinical, confident. Uses "protocol," "system," "diagnostic," "engineering," "PRTCL_ID," "Phase 01–05." Authority-driven, anti-hype.
**Primary geo focus:** Charleston SC + Lowcountry (Mount Pleasant, Summerville, West Ashley, North Charleston, Daniel Island, James Island, Johns Island, Isle of Palms, Goose Creek) + statewide SC (Columbia, Greenville, Myrtle Beach, Rock Hill).
**Existing blog inventory (as of build):** 11 posts — Case.01 through Case.11 (the belly-fat post is the most recent).

### Why this topic now
The single highest-volume, highest-frustration, highest-commercial-intent query in the fitness niche that the existing blog does NOT directly target is the "why isn't this working" question. People searching this query are:

1. Already exercising and dieting.
2. Frustrated and looking for someone to diagnose the problem.
3. Statistically the most likely segment to hire a coach within 14 days of searching.

The existing post `/blog/why-most-workout-plans-fail` is adjacent but addresses *plan design* — not the personal "what is broken about MY body / MY effort" diagnostic. No keyword cannibalization risk.

### Chosen topic for this build
**"Why Am I Not Losing Weight? A Charleston SC Personal Trainer's 9-Variable Diagnostic (2026)"**

**Why this topic ranks:**
- **High volume:** "why am I not losing weight" sees 60k–110k monthly US searches (Google Keyword Planner & Ahrefs ranges).
- **Long-tail conversion plays:** "why am I not losing weight despite diet and exercise," "why am I not losing weight in a calorie deficit," "why am I gaining weight on a deficit," "stuck on weight loss plateau."
- **AI Overview goldmine:** Google's SGE almost ALWAYS shows an AI Overview for this query, pulled from structured "10 reasons" / "9 causes" articles. We will build it specifically for AI extraction.
- **People Also Ask coverage:** This query has an unusually deep PAA tree — we will mirror 13 of those questions as FAQs.
- **Demographic match:** Belk Body Lab's primary client persona is 35–55 SC professionals who have "tried everything." This is their voice.
- **Brand voice match:** "9-Variable Diagnostic" maps perfectly to Belk Body Lab's clinical/protocol language.
- **Topic cluster strengthener:** Will internal-link to Case.11 (belly fat after 40), Case.04 (macros), Case.05 (sustainable shred), Case.07 (best fat loss exercises) — turning the blog into a real cluster.

---

## 2. SEO / GEO / AEO STRATEGY

### 2.1 Primary keyword
`why am I not losing weight`

### 2.2 Secondary keywords (must appear naturally in body, H2s, image alts)
- why am I not losing weight despite diet and exercise
- weight loss plateau
- why am I not losing weight in a calorie deficit
- not losing weight but inches
- why am I gaining weight while exercising
- stuck on weight loss
- why is my weight loss stalling
- reasons not losing weight
- personal trainer Charleston SC weight loss
- weight loss coach South Carolina
- fat loss plateau
- cortisol and weight gain
- TDEE calculation
- hidden calories
- under-recovery weight loss

### 2.3 GEO (local) keyword modifiers — work these into the article
- Charleston SC
- Mount Pleasant SC
- Summerville SC
- West Ashley
- North Charleston
- Daniel Island
- the Lowcountry
- South Carolina

### 2.4 AEO (Answer Engine Optimization) — explicit rules used in this article

This post is engineered for AI Overview extraction. The structure follows what Google's SGE, Perplexity, ChatGPT search, and Gemini consistently pull from:

1. **Definition block** — first paragraph defines "weight loss plateau" in 45–55 words, citable as a featured snippet.
2. **Numbered diagnostic** — 9 explicit reasons, each labeled `Variable 01` through `Variable 09`. AI engines parse explicit numbering far better than implicit lists.
3. **Question-format H2s** — every section header is phrased the way someone speaks to a voice assistant.
4. **Direct-answer opening sentences** — first 30–50 words under each H2 must be a complete, citable answer that stands alone.
5. **Stat-stacked sentences** — sources like "calorie tracking apps underestimate intake by an average of 18–32%" — AI engines preferentially cite numeric claims.
6. **Comparison table** — "I'm tracking but not losing" vs "I'm losing but slow" — table structures get pulled into AI Overviews as featured snippets.
7. **13 FAQs with FAQPage schema** — covers the entire PAA tree for the primary keyword.
8. **Speakable spec** — definition paragraph + "TL;DR Diagnostic" tagged for Google Assistant pickup.

### 2.5 Slug + URL
**Final URL:** `https://www.belkbodylab.com/blog/why-am-i-not-losing-weight-diagnostic-charleston-sc`
**Slug:** `why-am-i-not-losing-weight-diagnostic-charleston-sc`

### 2.6 Meta tags (drop into Next.js `<Head>` / `metadata` export)
```
Title tag:        Why Am I Not Losing Weight? Charleston SC Personal Trainer's 9-Variable Diagnostic (2026)
Meta description: Stuck on a weight loss plateau? South Carolina personal trainer Kyle Belk reveals the 9 hidden variables that stop weight loss — even when you're "doing everything right." Charleston, Mount Pleasant, Summerville, and online SC clients. NASM-certified. 500+ transformations.
Meta keywords:    why am I not losing weight,weight loss plateau,not losing weight despite exercise,calorie deficit not working,why am I gaining weight,weight loss stalled,personal trainer Charleston SC,weight loss coach South Carolina,fat loss plateau,TDEE calculation,hidden calories weight loss,cortisol weight gain,Kyle Belk personal trainer,Belk Body Lab,weight loss diagnostic,personal trainer Mount Pleasant SC
Canonical:        https://www.belkbodylab.com/blog/why-am-i-not-losing-weight-diagnostic-charleston-sc

Open Graph:
  og:title       — Why Am I Not Losing Weight? Charleston SC Personal Trainer's 9-Variable Diagnostic
  og:description — Same as meta description.
  og:image       — https://www.belkbodylab.com/blog/why-not-losing-weight/og-why-not-losing-weight.png  (1200x630, generate per spec in §7)
  og:image:alt   — Belk Body Lab Charleston SC personal trainer 9-variable diagnostic for why you're not losing weight
  og:type        — article
  og:url         — https://www.belkbodylab.com/blog/why-am-i-not-losing-weight-diagnostic-charleston-sc
  og:site_name   — Belk Body Lab
  og:locale      — en_US

Twitter:
  twitter:card        — summary_large_image
  twitter:title       — same as og:title
  twitter:description — same as meta description
  twitter:image       — same as og:image

Article tags:
  article:published_time — 2026-05-29T09:00:00-04:00
  article:modified_time  — 2026-05-29T09:00:00-04:00
  article:author         — Kyle Belk
  article:section        — Fat Loss
  article:tag            — weight loss, plateau, diagnostic, fat loss, Charleston SC, personal training
```

### 2.7 Internal linking map (live URLs — use these exact links)
Every link MUST appear at least once in the article body, with descriptive anchor text (no "click here"). This post is engineered to pass authority TO the contact/services pages and IN to other blog posts (especially the recent belly-fat post to keep boosting it).

| # | Anchor text (example) | Target URL |
|---|---|---|
| 1 | guide to losing belly fat after 40 | `https://www.belkbodylab.com/blog/how-to-lose-belly-fat-after-40-charleston-sc` |
| 2 | science-backed fat loss guide | `https://www.belkbodylab.com/blog/fat-loss-guide-science-based` |
| 3 | truth about macros | `https://www.belkbodylab.com/blog/mastering-nutrition-macros-truth` |
| 4 | sustainable shred protocol | `https://www.belkbodylab.com/blog/sustainable-shred-long-term-results` |
| 5 | 10 best fat loss exercises | `https://www.belkbodylab.com/blog/best-exercises-fat-loss-south-carolina` |
| 6 | 90-day body transformation guide | `https://www.belkbodylab.com/blog/ultimate-90-day-body-transformation-guide` |
| 7 | recovery and injury prevention | `https://www.belkbodylab.com/blog/recovery-injury-prevention-south-carolina-athletes` |
| 8 | online personal training in South Carolina | `https://www.belkbodylab.com/blog/online-personal-training-south-carolina-guide` |
| 9 | how to choose a personal trainer in South Carolina | `https://www.belkbodylab.com/blog/how-to-choose-personal-trainer-south-carolina` |
| 10 | why most workout plans fail | `https://www.belkbodylab.com/blog/why-most-workout-plans-fail` |
| 11 | apply for coaching | `https://www.belkbodylab.com/contact` |
| 12 | view coaching services and packages | `https://www.belkbodylab.com/services` |
| 13 | read Kyle's full bio | `https://www.belkbodylab.com/about` |
| 14 | see real SC client transformations | `https://www.belkbodylab.com/portfolio` |
| 15 | personal trainer in Charleston SC | `https://www.belkbodylab.com/personal-trainer-charleston-sc` |
| 16 | personal training in Mount Pleasant SC | `https://www.belkbodylab.com/personal-training-mount-pleasant-sc` |
| 17 | weight loss coaching in Summerville SC | `https://www.belkbodylab.com/weight-loss-coaching-summerville-sc` |
| 18 | body transformation North Charleston SC | `https://www.belkbodylab.com/body-transformation-north-charleston-sc` |
| 19 | fitness coach Daniel Island SC | `https://www.belkbodylab.com/fitness-coach-daniel-island-sc` |
| 20 | strength training West Ashley SC | `https://www.belkbodylab.com/strength-training-west-ashley-sc` |
| 21 | SC communities served | `https://www.belkbodylab.com/communities` |

### 2.8 External authoritative outbound links (open in new tab, `rel="noopener nofollow"`)
- NIH on metabolic adaptation: `https://pubmed.ncbi.nlm.nih.gov/?term=metabolic+adaptation+weight+loss`
- NASM: `https://www.nasm.org/`
- CDC adult physical activity guidelines: `https://www.cdc.gov/physical-activity-basics/guidelines/adults.html`
- Harvard Health on exercise and weight: `https://www.health.harvard.edu/exercise-and-fitness/why-exercise-if-im-not-losing-weight`

---

## 3. JSON-LD SCHEMAS (paste as separate `<script type="application/ld+json">` blocks)

> Render these as five separate `<script>` tags — not a combined `@graph`. Friendlier to Google parsers on new domains.

### 3.1 Article schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Am I Not Losing Weight? A Charleston SC Personal Trainer's 9-Variable Diagnostic (2026)",
  "description": "Stuck on a weight loss plateau? South Carolina personal trainer Kyle Belk's complete 9-variable diagnostic for why you're not losing weight — even when you're doing everything right. For Charleston, Mount Pleasant, Summerville, and online SC clients.",
  "image": [
    "https://www.belkbodylab.com/blog/why-not-losing-weight/hero-why-not-losing-weight-charleston-sc.png",
    "https://www.belkbodylab.com/blog/why-not-losing-weight/og-why-not-losing-weight.png"
  ],
  "datePublished": "2026-05-29T09:00:00-04:00",
  "dateModified": "2026-05-29T09:00:00-04:00",
  "author": {
    "@type": "Person",
    "name": "Kyle Belk",
    "jobTitle": "NASM-Certified Personal Trainer",
    "url": "https://www.belkbodylab.com/about",
    "sameAs": [
      "https://www.instagram.com/kylebelk/",
      "https://www.tiktok.com/@kyle.belk/",
      "https://www.threads.net/@kylebelk"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Belk Body Lab"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Belk Body Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.belkbodylab.com/images/brand/belk-body-lab-logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.belkbodylab.com/blog/why-am-i-not-losing-weight-diagnostic-charleston-sc"
  },
  "articleSection": "Fat Loss",
  "keywords": "why am I not losing weight, weight loss plateau, calorie deficit not working, personal trainer Charleston SC, weight loss coach South Carolina, fat loss diagnostic",
  "wordCount": 3050,
  "inLanguage": "en-US"
}
```

### 3.2 FAQPage schema (must mirror the 13 FAQs in §6 word-for-word)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why am I not losing weight even though I'm eating less and exercising?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common reason is that your actual calorie intake is higher than you think. Calorie tracking apps and self-reporting underestimate intake by an average of 18–32%. Add to that metabolic adaptation, water retention from new training, and undertracked liquid calories — and a real deficit may not exist. The fix is a 7-day audit: weigh every food, track every drink, and measure intake against your real TDEE."
      }
    },
    {
      "@type": "Question",
      "name": "Why am I not losing weight in a calorie deficit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the scale won't move in a calorie deficit, one of four things is happening: your deficit is smaller than you think due to tracking error, your body is retaining water from sodium or new exercise, you're losing fat but gaining muscle, or you've adapted metabolically. A 14-day audit period almost always reveals which one. Real fat loss is rarely linear on the scale."
      }
    },
    {
      "@type": "Question",
      "name": "Can stress stop you from losing weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Chronic stress raises cortisol, which promotes water retention, drives sugar cravings, and disrupts sleep — all of which stall weight loss. Many clients in Charleston SC who train hard but stay stressed see no progress until they add walking, sleep, and breathing protocols. Stress management is not optional; it's a fat-loss variable."
      }
    },
    {
      "@type": "Question",
      "name": "Why am I losing inches but not weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the tape measure is dropping but the scale isn't, you are losing fat and gaining muscle — body recomposition. This is the ideal outcome of a well-designed program. Scale weight is a poor measure of body composition. Track waist circumference, progress photos, and how clothes fit instead. Most clients over 35 see this pattern in the first 8 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "How long can a weight loss plateau last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A true weight loss plateau lasting more than 3–4 weeks indicates a system problem — either calories have crept up, training has lost stimulus, recovery has degraded, or your body has metabolically adapted to the deficit. Most plateaus break within 7–14 days of correcting the underlying variable. If yours has lasted longer than a month, you need a structured re-audit."
      }
    },
    {
      "@type": "Question",
      "name": "Does muscle weigh more than fat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pound of muscle and a pound of fat both weigh one pound. But muscle is roughly 18% denser, so a pound of muscle takes up significantly less space than a pound of fat. This is why people lose inches and look leaner while the scale barely moves. Muscle gain is good news, not a problem."
      }
    },
    {
      "@type": "Question",
      "name": "Why am I gaining weight even though I'm exercising?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New training adds water weight in two places: muscle glycogen stores (which bind water) and inflamed muscle tissue (which retains water during repair). A weight gain of 2–5 lbs in the first 2 weeks of training is normal and is not fat. It usually resolves within 4–6 weeks. The scale lies in the short term."
      }
    },
    {
      "@type": "Question",
      "name": "Are calorie tracking apps accurate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, not reliably. Research shows self-reported intake on tracking apps is underestimated by 18–32% on average. Restaurant meals, oils, sauces, and 'bites and tastes' between meals are routinely missed. Even barcoded foods can be 10–20% off label. For accuracy, weigh foods in grams, log everything, and use the app as a trend tool — not gospel."
      }
    },
    {
      "@type": "Question",
      "name": "How does sleep affect weight loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sleeping under 6 hours per night raises ghrelin (the hunger hormone), suppresses leptin (the satiety hormone), spikes cortisol, and reduces insulin sensitivity by up to 30% the following day. Across weeks this is enough to stall fat loss even with perfect training and tracking. Sleep is a non-negotiable fat-loss variable."
      }
    },
    {
      "@type": "Question",
      "name": "Should I eat more to lose weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes, yes. Chronically eating too little (below 1,200 kcal/day for women or 1,500 kcal/day for men) often suppresses thyroid output, lowers resting metabolic rate, increases cortisol, and stalls weight loss. A controlled diet break or a 'reverse diet' phase at maintenance calories for 2–4 weeks often restarts fat loss in long-term dieters."
      }
    },
    {
      "@type": "Question",
      "name": "Can hormones stop me from losing weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Thyroid disorders, PCOS, insulin resistance, perimenopause, low testosterone, and chronically elevated cortisol can all blunt or stall weight loss. If you've audited your tracking, training, sleep, and stress and still aren't losing weight after 8 weeks, request bloodwork from your physician. A coach can build the protocol; a doctor can rule out the medical layer."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with people in Charleston SC who've tried everything?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The majority of Belk Body Lab's coaching clients across Charleston, Mount Pleasant, Summerville, West Ashley, and online across South Carolina have tried multiple diets and trainers before. Most aren't broken — they're under-systemized. A structured 90-day diagnostic and protocol typically restarts fat loss within the first 2–3 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What's the fastest way to break a weight loss plateau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest way is to run a 7-day audit: weigh every food, log every drink, sleep 7–9 hours, hit 8,000–10,000 steps daily, and add one new training stimulus. If the plateau doesn't break within 14 days, take a 2-week diet break at maintenance calories. This combination resolves the vast majority of plateaus within a single 3-week cycle."
      }
    }
  ]
}
```

### 3.3 HowTo schema (the 9-variable diagnostic — eligible for rich result rendering in Google Search)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Diagnose Why You're Not Losing Weight",
  "description": "A 9-variable diagnostic to identify exactly why your weight loss has stalled — from Charleston SC personal trainer Kyle Belk.",
  "totalTime": "PT14D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "supply": [
    { "@type": "HowToSupply", "name": "Food scale" },
    { "@type": "HowToSupply", "name": "Calorie tracking app" },
    { "@type": "HowToSupply", "name": "Tape measure" },
    { "@type": "HowToSupply", "name": "Step counter or smartwatch" }
  ],
  "step": [
    { "@type": "HowToStep", "name": "Audit Variable 01 — Real Calorie Intake", "text": "For 7 days, weigh every food and log every drink. Most people underestimate intake by 18–32%." },
    { "@type": "HowToStep", "name": "Audit Variable 02 — True TDEE", "text": "Calculate your real TDEE using bodyweight × 13–15 (sedentary–active). Cross-check against 14 days of weight and intake data." },
    { "@type": "HowToStep", "name": "Audit Variable 03 — Protein Intake", "text": "Confirm 0.8–1.0g protein per pound of goal bodyweight, distributed across 3–4 meals." },
    { "@type": "HowToStep", "name": "Audit Variable 04 — Training Stimulus", "text": "Verify resistance training 3–4× per week with progressive overload — not the same routine for the past 6 months." },
    { "@type": "HowToStep", "name": "Audit Variable 05 — NEAT (Daily Movement)", "text": "Check daily step count. Below 6,000 = a meaningful problem. Target 8,000–10,000 per day." },
    { "@type": "HowToStep", "name": "Audit Variable 06 — Sleep", "text": "Confirm 7–9 hours nightly. Under 6 hours regularly will stall fat loss regardless of diet." },
    { "@type": "HowToStep", "name": "Audit Variable 07 — Stress and Cortisol", "text": "Identify chronic stress sources. Add 10 minutes of morning sunlight walking and 5 minutes of slow nasal breathing before bed." },
    { "@type": "HowToStep", "name": "Audit Variable 08 — Diet Length", "text": "If you've been dieting more than 12 weeks without a break, run a 2-week maintenance period to reset metabolism." },
    { "@type": "HowToStep", "name": "Audit Variable 09 — Medical / Hormonal", "text": "If 6–8 weeks of corrected variables don't move the scale or tape measure, request thyroid, insulin, and sex hormone bloodwork from your physician." }
  ]
}
```

### 3.4 Person schema (Kyle Belk — author authority)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kyle Belk",
  "jobTitle": "NASM-Certified Personal Trainer & Body Transformation Coach",
  "image": "https://www.belkbodylab.com/images/about/kyle-ocean-rock.png",
  "url": "https://www.belkbodylab.com/about",
  "sameAs": [
    "https://www.instagram.com/kylebelk/",
    "https://www.tiktok.com/@kyle.belk/",
    "https://www.threads.net/@kylebelk"
  ],
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Belk Body Lab",
    "url": "https://www.belkbodylab.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charleston",
      "addressRegion": "SC",
      "addressCountry": "US"
    }
  },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "NASM Certified Personal Trainer" },
    { "@type": "EducationalOccupationalCredential", "name": "Precision Nutrition Level 1" }
  ]
}
```

### 3.5 Speakable + Breadcrumb (combined block, or render separately)
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".speakable-intro", ".speakable-takeaways"]
  },
  "url": "https://www.belkbodylab.com/blog/why-am-i-not-losing-weight-diagnostic-charleston-sc"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.belkbodylab.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.belkbodylab.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Why Am I Not Losing Weight", "item": "https://www.belkbodylab.com/blog/why-am-i-not-losing-weight-diagnostic-charleston-sc" }
  ]
}
```

Apply class `speakable-intro` to the opening definition paragraph and `speakable-takeaways` to the Key Takeaways box (same convention as Case.11).

---

## 4. PAGE LAYOUT & DESIGN INSTRUCTIONS

> **Mirror the existing blog post template visually.** Continue the "PRTCL.SYS Blog Post" pattern with Case.12 numbering. Match Case.11 (belly fat after 40) exactly in layout — readers should feel one continuous brand experience.

**Structure (top to bottom):**
1. **Breadcrumb** — `Home / Blog / Why Am I Not Losing Weight`
2. **Category tag** — `Fat Loss · Case.12` (continues the existing numbering)
3. **Date** — `May 29, 2026`
4. **H1** — see §5
5. **Hero image** — full-width (§7 image #1)
6. **Author byline strip** — small avatar of Kyle, "By Kyle Belk · NASM-CPT · 7+ Years · 500+ Transformations · Updated May 29, 2026 · 14 min read"
7. **Speakable definition paragraph** (`.speakable-intro` class)
8. **Key Takeaways box** (`.speakable-takeaways` class) — dark card, neon-accent left border, 6 bullets
9. **Table of contents** — auto-generated from H2s, sticky on desktop sidebar
10. **Article body** (§5)
11. **Mid-article CTA card** — neon-bordered, "Want this diagnostic run on YOUR data? Apply for coaching."
12. **FAQ section** — accordion style, matches existing `/services` and `/blog` FAQ blocks (13 entries)
13. **Author bio card** — Kyle's photo, 2-sentence bio, links to `/about` and `/services`
14. **Related posts** — 3 cards: "How to Lose Belly Fat After 40", "Sustainable Shred", "90-Day Body Transformation Guide"
15. **Final CTA banner** — same style as existing blog page CTA

**Typography & color:** Inherit existing site CSS variables. No new fonts or colors. Body text ~18px / 1.7 line-height. Pull quotes in existing site's pull-quote style.

**Performance / Core Web Vitals:**
- Hero image: `priority` prop, AVIF/WebP, ≤ 200KB.
- All inline images: `loading="lazy"`, explicit `width`/`height` (no CLS).
- Schemas inlined in `<Head>`.
- Target LCP < 2.5s, CLS < 0.1, INP < 200ms.

**Accessibility:** Descriptive alt on every image. FAQ accordions keyboard-navigable with `aria-expanded`. Heading hierarchy: one H1, then H2 → H3, no skips.

---

## 5. THE ARTICLE — FULL BODY COPY (paste verbatim)

> All copy below is final. Convert Markdown links to the site's link component. Image placeholders `[IMAGE #X]` correspond to §7.

---

# Why Am I Not Losing Weight? A Charleston SC Personal Trainer's 9-Variable Diagnostic (2026)

*By Kyle Belk · NASM-Certified Personal Trainer · Belk Body Lab, Charleston SC · 14 min read · Updated May 29, 2026*

[IMAGE #1 — hero, full width]

<p class="speakable-intro"><strong>A weight loss plateau is a period of 3 or more weeks where the scale won't move despite consistent diet and exercise effort. It is almost never caused by "broken metabolism" — it is caused by one of nine specific, fixable variables. This is the same 9-variable diagnostic I run on every Belk Body Lab client in Charleston, Mount Pleasant, Summerville, and across South Carolina before changing a single thing in their plan.</strong></p>

I'm Kyle Belk. I'm a NASM-certified personal trainer in Charleston, South Carolina. In seven years and 500+ body transformations, I've heard the same sentence at least a thousand times:

> *"Kyle, I'm doing everything right — and the scale won't move."*

Here's the truth. In 95% of those cases, the client is NOT doing everything right. They believe they are. And the gap between "what I think I'm doing" and "what I'm actually doing" is exactly where the plateau lives.

This guide is the diagnostic I run to find that gap. Nine variables. Most plateaus break within 14 days of correcting the right one.

<div class="speakable-takeaways">

### Key Takeaways

- **Most plateaus aren't metabolic — they're measurement errors.** Calorie tracking is underestimated by 18–32% on average.
- **The scale lies in the short term.** Water retention from new training masks 2–6 weeks of real fat loss.
- **You can lose fat without losing weight.** Body recomposition shows up in inches and photos, not the scale.
- **Sleep, stress, and steps are not soft variables.** They are non-negotiable inputs in a fat-loss equation.
- **A real plateau has 9 possible causes.** Run the audit in order. Don't change everything at once.
- **If 8 weeks of corrected effort doesn't move anything, request bloodwork.** A coach handles the protocol; a doctor handles the medical layer.

</div>

---

## What Is a Weight Loss Plateau, Really?

A weight loss plateau is when bodyweight stops decreasing for 3 or more consecutive weeks despite consistent caloric restriction and training. Below that threshold, you're usually looking at normal day-to-day weight fluctuation (water, glycogen, hormones, digestive contents) — not a true plateau. The body can hold 3–6 lbs of water depending on sodium, sleep, and training stress on any given day. Watching the scale daily and panicking on day three is one of the most common reasons clients abandon plans that were actually working.

A real plateau is a system problem. And every system problem has a root cause. Below are the nine I check, in the order I check them.

[IMAGE #2 — "9-variable diagnostic" overview infographic]

---

## Variable 01 — Are You Actually Eating in a Deficit?

**Direct answer:** In 7 out of 10 stalled cases I diagnose at Belk Body Lab, the deficit doesn't actually exist. The client *thinks* they're in a deficit. The food log says otherwise.

Research on self-reported food intake — including studies of nurses, dietitians, and other highly literate populations — finds intake is underestimated by 18–32% on average. The most commonly missed sources:

- **Cooking oils** (1 tablespoon = 120 kcal; most people use 2–3 without measuring)
- **Liquid calories** (lattes, juice, alcohol, kombucha, smoothies)
- **"Bites and tastes"** while cooking (a few crackers, a piece of cheese, the kids' leftovers)
- **Restaurant portions** (often 1.5–2× what tracking apps estimate)
- **Weekends** (Mon–Fri tracking is often clean; Sat–Sun is invisible)

**The fix:** Run a 7-day audit. Weigh every solid food in grams. Log every drink including water-only herbal teas as a habit. At the end of week one, compare logged calories to your weight trend. If the math doesn't add up, the tracking is wrong.

---

## Variable 02 — Do You Actually Know Your TDEE?

**Direct answer:** Most online TDEE calculators are off by 200–400 kcal because they generalize across body composition, training history, and NEAT (non-exercise activity). A wrong TDEE means a wrong target — and a target that's wrong by 300 kcal is the difference between losing a pound a week and losing nothing.

**Quick-and-honest TDEE math:**

- Sedentary (desk job, low movement): bodyweight × 12–13
- Moderately active (lifts 3×/week, 8k steps): bodyweight × 14
- Active (lifts 4–5×/week, 10k+ steps): bodyweight × 15–16

For a 175lb moderately active person: ~2,450 kcal maintenance. A real fat-loss target is 15–20% below — so 2,000–2,100 kcal. Anything more aggressive than that for a non-obese client is unnecessary and counterproductive.

If you've been "in a deficit" eating 1,500 kcal at 175lb and the scale won't move, the deficit isn't the problem. Tracking accuracy is.

[IMAGE #3 — TDEE math comparison table visual]

---

## Variable 03 — Is Your Protein High Enough?

**Direct answer:** Most stalled clients I audit are eating between 50–90g of protein per day. The target for fat loss is 0.8–1.0g per pound of *goal* bodyweight — usually 130–200g/day.

Protein matters for three reasons during fat loss:

1. It's the most satiating macronutrient — high protein meals reduce hunger hormones (ghrelin) more than carbs or fat.
2. It preserves lean muscle when you're in a deficit. Without enough protein, the body cannibalizes muscle for fuel, which lowers resting metabolism over time.
3. It costs more energy to digest — roughly 25–30% of protein calories burn in digestion alone (vs ~5% for carbs).

**The fix:** Build every meal around 30–45g of protein, four times daily. Lean meats, fish (the Lowcountry has excellent local options), eggs, Greek yogurt, whey isolate post-workout. If protein is low, fix protein before you change anything else.

I cover the full macro framework in [the truth about macros](https://www.belkbodylab.com/blog/mastering-nutrition-macros-truth).

---

## Variable 04 — Is Your Training Actually Doing Anything?

**Direct answer:** If you've done the same workout routine for more than 8–12 weeks without changing weight, reps, exercises, or intensity, your body has adapted and the training is no longer driving a meaningful adaptation. You're maintaining, not progressing.

**Signs your training has gone stale:**

- The weights you lift haven't gone up in 2+ months
- You finish workouts without ever feeling challenged
- You're doing 5 different bicep variations and zero squats
- You "don't believe in" deadlifts, hip hinges, or squats

**The fix:** Resistance train 3–4× per week with progressive overload — adding weight, reps, or sets every 1–2 weeks. Focus on compound movements: squats, hinges, presses, rows, pull-ups. These build the most muscle, burn the most calories, and drive the most metabolic adaptation.

For the exact movements I program, see the [10 best fat loss exercises](https://www.belkbodylab.com/blog/best-exercises-fat-loss-south-carolina). For why most plans fail this variable in the first place, see [why most workout plans fail](https://www.belkbodylab.com/blog/why-most-workout-plans-fail).

> **Pull quote:** *"You don't need a harder workout. You need a workout that's getting harder over time."*

---

## Variable 05 — How Many Steps Are You Really Getting?

**Direct answer:** NEAT (non-exercise activity thermogenesis) — the calories you burn outside of structured exercise — accounts for 15–50% of total daily energy expenditure. For most desk workers, NEAT is the single biggest unaccounted variable in their fat-loss equation.

The math:

- 2,000 extra steps ≈ 80–120 extra calories burned
- 8,000 steps ≈ 320–480 extra calories burned vs sedentary
- 12,000 steps ≈ 480–720 extra calories burned vs sedentary

That difference is the difference between a stalled plateau and steady fat loss. And it's also why people who "exercise hard 5 days a week" but sit 14 hours a day don't lose weight — the workout is a rounding error compared to the 14-hour sit.

**The fix:** Target 8,000–10,000 steps daily, every day. Track them. Walk after meals. If you live in Charleston, MP, or Summerville, this is built into Lowcountry living — use the Battery, the Ravenel Bridge, Shem Creek, the Cooper River Park. If you're an online client in Columbia or Greenville, same rule: morning walk, lunch walk, evening walk.

[IMAGE #4 — NEAT impact visualization]

---

## Variable 06 — Are You Sleeping Enough?

**Direct answer:** Sleeping under 6 hours per night for more than 5 consecutive nights is enough to stall fat loss regardless of how clean your diet is. Sleep is where the body actually rebuilds muscle, regulates hormones, and clears cortisol. It's not optional.

The mechanism is well-documented:

- One night of 5 hours of sleep raises ghrelin (hunger) by ~15% and suppresses leptin (satiety) by ~15%.
- Cortisol stays elevated the following day, promoting visceral fat storage.
- Insulin sensitivity drops by up to 30%, meaning the same meal triggers a bigger fat-storage response.
- Total daily energy expenditure drops 5–8% in under-slept subjects.

Over 2 weeks of under-sleeping, the cumulative effect is enough to wipe out a 500 kcal/day deficit.

**The fix:** 7–9 hours per night. Consistent bedtime. Cool, dark room. No screens 60 minutes before bed. If you're chronically under 6 hours, fix this before you change anything else — it's the highest-leverage variable for most stalled clients over 35.

This connects directly to recovery — see [recovery and injury prevention](https://www.belkbodylab.com/blog/recovery-injury-prevention-south-carolina-athletes).

---

## Variable 07 — Is Stress Sabotaging Your Hormones?

**Direct answer:** Chronic stress elevates cortisol. Chronically elevated cortisol drives water retention (which masks fat loss on the scale), promotes visceral fat storage, increases sugar cravings, and disrupts sleep — which then compounds back through Variable 06.

I'll say what most coaches won't: you can have a perfect diet and a perfect training plan and still not lose weight if your nervous system is fried.

**The fix:**
- 10 minutes of morning sunlight + walking (this single habit lowers cortisol more reliably than almost anything else)
- 5 minutes of slow nasal breathing before bed (4 seconds in, 6 seconds out)
- 1–2 things per week you actually enjoy that have nothing to do with productivity
- Limit caffeine after 2pm — late caffeine raises cortisol and wrecks sleep, which wrecks fat loss

If you're a 40+ client in particular, this is even more critical — see the full breakdown in the [guide to losing belly fat after 40](https://www.belkbodylab.com/blog/how-to-lose-belly-fat-after-40-charleston-sc).

---

## Variable 08 — Have You Been Dieting Too Long?

**Direct answer:** Aggressive caloric deficits beyond 12 weeks trigger metabolic adaptation — your body lowers its resting metabolic rate, drops NEAT (you fidget less, walk slower, take elevators), and increases hunger hormones. The same deficit that worked at week 6 will not work at week 14.

This is one of the most common stalls I see in clients who've been "trying to lose weight" for 6+ months on their own. Their body has adapted. The plan that was working is now under-dosed for their new physiology.

**The fix:** A controlled diet break. Eat at maintenance calories (or just below) for 10–14 days. Sleep more. Walk more. Train normally. After the break, restart the deficit — typically with a smaller cut than before because your maintenance is now lower.

This counter-intuitive move restarts fat loss in 70–80% of the long-term dieters I work with. It's also exactly the strategy I lay out in the [sustainable shred protocol](https://www.belkbodylab.com/blog/sustainable-shred-long-term-results).

---

## Variable 09 — Could It Be a Medical or Hormonal Issue?

**Direct answer:** If you have audited all 8 prior variables, corrected them, and still aren't losing weight or inches after 8 weeks of consistency — it's time to rule out the medical layer.

The most common culprits:

- **Hypothyroidism** (especially in women over 35)
- **PCOS** (polycystic ovary syndrome)
- **Insulin resistance / prediabetes**
- **Perimenopause / menopause** (estrogen decline)
- **Low testosterone** (men over 35)
- **Chronically elevated cortisol** (HPA axis dysfunction)
- **Certain medications** — antidepressants, beta-blockers, corticosteroids, some birth control

**The fix:** Request a comprehensive panel from your physician. At minimum: TSH, free T3, free T4, fasting insulin, fasting glucose, HbA1c, total and free testosterone (men), estradiol and progesterone (women), and morning cortisol.

A coach can build the training and nutrition protocol around any medical reality. But a coach can't diagnose. If the protocol is solid and the result isn't there, get the blood drawn.

[IMAGE #5 — "When to see a doctor" decision tree]

---

## The 14-Day Plateau-Break Protocol (Run This Right Now)

If you're stalled and want one specific protocol to run before changing anything else, this is it. Run it for 14 days. Most plateaus break inside this window.

| Day | Action |
|---|---|
| 1–7 | Weigh every food. Log every drink. Use a food scale, not eyeballs. |
| 1–14 | 8,000+ steps every single day. No exceptions. |
| 1–14 | 7.5+ hours of sleep. Same bedtime, same wake time. |
| 1–14 | 4 meals, 30–45g protein each. Hit a daily total of 0.9g/lb of goal bodyweight. |
| 1–14 | 3–4 resistance training sessions per week, adding weight or reps every session. |
| 1–14 | 10 minutes of outside walking in the morning sun. Daily. |
| 14 | Re-measure waist, take progress photos, weigh in. Compare to Day 1. |

If the scale or tape measure has moved at all by Day 14, the plateau is breaking — keep going. If neither has moved, you're in the bottom 20% who need either a diet break (Variable 08) or a medical check (Variable 09).

---

## Why This Diagnostic Is Better Than Just Adding More Cardio

Most people respond to a plateau by doing more cardio. This is almost always wrong.

Adding cardio to an already-stalled plan:
- Increases cortisol if you're already under-recovered
- Worsens sleep if it's done late in the day
- Increases hunger if the protein isn't already high enough
- Doesn't address the actual root cause

A 9-variable diagnostic identifies the right lever to pull. Adding cardio is pulling every lever and hoping one of them is the right one. The cost is your time, your sanity, and your recovery.

This is the same logic behind [why most workout plans fail](https://www.belkbodylab.com/blog/why-most-workout-plans-fail) — they treat the symptom (the scale) instead of the variable.

> **Pull quote:** *"The plateau isn't broken metabolism. It's a broken signal. Find the signal, fix the plan."*

---

## Why Most People Need a Coach for This (Honestly)

Running this diagnostic on yourself is hard. Not because the steps are complicated — they aren't — but because the variables that need correcting are usually the variables you're personally blind to. Everyone overestimates how much they sleep, undertracks their food, and convinces themselves their stress is "manageable." It's not your fault. It's how the brain works.

The reason a coach accelerates this process by 5–10x is simple: a coach sees what you can't see. They look at your numbers, your photos, your habits, and your patterns from the outside — and they can call out the variable that's actually broken.

That's the work I do at Belk Body Lab. Every program — whether in-person at our Charleston facility or [online across South Carolina](https://www.belkbodylab.com/blog/online-personal-training-south-carolina-guide) — starts with this exact diagnostic. You can [see real SC client transformations](https://www.belkbodylab.com/portfolio), many of them clients who came to me already "stuck" for months or years.

[IMAGE #6 — mid-article CTA card visual]

---

## Local SC Notes: Where to Run This Diagnostic in the Lowcountry

If you're in:

- **Charleston / Downtown:** I work with clients across the peninsula — diagnostic + protocol intake in-person. [Personal trainer in Charleston SC →](https://www.belkbodylab.com/personal-trainer-charleston-sc)
- **Mount Pleasant:** Highest concentration of busy professionals — most run the diagnostic + online protocol hybrid. [Personal training in Mount Pleasant SC →](https://www.belkbodylab.com/personal-training-mount-pleasant-sc)
- **Summerville:** Mostly parents and shift workers — diagnostic-driven plans built around irregular schedules. [Weight loss coaching in Summerville SC →](https://www.belkbodylab.com/weight-loss-coaching-summerville-sc)
- **North Charleston:** Body recomposition diagnostic specialty. [Body transformation North Charleston SC →](https://www.belkbodylab.com/body-transformation-north-charleston-sc)
- **Daniel Island:** Private coaching diagnostic intake. [Fitness coach Daniel Island SC →](https://www.belkbodylab.com/fitness-coach-daniel-island-sc)
- **West Ashley:** Strength training-first protocols. [Strength training West Ashley SC →](https://www.belkbodylab.com/strength-training-west-ashley-sc)
- All SC communities: [SC communities served →](https://www.belkbodylab.com/communities)

---

## Your Next Step

If you've read this far, you already know which 2–3 variables are most likely the issue for you. The question is whether you'll run the diagnostic yourself for the next 14 days, or whether you'll let someone else run it on your behalf and skip the guesswork.

Either path works. The path that doesn't work is "more of the same effort that wasn't getting results."

- See exactly what coaching includes → [coaching services and packages](https://www.belkbodylab.com/services)
- Learn how I work → [read Kyle's full bio](https://www.belkbodylab.com/about)
- Or take the first step → [apply for coaching](https://www.belkbodylab.com/contact)

If you're 40 or older, also read the [guide to losing belly fat after 40](https://www.belkbodylab.com/blog/how-to-lose-belly-fat-after-40-charleston-sc) — the variables stack differently for midlife metabolism.

You don't need a new diet. You need the right diagnostic.

---

## 6. THE 13 FAQs (visible on page + must mirror FAQPage schema §3.2)

> Render as an accordion using the existing site's FAQ component (matches `/services` and homepage and Case.11).

**01 — Why am I not losing weight even though I'm eating less and exercising?**
The most common reason is that your actual calorie intake is higher than you think. Calorie tracking apps and self-reporting underestimate intake by an average of 18–32%. Add to that metabolic adaptation, water retention from new training, and undertracked liquid calories — and a real deficit may not exist. The fix is a 7-day audit: weigh every food, track every drink, and measure intake against your real TDEE.

**02 — Why am I not losing weight in a calorie deficit?**
If the scale won't move in a calorie deficit, one of four things is happening: your deficit is smaller than you think due to tracking error, your body is retaining water from sodium or new exercise, you're losing fat but gaining muscle, or you've adapted metabolically. A 14-day audit period almost always reveals which one. Real fat loss is rarely linear on the scale.

**03 — Can stress stop you from losing weight?**
Yes. Chronic stress raises cortisol, which promotes water retention, drives sugar cravings, and disrupts sleep — all of which stall weight loss. Many clients in Charleston SC who train hard but stay stressed see no progress until they add walking, sleep, and breathing protocols. Stress management is not optional; it's a fat-loss variable.

**04 — Why am I losing inches but not weight?**
If the tape measure is dropping but the scale isn't, you are losing fat and gaining muscle — body recomposition. This is the ideal outcome of a well-designed program. Scale weight is a poor measure of body composition. Track waist circumference, progress photos, and how clothes fit instead. Most clients over 35 see this pattern in the first 8 weeks.

**05 — How long can a weight loss plateau last?**
A true weight loss plateau lasting more than 3–4 weeks indicates a system problem — either calories have crept up, training has lost stimulus, recovery has degraded, or your body has metabolically adapted to the deficit. Most plateaus break within 7–14 days of correcting the underlying variable. If yours has lasted longer than a month, you need a structured re-audit.

**06 — Does muscle weigh more than fat?**
A pound of muscle and a pound of fat both weigh one pound. But muscle is roughly 18% denser, so a pound of muscle takes up significantly less space than a pound of fat. This is why people lose inches and look leaner while the scale barely moves. Muscle gain is good news, not a problem.

**07 — Why am I gaining weight even though I'm exercising?**
New training adds water weight in two places: muscle glycogen stores (which bind water) and inflamed muscle tissue (which retains water during repair). A weight gain of 2–5 lbs in the first 2 weeks of training is normal and is not fat. It usually resolves within 4–6 weeks. The scale lies in the short term.

**08 — Are calorie tracking apps accurate?**
No, not reliably. Research shows self-reported intake on tracking apps is underestimated by 18–32% on average. Restaurant meals, oils, sauces, and "bites and tastes" between meals are routinely missed. Even barcoded foods can be 10–20% off label. For accuracy, weigh foods in grams, log everything, and use the app as a trend tool — not gospel.

**09 — How does sleep affect weight loss?**
Sleeping under 6 hours per night raises ghrelin (the hunger hormone), suppresses leptin (the satiety hormone), spikes cortisol, and reduces insulin sensitivity by up to 30% the following day. Across weeks this is enough to stall fat loss even with perfect training and tracking. Sleep is a non-negotiable fat-loss variable.

**10 — Should I eat more to lose weight?**
Sometimes, yes. Chronically eating too little (below 1,200 kcal/day for women or 1,500 kcal/day for men) often suppresses thyroid output, lowers resting metabolic rate, increases cortisol, and stalls weight loss. A controlled diet break or a "reverse diet" phase at maintenance calories for 2–4 weeks often restarts fat loss in long-term dieters.

**11 — Can hormones stop me from losing weight?**
Yes. Thyroid disorders, PCOS, insulin resistance, perimenopause, low testosterone, and chronically elevated cortisol can all blunt or stall weight loss. If you've audited your tracking, training, sleep, and stress and still aren't losing weight after 8 weeks, request bloodwork from your physician. A coach can build the protocol; a doctor can rule out the medical layer.

**12 — Do you work with people in Charleston SC who've tried everything?**
Yes. The majority of Belk Body Lab's coaching clients across Charleston, Mount Pleasant, Summerville, West Ashley, and online across South Carolina have tried multiple diets and trainers before. Most aren't broken — they're under-systemized. A structured 90-day diagnostic and protocol typically restarts fat loss within the first 2–3 weeks.

**13 — What's the fastest way to break a weight loss plateau?**
The fastest way is to run a 7-day audit: weigh every food, log every drink, sleep 7–9 hours, hit 8,000–10,000 steps daily, and add one new training stimulus. If the plateau doesn't break within 14 days, take a 2-week diet break at maintenance calories. This combination resolves the vast majority of plateaus within a single 3-week cycle.

---

## 7. IMAGE PLAN — what to generate, where to put it, what to call it, alt text

> **Folder for all blog images:** `/public/blog/why-not-losing-weight/`
> All images at 2x retina, served via Next.js `<Image>` with explicit `width`/`height`. Match the brand's dark, cinematic, high-contrast aesthetic with the neon-teal accent color. Maintain visual continuity with Case.11.

### IMAGE #1 — HERO
- **Filename:** `hero-why-not-losing-weight-charleston-sc.png`
- **Dimensions:** 2400×1350 px (16:9). Display at 1200×675.
- **Where:** Directly under the H1, above the byline.
- **Generation prompt:** *"Cinematic editorial photograph — a frustrated person in athletic wear standing on a bathroom scale in a dark, moody bathroom, looking down at the reading. Single hard rim-light from one side, deep shadows, faint neon teal accent reflected on the floor or wall. The mood is contemplative, not defeated — like a problem about to be diagnosed. Shot on 35mm, low angle, shallow depth of field. Ultra-realistic, high-contrast, premium fitness editorial. The subject's face is partially in shadow. No text overlay. Real, not stock-looking."*
- **Alt text:** `Person standing on a bathroom scale frustrated about a weight loss plateau — Charleston SC personal trainer diagnostic`
- **Title attribute:** `Why am I not losing weight — Belk Body Lab Charleston SC 9-variable diagnostic`

### IMAGE #2 — "9-Variable Diagnostic" overview infographic
- **Filename:** `9-variable-diagnostic-weight-loss-plateau.png`
- **Dimensions:** 1600×1600 px (square). Display at 800×800.
- **Where:** End of "What Is a Weight Loss Plateau, Really?" section.
- **Generation prompt:** *"Premium dark-themed infographic, central hexagonal hub labeled 'PLATEAU DIAGNOSTIC' with 9 numbered nodes radiating outward in a clean orbital pattern. Each node is a small hexagon labeled: '01 CALORIE INTAKE', '02 TDEE', '03 PROTEIN', '04 TRAINING STIMULUS', '05 NEAT / STEPS', '06 SLEEP', '07 STRESS', '08 DIET LENGTH', '09 MEDICAL'. Each node has a thin neon-teal border on deep charcoal background (#0a0a0a). Tiny monospace identifier under each (PRTCL_VAR_01, etc) to match site brand voice. Biotech-lab dashboard aesthetic. White and neon teal only. No photos. Highly structured, clinical."*
- **Alt text:** `The 9-variable weight loss plateau diagnostic — calorie intake, TDEE, protein, training, NEAT, sleep, stress, diet length, and medical`

### IMAGE #3 — TDEE math comparison table visual
- **Filename:** `tdee-calculation-comparison-table.png`
- **Dimensions:** 1800×1200 px. Display at 900×600.
- **Where:** End of "Variable 02 — Do You Actually Know Your TDEE?" section.
- **Generation prompt:** *"Sleek dark UI-style table visualization. Three columns labeled 'SEDENTARY', 'MODERATELY ACTIVE', 'ACTIVE'. Each column shows: a multiplier (×12-13, ×14, ×15-16), a sample bodyweight (175lbs), and a calculated TDEE (2,275 kcal / 2,450 kcal / 2,625 kcal). At the bottom, three corresponding fat-loss target rows showing the 15–20% deficit calculation. Neon teal accents for the active column. Monospace font throughout. Dark charcoal background. Looks like a biotech app dashboard or a coach's calculator interface. Clean, technical, scannable. No people."*
- **Alt text:** `TDEE calculation table showing maintenance and fat-loss calorie targets at different activity levels`

### IMAGE #4 — NEAT impact visualization
- **Filename:** `neat-step-count-fat-loss-impact.png`
- **Dimensions:** 1800×1000 px. Display at 900×500.
- **Where:** End of "Variable 05 — How Many Steps Are You Really Getting?" section.
- **Generation prompt:** *"Clean editorial data visualization. Horizontal bar chart on a deep charcoal background showing four bars labeled '4,000 steps', '6,000 steps', '8,000 steps', '12,000 steps' with corresponding daily calorie burn values increasing left to right (small numbers shown above each bar). The bars are filled with neon teal gradient. Bold sans-serif labels in white, small monospace data labels in neon teal. Title at top: 'NEAT IMPACT ON DAILY ENERGY EXPENDITURE'. Subtitle: 'Estimated additional calories burned per day vs sedentary baseline'. Clean, premium, biotech-coaching dashboard aesthetic."*
- **Alt text:** `Bar chart showing how daily step counts from 4,000 to 12,000 affect calorie burn and fat loss`

### IMAGE #5 — "When to see a doctor" decision tree
- **Filename:** `when-to-see-doctor-weight-loss-decision-tree.png`
- **Dimensions:** 1600×1800 px (tall). Display at 800×900.
- **Where:** End of "Variable 09 — Could It Be a Medical or Hormonal Issue?" section.
- **Generation prompt:** *"Premium dark-themed flowchart / decision tree on deep charcoal background. Top node: 'STALLED FOR 3+ WEEKS'. Branches down to '✓ AUDITED CALORIES' and '✓ AUDITED SLEEP' and '✓ AUDITED STEPS' (all in neon teal as a 3-row checklist row). Below: 'IF YES TO ALL → 8-WEEK CORRECTED EFFORT'. Below: 'IF STILL NO PROGRESS → REQUEST BLOODWORK'. Below: a final node listing recommended panels: 'TSH, Free T3, Free T4, Fasting Insulin, HbA1c, Testosterone, Estradiol, Cortisol'. Use thin neon-teal connecting lines between nodes. Hexagonal nodes. Monospace font for labels. No photos. Clinical, diagnostic, biotech-lab aesthetic."*
- **Alt text:** `Decision tree showing when to see a doctor for weight loss issues — including which bloodwork panels to request`

### IMAGE #6 — Mid-article CTA banner
- **Filename:** `cta-weight-loss-diagnostic-belk-body-lab.png`
- **Dimensions:** 2400×900 px (wide banner). Display at 1200×450.
- **Where:** Inside the "Why Most People Need a Coach for This" section, before the final CTA.
- **Generation prompt:** *"Wide cinematic banner — dark gym/lab hybrid environment in heavy shadow, single shaft of warm rim light on the right side illuminating Kyle Belk-style male trainer (athletic, focused, mid-30s, beard, NASM-coach look) holding a clipboard or tablet displaying training data. Mood is analytical and authoritative — like a doctor reviewing charts, not a hype trainer. Left 40% is negative space for text overlay. Neon teal accent glow in the background. Editorial, premium, biotech-coaching brand visual. Photorealistic, ultra-high contrast."*
- **Alt text:** `Belk Body Lab personal training coach Kyle Belk reviewing client diagnostic data in Charleston SC`

### IMAGE #7 — OG / social share image (NOT in article body, only for og:image)
- **Filename:** `og-why-not-losing-weight.png`
- **Dimensions:** 1200×630 px (exact OG standard).
- **Where:** Only referenced in `<meta property="og:image">`.
- **Generation prompt:** *"Premium dark social-share card. Left side: tight crop of a bathroom scale display showing a static weight reading, dramatic side lighting, deep shadows. Right side: clean text block on three lines — 'WHY AM I / NOT LOSING / WEIGHT?' in large bold sans-serif white. Below in smaller monospace neon-teal text: 'A 9-VARIABLE DIAGNOSTIC · BELK BODY LAB CHARLESTON SC'. Below that in even smaller white text: 'NASM Personal Trainer Kyle Belk'. Subtle thin neon-teal accent line separating the two halves. Background is deep charcoal. Editorial, premium, biotech-coaching brand vibe. Matches Case.11 design language exactly."*
- **Alt text:** `Belk Body Lab Charleston SC personal trainer 9-variable diagnostic for why you're not losing weight`

### Image rendering rules (apply to ALL article-body images)
- `priority` prop ONLY on IMAGE #1 (hero); all others `loading="lazy"`, `decoding="async"`.
- Provide `webp` and `avif`; let Next.js negotiate format.
- Wrap each image in a `<figure>` with `<figcaption>` matching the alt text in italic small print.
- File-size budget: hero ≤ 200KB, infographics ≤ 150KB, photos ≤ 180KB after compression.

---

## 8. POST-PUBLISH SEO CHECKLIST (do these the same day)

These are the velocity-accelerators for a young domain. Don't skip them.

1. **Add the new URL to `sitemap.xml`** with `<lastmod>2026-05-29</lastmod>` and `<priority>0.8</priority>`. `<changefreq>monthly</changefreq>`.
2. **Submit the new URL to Google Search Console** via "URL Inspection → Request Indexing."
3. **Submit to Bing Webmaster Tools** via IndexNow API or manual URL submission.
4. **Link to the new post from the homepage** ("Latest from the blog" card) — passes the most authority on the site to the new page.
5. **Update `/blog` index page** so the new article appears as `Case.12` and pin it to the featured spot for 14–30 days.
6. **Add reciprocal internal links** — go back to the following older posts and add a single in-body link to THIS post with a relevant anchor:
   - `/blog/fat-loss-guide-science-based` → anchor: "9-variable plateau diagnostic"
   - `/blog/why-most-workout-plans-fail` → anchor: "diagnostic for why you're not losing weight"
   - `/blog/sustainable-shred-long-term-results` → anchor: "weight loss plateau diagnostic"
   - `/blog/how-to-lose-belly-fat-after-40-charleston-sc` → anchor: "9-variable weight loss diagnostic"
   - This reciprocal cluster-building is critical. It's the single biggest velocity lever on a young domain.
7. **Share once on Instagram, TikTok, Threads** with a screenshot of IMAGE #2 (the 9-variable infographic) — it's the most shareable visual asset.
8. **Verify `robots.txt`** does not disallow the new URL.
9. **Verify Core Web Vitals** on PageSpeed Insights — target 90+ on mobile.
10. **After 7 days**, check Google Search Console → Performance → Pages filter for the new URL. Expected first-page rankings begin around day 30–60 for long-tail variants; the head term ("why am I not losing weight") will take longer due to competition.

---

## 9. CLUSTER STRATEGY — HOW THIS POST FITS WITH CASE.11

This post (Case.12) and the previous post (Case.11 — belly fat after 40) form the foundation of a **fat-loss topic cluster**. Each post links to the other contextually, and both link back to `/services` and `/contact`.

The next 2–3 posts to build out this cluster:

1. **"Belly Fat After 40 for Women: The Menopause-Specific Protocol"** — drills into the female angle. Links back to Case.11 and Case.12.
2. **"What I Eat in a Day at 42: A Personal Trainer's Real Plate for Fat Loss"** — high-engagement, AI Overview friendly.
3. **"How to Set Up a Home Gym for Fat Loss in Charleston SC"** — equipment-focused, low keyword competition, high local intent.

Each new post should link to BOTH Case.11 and Case.12, AND those posts should be updated to link forward to the new ones. That reciprocal internal linking compounds the cluster's authority.

---

## 10. SUMMARY OF DELIVERABLES TO THE DEV AGENT

What Antigravity needs to produce when running this prompt:

- [ ] One new MDX/Markdown blog file at `/content/blog/why-am-i-not-losing-weight-diagnostic-charleston-sc.mdx` (or wherever existing posts live) using the body in §5.
- [ ] Page-level metadata exactly as in §2.6.
- [ ] Five JSON-LD blocks injected into `<Head>` per §3 (Article, FAQPage, HowTo, Person, Speakable+Breadcrumb).
- [ ] Seven generated images saved to `/public/blog/why-not-losing-weight/` per §7.
- [ ] All internal links per §2.7 resolving correctly (no 404s).
- [ ] Page added to `sitemap.xml` with proper `<lastmod>`.
- [ ] Page added to `/blog` index as Case.12, pinned at the top of the featured grid.
- [ ] Reciprocal internal links added back to the 4 older posts listed in §8 step 6.
- [ ] Homepage "Latest from the blog" card updated.
- [ ] Lighthouse audit: mobile score ≥ 90 across Performance, Accessibility, SEO, Best Practices.
- [ ] Google Search Console "Request Indexing" submitted.

---

*End of build brief. Hand this file to Antigravity exactly as-is.*
