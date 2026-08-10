const fs = require('fs');

function markdownToHtml(mdText) {
    const lines = mdText.split('\n');
    let html = '';
    let inList = false;
    let inTable = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line === '') continue;

        // Skip internal stuff
        if (line.startsWith('BELK BODY LAB') || line.startsWith('Publication Appendix') || line.startsWith('Internal reference')) {
            continue;
        }

        // Headers
        if (line === 'QUICK ANSWER' || line === 'SUMMARY' || line === 'Key Takeaways' || line === 'Further Reading and Tools') {
            html += `\n<h2>${line}</h2>\n`;
            continue;
        }

        if (line.match(/^[A-Z\s]+$/) && line.length > 5) {
             html += `\n<h2>${line}</h2>\n`;
             continue;
        }

        // Bullet lists
        if (line.startsWith('•')) {
            if (!inList) { html += '<ul>\n'; inList = true; }
            html += `  <li>${line.substring(1).trim()}</li>\n`;
            continue;
        } else {
            if (inList) { html += '</ul>\n'; inList = false; }
        }
        
        // Numbered lists
        if (line.match(/^\d+\./)) {
             if (!inList) { html += '<ol>\n'; inList = true; }
             html += `  <li>${line.replace(/^\d+\./, '').trim()}</li>\n`;
             continue;
        } else {
             if (inList && html.endsWith('</li>\n') && !lines[i-1].trim().startsWith('•')) { html += '</ol>\n'; inList = false; }
        }

        // H1 or H2 detection for specific lines
        if (line.startsWith('The Complete Guide to Peptide Reconstitution:')) {
            html += `\n<h1>${line}</h1>\n`;
            continue;
        }

        if (line.startsWith('Reviewed for mathematical accuracy')) {
            html += `\n<p><em>${line}</em></p>\n`;
            continue;
        }

        if (line.startsWith('What this guide covers') || line.startsWith('What Peptide Reconstitution Actually Is') || line.startsWith('Why Reconstitution Math Goes Wrong') || line.startsWith('Units: mg, mcg, ml, cc and Syringe Units') || line.startsWith('The Concentration Formula') || line.startsWith('Concentration Reference Table') || line.startsWith('Dilution: The C₁V₁ = C₂V₂ Relationship') || line.startsWith('Bacteriostatic Water Versus Sterile Water') || line.startsWith('Powder Displacement:') || line.startsWith('The Belk Body Lab 3-Step Protocol') || line.startsWith('Stability, Storage and Degradation Chemistry') || line.startsWith('Troubleshooting') || line.startsWith('The Most Common Reconstitution Mistakes') || line.startsWith('Frequently Asked Questions')) {
             html += `\n<h2>${line}</h2>\n`;
             continue;
        }
        
        if (line.startsWith('Step 1') || line.startsWith('Step 2') || line.startsWith('Step 3') || line.startsWith('The x10 Rule:') || line.startsWith('Why 2 ml is a common default') || line.startsWith('When benzyl alcohol is a problem') || line.startsWith('The solution is cloudy') || line.startsWith('Dissolution is very slow') || line.startsWith('The powder dissolved instantly') || line.startsWith('There is no vacuum in the vial') || line.startsWith('The puck appears shrunken')) {
             html += `\n<h3>${line}</h3>\n`;
             continue;
        }

        // Bold text handling
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Formula blocks
        if (line.includes(' = ') && (line.includes('÷') || line.includes('×')) && !line.includes('?')) {
             html += `\n<p class="text-center font-bold text-xl my-6">${line}</p>\n`;
             continue;
        }

        // FAQ questions
        if (line.endsWith('?')) {
             html += `\n<p><strong>${line}</strong></p>\n`;
             continue;
        }

        html += `\n<p>${line}</p>\n`;
    }
    
    if (inList) html += '</ul>\n';
    return html;
}

const enText = fs.readFileSync('blogB.md', 'utf8');
const esText = fs.readFileSync('blogB_es.md', 'utf8');

const enHtml = markdownToHtml(enText);
const esHtml = markdownToHtml(esText);

fs.writeFileSync('english_content26.js', 'module.exports = `\n' + enHtml.replace(/`/g, '\\`') + '\n`;');
fs.writeFileSync('spanish_content26.js', 'module.exports = `\n' + esHtml.replace(/`/g, '\\`') + '\n`;');
console.log("HTML generation complete!");
