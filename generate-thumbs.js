const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'img');
const outputDir = path.join(inputDir, 'thumbs');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir)
  .filter((f) => /\.(jpg|jpeg|png|webp|mp4)$/i.test(f))
  .filter((f) => !f.startsWith('.'));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file).toLowerCase();
  if (ext === '.mp4') continue;

  const outputPath = path.join(outputDir, file.replace(ext, '.jpg'));
  sharp(inputPath)
    .resize({ width: 800, height: 800, fit: 'cover', withoutEnlargement: true })
    .jpeg({ quality: 70 })
    .toFile(outputPath)
    .then(() => console.log(`Created thumb: ${path.basename(outputPath)}`))
    .catch((err) => console.error(`Failed: ${file}`, err.message));
}
