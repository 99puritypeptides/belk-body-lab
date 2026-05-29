const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');
let postsFile = fs.readFileSync(postsPath, 'utf8');

// Find the index of the start of Post 12
const post12Index = postsFile.indexOf('id: "12",');
if (post12Index !== -1) {
  // Find the `{` before this
  const blockStart = postsFile.lastIndexOf('{', post12Index);
  // Find the previous `  ,`
  const commaIndex = postsFile.lastIndexOf('  ,', blockStart);
  if (commaIndex !== -1) {
    postsFile = postsFile.substring(0, commaIndex) + '\n];\n';
    fs.writeFileSync(postsPath, postsFile);
    console.log('Removed corrupted Post 12');
  }
}
