const fs = require('fs');

const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');

function extractPost(id) {
    const start = content.indexOf(`id: "${id}"`);
    const enStart = content.indexOf('en: {', start);
    const enEnd = content.indexOf('es: {', enStart);
    return content.substring(enStart, enEnd);
}

fs.writeFileSync('english_posts.txt', extractPost('12') + '\n\n=============\n\n' + extractPost('14'));
