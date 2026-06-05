const fs = require('fs');

let code = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const badString = '<h2>Frequently Asked Questions</h2>';
const startIdx = code.indexOf(badString);
if (startIdx !== -1) {
    const endQuotes = code.indexOf('\`,\n      schemas:', startIdx);
    if (endQuotes !== -1) {
        code = code.substring(0, startIdx) + code.substring(endQuotes);
        fs.writeFileSync('src/data/blog/posts.ts', code);
        console.log("Removed duplicate FAQs from posts.ts");
    } else {
        console.log("Could not find end of string literal");
    }
} else {
    console.log("No duplicate FAQs found");
}
