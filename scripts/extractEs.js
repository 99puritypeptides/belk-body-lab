const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');

const regex = /(<p><em>Por Kyle Belk(?:[\s\S]*?)<\/p>)",\\n<p class=\\"speakable-intro\\">/g;
let match;
let i = 11;
while ((match = regex.exec(content)) !== null) {
  fs.writeFileSync('es-post' + i + '.txt', match[1]);
  console.log('Saved es-post' + i + '.txt');
  i++;
}
