const fs = require('fs');
let code = fs.readFileSync('src/data/blog/posts.ts', 'utf8');

const badStart = code.indexOf(',\n{\n  id: "12"');
if (badStart !== -1) {
  code = code.substring(0, badStart) + '\n];\n';
  fs.writeFileSync('src/data/blog/posts.ts', code);
  console.log("Truncated successfully.");
} else {
  console.log("Could not find bad entry.");
}
