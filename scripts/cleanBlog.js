const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');

let postsFile = fs.readFileSync(postsPath, 'utf8');

// The markdown parser left attributes inside the text like: `</a>{:target="_blank" rel="noopener nofollow"}` or similar.
// Wait, actually `marked` renders `[text](url){:target="_blank"}` as `<a href="url">text</a>{:target="_blank"}` because it treats the `{...}` as plain text that follows the link.
// We need to move the attributes into the <a> tag and remove the trailing {...}.
// The regex to match is: `<a href="([^"]+)">(.*?)<\/a>\{:([^}]+)\}`
// Then we replace it with: `<a href="$1" $3>$2</a>`

const regex = /<a href="([^"]+)"( class="[^"]+")?>(.*?)<\/a>\{:([^}]+)\}/g;
postsFile = postsFile.replace(regex, '<a href="$1" $2 $4>$3</a>');

// Also, in some cases it might have been inside the <a> tag? No, it's plain text after the <a> tag.
// If it was just literal text `{:target="_blank" rel="noopener nofollow"}`, we can just strip it and ensure the link before it has the target.
postsFile = postsFile.replace(/\{:target="_blank" rel="noopener nofollow"\}/g, '');
postsFile = postsFile.replace(/\{:target="_blank"\}/g, '');

// Also fix ALL uppercase headings in the HTML. 
// "WHY IS BELLY FAT SO HARD TO LOSE AFTER 40?" -> Sentence case or just keep as is, but we will fix the CSS instead of modifying the text.

fs.writeFileSync(postsPath, postsFile);
console.log('Successfully cleaned up Markdown artifacts in posts.ts');
