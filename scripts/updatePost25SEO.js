const fs = require('fs');
const path = require('path');

const postsFilePath = path.join(process.cwd(), 'src', 'data', 'blog', 'posts.ts');
let postsContent = fs.readFileSync(postsFilePath, 'utf8');

const id25Index = postsContent.lastIndexOf('id: "25",');
if (id25Index === -1) {
  console.error("Could not find post 25");
  process.exit(1);
}

const keywords = [
  "peptide calculator",
  "peptide reconstitution calculator",
  "peptide dosage calculator",
  "bacteriostatic water calculator",
  "how to mix BPC-157",
  "lyophilized powder",
  "ba"
];
const keywordsStr = JSON.stringify(keywords);
const canonicalUrl = "https://belkbodylab.com/peptide-reconstitution-calculator-guide";

// Replace metaTitle in both 'en' and 'es'
postsContent = postsContent.replace(/metaTitle: "The Complete Guide to Peptide Reconstitution & Calculator Usage"/g, 'metaTitle: "Peptide Reconstitution Calculator: Guide & Dosages | Belk Body Lab"');

// We need to inject keywords and canonicalOverride into 'en' and 'es' blocks.
// We can just find the metaDescription line and append it.
const enDescStr = 'metaDescription: "Master peptide reconstitution with our complete laboratory guide. Learn the math behind concentration and access the 99 Purity Peptides accurate mixing calculator.",';
const esDescStr = 'metaDescription: "Domine la reconstitución de péptidos con nuestra guía completa de laboratorio. Aprenda las matemáticas detrás de la concentración y acceda a la calculadora de mezcla precisa de 99 Purity Peptides.",';

const enInject = `${enDescStr}\n    keywords: ${keywordsStr},\n    canonicalOverride: "${canonicalUrl}",`;
const esInject = `${esDescStr}\n    keywords: ${keywordsStr},\n    canonicalOverride: "${canonicalUrl}",`;

postsContent = postsContent.replace(enDescStr, enInject);
postsContent = postsContent.replace(esDescStr, esInject);

fs.writeFileSync(postsFilePath, postsContent);
console.log("Updated SEO components for post 25");
