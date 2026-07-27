const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');

let postsFile = fs.readFileSync(postsPath, 'utf8');

// The quotes were HTML escaped by marked, so they look like &quot; instead of "
postsFile = postsFile.replace(/\{:target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;\}/g, '');
postsFile = postsFile.replace(/\{:target=&quot;_blank&quot;\}/g, '');

fs.writeFileSync(postsPath, postsFile);
console.log('Successfully cleaned up escaped Markdown artifacts in posts.ts');
