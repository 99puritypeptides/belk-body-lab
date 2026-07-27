const fs = require('fs');
const translate = require('google-translate-api-x');

async function main() {
    const text = fs.readFileSync('blogB.md', 'utf8');
    const chunks = text.split('\n');
    let translatedChunks = new Array(chunks.length).fill("");
    
    // Google Translate API X supports batching arrays!
    let batchSize = 10;
    
    for (let i = 0; i < chunks.length; i += batchSize) {
        let batch = chunks.slice(i, i + batchSize);
        // Map empty strings to space to avoid issues
        batch = batch.map(c => c.trim() ? c.trim() : " "); 
        try {
            const res = await translate(batch, { to: 'es', rejectOnPartialFail: false });
            for (let j = 0; j < batch.length; j++) {
                if (batch[j] === " ") {
                     translatedChunks[i + j] = "";
                } else if (res[j]) {
                     translatedChunks[i + j] = res[j].text;
                } else {
                     translatedChunks[i + j] = batch[j];
                }
            }
        } catch (e) {
            console.error("Batch error at index", i, e.message);
            for (let j = 0; j < batch.length; j++) {
                translatedChunks[i + j] = batch[j];
            }
        }
        console.log(`Translated up to ${Math.min(i + batchSize, chunks.length)}/${chunks.length}`);
    }
    
    fs.writeFileSync('blogB_es.md', translatedChunks.join('\n'));
    console.log("Translation complete!");
}

main();
