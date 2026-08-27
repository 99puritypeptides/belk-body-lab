# Image Prompts — Batch 3 (4 New Blog Posts)

For each image: AI-image-generator prompt, exact destination file path, alt text (already updated in the draft HTML — must match exactly), and placement. Same visual system as prior batches: near-black background (`#050505`), single accent green, moody/cinematic **photorealistic editorial photography** — no illustration, no generic gym-stock-photo clichés, no readable text/logos in-frame, **no visible human faces or identifiable people** (the original AI-written drafts described visible people, including one labeled as Kyle Belk by name — that's been corrected here to abstract/object metaphors, consistent with how the last several posts were illustrated, and it avoids fabricating a real, named person's likeness).

The **first image listed under each post is the Hero** — reuse that same file for the post's top-level `image` / `ogImage` field in `posts.ts` (this matches the existing convention, e.g. `trainer-cost/personal-trainer-cost-charleston-hero.webp` is both the card image and the first in-content figure). No separate OG crop is needed — the site's `opengraph-image.tsx` route generates the OG image from the hero automatically.

---

## 1. Personal Training Packages & Pricing Sheet

### Hero
**File:** `public/images/blog/packages-pricing/four-week-vs-twelve-week-comparison.webp`
**Alt text:** "A single weight plate resting alone beside a fully loaded barbell further down a dark bench, visually contrasting a four-week starting point with a twelve-week result"

**Prompt:**
> Editorial macro photograph contrasting a single small weight plate resting alone on a dark bench against a fully loaded barbell with many stacked plates further down the same bench, implying a four-week starting point versus a twelve-week result. Single dramatic side light, near-black background, shallow depth of field with the near plate sharp and the loaded barbell soft-focus in the distance. Muted palette — black, steel gray, one small accent-green chalk mark on the near plate. No people, no readable text on plates. Aspect ratio 1:1.

### Inline 2
**File:** `public/images/blog/packages-pricing/twelve-week-training-block-whiteboard.webp`
**Alt text:** "A dark chalkboard marked with three bracketed training blocks in white chalk, representing a twelve-week program divided into three four-week phases"

**Prompt:**
> Editorial photograph of a matte black chalkboard with three simple bracket marks drawn in white chalk dividing the board into three equal sections, plus a small chalk arrow showing left-to-right progression — no legible numbers or words, just abstract bracket/arrow marks. Single overhead light, dust particles visible drifting in the light beam, near-black surrounding room fading to nothing. Color palette: black, chalk white, one faint accent-green chalk smudge in the corner. Shot like a premium editorial still-life, precise and quiet. No readable text. Aspect ratio 1:1.

### Inline 3
**File:** `public/images/blog/packages-pricing/semi-private-training-charleston.webp`
**Alt text:** "Three matching pairs of dumbbells arranged in a row on a dark gym floor, symbolizing a small-group semi-private training session"

**Prompt:**
> Editorial overhead photograph of three matching pairs of dumbbells arranged in a neat row on a dark rubber gym floor, evenly spaced, as if set out for a small-group session about to begin. Single dramatic overhead light, near-black floor with subtle texture, no people or equipment beyond the dumbbells in frame. Color palette: black, brushed steel, one dumbbell's grip showing a small accent-green detail. Aspect ratio 1:1.

### Inline 4
**File:** `public/images/blog/packages-pricing/reviewing-personal-training-pricing-sheet.webp`
**Alt text:** "A printed pricing sheet on a clipboard resting on a wooden table beside a pen, representing a transparent personal training pricing breakdown"

**Prompt:**
> Editorial still-life photograph of a dark clipboard holding a printed sheet with rows of blank price-line placeholders (no legible numbers or words) resting on a rustic wood table, with a simple pen placed diagonally across it and a small glass of water nearby, softly lit from one side. Deep shadows, near-black background. Color palette: black, warm wood brown, muted white paper, one faint accent-green highlight. No legible text, no hands, no faces. Aspect ratio 1:1.

---

## 2. How Much to Charge for Personal Training

### Hero
**File:** `public/images/blog/trainer-pricing/trainer-reviewing-session-rates-notebook.webp`
**Alt text:** "A pair of hands writing in a notebook beside a small calculator on a dark gym bench, representing a trainer working out session rates"

**Prompt:**
> Close-up editorial photograph of a pair of hands (no face visible) writing in an open notebook resting on a dark gym bench, a small black calculator placed beside it showing no legible numbers. Warm single-source side light, shallow depth of field, background falling into near-black. Color palette: warm skin tones, black, muted white paper, one small accent-green pen cap. No legible text or numbers, no face. Aspect ratio 1:1.

### Inline 2
**File:** `public/images/blog/trainer-pricing/coach-and-client-session-plan-review.webp`
**Alt text:** "Two printed training session plans overlapping on a dark front-desk counter, representing a coach and client reviewing a package together"

**Prompt:**
> Editorial still-life photograph of two printed sheets of paper (blank line-and-box layouts, no legible text) overlapping on a dark wood reception counter, a pen resting across them, softly lit from above. Near-black background, shallow depth of field. Color palette: black, warm wood, muted white paper, one small accent-green highlight. No people, no legible text. Aspect ratio 1:1.

### Inline 3
**File:** `public/images/blog/trainer-pricing/trainer-updating-rate-card-tablet.webp`
**Alt text:** "A pair of hands holding a tablet displaying a blank rate card in a dim, empty training studio"

