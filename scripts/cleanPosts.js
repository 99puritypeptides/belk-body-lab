const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');
let postsFile = fs.readFileSync(postsPath, 'utf8');

// Find the first occurrence of Post 12, regardless of quotes
const id12Regex = /\{\s*"?id"?:\s*"12"/;
const match = postsFile.match(id12Regex);

if (match) {
  const index = match.index;
  // Find the comma before this object
  const commaIndex = postsFile.lastIndexOf(',', index);
  if (commaIndex !== -1) {
    postsFile = postsFile.substring(0, commaIndex) + '\n];\n';
    fs.writeFileSync(postsPath, postsFile);
    console.log('Successfully truncated posts.ts before Post 12');
  }
} else {
  console.log('Post 12 not found');
}
