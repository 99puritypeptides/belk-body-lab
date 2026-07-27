const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'f:/Belk Digital Projects/belk-body-lab/public/images/blog/belly-fat';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function convert() {
  await sharp('C:/Users/aquib/.gemini/antigravity-ide/brain/34a45486-5152-41bd-9a30-ecf4e4d783d2/belly_fat_hero_1780692085336.png')
    .webp()
    .toFile(path.join(dir, 'belly-fat-guide-hero.webp'));

  await sharp('C:/Users/aquib/.gemini/antigravity-ide/brain/34a45486-5152-41bd-9a30-ecf4e4d783d2/visceral_fat_diagram_1780692096066.png')
    .webp()
    .toFile(path.join(dir, 'visceral-vs-subcutaneous-fat.webp'));

  await sharp('C:/Users/aquib/.gemini/antigravity-ide/brain/34a45486-5152-41bd-9a30-ecf4e4d783d2/strength_training_1780692109521.png')
    .webp()
    .toFile(path.join(dir, 'strength-training-fat-loss-charleston.webp'));

  await sharp('C:/Users/aquib/.gemini/antigravity-ide/brain/34a45486-5152-41bd-9a30-ecf4e4d783d2/meal_prep_1780692121105.png')
    .webp()
    .toFile(path.join(dir, 'high-protein-meal-prep-sc.webp'));
  
  console.log("Conversion complete");
}

convert().catch(console.error);
