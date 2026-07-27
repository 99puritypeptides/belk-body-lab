const fs = require('fs');
const content = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const start = content.indexOf('id: "1"');
const esStart = content.indexOf('es: {', start);
console.log(content.substring(esStart, esStart + 1000));
