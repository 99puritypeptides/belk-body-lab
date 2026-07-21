# Image Prompts — 2 New Blog Posts

For each image: Gemini prompt, destination file path, alt text (already baked into the HTML — must match), and placement. Site aesthetic: near-black background (#050505), single accent green, moody/cinematic editorial photography — not bright gym stock photos. All images should read as **premium editorial/documentary photography**, not illustration, not stock-photo cheese, no visible human faces (keeps it evergreen and avoids model-release issues).

---

## POST 1: BPC-157 & TB-500 for Gym Injuries

### 1. Hero image
**File:** `public/images/blog/bpc-157-tb-500-gym-injuries/hero-bpc157-tb500.webp` (also reuse/crop for `public/blog/bpc-157-tb-500-gym-injuries/og-bpc157-tb500.png`, 1200×630)
**Alt text (must match exactly):** "Close-up of a frayed athletic rope being carefully rewoven, a visual metaphor for tissue repair and recovery"

**Prompt:**
> Macro editorial photograph of a thick, frayed climbing/athletic rope where the torn fibers are being carefully rewoven back together by unseen hands, shot in extreme close-up. Dramatic single-source side lighting on a near-black background, deep shadows, subtle warm rim light on the rope fibers. Muted, desaturated color palette — mostly black, charcoal, and warm amber rope tones, with one small accent of dark forest green in the out-of-focus background. Shallow depth of field, cinematic, documentary-style macro photography, shot on a full-frame camera with an 100mm macro lens, f/2.8. No text, no logos, no human faces. Aspect ratio 1:1.

---

### 2. "Legal status" section image
**File:** `public/images/blog/bpc-157-tb-500-gym-injuries/research-vials-legal-status.webp`
**Alt text:** "Labeled research-use-only glass vials arranged on a laboratory shelf with soft, clinical lighting"

**Prompt:**
> Editorial still-life photograph of several small amber and clear glass laboratory vials with blank white labels, arranged in a neat row on a dark steel laboratory shelf. Soft, cool clinical lighting from above, shallow depth of field with the front vial in sharp focus and the rest softly blurred. Background is dark and out of focus, almost black, giving the shelf a sense of quiet authority rather than a bright pharmacy look. Color palette: cool grays, blacks, and pale amber glass, no green accent needed here. Photographed like a high-end pharmaceutical editorial photo, not a stock photo — moody, precise, slightly clinical-noir. No visible text on labels, no human hands, no logos. Aspect ratio 1:1.

---

### 3. "Trainer's injury-recovery framework" section image
**File:** `public/images/blog/bpc-157-tb-500-gym-injuries/recovery-framework-mobility.webp`
**Alt text:** "A resistance band anchored to a squat rack mid-stretch, representing structured mobility and rehab work"

**Prompt:**
> Close-up editorial photograph of a black fabric resistance band anchored to a matte-black squat rack, captured mid-stretch so the band shows tension and slight motion blur at its far end. Dark, moody gym environment blurred into near-black in the background, single dramatic side light catching the texture of the band and the rack's knurled metal. No people visible in frame — just the equipment and implied motion. Color palette: black, charcoal, with a single subtle accent-green highlight (like a small strip of green tape or a green carabiner) to tie into the site's brand color. Shot like a premium fitness-brand editorial campaign image, not a generic gym stock photo. Aspect ratio 1:1.

---

## POST 2: Peptides vs. Steroids for Bodybuilders

### 4. Hero image
**File:** `public/images/blog/peptides-vs-steroids-bodybuilding/hero-fork-in-road.webp` (also crop for `public/blog/peptides-vs-steroids-bodybuilding/og-peptides-vs-steroids.png`, 1200×630)
**Alt text:** "A literal fork in a gravel road splitting in two directions under dramatic evening light, symbolizing a bodybuilder's decision point"

**Prompt:**
> Wide editorial landscape photograph of a gravel and dirt road splitting into two diverging paths in an open, slightly moody rural landscape at dusk. Dramatic low-angle evening light casting long shadows down both paths, overcast or heavily backlit sky in muted grays and deep blues, almost no color saturation except a faint warm light on the horizon. The composition is symmetrical, camera low to the ground right at the fork, emphasizing the decision point. No people, no signage, no text. Cinematic, slightly melancholic documentary-landscape photography style, similar to a National Geographic editorial spread. Aspect ratio 1:1 (crop wide landscape into a square composition, keeping the fork centered).

---

### 5. "How each category is actually used" / comparison section image
**File:** `public/images/blog/peptides-vs-steroids-bodybuilding/chessboard-decision.webp`
**Alt text:** "A minimalist chessboard with two opposing pieces facing off, symbolizing a strategic decision between two paths"

**Prompt:**
> Minimalist macro photograph of a black marble chessboard with only two pieces on it — a black king and a white king — facing each other at close range, rest of the board empty and out of focus. Single dramatic overhead spotlight creating strong shadows, near-black background fading to nothing. Color palette: black, white, cool gray stone textures, no warm tones. Shot like a luxury editorial still-life (similar to a high-end strategy/finance magazine spread), not a toy or plastic chess set — real stone or marble material texture. No text, no hands, no logos. Aspect ratio 1:1.

---

### 6. "Cost comparison" section image
**File:** `public/images/blog/peptides-vs-steroids-bodybuilding/scale-vial-cash.webp`
**Alt text:** "An old brass balance scale weighing a small glass vial on one side against folded cash on the other"

**Prompt:**
> Editorial still-life photograph of an antique brass balance scale on a dark wooden table, with a single small glass medicine vial resting in one brass pan and a neatly folded stack of US dollar bills in the other pan, the scale slightly tilted showing an active comparison. Warm, single-source dramatic side lighting (like an old-world apothecary or a finance-noir photo), deep black background falling into shadow. Color palette: warm brass, dark wood browns, deep black, small hit of green from the currency. Shallow depth of field, shot like a high-end editorial photo for a finance or health-economics magazine. No visible text/denominations on the cash, no hands, no logos. Aspect ratio 1:1.

---

## General notes for generation
- Keep every image **photorealistic** (not illustration/3D render/cartoon) to match the rest of the site's photography.
- Keep the **near-black background** consistent across all 6 images so they sit well against the site's dark theme (`#050505`).
- Avoid any readable text, logos, or brand names appearing inside the generated images (labels should be blank/illegible) to avoid implying real-brand association.
- Export as `.webp` for the 6 in-content images (compress to reasonable web size), and separately export/crop a 1200×630 `.png` version of each post's hero for the two `og-*.png` Open Graph images.
