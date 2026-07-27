const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');
let content = fs.readFileSync(postsPath, 'utf8');

// Replace image for post 6
content = content.replace(
  /id: '6',[\s\S]*?image: '.*?'.*?,/g,
  (match) => match.replace(/image: '.*?'/, "image: '/blog_best_exercises.png'")
);

// Replace image for post 7
content = content.replace(
  /id: '7',[\s\S]*?image: '.*?'.*?,/g,
  (match) => match.replace(/image: '.*?'/, "image: '/blog_online_training.png'")
);

// Replace image for post 8
content = content.replace(
  /id: '8',[\s\S]*?image: '.*?'.*?,/g,
  (match) => match.replace(/image: '.*?'/, "image: '/blog_recovery_injury.png'")
);

// Replace image for post 9
content = content.replace(
  /id: '9',[\s\S]*?image: '.*?'.*?,/g,
  (match) => match.replace(/image: '.*?'/, "image: '/blog_ninety_day.png'")
);

// Replace image for post 10
content = content.replace(
  /id: '10',[\s\S]*?image: '.*?'.*?,/g,
  (match) => match.replace(/image: '.*?'/, "image: '/blog_nutrition_macros.png'")
);

fs.writeFileSync(postsPath, content);
console.log('Successfully updated images in posts.ts');
