const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const start = content.lastIndexOf('id: "14"');
const snippet = content.substring(start, start + 30000);
const tableIndex = snippet.indexOf('<table');
if (tableIndex !== -1) {
    console.log(snippet.substring(tableIndex, tableIndex + 800));
} else {
    console.log('Table not found in HTML output');
}
