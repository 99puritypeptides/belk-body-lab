const fs = require('fs');
const path = require('path');

const postsFilePath = path.join(__dirname, '../src/data/blog/posts.ts');
let content = fs.readFileSync(postsFilePath, 'utf8');

// The markdown converts to HTML like: <h2 id="table-of-contents">Table of contents</h2>\n<ul>\n<li>...</li>\n</ul>
// Or perhaps <h2 id=\"table-of-contents\">Table of contents</h2>
// Let's just find "Table of contents" first
let idx = content.indexOf('Table of contents');
while (idx !== -1) {
    // Find the opening <h2 or <p> before it
    const h2Start = content.lastIndexOf('<h2', idx);
    // Find the end of the ul that comes after it
    const ulEnd = content.indexOf('</ul>', idx);
    
    if (h2Start !== -1 && ulEnd !== -1) {
        // Strip out from h2Start to ulEnd + 5
        content = content.substring(0, h2Start) + content.substring(ulEnd + 5);
        console.log("Removed a Table of Contents section!");
        idx = content.indexOf('Table of contents', h2Start); // Continue searching
    } else {
        break; // Malformed, just break
    }
}

fs.writeFileSync(postsFilePath, content);
console.log('Done.');
