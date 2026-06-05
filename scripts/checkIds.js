const fs = require('fs');
const txt = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const matches = [...txt.matchAll(/id:\s*[\"']([^\"']+)[\"'],\s*slug:\s*[\"']([^\"']+)[\"']/g)];
console.log(matches.map(m => m[1] + ': ' + m[2]));
