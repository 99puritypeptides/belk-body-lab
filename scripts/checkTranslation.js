const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const start = content.indexOf('id: "1"');
console.log(content.substring(start, start + 3000));
