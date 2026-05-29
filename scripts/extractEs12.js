const fs = require('fs');
const content = fs.readFileSync('post12-dump.txt', 'utf8');

// Match from <p><em>Por Kyle Belk to the FIRST </p>",\n
const regex = /(<p><em>Por Kyle Belk(?:[\s\S]*?)<\/p>)",\\n/g;
const match = regex.exec(content);
if (match) {
  fs.writeFileSync('es-post12.txt', match[1]);
  console.log('Saved es-post12.txt');
} else {
  console.log('Could not parse post 12');
}
