const fs = require('fs');
const oldPosts = fs.readFileSync('scripts/posts_8714031.ts', 'utf16le');
const id12Start = oldPosts.lastIndexOf('id: "12"');
if (id12Start !== -1) {
    const braceStart = oldPosts.lastIndexOf('{', id12Start);
    let postStr = oldPosts.substring(braceStart, oldPosts.lastIndexOf(']') - 1);
    
    // change id 12 to 13
    postStr = postStr.replace('id: "12"', 'id: "13"');
    
    const currentPosts = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
    const endArray = currentPosts.lastIndexOf(']');
    let newPosts = currentPosts.substring(0, endArray).trimEnd();
    if (!newPosts.endsWith(',')) {
        newPosts += '\n  ,';
    }
    newPosts += '\n' + postStr + '\n]\n';
    
    fs.writeFileSync('src/data/blog/posts.ts', newPosts);
    console.log('Restored deleted post as ID 13!');
} else {
    console.log('Could not find id 12. Length of oldPosts:', oldPosts.length);
}
