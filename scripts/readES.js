const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');

function extractEs(id) {
    const start = content.indexOf(`id: '${id}'`) === -1 ? content.indexOf(`id: "${id}"`) : content.indexOf(`id: '${id}'`);
    if (start === -1) return;
    const esStart = content.indexOf('es: {', start);
    let end = content.indexOf('customSchemas:', esStart);
    if (end === -1) end = content.indexOf('  },', esStart) + 4; // fallback
    console.log(`\n\n--- POST ${id} ES ---`);
    console.log(content.substring(esStart, end));
}

extractEs('12');
extractEs('14');
