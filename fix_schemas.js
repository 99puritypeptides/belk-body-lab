const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'data', 'blog', 'posts.ts');
let content = fs.readFileSync(file, 'utf8');

const speakableJson = ,
        \{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".speakable-intro", ".speakable-takeaways"]
  }
}\`;

// We will add speakable to the 3 new posts' customSchemas array if it's missing
const slugs = [
  'strength-training-for-women-beginners-guide',
  'calorie-deficit-meal-plan',
  'walking-for-weight-loss-steps-guide'
];

slugs.forEach(slug => {
  // Find the exact block for customSchemas for this slug by splitting and replacing...
  // Actually simpler: just find the wordCount and inLanguage end block for each.
});

// Since the user said the schemas reference them, maybe they are already there?
// Let's check if the file contains SpeakableSpecification for these 3
console.log('strength:', content.includes('strength-training-for-women-beginners-guide') && content.split('strength-training-for-women-beginners-guide')[1].substring(0, 5000).includes('SpeakableSpecification'));

