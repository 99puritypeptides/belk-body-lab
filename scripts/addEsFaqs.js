/**
 * Script to add translated Spanish FAQs to every es block in posts.ts
 * that currently lacks them.
 */

const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '..', 'src', 'data', 'blog', 'posts.ts');
let content = fs.readFileSync(postsPath, 'utf8');

// Spanish translations for all 10 original posts' FAQs (posts 1-10)
// These map by post id
const spanishFaqs = {
  '1': [ // fat-loss-guide-science-based
    { q: '¿Es necesario el cardio para perder grasa?', a: 'No, el cardio no es estrictamente necesario para perder grasa — un déficit calórico es el factor principal. Sin embargo, el cardio estratégico puede ayudar a aumentar tu gasto calórico.' },
    { q: '¿Cuánta proteína necesito mientras hago dieta?', a: 'Apunta a 0.8 a 1.2 gramos de proteína por libra de peso corporal para preservar el músculo y controlar el hambre.' },
    { q: '¿Puedo perder grasa y ganar músculo al mismo tiempo?', a: 'Sí, esto se conoce como recomposición corporal y es muy efectivo para principiantes con alta ingesta de proteína.' }
  ],
  '2': [ // beginner-muscle-building-plan
    { q: '¿Cuántas veces por semana debe entrenar un principiante?', a: 'Los principiantes obtienen mejores resultados con 3-4 sesiones de cuerpo completo o una división superior/inferior por semana, permitiendo una recuperación adecuada entre entrenamientos.' },
    { q: '¿Puedo ganar músculo sin suplementos?', a: 'Absolutamente. Los suplementos no son necesarios para ganar músculo. Concéntrate en comida real, sueño adecuado y sobrecarga progresiva en tus entrenamientos.' },
    { q: '¿Cuánto músculo puedo ganar en mi primer año?', a: 'Los principiantes típicamente pueden ganar 8-12 kg de músculo en su primer año con entrenamiento y nutrición consistentes — a menudo llamado "ganancias de novato".' }
  ],
  '3': [ // why-most-workout-plans-fail
    { q: '¿Por qué fracasan la mayoría de los planes de entrenamiento?', a: 'La mayoría fracasan por falta de individualización, cambios de programa demasiado frecuentes y expectativas poco realistas. La consistencia con un plan inteligente supera al programa "perfecto".' },
    { q: '¿Cómo sé si mi plan de entrenamiento está funcionando?', a: 'Rastrea tus levantamientos. Si tus números de fuerza están subiendo con el tiempo mientras mantienes buena forma, tu programa está funcionando.' },
    { q: '¿Con qué frecuencia debo cambiar mi rutina de entrenamiento?', a: 'Mantén un programa durante al menos 6-8 semanas antes de hacer cambios importantes. El cuerpo necesita tiempo para adaptarse y progresar.' }
  ],
  '4': [ // nutrition-myths-debunked
    { q: '¿Comer de noche causa aumento de peso?', a: 'No. El total de calorías importa más que la hora de comer. Los estudios muestran que la hora de la comida tiene un impacto mínimo en la composición corporal cuando las calorías totales están controladas.' },
    { q: '¿Necesito hacer detox o limpieza?', a: 'No. Tu hígado y riñones ya son sistemas de desintoxicación increíblemente eficientes. Las "limpiezas" comerciales son innecesarias y a veces perjudiciales.' },
    { q: '¿El gluten es malo para ti?', a: 'Para personas sin enfermedad celíaca o sensibilidad al gluten, no hay evidencia de que evitar el gluten proporcione beneficios para la salud. La calidad general de la dieta importa más.' }
  ],
  '5': [ // mental-game-fitness
    { q: '¿Qué tan importante es la mentalidad para los resultados de fitness?', a: 'La mentalidad es posiblemente el factor más importante. Incluso el mejor programa fracasará sin la disciplina mental y los hábitos para seguirlo consistentemente.' },
    { q: '¿Cómo me mantengo motivado para hacer ejercicio?', a: 'No dependas de la motivación — construye sistemas. Prepara tu ropa de gimnasio la noche anterior, programa tus entrenamientos como citas y comienza con el hábito más pequeño posible.' },
    { q: '¿Cómo manejo los contratiempos en mi recorrido de fitness?', a: 'Los contratiempos son normales. La clave es no dejar que un mal día se convierta en una mala semana. Vuelve a tu siguiente comida o entrenamiento programado y sigue adelante.' }
  ],
  '6': [ // cardio-vs-weights
    { q: '¿Debo hacer cardio o pesas primero?', a: 'Si tu meta principal es ganar fuerza o músculo, haz pesas primero cuando tengas más energía. Si entrenas para resistencia, prioriza el cardio. Para pérdida de grasa, el entrenamiento con pesas generalmente debe ir primero.' },
    { q: '¿Puede el cardio perjudicar las ganancias musculares?', a: 'El cardio excesivo puede interferir con la recuperación muscular, pero el cardio moderado (2-3 sesiones por semana) puede mejorar la salud cardiovascular sin impactar significativamente el crecimiento muscular.' },
    { q: '¿Cuál quema más calorías, cardio o pesas?', a: 'El cardio típicamente quema más calorías durante la sesión, pero el entrenamiento con pesas aumenta tu tasa metabólica en reposo. A largo plazo, la combinación es más efectiva para la composición corporal.' }
  ],
  '7': [ // supplement-guide
    { q: '¿Los suplementos son necesarios para estar en forma?', a: 'No. Los suplementos son exactamente eso — suplementarios. Ninguna pastilla o polvo reemplazará una nutrición consistente, el entrenamiento y el sueño. Son el último 5% de optimización.' },
    { q: '¿Qué suplementos realmente valen la pena?', a: 'Monohidrato de creatina, proteína de suero, vitamina D (si tienes deficiencia) y cafeína son los únicos suplementos con evidencia consistente y fuerte para el rendimiento o la salud.' },
    { q: '¿Cuándo debo tomar creatina?', a: 'La hora no importa mucho. Toma 3-5g de monohidrato de creatina diariamente a cualquier hora. La consistencia importa más que la hora del día.' }
  ],
  '8': [ // sleep-and-recovery
    { q: '¿Cuánto sueño necesito para ganar músculo?', a: '7-9 horas de sueño de calidad por noche es óptimo para la recuperación muscular, la regulación hormonal y el rendimiento general. Menos de 6 horas impacta significativamente la recuperación.' },
    { q: '¿Los días de descanso son importantes para el progreso?', a: 'Absolutamente. El músculo crece durante el descanso, no durante el entrenamiento. Saltarse los días de recuperación conduce al sobreentrenamiento, rendimiento reducido y mayor riesgo de lesiones.' },
    { q: '¿Cómo puedo mejorar la calidad de mi sueño?', a: 'Mantén un horario consistente, mantén tu habitación fresca y oscura, evita pantallas 1 hora antes de dormir, limita la cafeína después del mediodía y considera suplementar con magnesio.' }
  ],
  '9': [ // home-workout-guide
    { q: '¿Puedo ganar músculo entrenando en casa?', a: 'Sí. Con bandas de resistencia, mancuernas ajustables y ejercicios con peso corporal, puedes construir un físico impresionante en casa. La sobrecarga progresiva es clave.' },
    { q: '¿Qué equipo es esencial para un gimnasio en casa?', a: 'Comienza con mancuernas ajustables y bandas de resistencia. Si tienes espacio y presupuesto, un banco ajustable y una barra con discos son las siguientes adiciones más valiosas.' },
    { q: '¿Los entrenamientos en casa son tan efectivos como el gimnasio?', a: 'Para principiantes e intermedios, los entrenamientos en casa pueden ser igualmente efectivos si se aplican los principios correctos. Los atletas avanzados pueden necesitar equipos de gimnasio para una sobrecarga máxima.' }
  ],
  '10': [ // mastering-nutrition-macros-truth
    { q: '¿Qué son los macros y por qué importan?', a: 'Los macronutrientes son proteínas, carbohidratos y grasas. Cada uno juega un papel específico en la composición corporal, el rendimiento y la salud. Su balance determina tus resultados más que las calorías totales solas.' },
    { q: '¿Necesito contar macros para siempre?', a: 'No. Contar macros es una herramienta de aprendizaje. Con el tiempo, desarrollarás conciencia nutricional intuitiva. Pero inicialmente, rastrear durante 2-3 meses es increíblemente valioso para la educación.' },
    { q: '¿Cuánta proteína realmente necesito?', a: 'Para personas activas que buscan cambiar su composición corporal, 0.8-1.2g por libra de peso corporal es el rango óptimo respaldado por la investigación. Prioriza la proteína en cada comida.' }
  ]
};

