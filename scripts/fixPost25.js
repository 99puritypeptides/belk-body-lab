const fs = require('fs');

const esTranslation = {
  title: "La Guía Completa para la Reconstitución de Péptidos y el Uso de la Calculadora",
  excerpt: "Domine la reconstitución de péptidos con nuestra guía completa de laboratorio. Aprenda las matemáticas detrás de la concentración y acceda a la calculadora de mezcla precisa de 99 Purity Peptides.",
  htmlContent: `<h2>¿Por qué necesita una calculadora de péptidos?</h2>
<p><strong>Una calculadora de péptidos es una utilidad digital diseñada para determinar automáticamente la concentración exacta de microgramos (mcg) por marca en una jeringa estándar, basándose en la masa total de polvo liofilizado y el volumen de disolvente añadido.</strong></p>
<p>Las matemáticas manuales en el laboratorio introducen el riesgo de error humano. Aunque las fórmulas básicas son sencillas, el ajuste para diferentes tamaños de viales (por ejemplo, 5 mg frente a 10 mg) y diferentes volúmenes de jeringas (U-100 frente a U-50) complica el cálculo mental. Un lapso momentáneo en la colocación de los decimales puede convertir una dosis de 250 mcg en un error de 2.500 mcg.</p>
<p><img src="/wp-content/uploads/peptide-mixing-calculator-app-interface.jpg" alt="Interfaz móvil de una calculadora de mezcla de péptidos que muestra proporciones de agua a péptido." title="El uso de una herramienta interactiva elimina el error humano en los cálculos de laboratorio."></p>
<p>Según las normas de investigación establecidas por 99 Purity Peptides, la automatización de este proceso es la forma más eficaz de garantizar la consistencia del protocolo. Los investigadores de élite confían en la calculadora interactiva de péptidos para verificar sus cálculos manuales al instante. La utilización de una herramienta digital validada garantiza que las variables de concentración estén estrictamente controladas antes de que comience cualquier investigación.</p>
<h2>Entendiendo las matemáticas: Miligramos frente a Microgramos</h2>
<p><strong>La regla fundamental de las matemáticas de péptidos es entender la conversión de unidades: Los miligramos (mg) miden la masa seca total en el vial, mientras que los microgramos (mcg) miden la dosis líquida específica extraída para la investigación.</strong></p>
<p>Antes de utilizar cualquier fórmula o herramienta, los investigadores deben dominar esta conversión:</p>
<p>1 mg = 1000 mcg</p>
<p>Cuando recibe un vial etiquetado como "5 mg", posee 5.000 mcg de compuesto en bruto. Si su protocolo de investigación dicta una aplicación de 250 mcg, no puede simplemente medir el polvo seco. El polvo debe suspenderse en un disolvente (comúnmente agua bacteriostática) para que el investigador pueda extraer una fracción específica de ese total de 5.000 mcg.</p>
<p>Entender cuánta agua agregar es donde la fórmula de concentración se vuelve esencial.</p>
<h2>La fórmula de reconstitución (C1V1 = C2V2)</h2>
<p><strong>La concentración se define como la masa del soluto dividida por el volumen del disolvente. Al controlar el volumen de agua bacteriostática añadida, los investigadores dictan qué tan concentrado o diluido será el líquido resultante.</strong></p>
<p>La fórmula universal aplicada en este entorno de laboratorio es:</p>
<p>Concentración = Masa (mg) / Volumen (ml)</p>
<p>Si añade 2 ml de agua bacteriostática a un vial de 5 mg, su concentración resultante es de 2,5 mg por 1 ml. Dado que 2,5 mg equivalen a 2.500 mcg, una jeringa U-100 estándar (que contiene exactamente 1 ml dividida en 100 "marcas" o unidades) contendrá 25 mcg por marca.</p>
<p><img src="/wp-content/uploads/peptide-concentration-math-formula.jpg" alt="Diagrama de la fórmula que muestra la masa dividida por el volumen para determinar la concentración del péptido." title="Las matemáticas fundamentales detrás de toda la reconstitución de péptidos."></p>
<h3>Tabla de referencia estándar de volumen de agua a concentración</h3>
<p>El siguiente cuadro describe los rendimientos de concentración al mezclar un vial estándar de 5 mg y 10 mg con volúmenes variables de agua bacteriostática.</p>
<table>
<thead>
<tr>
<th>Tamaño del vial (Masa)</th>
<th>Agua Bac (Volumen)</th>
<th>mcg Totales en Vial</th>
<th>Rendimiento por 1ml</th>
<th>Rendimiento por marca U-100 (1/100 ml)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>5mg</strong></td>
<td>1ml</td>
<td>5,000 mcg</td>
<td>5,000 mcg</td>
<td>50 mcg</td>
</tr>
<tr>
<td><strong>5mg</strong></td>
<td>2ml</td>
<td>5,000 mcg</td>
<td>2,500 mcg</td>
<td>25 mcg</td>
</tr>
<tr>
<td><strong>5mg</strong></td>
<td>3ml</td>
<td>5,000 mcg</td>
<td>1,666 mcg</td>
<td>~16.6 mcg</td>
</tr>
<tr>
<td><strong>10mg</strong></td>
<td>1ml</td>
<td>10,000 mcg</td>
<td>10,000 mcg</td>
<td>100 mcg</td>
</tr>
<tr>
<td><strong>10mg</strong></td>
<td>2ml</td>
<td>10,000 mcg</td>
<td>5,000 mcg</td>
<td>50 mcg</td>
</tr>
<tr>
<td><strong>10mg</strong></td>
<td>3ml</td>
<td>10,000 mcg</td>
<td>3,333 mcg</td>
<td>~33.3 mcg</td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>Nota de Investigación:</strong> Estandarizar sus protocolos utilizando siempre 2 ml de agua bacteriostática para viales de 5 mg reduce enormemente la fricción de los cálculos en múltiples experimentos.</p>
</blockquote>
<h2>El Protocolo de Reconstitución de 4 Pasos de Belk Body Lab</h2>
<p>Para mantener la máxima estabilidad del compuesto y evitar su degradación, el manejo físico debe realizarse con precisión. La mezcla inadecuada puede destruir los frágiles enlaces peptídicos. Ya sea estudiando las propiedades regenerativas de BPC-157 o analizando los datos preclínicos de Retatrutide, los investigadores deben seguir este marco estandarizado.</p>
<h3>Paso 1: Preparación y Esterilización</h3>
<p>Comience estableciendo un ambiente limpio. Limpie los tapones de goma tanto del agua bacteriostática como del vial de péptido liofilizado con una toallita de alcohol isopropílico al 70%. Permita que el alcohol se evapore por completo. Asegúrese de que ambos viales hayan alcanzado la temperatura ambiente para evitar que la condensación afecte el disolvente.</p>
<h3>Paso 2: Igualar la presión (El efecto vacío)</h3>
<p>Los viales de péptidos se sellan bajo presión negativa (un vacío) para preservar la integridad estructural del polvo liofilizado durante el transporte. Antes de extraer el agua bacteriostática, introduzca aire en la jeringa igual al volumen de agua que pretende extraer. Inyecte este aire en el vial de agua bacteriostática para igualar la presión, lo que facilita enormemente la extracción del fluido de manera suave y sin burbujas de aire.</p>
<h3>Paso 3: Añadir agua bacteriostática</h3>
<p>Extraiga el volumen requerido de agua bacteriostática. Perfore el tapón de goma del vial de péptido en ángulo. <strong>No dispare el agua directamente sobre el polvo.</strong> El vacío dentro del vial arrastrará naturalmente el agua de la jeringa. Guíe la corriente por la pared interior de cristal del vial. El impacto directo puede romper los enlaces del péptido y causar una rápida degradación.</p>
<h3>Paso 4: Remolinar y Almacenar</h3>
<p>Una vez añadido el disolvente, retire la jeringa. <strong>Nunca agite el vial.</strong> La agitación crea estrés mecánico y aireación, lo que arruina el compuesto. En su lugar, haga rodar suavemente el vial entre los dedos hasta que el polvo se disuelva completamente y el líquido quede perfectamente claro. Una vez mezclado, el compuesto debe transferirse de inmediato a un refrigerador (entre 2°C y 8°C) para mantener la estabilidad.</p>
<h2>Los 5 errores principales en la reconstitución de péptidos</h2>
<p>Incluso los investigadores experimentados pueden comprometer sus estudios al descuidar los principios químicos básicos. Evite estos errores comunes de laboratorio:</p>
<ol>
<li><strong>Agitar en lugar de hacer remolinos:</strong> El corte mecánico por una agitación vigorosa descompone las cadenas de aminoácidos, haciendo que la solución sea inerte.</li>
<li><strong>Usar el agua equivocada:</strong> Depender del agua estéril básica en lugar del agua bacteriostática. El agua bacteriostática contiene un 0,9% de alcohol bencílico, que actúa como conservante para evitar el crecimiento bacteriano hasta por 28 días.</li>
<li><strong>Ignorar el desplazamiento:</strong> No tener en cuenta el ligero volumen que el polvo en sí añade al líquido. Aunque es menor en viales de 5 mg, el desplazamiento es importante en compuestos de alta masa.</li>
<li><strong>Forzar el émbolo:</strong> Inyectar agua con demasiada fuerza en el vial en lugar de dejar que el vacío tire suavemente del disolvente por la pared de cristal.</li>
<li><strong>Volver a congelar los péptidos reconstituidos:</strong> El polvo liofilizado debe almacenarse en el congelador, pero una vez reconstituido con líquido, la congelación destruirá la estructura del péptido. Los viales mixtos deben ir en el refrigerador.</li>
</ol>
<h2>Preguntas Frecuentes</h2>
<p>Consulte a continuación para encontrar respuestas a las preguntas más frecuentes sobre el cálculo y la reconstitución.</p>
<h2>Conclusión y próximos pasos</h2>
<blockquote>
<p><strong>Puntos clave:</strong><br>
* 1 mg de polvo liofilizado es siempre igual a 1.000 mcg.<br>
* La concentración está determinada enteramente por la cantidad de agua bacteriostática añadida al vial.<br>
* Nunca agite un vial; deje que el vacío tire el agua por la pared de vidrio, y gire suavemente para mezclar.<br>
* Siempre utilice una calculadora digital para verificar las matemáticas manuales antes de comenzar la investigación física.</p>
</blockquote>
<p>Dominar la reconstitución de péptidos requiere una estricta adherencia a los principios matemáticos y protocolos físicos de laboratorio. Al entender cómo manipular los volúmenes de solventes para lograr concentraciones de microgramos precisas, los investigadores eliminan variables y garantizan la integridad de sus datos.</p>
<p>No deje los parámetros de su estudio al azar o cálculo mental. Verifique sus proporciones de reconstitución instantáneamente usando la calculadora de péptidos. Para los laboratorios que buscan obtener materiales estrictamente probados y verificados por terceros, explore el catálogo completo de compuestos de investigación de alta pureza disponibles en 99 Purity Peptides.</p>`
};

