const fs = require('fs');

const faqsES = [
  {
    q: "¿Qué es una calculadora de péptidos?",
    a: "Una calculadora de péptidos es una herramienta de laboratorio digital utilizada para convertir con precisión miligramos a microgramos y determinar dosis exactas en jeringa según la masa total del polvo liofilizado y el volumen de agua bacteriostática añadida."
  },
  {
    q: "¿Cuánta agua bacteriostática mezclo con 5mg de péptido?",
    a: "El protocolo estándar de laboratorio para un vial de 5mg es añadir 2ml de agua bacteriostática. Esto produce una concentración de 2.5mg por 1ml, facilitando los cálculos en jeringas estándar (25mcg por marca)."
  },
  {
    q: "¿Cuánta agua bacteriostática mezclo con 10mg de péptido?",
    a: "Para un vial de 10mg, los investigadores suelen usar 2ml de agua bacteriostática. Esto crea una densa concentración de 5mg por 1ml, lo que significa que una sola marca en una jeringa U-100 rendirá 50mcg."
  },
  {
    q: "¿Cuál es la fórmula para la reconstitución de péptidos?",
    a: "La fórmula matemática base es Concentración = Masa / Volumen. Para determinar la dosis específica por marca de jeringa, los investigadores dividen los microgramos totales (mcg) en el vial por el número total de unidades (marcas) representadas por el volumen del disolvente."
  },
  {
    q: "¿Puedo usar agua estéril en lugar de agua bacteriostática?",
    a: "El agua estéril puede usarse para una reconstitución de uso inmediato y único. Sin embargo, carece de un conservante. El agua bacteriostática contiene alcohol bencílico, que preserva el péptido y previene el crecimiento bacteriano, extendiendo la vida útil de la mezcla a aproximadamente 28 días en refrigeración."
  },
  {
    q: "¿Cuál es la diferencia entre mg y mcg en los péptidos?",
    a: "Los miligramos (mg) describen la masa seca total del péptido dentro del vial. Los microgramos (mcg) son la unidad de medida más pequeña utilizada para calcular la dosis líquida específica extraída para un estudio. 1mg equivale a 1,000mcg."
  },
  {
    q: "¿Cuántos mcg hay en un vial de 5mg?",
    a: "Hay exactamente 5,000mcg en un vial de 5mg."
  },
  {
    q: "¿Qué pasa si añado demasiada agua a un péptido?",
    a: "Añadir demasiada agua no daña el péptido ni cambia la masa total del compuesto en el vial. Simplemente diluye la concentración, lo que significa que el investigador debe extraer un mayor volumen de líquido en la jeringa para lograr la dosis de microgramos deseada."
  },
  {
    q: "¿Qué es el polvo liofilizado?",
    a: "El polvo liofilizado es el estado sólido y liofilizado (secado por congelación) de un péptido. Los principios de la liofilización implican eliminar el agua bajo vacío a bajas temperaturas, maximizando la estabilidad del compuesto y su vida útil antes de la reconstitución."
  },
  {
    q: "¿Dónde puedo encontrar una calculadora de mezcla de péptidos precisa?",
    a: "Los investigadores pueden utilizar la calculadora digital gratuita y altamente precisa proporcionada por 99 Purity Peptides para verificar automáticamente todos los cálculos de laboratorio y asegurar el cumplimiento del protocolo."
  }
];

let content = fs.readFileSync('C:/Users/kaise/.gemini/antigravity-ide/scratch/belk-body-lab/src/data/blog/posts.ts', 'utf8');

const esIdx = content.indexOf('slug: "guia-calculadora-reconstitucion-peptidos"');
if (esIdx !== -1) {
  const esFaqsIdx = content.indexOf('faqs: [', esIdx);
  const endEsFaqsIdx = content.indexOf(']', esFaqsIdx);
  
  const beforeEs = content.substring(0, esFaqsIdx);
  const afterEs = content.substring(endEsFaqsIdx + 1);
  
  content = beforeEs + 'faqs: ' + JSON.stringify(faqsES, null, 4) + afterEs;
  
  fs.writeFileSync('C:/Users/kaise/.gemini/antigravity-ide/scratch/belk-body-lab/src/data/blog/posts.ts', content);
  console.log("Successfully updated ES FAQs for post 25.");
} else {
  console.log("ES slug not found.");
}
