const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');

const idRegex = /id:\s*([0-9]+)/g;
let m;
const ids = [];
while ((m = idRegex.exec(content)) !== null) {
  ids.push(m[1]);
}

const slugRegex = /slug:\s*(['"].*?['"])/g;
const slugs = [];
while ((m = slugRegex.exec(content)) !== null) {
  slugs.push(m[1]);
}

console.log('IDs:', [...new Set(ids)].slice(-5));
console.log('Slugs:', [...new Set(slugs)].slice(-10));
