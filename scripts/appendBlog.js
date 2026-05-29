const fs = require('fs');
const { marked } = require('marked');
const path = require('path');

const promptPath = path.join(__dirname, '../belk-body-lab-blog-prompt.md');
const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');

const promptText = fs.readFileSync(promptPath, 'utf8');

function extractSchema(sectionName) {
  const regex = new RegExp(`### 3\\.\\d ${sectionName}[\\s\\S]*?\\n\\s*\`\`\`json\\n([\\s\\S]*?)\\n\\s*\`\`\``);
  const match = promptText.match(regex);
  if (match) return match[1].trim();
  return null;
}

const articleSchema = extractSchema('Article schema');
const faqSchema = extractSchema('FAQPage schema');
const personSchema = extractSchema('Person schema');
const speakableSchema = extractSchema('Speakable schema');

const schemas = [];
if (articleSchema) schemas.push(articleSchema);
if (faqSchema) schemas.push(faqSchema);
if (personSchema) schemas.push(personSchema);
if (speakableSchema) schemas.push(speakableSchema);

const schemasStr = JSON.stringify(schemas);

const bodyRegex = /## 5\. THE ARTICLE — FULL BODY COPY \(paste verbatim\)[\s\S]*?---\s*([\s\S]*?)\s*---\s*## 6\. THE 12 FAQs/;
const bodyMatch = promptText.match(bodyRegex);
let mdBody = bodyMatch ? bodyMatch[1].trim() : '';

console.log("Extracted Body Length: ", mdBody.length);

const imageMap = {
  '[IMAGE #1 — hero, full width]': '', 
  '[IMAGE #2 — infographic, "Why belly fat changes after 40"]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/why-belly-fat-changes-after-40-infographic.png" alt="Infographic showing the three reasons belly fat increases after 40 — metabolic rate decline, hormone changes, and insulin resistance" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Infographic showing the three reasons belly fat increases after 40 — metabolic rate decline, hormone changes, and insulin resistance</figcaption></figure>',
  '[IMAGE #3 — Kyle coaching a 40+ client through a deadlift in a Charleston gym]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/kyle-belk-coaching-deadlift-charleston-sc.png" alt="Charleston SC personal trainer Kyle Belk coaching a male client over 40 through a barbell deadlift for belly fat loss" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Charleston SC personal trainer Kyle Belk coaching a male client over 40 through a barbell deadlift for belly fat loss</figcaption></figure>',
  '[IMAGE #4 — "5 Pillars" diagram graphic]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/5-pillars-belly-fat-loss-after-40.png" alt="The 5-pillar protocol for losing belly fat after 40 — resistance training, protein nutrition, walking, sleep, and stress management" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">The 5-pillar protocol for losing belly fat after 40 — resistance training, protein nutrition, walking, sleep, and stress management</figcaption></figure>',
  '[IMAGE #5 — weekly schedule infographic]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/weekly-schedule-belly-fat-loss-40-plus.png" alt="Sample weekly training and recovery schedule for losing belly fat after 40 from Belk Body Lab Charleston SC" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Sample weekly training and recovery schedule for losing belly fat after 40 from Belk Body Lab Charleston SC</figcaption></figure>',
  '[IMAGE #6 — mid-article CTA card visual]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/cta-belly-fat-after-40-belk-body-lab.png" alt="Belk Body Lab personal training coach Kyle Belk — apply for 90-day body transformation coaching in Charleston SC" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Belk Body Lab personal training coach Kyle Belk — apply for 90-day body transformation coaching in Charleston SC</figcaption></figure>'
};

for (const key of Object.keys(imageMap)) {
  mdBody = mdBody.split(key).join(imageMap[key]);
}

const htmlBody = marked.parse(mdBody);

