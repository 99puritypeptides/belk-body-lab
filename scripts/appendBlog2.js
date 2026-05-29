const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const promptPath = path.join(__dirname, '../belk-body-lab-blog-prompt-2.md');
const postsPath = path.join(__dirname, '../src/data/blog/posts.ts');

const promptText = fs.readFileSync(promptPath, 'utf8');

const slug = 'why-am-i-not-losing-weight-diagnostic-charleston-sc';
const titleMatch = promptText.match(/Title tag:\s+(.*)/);
const descMatch = promptText.match(/Meta description:\s+(.*)/);

const bodyMatch = promptText.match(/## 5\. THE ARTICLE — FULL BODY COPY \(paste verbatim\)[\s\S]*?---\s*([\s\S]*?)\s*---\s*## 6\. THE 13 FAQs/);
let bodyMarkdown = bodyMatch ? bodyMatch[1].trim() : '';

// Parse FAQs from the FAQPage schema json
const faqSchemaMatch = promptText.match(/### 3\.2 FAQPage schema[\s\S]*?```json\s*([\s\S]*?)\s*```/);
let faqs = [];
if (faqSchemaMatch) {
  const faqSchema = JSON.parse(faqSchemaMatch[1]);
  faqs = faqSchema.mainEntity.map(q => ({
    q: q.name,
    a: q.acceptedAnswer.text
  }));
}

// Parse custom schemas
const schemas = [];
const schemaRegex = /```json\s*(\{[\s\S]*?\})\s*```/g;
let m;
while ((m = schemaRegex.exec(promptText)) !== null) {
  schemas.push(m[1].trim());
}

// Replace Image placeholders in body markdown
bodyMarkdown = bodyMarkdown.replace(/\[IMAGE #1.*?\]/g, '<figure class="my-12"><img src="/blog/why-not-losing-weight/hero-why-not-losing-weight-charleston-sc.png" alt="Person standing on a bathroom scale frustrated about a weight loss plateau — Charleston SC personal trainer diagnostic" class="w-full rounded-[2rem] border border-white/10" priority="true" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Person standing on a bathroom scale frustrated about a weight loss plateau — Charleston SC personal trainer diagnostic</figcaption></figure>');

bodyMarkdown = bodyMarkdown.replace(/\[IMAGE #2.*?\]/g, '<figure class="my-12"><img src="/blog/why-not-losing-weight/9-variable-diagnostic-weight-loss-plateau.png" alt="The 9-variable weight loss plateau diagnostic — calorie intake, TDEE, protein, training, NEAT, sleep, stress, diet length, and medical" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">The 9-variable weight loss plateau diagnostic — calorie intake, TDEE, protein, training, NEAT, sleep, stress, diet length, and medical</figcaption></figure>');

bodyMarkdown = bodyMarkdown.replace(/\[IMAGE #3.*?\]/g, '<figure class="my-12"><img src="/blog/why-not-losing-weight/tdee-calculation-comparison-table.png" alt="TDEE calculation table showing maintenance and fat-loss calorie targets at different activity levels" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">TDEE calculation table showing maintenance and fat-loss calorie targets at different activity levels</figcaption></figure>');

bodyMarkdown = bodyMarkdown.replace(/\[IMAGE #4.*?\]/g, '<figure class="my-12"><img src="/blog/why-not-losing-weight/neat-step-count-fat-loss-impact.png" alt="Bar chart showing how daily step counts from 4,000 to 12,000 affect calorie burn and fat loss" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Bar chart showing how daily step counts from 4,000 to 12,000 affect calorie burn and fat loss</figcaption></figure>');

bodyMarkdown = bodyMarkdown.replace(/\[IMAGE #5.*?\]/g, '<figure class="my-12"><img src="/blog/why-not-losing-weight/when-to-see-doctor-weight-loss-decision-tree.png" alt="Decision tree showing when to see a doctor for weight loss issues — including which bloodwork panels to request" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Decision tree showing when to see a doctor for weight loss issues — including which bloodwork panels to request</figcaption></figure>');

bodyMarkdown = bodyMarkdown.replace(/\[IMAGE #6.*?\]/g, '<figure class="my-12"><img src="/blog/why-not-losing-weight/cta-weight-loss-diagnostic-belk-body-lab.png" alt="Belk Body Lab personal training coach Kyle Belk reviewing client diagnostic data in Charleston SC" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Belk Body Lab personal training coach Kyle Belk reviewing client diagnostic data in Charleston SC</figcaption></figure>');

let htmlBody = marked.parse(bodyMarkdown);
// Clean up markdown artifacts
htmlBody = htmlBody.replace(/\{:target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;\}/g, '');
htmlBody = htmlBody.replace(/\{:target=&quot;_blank&quot;\}/g, '');

const postObj = {
  id: '12',
  slug: slug,
  category: 'Fat Loss',
  date: 'May 29, 2026',
  readTime: '14 min read',
  image: '/blog/why-not-losing-weight/hero-why-not-losing-weight-charleston-sc.png',
  en: {
    title: titleMatch[1],
    excerpt: descMatch[1].substring(0, 160) + '...',
    metaTitle: titleMatch[1],
    metaDescription: descMatch[1],
    content: htmlBody,
    faqs: faqs,
    customSchemas: schemas
  },
  es: {
    title: titleMatch[1] + ' (ES)',
    excerpt: descMatch[1].substring(0, 160) + '... (ES)',
    metaTitle: titleMatch[1] + ' (ES)',
    metaDescription: descMatch[1] + ' (ES)',
    content: htmlBody,
    faqs: faqs.map(f => ({ q: f.q + ' (ES)', a: f.a + ' (ES)' })),
    customSchemas: schemas
  }
};

let postStr = JSON.stringify(postObj, null, 2);

let postsFile = fs.readFileSync(postsPath, 'utf8');
const lastIndex = postsFile.lastIndexOf('];');
if (lastIndex !== -1) {
  postsFile = postsFile.substring(0, lastIndex) + '  ,\n' + postStr + '\n];\n';
}
fs.writeFileSync(postsPath, postsFile);
console.log('Successfully appended Post #12 to posts.ts');
