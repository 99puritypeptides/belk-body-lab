/**
 * Replace English FAQs in the es blocks of posts 11 and 12 with Spanish translations.
 */

const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '..', 'src', 'data', 'blog', 'posts.ts');
let content = fs.readFileSync(postsPath, 'utf8');

// Post 11 (belly fat after 40) - Spanish FAQs
const post11EsFaqs = [
  { q: "¿Por qué es tan difícil perder grasa abdominal después de los 40?", a: "Después de los 40, tres cosas cambian a la vez: la tasa metabólica en reposo cae aproximadamente un 2% por década, las hormonas sexuales (estrógeno en mujeres, testosterona en hombres) disminuyen, y el cuerpo se vuelve más resistente a la insulina. El resultado es más grasa almacenada alrededor del abdomen — especialmente grasa visceral — incluso cuando las calorías no han cambiado. La solución no es más cardio; es entrenamiento de resistencia, nutrición anclada en proteína, sueño y manejo del estrés trabajando juntos." },
  { q: "¿Cuánto tiempo toma perder grasa abdominal después de los 40?", a: "Con un plan estructurado de entrenamiento y nutrición, la mayoría de las personas mayores de 40 ven cambios visibles en la cintura en 4-6 semanas y una reducción significativa de grasa abdominal en 12-16 semanas. En Belk Body Lab en Charleston SC, el cliente promedio mayor de 40 pierde de 5 a 10 kg y de 5 a 10 cm de cintura en un ciclo de coaching de 90 días." },
  { q: "¿Cuál es el mejor ejercicio para perder grasa abdominal después de los 40?", a: "El mejor ejercicio para la grasa abdominal después de los 40 es el entrenamiento de resistencia compuesto pesado — sentadillas, peso muerto, bisagras de cadera, prensas y remos — realizado 3-4 veces por semana. El entrenamiento de fuerza aumenta el músculo magro, eleva el metabolismo en reposo y es el único tipo de ejercicio que la investigación de 2024 muestra que reduce específicamente la grasa abdominal visceral. Caminar 8,000-10,000 pasos diarios es el complemento ideal." },
  { q: "¿Se puede reducir la grasa abdominal de forma localizada después de los 40?", a: "No. La reducción localizada es un mito. Los abdominales y ejercicios de core fortalecen los músculos abdominales debajo de la grasa pero no queman grasa en esa área específica. La grasa abdominal se pierde cuando el cuerpo está en un déficit calórico sostenido, principalmente a través del entrenamiento, la nutrición, el sueño y el control del estrés." },
  { q: "¿Qué debo comer para perder grasa abdominal después de los 40?", a: "Ancla cada comida con 30-45g de proteína, agrega vegetales ricos en fibra e incluye carbohidratos de digestión lenta como avena, arroz, papas o fruta. Mantén la proteína diaria total en 0.8-1.0g por libra de peso corporal objetivo. Reduce los snacks ultraprocesados y las calorías líquidas. La mayoría de los clientes mayores de 40 ven la pérdida de grasa abdominal más rápida comiendo con un déficit calórico del 15-20%, no con dietas extremas." },
  { q: "¿Es reversible la grasa abdominal de la menopausia?", a: "Sí. La menopausia desplaza el almacenamiento de grasa hacia el abdomen debido a la disminución del estrógeno, pero esto es reversible con el protocolo correcto. El entrenamiento de resistencia preserva el músculo, la nutrición rica en proteína apoya la saciedad y el metabolismo, y 7-9 horas de sueño reducen el cortisol. Las mujeres en perimenopausia y posmenopausia regularmente pierden de 7 a 14 kg y de 8 a 13 cm de cintura en programas de 90 días en Belk Body Lab." },
  { q: "¿Cuántas calorías debo comer para perder grasa abdominal después de los 40?", a: "La mayoría de los adultos mayores de 40 pierden grasa abdominal mejor con un déficit calórico del 15-20% por debajo del mantenimiento. Para una mujer típica de 1.70m, esto suele ser 1,500-1,700 kcal/día con 130-150g de proteína. Para un hombre típico de 1.78m, esto suele ser 2,000-2,300 kcal/día con 170-200g de proteína. Los objetivos exactos dependen de la composición corporal, la actividad y el historial metabólico." },
  { q: "¿El cardio ayuda a perder grasa abdominal después de los 40?", a: "El cardio ayuda, pero no es el motor principal. Caminar 8,000-10,000 pasos al día y agregar 1-2 sesiones cortas de acondicionamiento (10-20 minutos) por semana es suficiente para la mayoría de las personas mayores de 40. El cardio largo y agotador puede elevar el cortisol y frenar la pérdida de grasa abdominal. El entrenamiento de fuerza es la prioridad." },
  { q: "¿Cómo afecta el estrés a la grasa abdominal después de los 40?", a: "El estrés crónico eleva el cortisol, y el cortisol crónicamente elevado promueve el almacenamiento de grasa visceral alrededor de la sección media. Esta es una de las razones ocultas más grandes por las que los clientes mayores de 40 no pueden perder grasa abdominal a pesar de entrenar duro. El sueño (7-9 horas), las caminatas de baja intensidad y los protocolos de respiración reducen el cortisol y desbloquean la pérdida de grasa." },
  { q: "¿Trabajas con clientes mayores de 40 en Charleston SC?", a: "Sí. La demografía de 40+ es el núcleo de la práctica de coaching de Belk Body Lab. Kyle Belk trabaja con hombres y mujeres mayores de 40 en todo Charleston, Mount Pleasant, Summerville, West Ashley, Daniel Island y todo el Lowcountry — en persona y en línea — con protocolos personalizados diseñados para el metabolismo, la salud articular y la recuperación de la mediana edad." },
  { q: "¿Puedo perder grasa abdominal después de los 40 sin ir al gimnasio?", a: "Sí. Un programa bien diseñado para casa con mancuernas ajustables, un banco y una banda de resistencia es más que suficiente para perder grasa abdominal después de los 40. Belk Body Lab construye programas específicos para equipamiento casero para clientes en toda South Carolina que prefieren entrenar en casa." },
  { q: "¿Cómo es efectivo el coaching en línea para perder grasa abdominal después de los 40?", a: "El coaching en línea es altamente efectivo para la demografía de 40+ porque proporciona estructura diaria, responsabilidad semanal y ajustes de plan en tiempo real sin la fricción de citas fijas en el gimnasio. Más del 80% de las mejores transformaciones de Belk Body Lab provienen de clientes en línea, muchos de ellos mayores de 40, entrenando desde casa o gimnasios comerciales en toda South Carolina." }
];

