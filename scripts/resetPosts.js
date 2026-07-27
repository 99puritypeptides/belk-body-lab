const fs = require('fs');
const path = require('path');
const postsFilePath = path.join(__dirname, '..', 'src', 'data', 'blog', 'posts.ts');
let postsContent = fs.readFileSync(postsFilePath, 'utf8');

const id25Index = postsContent.indexOf('id: "25"');
if (id25Index !== -1) {
  const startOfObject = postsContent.lastIndexOf('{', id25Index);
  let cleaned = postsContent.substring(0, startOfObject).trimEnd();
  if (cleaned.endsWith(',')) {
      cleaned = cleaned.substring(0, cleaned.length - 1).trimEnd();
  }
  cleaned += '\n];\n';
  fs.writeFileSync(postsFilePath, cleaned);
  console.log("Successfully truncated posts.ts to before Post 25");
} else {
  console.log("Post 25 not found.");
}
