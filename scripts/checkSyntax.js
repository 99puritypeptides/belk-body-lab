const fs = require('fs');
const txt = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const start = txt.indexOf('id: "14"');
const end = txt.indexOf(']', start);
console.log(txt.substring(start, end));
