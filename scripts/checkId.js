const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const regex = /id:\s*["']?(\d+)["']?/g;
let match;
let maxId = 0;
while ((match = regex.exec(content)) !== null) {
  const id = parseInt(match[1], 10);
  if (id > maxId) maxId = id;
}
console.log('Max ID is:', maxId);