const faqs = [];
const faqRegex = /\*\*(\d{2}) — (.*?)\*\*\n(.*?)(?=\n\*\*|$)/gs;
const faqSectionMatch = promptText.match(/## 6\. THE 12 FAQs[\s\S]*?(\n\*\*01.*)/s);
if (faqSectionMatch) {
  let faqText = faqSectionMatch[1].split('---')[0];
  let m;
  while ((m = faqRegex.exec(faqText)) !== null) {
    faqs.push({ q: m[2].trim(), a: m[3].trim() });
  }
}
const faqsStr = JSON.stringify(faqs);

console.log("Extracted FAQs Length: ", faqs.length);
console.log("Extracted Schemas Length: ", schemas.length);

const esHtmlBody = htmlBody.split('How to Lose Belly Fat After 40').join('Cómo Perder Grasa Abdominal Después de los 40');
const esFaqs = faqs.map(f => ({ q: f.q + ' (ES)', a: f.a + ' (ES)' }));

const postObj = {
  id: '11',
  slug: 'how-to-lose-belly-fat-after-40-charleston-sc',
  category: 'Fat Loss',
  date: 'May 28, 2026',
  readTime: '12 min read',
  image: '/blog/belly-fat-after-40/hero-belly-fat-after-40-charleston-sc.png',
  en: {
    title: "How to Lose Belly Fat After 40: A Charleston SC Personal Trainer's Complete Guide (2026)",
    excerpt: "South Carolina personal trainer Kyle Belk's complete guide to losing belly fat after 40. Science-backed training, nutrition, and hormone strategies for men and women in Charleston, Mount Pleasant, and across SC.",
    metaTitle: "How to Lose Belly Fat After 40 | Charleston SC Personal Trainer Guide (2026)",
    metaDescription: "South Carolina personal trainer Kyle Belk's complete guide to losing belly fat after 40. Science-backed training, nutrition, and hormone strategies for men and women in Charleston, Mount Pleasant, and across SC.",
    content: htmlBody,
    faqs: faqs,
    customSchemas: schemas
  },
  es: {
    title: "Cómo Perder Grasa Abdominal Después de los 40: La Guía Completa de un Entrenador Personal de Charleston SC (2026)",
    excerpt: "La guía completa del entrenador personal de Carolina del Sur Kyle Belk para perder grasa abdominal después de los 40. Estrategias de entrenamiento, nutrición y hormonas respaldadas por la ciencia.",
    metaTitle: "Cómo Perder Grasa Abdominal Después de los 40 | Guía de Entrenador Personal de Charleston SC",
    metaDescription: "La guía completa del entrenador personal de Carolina del Sur Kyle Belk para perder grasa abdominal después de los 40. Estrategias de entrenamiento, nutrición y hormonas respaldadas por la ciencia.",
    content: esHtmlBody,
    faqs: esFaqs,
    customSchemas: schemas
  }
};

let postStr = JSON.stringify(postObj, null, 2);
postStr = postStr.replace(/"id":/g, 'id:');
postStr = postStr.replace(/"slug":/g, 'slug:');
postStr = postStr.replace(/"category":/g, 'category:');
postStr = postStr.replace(/"date":/g, 'date:');
postStr = postStr.replace(/"readTime":/g, 'readTime:');
postStr = postStr.replace(/"image":/g, 'image:');
postStr = postStr.replace(/"en":/g, 'en:');
postStr = postStr.replace(/"es":/g, 'es:');
postStr = postStr.replace(/"title":/g, 'title:');
postStr = postStr.replace(/"excerpt":/g, 'excerpt:');
postStr = postStr.replace(/"metaTitle":/g, 'metaTitle:');
postStr = postStr.replace(/"metaDescription":/g, 'metaDescription:');
postStr = postStr.replace(/"content":/g, 'content:');
postStr = postStr.replace(/"faqs":/g, 'faqs:');
postStr = postStr.replace(/"customSchemas":/g, 'customSchemas:');

let postsFile = fs.readFileSync(postsPath, 'utf8');
const lastIndex = postsFile.lastIndexOf('];');
if (lastIndex !== -1) {
  postsFile = postsFile.substring(0, lastIndex) + '  ,\n' + postStr + '\n];\n';
}
fs.writeFileSync(postsPath, postsFile);
console.log('Successfully appended the new post');
