const fs = require('fs');
const path = require('path');

const englishHtml25 = require('./english_content.js');
const spanishHtml25 = require('./spanish_content.js');
const englishHtml26 = require('./english_content26.js');
const spanishHtml26 = require('./spanish_content26.js');

// === POST 25 (Blog A) ===
const post25 = {
  id: "25",
  slug: "peptide-calculator-guide",
  category: "Reconstitution",
  date: "July 27, 2026",
  readTime: "12 min read",
  image: "/wp-content/uploads/peptide-reconstitution-laboratory-guide.jpg",
  en: {
    title: "The Complete Guide to Peptide Reconstitution & Calculator Usage",
    excerpt: "Master peptide reconstitution with our complete laboratory guide. Learn the math behind concentration and access the 99 Purity Peptides accurate mixing calculator.",
    metaTitle: "Peptide Reconstitution Calculator: Guide & Dosages | Belk Body Lab",
    metaDescription: "Master peptide reconstitution with our complete laboratory guide. Learn the math behind concentration and access the 99 Purity Peptides accurate mixing calculator.",
    canonicalOverride: "https://belkbodylab.com/peptide-calculator-guide",
    keywords: ["peptide calculator", "peptide reconstitution calculator", "peptide dosage calculator", "bacteriostatic water calculator", "how to mix BPC-157"],
    content: englishHtml25,
    faqs: [
      { q: "What is a peptide calculator?", a: "A peptide calculator is a digital laboratory tool used to accurately convert milligrams to micrograms and determine exact syringe dosages based on the total mass of lyophilized powder and the volume of bacteriostatic water added." },
      { q: "How much bacteriostatic water do I mix with 5mg of peptide?", a: "The standard laboratory protocol for a 5mg vial is to add 2ml of bacteriostatic water. This yields a concentration of 2.5mg per 1ml, making calculations on standard syringes straightforward (25mcg per tick)." }
    ],
    customSchemas: []
  },
  es: {
    title: "La Guía Completa para la Reconstitución de Péptidos y el Uso de la Calculadora",
    excerpt: "Domine la reconstitución de péptidos con nuestra guía completa de laboratorio. Aprenda las matemáticas detrás de la concentración y acceda a la calculadora de mezcla precisa de 99 Purity Peptides.",
    metaTitle: "Calculadora de Reconstitución de Péptidos: Guía y Dosis | Belk Body Lab",
    metaDescription: "Domine la reconstitución de péptidos con nuestra guía completa de laboratorio. Aprenda las matemáticas detrás de la concentración y acceda a la calculadora de mezcla precisa.",
    canonicalOverride: "https://belkbodylab.com/es/peptide-calculator-guide",
    keywords: ["calculadora de péptidos", "calculadora de reconstitución de péptidos", "calculadora de dosis de péptidos", "calculadora de agua bacteriostática", "cómo mezclar BPC-157"],
    content: spanishHtml25,
    faqs: [
      { q: "¿Qué es una calculadora de péptidos?", a: "Una calculadora de péptidos es una herramienta de laboratorio digital utilizada para convertir con precisión miligramos a microgramos y determinar dosis exactas en jeringa según la masa total del polvo liofilizado y el volumen de agua bacteriostática añadida." },
      { q: "¿Cuánta agua bacteriostática mezclo con 5mg de péptido?", a: "El protocolo estándar de laboratorio para un vial de 5mg es añadir 2ml de agua bacteriostática. Esto produce una concentración de 2.5mg por 1ml, facilitando los cálculos en jeringas estándar (25mcg por marca)." }
    ],
    customSchemas: []
  }
};

