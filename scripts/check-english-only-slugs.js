// Verifies that src/data/blog/english-only-slugs.ts (the lightweight, hand-maintained
// list middleware.ts uses on the Edge runtime) exactly matches which posts in
// src/data/blog/posts.ts actually have no `es` field. These two files drifted out
// of sync twice already, which broke the /es/ redirect for English-only posts and
// caused the language switcher to error instead of redirecting.
//
// Run manually after adding/removing posts: node scripts/check-english-only-slugs.js
// Exits non-zero (and prints the missing/extra slugs) if the lists disagree.

const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '..', 'src', 'data', 'blog', 'posts.ts');
const listPath = path.join(__dirname, '..', 'src', 'data', 'blog', 'english-only-slugs.ts');

const postsSrc = fs.readFileSync(postsPath, 'utf8');
const listSrc = fs.readFileSync(listPath, 'utf8');

// Split posts.ts into per-post chunks on each top-level `id: '...'` occurrence.
const idMatches = [...postsSrc.matchAll(/\bid:\s*['"]([^'"]+)['"]/g)];
const positions = idMatches.map((m) => m.index);

const actualEnglishOnly = new Set();
for (let i = 0; i < positions.length; i++) {
  const start = positions[i];
  const end = i + 1 < positions.length ? positions[i + 1] : postsSrc.length;
  const block = postsSrc.slice(start, end);
  const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
  if (!slugMatch) continue;
  const hasEs = /\n\s*es:\s*\{/.test(block);
  if (!hasEs) actualEnglishOnly.add(slugMatch[1]);
}

// Only parse inside the Set([...]) array literal, not the comment block above it
// (which contains an apostrophe in "post's" that would otherwise throw off quote pairing).
const arrayMatch = listSrc.match(/new Set<string>\(\[([\s\S]*?)\]\)/);
if (!arrayMatch) {
  console.error('Could not find `new Set<string>([...])` in english-only-slugs.ts');
  process.exit(1);
}
const listMatches = [...arrayMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
const declaredEnglishOnly = new Set(listMatches);

const missingFromList = [...actualEnglishOnly].filter((s) => !declaredEnglishOnly.has(s));
const extraInList = [...declaredEnglishOnly].filter((s) => !actualEnglishOnly.has(s));

if (missingFromList.length === 0 && extraInList.length === 0) {
  console.log(`OK — english-only-slugs.ts matches posts.ts (${actualEnglishOnly.size} English-only posts).`);
  process.exit(0);
}

if (missingFromList.length > 0) {
  console.error('\nMissing from english-only-slugs.ts (these posts have no `es` field but are not in the list):');
  missingFromList.forEach((s) => console.error('  ' + s));
}
if (extraInList.length > 0) {
  console.error('\nStale entries in english-only-slugs.ts (these posts now DO have an `es` field):');
  extraInList.forEach((s) => console.error('  ' + s));
}
console.error('\nUpdate src/data/blog/english-only-slugs.ts to match, then re-run this check.');
process.exit(1);
