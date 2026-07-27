const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const post = content.substring(content.lastIndexOf('id: "12"'));
const matches = [...post.matchAll(/href=\\"([^\\"]+)\\"/g)].map(m => m[1]);
console.log(matches);