const faqs = [
  {
    qEn: "What is a peptide calculator?",
    aEn: "A peptide calculator is a digital laboratory tool used to accurately convert milligrams to micrograms and determine exact syringe dosages based on the total mass of lyophilized powder and the volume of bacteriostatic water added.",
    qEs: "¿Qué es una calculadora de péptidos?",
    aEs: "Una calculadora de péptidos es una herramienta de laboratorio digital utilizada para convertir de manera precisa miligramos a microgramos y determinar las dosis exactas de jeringa en función de la masa total del polvo liofilizado y el volumen de agua bacteriostática añadida."
  },
  {
    qEn: "How much bacteriostatic water do I mix with 5mg of peptide?",
    aEn: "The standard laboratory protocol for a 5mg vial is to add 2ml of bacteriostatic water. This yields a concentration of 2.5mg per 1ml, making calculations on standard syringes straightforward (25mcg per tick).",
    qEs: "¿Cuánta agua bacteriostática mezclo con 5mg de péptido?",
    aEs: "El protocolo de laboratorio estándar para un vial de 5 mg es añadir 2 ml de agua bacteriostática. Esto produce una concentración de 2,5 mg por 1 ml, haciendo que los cálculos en jeringas estándar sean sencillos (25 mcg por marca)."
  },
  {
    qEn: "How much bacteriostatic water do I mix with 10mg of peptide?",
    aEn: "For a 10mg vial, researchers typically use 2ml of bacteriostatic water. This creates a dense concentration of 5mg per 1ml, meaning a single tick on a U-100 syringe will yield 50mcg.",
    qEs: "¿Cuánta agua bacteriostática mezclo con 10mg de péptido?",
    aEs: "Para un vial de 10 mg, los investigadores generalmente utilizan 2 ml de agua bacteriostática. Esto crea una concentración densa de 5 mg por 1 ml, lo que significa que una sola marca en una jeringa U-100 producirá 50 mcg."
  },
  {
    qEn: "What is the formula for peptide reconstitution?",
    aEn: "The baseline mathematical formula is Concentration = Mass / Volume. To determine the specific dose per syringe tick, researchers divide the total micrograms (mcg) in the vial by the total number of units (ticks) represented by the solvent volume.",
    qEs: "¿Cuál es la fórmula para la reconstitución de péptidos?",
    aEs: "La fórmula matemática básica es Concentración = Masa / Volumen. Para determinar la dosis específica por marca de jeringa, los investigadores dividen los microgramos totales (mcg) en el vial por el número total de unidades (marcas) representadas por el volumen del disolvente."
  },
  {
    qEn: "Can I use sterile water instead of bacteriostatic water?",
    aEn: "Sterile water can be used for immediate, single-use reconstitution. However, it lacks a preservative. Bacteriostatic water contains benzyl alcohol, which preserves the peptide and prevents bacterial growth, extending the mixed shelf life to roughly 28 days under refrigeration.",
    qEs: "¿Puedo usar agua estéril en lugar de agua bacteriostática?",
    aEs: "El agua estéril se puede utilizar para una reconstitución inmediata de un solo uso. Sin embargo, carece de conservante. El agua bacteriostática contiene alcohol bencílico, que conserva el péptido y previene el crecimiento bacteriano, extendiendo la vida útil de la mezcla a aproximadamente 28 días bajo refrigeración."
  },
  {
    qEn: "What is the difference between mg and mcg in peptides?",
    aEn: "Milligrams (mg) describe the total dry mass of the peptide inside the vial. Micrograms (mcg) are the smaller unit of measurement used to calculate the specific liquid dosage drawn for a study. 1mg equals 1,000mcg.",
    qEs: "¿Cuál es la diferencia entre mg y mcg en los péptidos?",
    aEs: "Los miligramos (mg) describen la masa seca total del péptido dentro del vial. Los microgramos (mcg) son la unidad de medida más pequeña que se utiliza para calcular la dosis líquida específica extraída para un estudio. 1 mg equivale a 1.000 mcg."
  },
  {
    qEn: "How many mcg are in a 5mg vial?",
    aEn: "There are exactly 5,000mcg in a 5mg vial.",
    qEs: "¿Cuántos mcg hay en un vial de 5 mg?",
    aEs: "Hay exactamente 5.000 mcg en un vial de 5 mg."
  },
  {
    qEn: "What happens if I add too much water to a peptide?",
    aEn: "Adding too much water does not damage the peptide or change the total mass of the compound in the vial. It simply dilutes the concentration, meaning the researcher must draw a larger volume of liquid into the syringe to achieve the desired microgram dose.",
    qEs: "¿Qué pasa si le agrego demasiada agua a un péptido?",
    aEs: "Añadir demasiada agua no daña el péptido ni cambia la masa total del compuesto en el vial. Simplemente diluye la concentración, lo que significa que el investigador debe extraer un mayor volumen de líquido en la jeringa para alcanzar la dosis deseada en microgramos."
  },
  {
    qEn: "What is lyophilized powder?",
    aEn: "Lyophilized powder is the solid, freeze-dried state of a peptide. The principles of lyophilization involve removing water under vacuum at low temperatures, maximizing the compound's stability and shelf life before reconstitution.",
    qEs: "¿Qué es el polvo liofilizado?",
    aEs: "El polvo liofilizado es el estado sólido y liofilizado de un péptido. Los principios de la liofilización implican eliminar el agua al vacío a bajas temperaturas, maximizando la estabilidad del compuesto y su vida útil antes de la reconstitución."
  },
  {
    qEn: "Where can I find an accurate peptide mixing calculator?",
    aEn: "Researchers can utilize the highly accurate, free digital calculator provided by 99 Purity Peptides to automatically verify all laboratory math and ensure protocol compliance.",
    qEs: "¿Dónde puedo encontrar una calculadora de mezcla de péptidos precisa?",
    aEs: "Los investigadores pueden utilizar la calculadora digital gratuita y altamente precisa proporcionada por 99 Purity Peptides para verificar automáticamente todas las matemáticas de laboratorio y garantizar el cumplimiento del protocolo."
  }
];

