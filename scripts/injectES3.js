const fs = require('fs');
const path = require('path');

const postsFilePath = path.join(__dirname, '../src/data/blog/posts.ts');
let contentStr = fs.readFileSync(postsFilePath, 'utf8');

const es12HTML = fs.readFileSync(path.join(__dirname, 'es_12_content.html'), 'utf8').trim();
const es14HTML = fs.readFileSync(path.join(__dirname, 'es_14_content.html'), 'utf8').trim();

function formatObject(obj) {
  let str = JSON.stringify(obj, null, 2);
  str = str.replace(/^(\s*)"([a-zA-Z0-9_]+)":/gm, '$1$2:');
  return str;
}

const es12 = {
  title: "Cómo Perder Grasa Abdominal en South Carolina: Guía Científica (2026)",
  excerpt: "Cómo perder grasa abdominal en South Carolina sin trucos ni inyecciones. Kyle Belk, entrenador personal certificado por NASM, explica la verdadera ciencia de la pérdida de grasa — entrenamiento, nutrición, sueño y estrés.",
  metaTitle: "Cómo Perder Grasa Abdominal en South Carolina: Guía 2026",
  metaDescription: "Descubre cómo perder grasa abdominal en South Carolina sin trucos. Guía científica de entrenamiento, nutrición y sueño de un entrenador certificado por NASM.",
  content: es12HTML,
  faqs: [
    { q: "¿Puedes enfocarte específicamente en la grasa abdominal?", a: "No. La reducción localizada es un mito; no puedes quemar grasa de una parte del cuerpo entrenándola. La grasa abdominal desaparece cuando creas un déficit calórico general." },
    { q: "¿Cuánto tiempo se tarda en perder grasa abdominal?", a: "La mayoría de las personas pierden grasa abdominal visible entre 8 y 16 semanas a un ritmo sostenible del 0.5 al 1% del peso corporal por semana." },
    { q: "¿Cuál es la diferencia entre la grasa abdominal visceral y subcutánea?", a: "La grasa subcutánea se encuentra debajo de la piel y es lo que puedes pellizcar. La grasa visceral se almacena más profundamente, alrededor de tus órganos, y responde más rápido a un déficit calórico." },
    { q: "¿Necesito hacer cientos de abdominales para tener un vientre plano?", a: "No. Los abdominales fortalecen los músculos pero queman muy pocas calorías y no eliminan la grasa que los cubre." },
    { q: "¿Es mejor el cardio o el entrenamiento con pesas para perder grasa abdominal?", a: "Ambos ayudan, pero el entrenamiento de fuerza es la prioridad para preservar músculo y mantener un metabolismo alto." },
    { q: "¿Reducir solo los carbohidratos eliminará mi barriga?", a: "No por sí solo. Las dietas bajas en carbohidratos a menudo causan una rápida pérdida de peso temprana debido al agua, pero la pérdida de grasa real proviene del déficit calórico." },
    { q: "¿Por qué la grasa abdominal es la más difícil de perder?", a: "Para muchas personas, el abdomen es donde el cuerpo almacena grasa primero y la libera al final debido a la genética y la distribución hormonal." },
    { q: "¿El estrés causa grasa abdominal?", a: "El estrés crónico eleva el cortisol, lo que se asocia con un mayor apetito y tendencia a almacenar grasa alrededor del abdomen medio." },
    { q: "¿Qué tan importante es el sueño para perder grasa abdominal?", a: "Muy importante. Dormir mal aumenta las hormonas del hambre y reduce la fuerza de voluntad." },
    { q: "¿Necesito suplementos o quemadores de grasa para perder grasa abdominal?", a: "No. Ningún quemador de grasa legal de venta libre produce una pérdida de grasa significativa por sí solo." },
    { q: "¿Puedo perder grasa abdominal en casa sin un gimnasio en South Carolina?", a: "Sí. Muchos clientes pierden grasa entrenando en casa, porque la nutrición y la constancia importan más que el entorno." },
    { q: "¿Perder grasa abdominal es diferente para las mujeres?", a: "Los principios fundamentales son los mismos, aunque el patrón de pérdida de grasa puede variar debido a las hormonas." },
    { q: "¿La edad hace que la grasa abdominal sea más difícil de perder?", a: "El metabolismo se ralentiza un poco con la edad, pero la solución es la misma: priorizar la proteína y el entrenamiento de fuerza." },
    { q: "¿Necesito inyecciones o pérdida de peso médica en Charleston?", a: "La gran mayoría no. La base sigue siendo el entrenamiento, la nutrición, el sueño y la constancia." },
    { q: "¿Cómo puede ayudarme un entrenador personal en South Carolina a perder grasa abdominal?", a: "Un entrenador certificado como Kyle Belk crea un plan de entrenamiento y nutrición sostenible y te mantiene responsable para que veas resultados reales." }
  ]
};

