const fs = require('fs');

const fullText = fs.readFileSync('second_article.txt', 'utf8');
const articleStart = fullText.indexOf('BELK BODY LAB  /  RESEARCH GUIDES');

if (articleStart !== -1) {
    const articleContent = fullText.substring(articleStart);
    fs.writeFileSync('blogB.md', articleContent);
    console.log('Blog B extracted to blogB.md');
} else {
    console.log('Could not find start of article');
}
