const fs = require('fs');

const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');

function extractPost(id) {
    const start = content.indexOf(`id: "${id}"`);
    const esStart = content.indexOf('es: {', start);
    const end = content.indexOf('customSchemas', esStart);
    
    // We want the `en: { ... }` block
    const enStart = content.indexOf('en: {', start);
    const enEnd = content.indexOf('es: {', enStart);
    
    console.log(`\n\n--- POST ${id} EN ---`);
    console.log(content.substring(enStart, enEnd));
}

extractPost('12');
extractPost('14');
