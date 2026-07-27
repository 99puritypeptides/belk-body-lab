const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceDir = 'C:\\Users\\aquib\\.gemini\\antigravity-ide\\brain\\34a45486-5152-41bd-9a30-ecf4e4d783d2';
const destBaseDir = 'f:\\Belk Digital Projects\\belk-body-lab\\public\\images\\blog';

const mapping = {
  // Belly Fat
  'belly_fat_hero_clean_1780695674793.png': 'belly-fat/belly-fat-guide-hero.webp',
  'visceral_fat_diagram_clean_1780695686835.png': 'belly-fat/visceral-fat-vs-subcutaneous-fat-sc.webp',
  'strength_training_clean_1780695697967.png': 'belly-fat/strength-training-belly-fat-charleston.webp',
  'protein_diet_clean_1780695710082.png': 'belly-fat/protein-diet-belly-fat-sc.webp',
  'belly_fat_timeline_clean_1780695721626.png': 'belly-fat/belly-fat-loss-timeline-sc.webp',

  // Trainer Cost
  'trainer_cost_hero_clean_1780695753768.png': 'trainer-cost/personal-trainer-cost-charleston-hero.webp',
  'in_person_vs_online_clean_1780695765509.png': 'trainer-cost/in-person-vs-online-coaching-cost.webp',
  'trainer_value_clean_1780695776891.png': 'trainer-cost/personal-training-value-charleston.webp',
  'training_packages_clean_1780695789648.png': 'trainer-cost/personal-training-packages-sc.webp'
};

async function convertImages() {
  for (const [srcFile, destRelative] of Object.entries(mapping)) {
    const srcPath = path.join(sourceDir, srcFile);
    const destPath = path.join(destBaseDir, destRelative);
    
    // Ensure destination directory exists
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    try {
      await sharp(srcPath)
        .webp({ quality: 80 })
        .toFile(destPath);
      console.log(`Converted: ${srcFile} -> ${destRelative}`);
    } catch (err) {
      console.error(`Failed to convert ${srcFile}:`, err);
    }
  }
}

convertImages();
