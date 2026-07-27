
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'data', 'blog', 'posts.ts');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/date:\s*['"]([^'"]+)['"]/g, (match, p1) => {
    const d = new Date(p1);
    const iso = d.toISOString().split('T')[0];
    return match + ',\n    isoDate: \'' + iso + '\'';
});
fs.writeFileSync(file, content);
console.log('Fixed dates in posts.ts');

