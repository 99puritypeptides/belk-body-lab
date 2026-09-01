// Slugs of blog posts that exist only in English (no `es` translation in
// src/data/blog/posts.ts). Kept as a small, standalone module — separate from
// the full `blogPosts` array — so middleware (which runs on the Edge runtime)
// can check it without bundling every post's full HTML content.
//
// IMPORTANT: when adding a new English-only post to posts.ts (one with no
// `es` key), add its slug here too, or its /es/blog/<slug> URL will silently
// serve duplicate English content instead of redirecting.
export const ENGLISH_ONLY_SLUGS = new Set<string>([
  'tesamorelin-visceral-fat-after-40',
  'peptides-banned-wada-2026',
  'longevity-training-over-40',
  'small-group-vs-one-on-one-personal-training-charleston',
  'whoop-recovery-score-oura-readiness-training-guide',
  'september-fitness-reset-charleston-sc',
  'personal-trainer-cost-aiken-sc',
  'personal-trainer-cost-johnston-sc',
  'training-for-stress-and-sleep-charleston',
  'personal-trainer-cost-summerville-vs-north-charleston',
  'personal-training-packages-pricing-sheet',
  'how-much-to-charge-for-personal-training',
  'personal-trainer-myrtle-beach-sc',
  'personal-trainer-and-nutritionist-cost',
  'natural-bodybuilding-contest-prep-16-week-timeline',
  'lean-bulk-vs-dirty-bulk',
  'old-school-vs-modern-bodybuilding',
  'creatine-for-women',
  'do-you-need-pre-workout',
  'whey-vs-plant-based-protein',
]);