// For each post, find where the es block's content backtick ends (the ` line before the closing })
// and insert the faqs array before the closing of the es object.

const lines = content.split('\n');
let currentPostId = '';
let inEs = false;
let insertions = []; // { lineIndex, faqsText }

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  
  // Track post id
  const idMatch = trimmed.match(/^id:\s*'([^']+)'/);
  if (idMatch) {
    currentPostId = idMatch[1];
  }
  
  // Track en/es blocks
  if (trimmed.startsWith('en: {')) {
    inEs = false;
  }
  if (trimmed.startsWith('es: {')) {
    inEs = true;
  }
  
  // If we're in an es block and this post has Spanish FAQs to add,
  // find the closing of the es block (line with just `}` that closes es)
  // The es block ends with a line that has the backtick ` closing content,
  // then the closing brace of the es object.
  
  // Look for pattern: the es block's closing `}` which is followed by `},` (post closing)
  // We need to find where content ends in the es block and there are no faqs.
  // The simplest approach: find `    }` lines that close es blocks,
  // and check if the previous non-empty line has faqs or not.
}

// Better approach: use regex to find each es block and check if it has faqs
// For each post id in spanishFaqs, find the es block and inject faqs if missing

for (const [postId, faqs] of Object.entries(spanishFaqs)) {
  // Build the faqs text
  const faqEntries = faqs.map(f => {
    const qEsc = f.q.replace(/'/g, "\\'");
    const aEsc = f.a.replace(/'/g, "\\'");
    return `        { q: '${qEsc}', a: '${aEsc}' }`;
  }).join(',\n');
  const faqsBlock = `,\n      faqs: [\n${faqEntries}\n      ]`;
  
  // Find the es block for this post
  // Strategy: find `id: '<postId>'`, then find the `es: {` after it,
  // then find where content ends (the backtick line), and insert faqs after it
  
  const idPattern = `id: '${postId}'`;
  let idIdx = content.indexOf(idPattern);
  if (idIdx === -1) continue;
  
  // Find `es: {` after idIdx
  let esIdx = content.indexOf('es: {', idIdx);
  if (esIdx === -1) continue;
  
  // Check if this es block already has faqs
  // Find the closing `}` of this es block
  // The es block structure is: es: { title:..., content: `...` }
  // or: es: { title:..., content: `...`, faqs: [...] }
  
  // Find the closing of the es block - it's the `    }` before the next `  },` or `  }`
  // Let's find the content backtick closure: look for the line with just ` or `\n after es
  
  // Find content: ` after esIdx
  let contentStart = content.indexOf("content: `", esIdx);
  if (contentStart === -1) continue;
  
  // Find the closing backtick for content
  let backtickEnd = contentStart + "content: `".length;
  let depth = 1;
  // Actually, template literals can be nested. Let's just find the standalone backtick line.
  // The content field ends with a line that's just whitespace + backtick
  
  // Find the next standalone backtick after contentStart
  let searchFrom = contentStart + "content: `".length;
  let closingBacktick = -1;
  
  // Look for a backtick that closes the template literal
  // In the file, the content template literal ends with a line like:
  //       `
  // or    `  (with possible trailing comma)
  
  const linesAfterContent = content.substring(searchFrom).split('\n');
  let charCount = searchFrom;
  for (let li = 0; li < linesAfterContent.length; li++) {
    const line = linesAfterContent[li];
    if (line.trim() === '`' || line.trim() === '`,') {
      closingBacktick = charCount + line.indexOf('`');
      break;
    }
    charCount += line.length + 1; // +1 for newline
  }
  
  if (closingBacktick === -1) {
    console.log(`Could not find closing backtick for post ${postId}`);
    continue;
  }
  
  // Check if there's already a faqs: after the backtick and before the es block closes
  const afterBacktick = content.substring(closingBacktick, closingBacktick + 200);
  if (afterBacktick.includes('faqs:')) {
    console.log(`Post ${postId} es block already has faqs, skipping`);
    continue;
  }
  
  // Insert faqs after the backtick line
  // Find the end of the backtick line (the newline after `)
  let insertPos = content.indexOf('\n', closingBacktick);
  if (insertPos === -1) continue;
  
  // Insert the faqs block before the newline
  content = content.substring(0, insertPos) + faqsBlock + content.substring(insertPos);
  
  console.log(`Added Spanish FAQs for post ${postId}`);
}

fs.writeFileSync(postsPath, content, 'utf8');
console.log('\nDone! All Spanish FAQs have been added.');
