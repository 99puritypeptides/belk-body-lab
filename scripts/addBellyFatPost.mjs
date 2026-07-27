import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'src', 'data', 'blog', 'posts.ts');
const mdFilePath = path.join(process.cwd(), 'how-to-lose-belly-fat-south-carolina.md');

const mdContent = fs.readFileSync(mdFilePath, 'utf8');

// 1. Extract Frontmatter
// Look for the --- that comes AFTER the HTML comment closing `-->`
const fmRegex = /-->\s*---\s*([\s\S]*?)\s*---/;
const fmMatch = mdContent.match(fmRegex);

if (!fmMatch) {
  console.error("Could not find frontmatter!");
  process.exit(1);
}

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
// Look specifically for { ... } blocks to avoid matching text instructions
const schemas = [];
const scriptRegex = /<script type="application\/ld\+json">\s*(\{[\s\S]*?\})\s*<\/script>/g;
let match;
while ((match = scriptRegex.exec(mdContent)) !== null) {
  schemas.push(match[1].trim());
}

// 3. Extract Content Body
// Look for ARTICLE BODY START and get everything below it
const bodyMatch = mdContent.match(/ARTICLE BODY START[\s\S]*?(<h1[\s\S]*)/i);
let rawBody = bodyMatch ? bodyMatch[1] : '';

if (!rawBody) {
    // fallback if marker isn't found exactly
    const splitBySchema = mdContent.split('</script>');
    rawBody = splitBySchema[splitBySchema.length - 1].trim();
}

// Strip text-only FAQs to avoid duplication with the schema component
const faqStartIdx = rawBody.indexOf("## Frequently Asked Questions");
if (faqStartIdx !== -1) {
    rawBody = rawBody.substring(0, faqStartIdx).trim();
}

import { marked } from 'marked';
const renderer = new marked.Renderer();

renderer.image = function(tokenOrHref, title, text) {
  let finalHref = typeof tokenOrHref === 'string' ? tokenOrHref : tokenOrHref.href;
  let finalTitle = typeof tokenOrHref === 'string' ? title : tokenOrHref.title;
  let finalText = typeof tokenOrHref === 'string' ? text : tokenOrHref.text;
  
  if (finalHref && !finalHref.startsWith('http') && !finalHref.startsWith('/')) {
    finalHref = '/images/blog/belly-fat/' + finalHref;
  }
  return `<figure class="my-12"><img src="${finalHref}" alt="${finalText}" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">${finalText}</figcaption></figure>`;
};

marked.setOptions({ renderer });
let htmlContent = marked.parse(rawBody);

// Optional: fix up internal links
htmlContent = htmlContent.replace(/href="\/(services|contact|about|portfolio)"/g, 'href="/$1"');

// Strip out any H1 tags from the generated HTML to prevent duplicate H1s on the page
htmlContent = htmlContent.replace(/<h1>.*?<\/h1>/gi, '');

// 4. Extract FAQs from the FAQ schema
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
  } catch(e) {
    console.log("Error parsing FAQ schema for faqs array:", e);
  }
}

// 5. Construct the post object
const postObj = {
  id: "12",
  slug: fm.slug,
  category: fm.category,
  date: "June 06, 2026",
  readTime: "12 min read",
  image: "/images/blog/belly-fat/belly-fat-guide-hero.webp",
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

// Make keys unquoted to match TypeScript standard
const keysToUnquote = ['id', 'slug', 'category', 'date', 'readTime', 'image', 'en', 'es', 'title', 'excerpt', 'metaTitle', 'metaDescription', 'content', 'faqs', 'customSchemas', 'q', 'a'];
keysToUnquote.forEach(key => {
  const regex = new RegExp(`"${key}":`, 'g');
  postStr = postStr.replace(regex, `${key}:`);
});

let postsContent = fs.readFileSync(postsFilePath, 'utf8');

// Find the start of id: "12"
const id12Start = postsContent.indexOf('  id: "12",');
if (id12Start !== -1) {
  // Find the { before id12Start
  const braceStart = postsContent.lastIndexOf('{', id12Start);
  // Find the start of id: "13"
  const id13Start = postsContent.indexOf('id: "13",');
  let braceEnd;
  
  if (id13Start !== -1) {
      // Find the } before id: "13"
      braceEnd = postsContent.lastIndexOf('}', id13Start);
      // Actually we need the } that closes post 12, which is before the , before { id: "13"
      const commaBefore13 = postsContent.lastIndexOf(',', postsContent.lastIndexOf('{', id13Start));
      braceEnd = postsContent.lastIndexOf('}', commaBefore13) + 1;
  } else {
      braceEnd = postsContent.lastIndexOf(']');
  }

  const before = postsContent.substring(0, braceStart);
  let after = postsContent.substring(braceEnd);
  
  const newPostsContent = before + postStr + after;
  fs.writeFileSync(postsFilePath, newPostsContent);
  console.log("Successfully replaced blog post ID 12 in posts.ts");
} else {
  console.log("Could not find blog post ID 12.");
}