// === POST 26 (Blog B) ===
const post26 = {
  id: "26",
  slug: "peptide-reconstitution-calculator-guide",
  category: "Reconstitution",
  date: "July 27, 2026",
  readTime: "16 min read",
  image: "/wp-content/uploads/peptide-reconstitution-laboratory-guide.jpg",
  en: {
    title: "The Complete Guide to Peptide Reconstitution: Concentration Math and Laboratory Protocol",
    excerpt: "How peptide reconstitution works: the concentration formula, mg-to-mcg and unit conversions, the x10 Rule for U-100 syringes, solvent selection and storage protocol.",
    metaTitle: "Peptide Reconstitution: Concentration Math & Lab Protocol | Belk Body Lab",
    metaDescription: "How peptide reconstitution works: the concentration formula, mg-to-mcg and unit conversions, the x10 Rule for U-100 syringes, solvent selection and storage protocol.",
    canonicalOverride: "https://belkbodylab.com/peptide-reconstitution-calculator-guide",
    keywords: ["peptide reconstitution calculator", "peptide concentration formula", "bacteriostatic water vs sterile water", "mcg per unit calculation", "how to reconstitute lyophilized peptide"],
    content: englishHtml26,
    faqs: [
        { q: "What is the formula for peptide reconstitution?", a: "Concentration in mg/ml equals peptide mass in mg divided by solvent volume in ml. To express the result per syringe unit on a U-100 syringe, multiply the vial mass in mg by 10 and divide by the solvent volume in ml." },
        { q: "How many ml is 100 units?", a: "On a U-100 insulin syringe, 100 units is exactly 1 ml. Each individual unit is 0.01 ml." },
        { q: "Can I use sterile water instead of bacteriostatic water?", a: "Chemically yes, sterile water will dissolve the peptide. The difference is preservation. Sterile water contains no antimicrobial agent, so the vial should be treated as single-use. Bacteriostatic water contains 0.9% benzyl alcohol, allowing multiple punctures over a conventional 28-day window." },
        { q: "Can you shake peptides to mix them?", a: "No. Shaking generates air-liquid interfaces where peptides adsorb, partially unfold, and aggregate irreversibly. Foam is a visible indicator that this has occurred. Swirl gently or roll the vial between your palms instead." },
        { q: "What is lyophilized powder?", a: "Lyophilized powder is material that has been freeze-dried: frozen, then dried under vacuum so ice sublimes directly to vapour. The process removes water without a liquid phase, producing a porous dry cake that is far more chemically stable than the same peptide in solution." },
        { q: "Do I subtract the volume of the powder from the solvent?", a: "No. At typical peptide masses the displaced volume is a few microlitres, roughly 0.008 ml for 10 mg, which is far smaller than the uncertainty in reading a syringe graduation." },
        { q: "What is the difference between mg and mcg?", a: "Both are units of mass. One milligram equals 1,000 micrograms. Vials are typically labelled in milligrams while working quantities are often discussed in micrograms." },
        { q: "Why is there benzyl alcohol in bacteriostatic water?", a: "Benzyl alcohol acts as a bacteriostatic preservative, inhibiting the growth of bacteria that enter the vial when the stopper is punctured. It is present at 0.9% concentration and is what makes multi-puncture use possible." }
    ],
    customSchemas: []
  },
  es: {
    title: "La Guía Completa de Reconstitución de Péptidos: Matemáticas de Concentración y Protocolo de Laboratorio",
    excerpt: "Cómo funciona la reconstitución de péptidos: la fórmula de concentración, conversiones de mg a mcg, la Regla x10, selección de solventes y protocolo de almacenamiento.",
    metaTitle: "Reconstitución de Péptidos: Matemáticas de Concentración y Protocolo | Belk Body Lab",
    metaDescription: "Cómo funciona la reconstitución de péptidos: la fórmula de concentración, conversiones de mg a mcg y unidades, la Regla x10 para jeringas U-100, selección de solventes y protocolo de almacenamiento.",
    canonicalOverride: "https://belkbodylab.com/es/peptide-reconstitution-calculator-guide",
    keywords: ["calculadora de reconstitución de péptidos", "fórmula de concentración de péptidos", "agua bacteriostática vs agua estéril", "cálculo de mcg por unidad", "cómo reconstituir péptido liofilizado"],
    content: spanishHtml26,
    faqs: [
        { q: "¿Cuál es la fórmula para la reconstitución de péptidos?", a: "La concentración en mg/ml es igual a la masa del péptido en mg dividida por el volumen del solvente en ml. Para expresar el resultado por unidad de jeringa en una jeringa U-100, multiplique la masa del vial en mg por 10 y divida por el volumen del solvente en ml." },
        { q: "¿Cuántos ml son 100 unidades?", a: "En una jeringa de insulina U-100, 100 unidades equivalen exactamente a 1 ml. Cada unidad individual es 0.01 ml." },
        { q: "¿Puedo usar agua estéril en lugar de agua bacteriostática?", a: "Químicamente sí, el agua estéril disolverá el péptido. La diferencia es la conservación. El agua estéril no contiene agentes antimicrobianos, por lo que el vial debe considerarse de un solo uso. El agua bacteriostática contiene un 0.9% de alcohol bencílico, permitiendo punciones múltiples durante un período de 28 días." },
        { q: "¿Se pueden agitar los péptidos para mezclarlos?", a: "No. Agitar genera interfaces aire-líquido donde los péptidos se adsorben, se despliegan parcialmente y se agregan irreversiblemente. La espuma es un indicador visible de que esto ha ocurrido. Gire suavemente o haga rodar el vial entre sus palmas en su lugar." },
        { q: "¿Qué es el polvo liofilizado?", a: "El polvo liofilizado es material que ha sido secado por congelación: congelado, luego secado al vacío para que el hielo se sublime directamente a vapor. El proceso elimina el agua sin fase líquida, produciendo una torta seca y porosa que es mucho más estable químicamente que el mismo péptido en solución." },
        { q: "¿Debo restar el volumen del polvo del solvente?", a: "No. Con masas de péptidos típicas, el volumen desplazado es de unos pocos microlitros, aproximadamente 0.008 ml para 10 mg, lo cual es mucho menor que la incertidumbre al leer una graduación de jeringa." },
        { q: "¿Cuál es la diferencia entre mg y mcg?", a: "Ambas son unidades de masa. Un miligramo equivale a 1,000 microgramos. Los viales suelen estar etiquetados en miligramos, mientras que las cantidades de trabajo a menudo se discuten en microgramos." },
        { q: "¿Por qué hay alcohol bencílico en el agua bacteriostática?", a: "El alcohol bencílico actúa como un conservante bacteriostático, inhibiendo el crecimiento de bacterias que ingresan al vial cuando se perfora el tapón. Está presente a una concentración del 0.9% y es lo que permite el uso de punciones múltiples." }
    ],
    customSchemas: []
  }
};

