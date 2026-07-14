/**
 * Adds `aspect-square object-cover` to every inline blog <img> tag to
 * reserve layout space and prevent CLS, since all current blog images
 * are 1024x1024. Re-run the width/height check in optimize-images.js
 * if new non-square images are introduced later — this script assumes
 * a uniform 1:1 ratio for all images currently referenced in posts.ts.
 */
const fs = require('fs');

const file = 'src/data/blog/posts.ts';
let src = fs.readFileSync(file, 'utf8');

// Matches <img src="..." alt="..." class="..." ...  /> (both raw and \"-escaped forms)
const imgTagRe = /<img src=\\?"[^"\\]+\\?"[^>]*?class=\\?"([^"\\]*)\\?"[^>]*?\/>/g;

let count = 0;
src = src.replace(imgTagRe, (full, classAttr) => {
  if (classAttr.includes('aspect-square')) return full; // already done
  const newClass = `aspect-square object-cover ${classAttr}`;
  count++;
  return full.replace(classAttr, newClass);
});

fs.writeFileSync(file, src);
console.log(`Updated ${count} <img> tags with aspect-square object-cover`);
