const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');
let postsFile = fs.readFileSync(postsPath, 'utf8');

// Replace <h1>...</h1> followed by optional escaped newline
const h1Regex = /<h1>.*?<\/h1>(\\n)?/g;
const newPostsFile = postsFile.replace(h1Regex, '');

if (newPostsFile !== postsFile) {
  fs.writeFileSync(postsPath, newPostsFile);
  console.log('Successfully removed h1 tags from posts.ts');
} else {
  console.log('No h1 tags found in posts.ts');
}
