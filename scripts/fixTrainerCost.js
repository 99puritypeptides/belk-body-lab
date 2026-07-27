const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const postsFilePath = path.join(__dirname, '../src/data/blog/posts.ts');
const mdFilePath = path.join(__dirname, '../how-much-does-a-personal-trainer-cost-south-carolina.md');

const mdContent = fs.readFileSync(mdFilePath, 'utf8');

// 1. Extract Frontmatter
const fmRegex = /-->\s*---\s*([\s\S]*?)\s*---/;
const fmMatch = mdContent.match(fmRegex);
const fmLines = fmMatch[1].split('\n');
const fm = {};
fmLines.forEach(line => {
  const parts = line.split(':');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join(':').trim().replace(/^"|"$/g, '');
    fm[key] = val;
  }
});

// 2. Extract JSON-LD Schemas
const schemas = [];
const scriptRegex = /<script type="application\/ld\+json">\s*(\{[\s\S]*?\})\s*<\/script>/g;
let match;
while ((match = scriptRegex.exec(mdContent)) !== null) {
  schemas.push(match[1].trim());
}

// 3. Extract Content Body
const marker = '<!-- ============================ ARTICLE BODY START ============================ -->';
const markerIdx = mdContent.indexOf(marker);
let rawBody = mdContent.substring(markerIdx + marker.length).trim();

// Strip text-only FAQs to avoid duplication with the schema component
const faqStartIdx = rawBody.indexOf("## Frequently Asked Questions");
if (faqStartIdx !== -1) {
    rawBody = rawBody.substring(0, faqStartIdx).trim();
}

const renderer = new marked.Renderer();
renderer.image = function(tokenOrHref, title, text) {
  let finalHref = typeof tokenOrHref === 'string' ? tokenOrHref : tokenOrHref.href;
  let finalText = typeof tokenOrHref === 'string' ? text : tokenOrHref.text;
  if (finalHref && !finalHref.startsWith('http') && !finalHref.startsWith('/')) {
    finalHref = '/images/blog/trainer-cost/' + finalHref;
  }
  return `<figure class="my-12"><img src="${finalHref}" alt="${finalText}" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">${finalText}</figcaption></figure>`;
};

marked.setOptions({ renderer, gfm: true });
let htmlContent = marked.parse(rawBody);

// Optional: fix up internal links
htmlContent = htmlContent.replace(/href="\/(services|contact|about|portfolio)"/g, 'href="/$1"');

// Strip out any H1 tags from the generated HTML
htmlContent = htmlContent.replace(/<h1>.*?<\/h1>/gi, '');

// 4. Extract FAQs
let faqs = [];
if (schemas.length > 1) {
  try {
    const faqData = JSON.parse(schemas[1]);
    if (faqData.mainEntity) {
      faqs = faqData.mainEntity.map(qObj => ({
        q: qObj.name,
        a: qObj.acceptedAnswer.text
      }));
    }
  } catch(e) {}
}

// 5. Construct the post object
const postObj = {
  id: "14",
  slug: fm.slug,
  category: fm.category,
  date: "June 06, 2026",
  readTime: "12 min read",
  image: "/images/blog/trainer-cost/personal-trainer-cost-charleston-hero.webp",
  en: {
    title: fm.title,
    excerpt: fm.description,
    metaTitle: fm.ogTitle || fm.title,
    metaDescription: fm.description,
    content: htmlContent,
    faqs: faqs,
    customSchemas: schemas
  },
  es: {
    title: fm.title + " (ES)",
    excerpt: fm.description + " (ES)",
    metaTitle: fm.ogTitle + " (ES)",
    metaDescription: fm.description + " (ES)",
    content: "<em>[Spanish translation pending]</em>",
    faqs: faqs.map(f => ({ q: f.q + " (ES)", a: f.a + " (ES)" })),
    customSchemas: schemas
  }
};

let postStr = JSON.stringify(postObj, null, 2);
const keysToUnquote = ['id', 'slug', 'category', 'date', 'readTime', 'image', 'en', 'es', 'title', 'excerpt', 'metaTitle', 'metaDescription', 'content', 'faqs', 'customSchemas', 'q', 'a'];
keysToUnquote.forEach(key => {
  const regex = new RegExp(`"${key}":`, 'g');
  postStr = postStr.replace(regex, `${key}:`);
});

let postsContent = fs.readFileSync(postsFilePath, 'utf8');
const id14Start = postsContent.indexOf('  id: "14",');
if (id14Start !== -1) {
  const braceStart = postsContent.lastIndexOf('{', id14Start);
  let braceEnd = postsContent.lastIndexOf(']', id14Start) - 1; // Wait, lastIndexOf searches backwards! So it won't find the `]` after id14Start.
  braceEnd = postsContent.indexOf(']', id14Start) - 1; // This finds the array end.
  // actually, let's just find the closing }
  braceEnd = postsContent.lastIndexOf('}', postsContent.indexOf(']', id14Start)) + 1;

  const before = postsContent.substring(0, braceStart);
  const after = postsContent.substring(braceEnd);
  const newPostsContent = before + postStr + '\n' + after;
  fs.writeFileSync(postsFilePath, newPostsContent);
  console.log("Successfully replaced blog post ID 14 in posts.ts");
} else {
  console.log("Could not find blog post ID 14.");
}
