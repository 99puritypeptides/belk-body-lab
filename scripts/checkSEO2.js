const checkSEO = async (url) => {
  const r = await fetch(url);
  const t = await r.text();
  console.log('Checking', url);
  const m1 = t.match(/<link[^>]*rel="canonical"[^>]*>/gi);
  const m2 = t.match(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi);
  console.log('Canonical:', m1);
  console.log('Schema:', m2 ? m2.map(s => s.substring(0, 150) + '...') : null);
  console.log('---');
};
(async () => {
  await checkSEO('http://localhost:4028/blog/peptide-calculator-guide');
  await checkSEO('http://localhost:4028/blog/peptide-reconstitution-calculator-guide');
})();
