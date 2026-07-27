const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');
let content = fs.readFileSync(postsPath, 'utf8');

// Function to clean the content string of a specific post
function cleanContent(str, markers) {
  for (const marker of markers) {
    const idx = str.indexOf(marker);
    if (idx !== -1) {
      console.log(`Found marker "${marker.substring(0, 30)}..." at index ${idx}, truncating.`);
      return str.substring(0, idx) + '";'; // We assume the string ends here. Wait, it's a JSON/TS object property.
    }
  }
  return str;
}

// But wait, the file is a TS file. It's safer to just replace everything from the marker to the end of the content string.
// The content string ends with `",\n    faqs: [`
const markersToRemove = [
  '<p>Apéndice de publicación</p>',
  '<p>A. Metadatos SEO</p>',
  '<p>Preguntas frecuentes</p>',
  '<p>Frequently asked questions</p>',
  '<p>Appendix</p>',
  '<p>A. SEO Metadata</p>',
  '<p><strong>What is a peptide calculator?</strong></p>'
];

markersToRemove.forEach(marker => {
  // We want to replace `<marker> ... \n",\n    faqs:` with `\n",\n    faqs:`
  // But regex across multiple lines is tricky.
  const regex = new RegExp(marker + '[\\s\\S]*?(?=",\\n\\s*faqs:)', 'g');
  const matches = content.match(regex);
  if (matches) {
    console.log(`Found ${matches.length} instances of marker ${marker}`);
    content = content.replace(regex, '');
  }
});

fs.writeFileSync(postsPath, content);
console.log('Done cleaning posts.ts');
