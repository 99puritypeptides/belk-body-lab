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
]);
