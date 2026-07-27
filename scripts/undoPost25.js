const fs = require('fs');
const path = require('path');
const postsFilePath = path.join(__dirname, '..', 'src', 'data', 'blog', 'posts.ts');
let postsContent = fs.readFileSync(postsFilePath, 'utf8');

const id25Index = postsContent.lastIndexOf('id: "25"');
if (id25Index !== -1) {
  const startOfObject = postsContent.lastIndexOf('{', id25Index);
  postsContent = postsContent.substring(0, startOfObject).trimEnd();
  if (postsContent.endsWith(',')) {
      postsContent = postsContent.substring(0, postsContent.length - 1).trimEnd();
  }
  postsContent += '\n]\n';
  fs.writeFileSync(postsFilePath, postsContent);
  console.log("Successfully removed the last post from posts.ts");
}
