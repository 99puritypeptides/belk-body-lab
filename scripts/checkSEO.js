const checkSEO = async (url) => {
  const r = await fetch(url);
  const t = await r.text();
  console.log('Checking', url);
  console.log('Canonical:', t.includes('rel="canonical"'));
  console.log('Hreflang (en):', t.includes('hreflang="en"'));
  console.log('Hreflang (es):', t.includes('hreflang="es"'));
  console.log('Schema:', t.includes('application/ld+json'));
  console.log('---');
};
(async () => {
  await checkSEO('http://localhost:4028/blog/peptide-calculator-guide');
  await checkSEO('http://localhost:4028/blog/peptide-reconstitution-calculator-guide');
  await checkSEO('http://localhost:4028/es/blog/peptide-calculator-guide');
  await checkSEO('http://localhost:4028/es/blog/peptide-reconstitution-calculator-guide');
})();
