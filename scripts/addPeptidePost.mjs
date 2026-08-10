import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'src', 'data', 'blog', 'posts.ts');
const mdFilePath = path.join(process.cwd(), 'peptide-reconstitution-calculator-guide.md');

const mdContent = fs.readFileSync(mdFilePath, 'utf8');

// 1. Extract Frontmatter
// Look for the --- that comes AFTER the HTML comment closing `-->` or the first --- block
let fmMatch = mdContent.match(/-->\s*---\s*([\s\S]*?)\s*---/);
if (!fmMatch) {
  // Try normal frontmatter
  fmMatch = mdContent.match(/^---\s*([\s\S]*?)\s*---/);
}

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
const schemas = [];
const scriptRegex = /<script type="application\/ld\+json">\s*(\{[\s\S]*?\})\s*<\/script>/g;
let match;
while ((match = scriptRegex.exec(mdContent)) !== null) {
  schemas.push(match[1].trim());
}

// 3. Extract Content Body
const bodyMatch = mdContent.match(/ARTICLE BODY START[\s\S]*?(<h1[\s\S]*|# [\s\S]*)/i);
let rawBody = bodyMatch ? bodyMatch[1] : '';

if (!rawBody) {
    const splitBySchema = mdContent.split('</script>');
    rawBody = splitBySchema[splitBySchema.length - 1].trim();
}

// Strip text-only FAQs to avoid duplication with the schema component if desired
// Here we'll just keep it since we want the visual FAQs too, or we can strip it.
// The trainer post stripped it:
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
  
  return `<figure class="my-12"><img src="${finalHref}" alt="${finalText}" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">${finalTitle || finalText}</figcaption></figure>`;
};

marked.setOptions({ renderer });
let htmlContent = marked.parse(rawBody);

// Strip out any H1 tags from the generated HTML to prevent duplicate H1s on the page
htmlContent = htmlContent.replace(/<h1>.*?<\/h1>/gi, '');

// 4. Extract FAQs from the FAQ schema
let faqs = [];
if (schemas.length > 0) {
  try {
    const schemaData = JSON.parse(schemas[0]);
    // Find the FAQPage graph item
    const graph = schemaData['@graph'] || [schemaData];
    const faqPage = graph.find(g => g['@type'] === 'FAQPage');
    if (faqPage && faqPage.mainEntity) {
      faqs = faqPage.mainEntity.map(qObj => ({
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
  id: "25",
  slug: fm.slug,
  category: fm.category,
  date: "July 27, 2026",
  readTime: "12 min read",
  image: "/wp-content/uploads/peptide-reconstitution-laboratory-guide.jpg",
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

// Find the end of the array
const arrayEndIndex = postsContent.lastIndexOf(']');
if (arrayEndIndex !== -1) {
  let before = postsContent.substring(0, arrayEndIndex).trimEnd();
  // Ensure we append with a comma
  if (!before.endsWith(',')) {
      before += '\n  ,';
  } else {
      before += '\n';
  }
  
  const newPostsContent = before + '\n' + postStr + '\n]\n';
  fs.writeFileSync(postsFilePath, newPostsContent);
  console.log("Successfully appended blog post ID 25 to posts.ts");
} else {
  console.log("Could not find the end of the blogPosts array.");
}