**Prompt:**
> Close-up editorial photograph of a pair of hands (no face) holding a dark tablet with a plain, illegible rate-card layout on its screen, standing in a dim, empty training studio with faint gym equipment silhouettes blurred in the background. Single soft light source on the tablet screen, near-black surroundings. Color palette: black, cool screen-glow blue-white, one accent-green UI highlight on the screen. No legible text, no face. Aspect ratio 1:1.

---

## 3. Online Personal Trainer for Myrtle Beach, SC

### Hero
**File:** `public/images/blog/myrtle-beach-online/myrtle-beach-client-training-schedule.webp`
**Alt text:** "A pair of hands holding a phone displaying a workout program screen in a dim gym locker room, representing an online coaching client checking today's session"

**Prompt:**
> Close-up editorial photograph of a pair of hands (no face) holding a phone with a simple, illegible workout-app layout glowing on the screen, standing in a dim gym locker room with blurred lockers in the background. Single soft phone-glow light source, near-black surroundings. Color palette: black, cool screen-blue glow, one accent-green UI element. No legible text, no face. Aspect ratio 1:1.

### Inline 2
**File:** `public/images/blog/myrtle-beach-online/online-coaching-weekly-check-in-review.webp`
**Alt text:** "A pair of hands typing on a laptop displaying a blank weekly check-in dashboard on a dark desk"

**Prompt:**
> Editorial photograph of a pair of hands (no face) typing on a laptop keyboard, the screen showing a simple, illegible dashboard layout with a faint line-graph, on a dark wood desk. Single soft screen-glow light, near-black background falling into shadow. Color palette: black, cool screen-blue glow, one accent-green line on the graph. No legible text, no face. Aspect ratio 1:1.

### Inline 3
**File:** `public/images/blog/myrtle-beach-online/home-gym-dumbbell-session-grand-strand.webp`
**Alt text:** "A single dumbbell resting on a garage floor beside a folded towel, representing a home-gym online training session"

**Prompt:**
> Editorial photograph of a single rubber-coated dumbbell resting on a concrete garage floor beside a neatly folded towel and a water bottle, warm late-afternoon light slanting in from just out of frame. Shallow depth of field, near-black shadow areas, warm highlight on the dumbbell's metal. Color palette: warm amber light, black shadow, one small accent-green detail on the towel or bottle cap. No people, no legible text. Aspect ratio 1:1.

---

## 4. Personal Trainer and Nutritionist Cost

### Hero
**File:** `public/images/blog/trainer-nutritionist/personal-trainer-and-nutritionist-cost-charleston.webp`
**Alt text:** "A printed training plan and a printed nutrition macro sheet lying side by side on a dark table, representing combined training-and-nutrition coaching"

**Prompt:**
> Editorial still-life photograph of two printed sheets lying side by side on a dark wood table — one showing a simple abstract exercise-list layout, the other a simple abstract macro/nutrition grid — both with illegible placeholder text, a pen resting between them. Single soft side light, near-black background. Color palette: black, warm wood, muted white paper, one accent-green highlight. No people, no legible text. Aspect ratio 1:1.

### Inline 2
**File:** `public/images/blog/trainer-nutritionist/trainer-vs-nutritionist-cost-comparison.webp`
**Alt text:** "An antique brass balance scale weighing a small dumbbell on one side against an apple on the other, representing the cost trade-off between training and nutrition coaching"

**Prompt:**
> Editorial still-life photograph of an antique brass balance scale on a dark wooden table, a small metal dumbbell resting in one pan and a single apple in the other, the scale slightly tilted. Warm single-source dramatic side lighting, near-black background falling into shadow. Color palette: warm brass, dark wood, deep black, one small accent-green leaf on the apple. Shallow depth of field. No people, no legible text. Aspect ratio 1:1.

### Inline 3
**File:** `public/images/blog/trainer-nutritionist/integrated-coaching-nutrition-training.webp`
**Alt text:** "A meal-prep container resting on top of an open training log notebook on a gym bench, representing training and nutrition coaching combined into one program"

**Prompt:**
> Editorial still-life photograph of a simple glass meal-prep container (blurred, illegible contents) resting on top of an open spiral notebook with blank ruled lines, on a dark gym bench, softly side-lit. Near-black background, shallow depth of field. Color palette: black, muted white paper, warm glass reflection, one accent-green sticker or clip on the notebook. No people, no legible text. Aspect ratio 1:1.

---

## General notes for generation

- Keep every image **photorealistic** (not illustration/3D render/cartoon) to match the rest of the site's photography.
- Keep the **near-black background** consistent across all 13 images so they sit well against the site's dark theme (`#050505`).
- **No visible human faces or identifiable people in any image** — this batch corrects the original drafts, which described visible people (including one alt text that named Kyle Belk). Don't generate a face and imply it's a real, named person.
- Avoid any readable text, numbers, or logos appearing inside the generated images.
- Export as `.webp`, reasonably compressed for web (target ~70–110KB, matching existing site images like `trainer-cost/personal-trainer-cost-charleston-hero.webp`).
- Aspect ratio 1:1 (square) for every image — the site's `<figure>` markup crops to `aspect-square`.
- Once files are dropped into the exact paths above, no code changes are needed — the HTML in `docs/blogs/` already references these paths, and the Hero file doubles as each post's `image`/`ogImage` field when wired into `posts.ts`.
