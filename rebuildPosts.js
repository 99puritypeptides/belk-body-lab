const fs = require('fs');
const { marked } = require('marked');
const path = require('path');

const postsPath = path.join(__dirname, 'src/data/blog/posts.ts');

function processPost(promptPath, esMarkdownPath, postId, idNum, titleMatchRegex, descMatchRegex, bodyRegex, imageMap, date, readTime, imgPath, esTitle, esDesc) {
  const promptText = fs.readFileSync(promptPath, 'utf8');
  const esMarkdown = fs.readFileSync(esMarkdownPath, 'utf8');

  // Extract schemas
  const schemas = [];
  const schemaRegex = /```json\s*(\{[\s\S]*?\})\s*```/g;
  let m;
  while ((m = schemaRegex.exec(promptText)) !== null) {
    schemas.push(m[1].trim());
  }

  // Extract English Body
  const bodyMatch = promptText.match(bodyRegex);
  let mdBody = bodyMatch ? bodyMatch[1].trim() : '';

  // Extract FAQs
  const faqs = [];
  let faqSchemaMatch = promptText.match(/### 3\.\d FAQPage schema[\s\S]*?```json\s*([\s\S]*?)\s*```/);
  if (faqSchemaMatch) {
    const faqSchema = JSON.parse(faqSchemaMatch[1]);
    if (faqSchema.mainEntity) {
      faqSchema.mainEntity.forEach(q => {
        faqs.push({ q: q.name, a: q.acceptedAnswer.text });
      });
    }
  }

  // Replace images in EN body
  for (const key of Object.keys(imageMap)) {
    // Escape key for regex or use split/join
    mdBody = mdBody.split(key).join(imageMap[key]);
  }
  let htmlBody = marked.parse(mdBody);
  htmlBody = htmlBody.replace(/\{:target=&quot;_blank&quot; rel=&quot;noopener nofollow&quot;\}/g, '');
  htmlBody = htmlBody.replace(/\{:target=&quot;_blank&quot;\}/g, '');

  // Extract metadata
  const titleMatch = promptText.match(titleMatchRegex);
  const descMatch = promptText.match(descMatchRegex);
  const title = titleMatch ? titleMatch[1] : '';
  const desc = descMatch ? descMatch[1] : '';

  // Replace images in ES body
  let esMdBody = esMarkdown;
  for (const key of Object.keys(imageMap)) {
    esMdBody = esMdBody.split(key).join(imageMap[key]);
  }
  let esHtmlBody = marked.parse(esMdBody);

  const postObj = {
    id: String(idNum),
    slug: postId,
    category: 'Fat Loss',
    date: date,
    readTime: readTime,
    image: imgPath,
    en: {
      title: title,
      excerpt: desc.substring(0, 160) + '...',
      metaTitle: title,
      metaDescription: desc,
      content: htmlBody,
      faqs: faqs,
      customSchemas: schemas
    },
    es: {
      title: esTitle,
      excerpt: esDesc.substring(0, 160) + '...',
      metaTitle: esTitle,
      metaDescription: esDesc,
      content: esHtmlBody,
      faqs: faqs.map(f => ({ q: f.q, a: f.a })), // We won't translate FAQs deeply right now unless needed, or just append (ES)
      customSchemas: schemas
    }
  };

  let postStr = JSON.stringify(postObj, null, 2);
  // Clean up keys
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
  console.log('Appended post ' + idNum);
}

// POST 11
const imageMap11 = {
  '[IMAGE #1 — hero, full width]': '', 
  '[IMAGE #2 — infographic, "Why belly fat changes after 40"]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/why-belly-fat-changes-after-40-infographic.png" alt="Infographic showing the three reasons belly fat increases after 40 — metabolic rate decline, hormone changes, and insulin resistance" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Infographic showing the three razones por las que aumenta la grasa abdominal después de los 40</figcaption></figure>',
  '[IMAGE #3 — Kyle coaching a 40+ client through a deadlift in a Charleston gym]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/kyle-belk-coaching-deadlift-charleston-sc.png" alt="Charleston SC personal trainer Kyle Belk coaching a male client over 40 through a barbell deadlift for belly fat loss" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Entrenador personal Kyle Belk de Charleston SC instruyendo a un cliente en peso muerto</figcaption></figure>',
  '[IMAGE #4 — "5 Pillars" diagram graphic]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/5-pillars-belly-fat-loss-after-40.png" alt="The 5-pillar protocol for losing belly fat after 40 — resistance training, protein nutrition, walking, sleep, and stress management" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">El protocolo de 5 pilares para perder grasa abdominal después de los 40</figcaption></figure>',
  '[IMAGE #5 — weekly schedule infographic]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/weekly-schedule-belly-fat-loss-40-plus.png" alt="Sample weekly training and recovery schedule for losing belly fat after 40 from Belk Body Lab Charleston SC" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Ejemplo de programa semanal de entrenamiento y recuperación de Belk Body Lab</figcaption></figure>',
  '[IMAGE #6 — mid-article CTA card visual]': '<figure class="my-12"><img src="/blog/belly-fat-after-40/cta-belly-fat-after-40-belk-body-lab.png" alt="Belk Body Lab personal training coach Kyle Belk — apply for 90-day body transformation coaching in Charleston SC" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Coaching de transformación corporal de 90 días en Belk Body Lab</figcaption></figure>'
};
processPost(
  'belk-body-lab-blog-prompt.md',
  'spanish11.md',
  'how-to-lose-belly-fat-after-40-charleston-sc',
  11,
  /Title tag:\s+(.*)/,
  /Meta description:\s+(.*)/,
  /## 5\. THE ARTICLE — FULL BODY COPY \(paste verbatim\)[\s\S]*?---\s*([\s\S]*?)\s*---\s*## 6\. THE 12 FAQs/,
  imageMap11,
  'May 28, 2026',
  '12 min read',
  '/blog/belly-fat-after-40/hero-belly-fat-after-40-charleston-sc.png',
  'Cómo Perder Grasa Abdominal Después de los 40: La Guía Completa de un Entrenador Personal (2026)',
  'La guía completa del entrenador personal Kyle Belk para perder grasa abdominal después de los 40. Estrategias de entrenamiento, nutrición y hormonas respaldadas por la ciencia para hombres y mujeres.'
);

// POST 12
const imageMap12 = {
  '[IMAGE #1 — hero, full width]': '', 
  '[IMAGE #2 — The 9-variable diagnostic diagram]': '<figure class="my-12"><img src="/blog/why-not-losing-weight/9-variable-diagnostic-weight-loss-plateau.png" alt="The 9-variable weight loss plateau diagnostic — calorie intake, TDEE, protein, training, NEAT, sleep, stress, diet length, and medical" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">El diagnóstico de 9 variables del estancamiento en la pérdida de peso</figcaption></figure>',
  '[IMAGE #3 — TDEE Calculation comparison table]': '<figure class="my-12"><img src="/blog/why-not-losing-weight/tdee-calculation-comparison-table.png" alt="TDEE calculation table showing maintenance and fat-loss calorie targets at different activity levels" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Tabla de cálculo TDEE que muestra los objetivos calóricos</figcaption></figure>',
  '[IMAGE #4 — Bar chart showing NEAT step count impact]': '<figure class="my-12"><img src="/blog/why-not-losing-weight/neat-step-count-fat-loss-impact.png" alt="Bar chart showing how daily step counts from 4,000 to 12,000 affect calorie burn and fat loss" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">El impacto del recuento diario de pasos en la quema de calorías</figcaption></figure>',
  '[IMAGE #5 — Decision tree for when to see a doctor]': '<figure class="my-12"><img src="/blog/why-not-losing-weight/when-to-see-doctor-weight-loss-decision-tree.png" alt="Decision tree showing when to see a doctor for weight loss issues — including which bloodwork panels to request" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Árbol de decisión que muestra cuándo consultar a un médico</figcaption></figure>',
  '[IMAGE #6 — CTA visual of Kyle Belk reviewing data]': '<figure class="my-12"><img src="/blog/why-not-losing-weight/cta-weight-loss-diagnostic-belk-body-lab.png" alt="Belk Body Lab personal training coach Kyle Belk reviewing client diagnostic data in Charleston SC" class="w-full rounded-[2rem] border border-white/10" loading="lazy" decoding="async" /><figcaption class="text-center text-white/50 text-sm mt-4 italic">Entrenador Kyle Belk de Belk Body Lab revisando datos de diagnóstico del cliente</figcaption></figure>'
};
processPost(
  'belk-body-lab-blog-prompt-2.md',
  'spanish12.md',
  'why-am-i-not-losing-weight-diagnostic-charleston-sc',
  12,
  /Title tag:\s+(.*)/,
  /Meta description:\s+(.*)/,
  /## 5\. THE ARTICLE — FULL BODY COPY \(paste verbatim\)[\s\S]*?---\s*([\s\S]*?)\s*---\s*## 6\. THE 13 FAQs/,
  imageMap12,
  'May 29, 2026',
  '14 min read',
  '/blog/why-not-losing-weight/hero-why-not-losing-weight-charleston-sc.png',
  '¿Por qué no pierdo peso? El diagnóstico de 9 variables de un entrenador personal (2026)',
  '¿Haciendo todo bien pero la báscula no se mueve? El entrenador personal Kyle Belk detalla el diagnóstico exacto de 9 variables para romper cualquier estancamiento de pérdida de peso.'
);