const faqsEn = faqs.map(f => ({ q: f.qEn, a: f.aEn }));
const faqsEs = faqs.map(f => ({ q: f.qEs, a: f.aEs }));

const postsTsPath = 'src/data/blog/posts.ts';
let postsContent = fs.readFileSync(postsTsPath, 'utf8');

// Find ID 25
const id25Idx = postsContent.lastIndexOf('id: "25"');
if (id25Idx === -1) {
    console.error("Could not find post id 25");
    process.exit(1);
}

const esStart = postsContent.indexOf('\\n  es: {', id25Idx);
if (esStart === -1) {
    console.error("Could not find '  es: {' block");
    process.exit(1);
}
// Include the newline in the index
const esActualStart = esStart + 1;

const faqsEsStart = postsContent.indexOf('    faqs: [', esActualStart);
const customSchemasEsStart = postsContent.indexOf('    customSchemas: [', faqsEsStart);
if (faqsEsStart === -1 || customSchemasEsStart === -1) {
    console.error("Could not find es block parts");
    process.exit(1);
}

const esReplacement = '  es: {\\n' +
'    title: ' + JSON.stringify(esTranslation.title) + ',\\n' +
'    excerpt: ' + JSON.stringify(esTranslation.excerpt) + ',\\n' +
'    metaTitle: ' + JSON.stringify(esTranslation.title) + ',\\n' +
'    metaDescription: ' + JSON.stringify(esTranslation.excerpt) + ',\\n' +
'    content: ' + JSON.stringify(esTranslation.htmlContent) + ',\\n' +
'    faqs: ' + JSON.stringify(faqsEs, null, 4).replace(/\\n/g, '\\n').replace(/"([^"]+)":/g, '$1:') + ',\\n';

postsContent = postsContent.substring(0, esActualStart) + esReplacement + postsContent.substring(customSchemasEsStart);

// Now update EN faqs (which appear before the es block)
const enStart = postsContent.indexOf('\\n  en: {', id25Idx);
if (enStart === -1) {
    console.error("Could not find '  en: {' block");
    process.exit(1);
}
const enFaqsStart = postsContent.indexOf('    faqs: [', enStart);
const enCustomSchemasStart = postsContent.indexOf('    customSchemas: [', enFaqsStart);

if (enFaqsStart === -1 || enCustomSchemasStart === -1) {
    console.error("Could not find en faqs block");
    process.exit(1);
}

const enFaqsReplacement = '    faqs: ' + JSON.stringify(faqsEn, null, 4).replace(/\\n/g, '\\n').replace(/"([^"]+)":/g, '$1:') + ',\\n';

postsContent = postsContent.substring(0, enFaqsStart) + enFaqsReplacement + postsContent.substring(enCustomSchemasStart);

fs.writeFileSync(postsTsPath, postsContent);
console.log("Updated Spanish translation and EN/ES FAQs for post 25");