// Post 12 (why not losing weight) - Spanish FAQs
const post12EsFaqs = [
  { q: "¿Por qué no pierdo peso aunque estoy comiendo menos y haciendo ejercicio?", a: "La razón más común es que tu ingesta calórica real es mayor de lo que crees. Las apps de rastreo de calorías y el auto-reporte subestiman la ingesta en un promedio de 18-32%. Suma a eso la adaptación metabólica, la retención de agua por el entrenamiento nuevo y las calorías líquidas no rastreadas — y un déficit real puede no existir. La solución es una auditoría de 7 días: pesa cada alimento, rastrea cada bebida y mide la ingesta contra tu TDEE real." },
  { q: "¿Por qué no pierdo peso en déficit calórico?", a: "Si la báscula no se mueve en déficit calórico, una de cuatro cosas está pasando: tu déficit es menor de lo que crees debido a errores de rastreo, tu cuerpo retiene agua por sodio o ejercicio nuevo, estás perdiendo grasa pero ganando músculo, o te has adaptado metabólicamente. Un período de auditoría de 14 días casi siempre revela cuál es. La pérdida real de grasa rara vez es lineal en la báscula." },
  { q: "¿Puede el estrés impedir la pérdida de peso?", a: "Sí. El estrés crónico eleva el cortisol, que promueve la retención de agua, impulsa los antojos de azúcar y altera el sueño — todo lo cual estanca la pérdida de peso. Muchos clientes en Charleston SC que entrenan duro pero permanecen estresados no ven progreso hasta que agregan caminatas, sueño y protocolos de respiración. El manejo del estrés no es opcional; es una variable de pérdida de grasa." },
  { q: "¿Por qué estoy perdiendo centímetros pero no peso?", a: "Si la cinta métrica baja pero la báscula no, estás perdiendo grasa y ganando músculo — recomposición corporal. Este es el resultado ideal de un programa bien diseñado. El peso en la báscula es una mala medida de la composición corporal. Rastrea la circunferencia de la cintura, fotos de progreso y cómo te queda la ropa. La mayoría de los clientes mayores de 35 ven este patrón en las primeras 8 semanas." },
  { q: "¿Cuánto puede durar un estancamiento en la pérdida de peso?", a: "Un verdadero estancamiento que dure más de 3-4 semanas indica un problema del sistema — las calorías han aumentado, el entrenamiento ha perdido estímulo, la recuperación se ha degradado, o tu cuerpo se ha adaptado metabólicamente al déficit. La mayoría de los estancamientos se rompen en 7-14 días al corregir la variable subyacente. Si el tuyo ha durado más de un mes, necesitas una re-auditoría estructurada." },
  { q: "¿Pesa más el músculo que la grasa?", a: "Una libra de músculo y una libra de grasa pesan lo mismo. Pero el músculo es aproximadamente 18% más denso, así que una libra de músculo ocupa significativamente menos espacio que una libra de grasa. Por eso las personas pierden centímetros y se ven más delgadas mientras la báscula apenas se mueve. Ganar músculo es una buena noticia, no un problema." },
  { q: "¿Por qué estoy ganando peso aunque hago ejercicio?", a: "El entrenamiento nuevo añade peso de agua en dos lugares: las reservas de glucógeno muscular (que retienen agua) y el tejido muscular inflamado (que retiene agua durante la reparación). Un aumento de peso de 1-2 kg en las primeras 2 semanas de entrenamiento es normal y no es grasa. Usualmente se resuelve en 4-6 semanas. La báscula miente a corto plazo." },
  { q: "¿Son precisas las aplicaciones de rastreo de calorías?", a: "No, no son confiables. La investigación muestra que la ingesta auto-reportada en apps de rastreo se subestima en un 18-32% en promedio. Las comidas de restaurante, aceites, salsas y 'mordiscos y probadas' entre comidas se omiten rutinariamente. Incluso los alimentos con código de barras pueden estar un 10-20% fuera de la etiqueta. Para precisión, pesa los alimentos en gramos, registra todo y usa la app como herramienta de tendencia — no como evangelio." },
  { q: "¿Cómo afecta el sueño a la pérdida de peso?", a: "Dormir menos de 6 horas por noche aumenta la grelina (hormona del hambre), suprime la leptina (hormona de la saciedad), eleva el cortisol y reduce la sensibilidad a la insulina hasta un 30% al día siguiente. A lo largo de semanas, esto es suficiente para estancar la pérdida de grasa incluso con entrenamiento y rastreo perfectos. El sueño es una variable no negociable de pérdida de grasa." },
  { q: "¿Debería comer más para perder peso?", a: "A veces, sí. Comer crónicamente muy poco (menos de 1,200 kcal/día para mujeres o 1,500 kcal/día para hombres) a menudo suprime la función tiroidea, reduce la tasa metabólica en reposo, aumenta el cortisol y estanca la pérdida de peso. Un descanso controlado de la dieta o una fase de 'dieta inversa' con calorías de mantenimiento durante 2-4 semanas a menudo reinicia la pérdida de grasa en personas que han hecho dieta por mucho tiempo." },
  { q: "¿Pueden las hormonas impedir la pérdida de peso?", a: "Sí. Los trastornos de la tiroides, SOP, resistencia a la insulina, perimenopausia, testosterona baja y cortisol crónicamente elevado pueden todos frenar o estancar la pérdida de peso. Si has auditado tu rastreo, entrenamiento, sueño y estrés y aún no pierdes peso después de 8 semanas, solicita análisis de sangre a tu médico. Un coach puede construir el protocolo; un doctor puede descartar la capa médica." },
  { q: "¿Trabajas con personas en Charleston SC que han intentado de todo?", a: "Sí. La mayoría de los clientes de coaching de Belk Body Lab en Charleston, Mount Pleasant, Summerville, West Ashley y en línea en toda South Carolina han probado múltiples dietas y entrenadores antes. La mayoría no están rotos — están sub-sistematizados. Un diagnóstico estructurado de 90 días y un protocolo típicamente reinician la pérdida de grasa en las primeras 2-3 semanas." },
  { q: "¿Cuál es la forma más rápida de romper un estancamiento en la pérdida de peso?", a: "La forma más rápida es hacer una auditoría de 7 días: pesa cada alimento, registra cada bebida, duerme 7-9 horas, camina 8,000-10,000 pasos diarios y agrega un nuevo estímulo de entrenamiento. Si el estancamiento no se rompe en 14 días, toma un descanso de dieta de 2 semanas con calorías de mantenimiento. Esta combinación resuelve la gran mayoría de los estancamientos en un solo ciclo de 3 semanas." }
];