const es14 = {
  title: "¿Cuánto Cuesta un Entrenador Personal en South Carolina? (Guía 2026)",
  excerpt: "¿Cuánto cuesta un entrenador personal en South Carolina en 2026? Un entrenador de Charleston certificado por NASM desglosa los precios por sesión, paquetes, grupos y en línea, lo que está incluido y los costos ocultos.",
  metaTitle: "¿Cuánto Cuesta un Entrenador Personal en South Carolina? (Guía 2026)",
  metaDescription: "Guía de precios 2026 para entrenadores personales en South Carolina. Conoce los costos por sesión, en línea y en grupo, y cómo evitar tarifas ocultas.",
  content: es14HTML,
  faqs: [
    { q: "¿Cuánto cuesta un entrenador personal en South Carolina?", a: "En South Carolina, las sesiones individuales suelen costar unos $50 a $150 cada una, o $600 a $1,800 al mes." },
    { q: "¿Por qué los precios de los entrenadores varían tanto?", a: "El precio depende de la certificación, la ubicación y, de manera crucial, lo que está incluido (como programación y nutrición)." },
    { q: "¿Cuánto cuesta el entrenamiento personal en línea frente al presencial?", a: "Suele facturarse como un paquete mensual y a menudo cuesta menos que varias sesiones presenciales a la semana." },
    { q: "¿Es más barato pagar por sesión o comprar un paquete?", a: "Los paquetes casi siempre cuestan menos por entrenamiento y ofrecen mucho más apoyo." },
    { q: "¿Qué incluye el precio del entrenamiento personal?", a: "Varía mucho. Las tarifas bajas pueden solo cubrir tiempo de gimnasio, mientras que los paquetes premium incluyen planes de nutrición y seguimiento." },
    { q: "¿Cuánto cuesta el entrenamiento en grupos pequeños en SC?", a: "Suele ser significativamente menor por persona que el individual, a menudo un tercio a la mitad del costo por sesión." },
    { q: "¿Valen la pena los entrenadores personales?", a: "Para la mayoría, sí. Un buen entrenador te ahorra meses de conjeturas y ofrece responsabilidad." },
    { q: "¿Cuántas sesiones por semana necesito realmente?", a: "La mayoría de las personas obtienen excelentes resultados con dos a cuatro sesiones a la semana." },
    { q: "¿El entrenador personal incluye un plan de nutrición?", a: "No siempre. Los paquetes completos como los de Belk Body Lab sí lo incluyen, ya que la nutrición es vital." },
    { q: "¿Existen costos ocultos en el entrenamiento personal?", a: "Puede haberlos, como tarifas de membresía de gimnasio separadas o cobros adicionales por planes de nutrición." },
    { q: "¿Por qué pagar una tarifa baja por sesión a menudo no es el mejor valor?", a: "Porque frecuentemente no incluye orientación nutricional ni estructura entre sesiones." },
    { q: "¿Cuánto cuesta un entrenador personal específicamente en Charleston y Mount Pleasant?", a: "Sigue el rango estatal de $50 a $150 por sesión, con estudios boutique en el extremo superior." },
    { q: "¿Los entrenadores ofrecen consultas gratuitas en South Carolina?", a: "Muchos sí, incluyendo Belk Body Lab, para que obtengas una cotización precisa." },
    { q: "¿Puedo obtener una cotización personalizada para el coaching con Belk Body Lab?", a: "Sí. Los precios se dan como una cotización personalizada después de una consulta gratuita." },
    { q: "¿Es siempre mejor un entrenador más caro?", a: "No. Lo importante son las calificaciones, los resultados y si el programa se adapta a tu vida." },
    { q: "¿Cuál es la mejor manera de presupuestar un entrenador personal?", a: "Elige el formato que ofrezca el soporte más completo dentro de tu presupuesto mensual y comprométete durante al menos 90 días." }
  ]
};

function replaceESBlockSafely(id, newEsObj) {
  const marker = contentStr.indexOf(`id: "${id}"`) !== -1 ? `id: "${id}"` : `id: '${id}'`;
  const start = contentStr.indexOf(marker);
  if (start === -1) {
    console.error(`Post ${id} not found`);
    return;
  }
  
  const enStart = contentStr.indexOf('en: {', start);
  const esStart = contentStr.indexOf('es: {', enStart);
  if (esStart === -1) {
    console.error(`ES block for post ${id} not found`);
    return;
  }

  // Robust parser to find the end of the `es: {` block
  let braceCount = 0;
  let inString = false;
  let quoteChar = '';
  let escape = false;
  let esEnd = -1;

  for (let i = esStart; i < contentStr.length; i++) {
    const char = contentStr[i];
    
    if (escape) {
      escape = false;
      continue;
    }
    if (char === '\\') {
      escape = true;
      continue;
    }
    
    if (inString) {
      if (char === quoteChar) {
        inString = false;
      }
      continue;
    } else {
      if (char === '"' || char === "'" || char === "\`") {
        inString = true;
        quoteChar = char;
        continue;
      }
    }
    
    if (char === '{') braceCount++;
    if (char === '}') {
      braceCount--;
      if (braceCount === 0 && i > esStart) {
        esEnd = i + 1; // inclusive of the `}`
        break;
      }
    }
  }

  if (esEnd === -1) {
    console.log("Could not parse ES block properly");
    return;
  }
  
  let formattedES = 'es: ' + formatObject(newEsObj);
  formattedES = formattedES.split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n');
  
  contentStr = contentStr.substring(0, esStart) + formattedES + contentStr.substring(esEnd);
  console.log(`Replaced ES block for post ${id}`);
}

replaceESBlockSafely('12', es12);
replaceESBlockSafely('14', es14);

fs.writeFileSync(postsFilePath, contentStr);
console.log('Finished updating translations safely.');
