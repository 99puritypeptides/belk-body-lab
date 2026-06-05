const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\aquib\\.gemini\\antigravity-ide\\brain\\34a45486-5152-41bd-9a30-ecf4e4d783d2';
const targetDir = 'public/images/blog/trainer-cost';

const filesToConvert = [];

// Find the latest generated images by looking at the files in the brain dir
const allFiles = fs.readdirSync(brainDir);

const heroFiles = allFiles.filter(f => f.startsWith('trainer_cost_hero_') && f.endsWith('.png'));
if (heroFiles.length > 0) {
    const latest = heroFiles.sort().pop();
    filesToConvert.push({ src: path.join(brainDir, latest), dest: path.join(targetDir, 'personal-trainer-cost-charleston-hero.webp') });
}

const inPersonFiles = allFiles.filter(f => f.startsWith('in_person_vs_online_') && f.endsWith('.png'));
if (inPersonFiles.length > 0) {
    const latest = inPersonFiles.sort().pop();
    filesToConvert.push({ src: path.join(brainDir, latest), dest: path.join(targetDir, 'in-person-vs-online-coaching-cost.webp') });
}

const valueFiles = allFiles.filter(f => f.startsWith('trainer_value_') && f.endsWith('.png'));
if (valueFiles.length > 0) {
    const latest = valueFiles.sort().pop();
    filesToConvert.push({ src: path.join(brainDir, latest), dest: path.join(targetDir, 'personal-training-value-charleston.webp') });
}

const packageFiles = allFiles.filter(f => f.startsWith('training_packages_') && f.endsWith('.png'));
if (packageFiles.length > 0) {
    const latest = packageFiles.sort().pop();
    filesToConvert.push({ src: path.join(brainDir, latest), dest: path.join(targetDir, 'personal-training-packages-sc.webp') });
}

async function convert() {
    for (const file of filesToConvert) {
        await sharp(file.src).webp({ quality: 80 }).toFile(file.dest);
        console.log(`Converted ${path.basename(file.src)} to ${path.basename(file.dest)}`);
    }
}

convert().catch(console.error);