// Helper to build FAQ array string
function buildFaqString(faqs) {
  const entries = faqs.map(f => {
    const q = JSON.stringify(f.q);
    const a = JSON.stringify(f.a);
    return `      {\n        "q": ${q},\n        "a": ${a}\n      }`;
  });
  return `    faqs: [\n${entries.join(',\n')}\n    ]`;
}

// Replace post 11 es faqs (lines 1279-1340 area)
// Find the es block for post 11 (id: "11")
const post11EsMarker = '  es: {\n    title: "Cómo Perder Grasa Abdominal Después de los 40';
const post11EsIdx = content.indexOf(post11EsMarker);
if (post11EsIdx === -1) {
  console.error('Could not find post 11 es block');
  process.exit(1);
}

// Find the faqs: [ in post 11 es block
const post11FaqStart = content.indexOf('    faqs: [', post11EsIdx);
if (post11FaqStart === -1) {
  console.error('Could not find post 11 es faqs');
  process.exit(1);
}

// Find the closing ] of that faqs array
// We need to count bracket depth
let depth = 0;
let post11FaqEnd = -1;
for (let i = post11FaqStart; i < content.length; i++) {
  if (content[i] === '[') depth++;
  if (content[i] === ']') {
    depth--;
    if (depth === 0) {
      post11FaqEnd = i + 1; // include the ]
      break;
    }
  }
}

