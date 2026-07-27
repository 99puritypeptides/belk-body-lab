const fs = require('fs');
const path = require('path');

const postsFilePath = path.join(__dirname, '../src/data/blog/posts.ts');
let postsFile = fs.readFileSync(postsFilePath, 'utf8');

// The FAQs in the markdown were likely under "## Frequently Asked Questions"
// In HTML, this becomes <h2 id="frequently-asked-questions">Frequently Asked Questions</h2> or similar.
// Since the FAQ is typically at the end of the post, we can just find the FAQ h2 and chop everything after it,
// up to the closing quote of the content string.
// However, posts.ts is a TS file containing an array of objects.
// Let's do a safe targeted removal:
// We look for 'content: "' or 'content: `' 
// Inside the content string, we look for '<h2' ... 'Frequently Asked Questions'

let modified = false;

// Splitting by 'id: "' to process each post separately
const postChunks = postsFile.split('id: "');

for (let i = 1; i < postChunks.length; i++) {
  let chunk = postChunks[i];
  
  // The content field is usually `content: "..."`
  // We can find the index of `<h2` followed by `Frequently Asked Questions`
  const faqIdxMatch = chunk.match(/<h2[^>]*>Frequently Asked Questions<\/h2>/i);
  
  if (faqIdxMatch) {
    const faqStart = faqIdxMatch.index;
    
    // We need to find where the content string ends.
    // The content string ends at the next `",\n    faqs: ` or similar.
    // Because it's a JSON-like string, it ends with `",\n` or `",\r\n` and then `faqs:` or `customSchemas:`
    
    // Let's just find the closing quote of the `content: "` string.
    // A simpler way: we just find the FAQ heading and replace it and everything after it until the end of the content.
    // We know the FAQ heading is followed by <p>s, <h3>s, etc.
    // So let's look for `",\n    faqs:` or `",\n    metaTitle` (wait, metaTitle is before content).
    // The safest way: find `<h2 id="frequently-asked-questions">` or `<h2>Frequently Asked Questions</h2>`.
    // Then find the NEXT `",\n    faqs:` or `",\n    customSchemas:`
    
    const endMarkers = ['",\n    faqs:', '",\r\n    faqs:', '",\n    customSchemas:', '",\r\n    customSchemas:'];
    let endIdx = -1;
    for (const marker of endMarkers) {
      const idx = chunk.indexOf(marker, faqStart);
      if (idx !== -1) {
        if (endIdx === -1 || idx < endIdx) {
          endIdx = idx;
        }
      }
    }
    
    if (endIdx !== -1) {
      // Keep everything before faqStart, and append the end marker
      chunk = chunk.substring(0, faqStart) + chunk.substring(endIdx);
      postChunks[i] = chunk;
      modified = true;
      console.log(`Removed text FAQs for post ID: ${chunk.substring(0, 2)}`);
    } else {
      console.log(`Could not find end of content string for post ID: ${chunk.substring(0, 2)}`);
    }
  }
}

if (modified) {
  const newPostsFile = postChunks.join('id: "');
  fs.writeFileSync(postsFilePath, newPostsFile);
  console.log('Successfully removed text FAQs from posts.ts');
} else {
  console.log('No text FAQs found in posts.ts');
}
