const fs = require('fs');
const text = fs.readFileSync('src/data/blog/posts.ts', 'utf-8');
const id25 = text.indexOf('id: "25"');
console.log('id: "25" index:', id25);