if (post11FaqEnd === -1) {
  console.error('Could not find end of post 11 es faqs');
  process.exit(1);
}

const post11OldFaqs = content.substring(post11FaqStart, post11FaqEnd);
const post11NewFaqs = buildFaqString(post11EsFaqs);

content = content.substring(0, post11FaqStart) + post11NewFaqs + content.substring(post11FaqEnd);
console.log('Replaced post 11 es FAQs with Spanish translations');

// Now replace post 12 es faqs
const post12EsMarker = '  es: {\n    title: "¿Por qué no pierdo peso?';
const post12EsIdx = content.indexOf(post12EsMarker);
if (post12EsIdx === -1) {
  console.error('Could not find post 12 es block');
  process.exit(1);
}

const post12FaqStart = content.indexOf('    faqs: [', post12EsIdx);
if (post12FaqStart === -1) {
  console.error('Could not find post 12 es faqs');
  process.exit(1);
}

depth = 0;
let post12FaqEnd = -1;
for (let i = post12FaqStart; i < content.length; i++) {
  if (content[i] === '[') depth++;
  if (content[i] === ']') {
    depth--;
    if (depth === 0) {
      post12FaqEnd = i + 1;
      break;
    }
  }
}

if (post12FaqEnd === -1) {
  console.error('Could not find end of post 12 es faqs');
  process.exit(1);
}

const post12OldFaqs = content.substring(post12FaqStart, post12FaqEnd);
const post12NewFaqs = buildFaqString(post12EsFaqs);

content = content.substring(0, post12FaqStart) + post12NewFaqs + content.substring(post12FaqEnd);
console.log('Replaced post 12 es FAQs with Spanish translations');

fs.writeFileSync(postsPath, content, 'utf8');
console.log('\nDone! Posts 11 and 12 es FAQs are now in Spanish.');