let post25Str = JSON.stringify(post25, null, 2);
let post26Str = JSON.stringify(post26, null, 2);

const keysToUnquote = ['id', 'slug', 'category', 'date', 'readTime', 'image', 'en', 'es', 'title', 'excerpt', 'metaTitle', 'metaDescription', 'canonicalOverride', 'keywords', 'content', 'faqs', 'customSchemas', 'q', 'a'];
keysToUnquote.forEach(key => {
  const regex = new RegExp('"' + key + '":', 'g');
  post25Str = post25Str.replace(regex, key + ':');
  post26Str = post26Str.replace(regex, key + ':');
});

const postsFilePath = path.join(__dirname, '..', 'src', 'data', 'blog', 'posts.ts');
let postsContent = fs.readFileSync(postsFilePath, 'utf8');

const arrayEndIndex = postsContent.lastIndexOf(']');
if (arrayEndIndex !== -1) {
  let before = postsContent.substring(0, arrayEndIndex).trimEnd();
  if (!before.endsWith(',')) {
      before += ',\n';
  } else {
      before += '\n';
  }
  
  const newPostsContent = before + post25Str + ',\n' + post26Str + '\n]\n';
  fs.writeFileSync(postsFilePath, newPostsContent);
  console.log("Successfully appended Post 25 and 26 to posts.ts");
} else {
  console.log("Could not find the end of the blogPosts array.");
}
