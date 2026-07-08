const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

(async () => {
  try {
    const dir = path.join(__dirname, 'img');
    const entries = await fs.readdir(dir);
    for (const file of entries) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.heic' || ext === '.heif') {
        const input = path.join(dir, file);
        const base = path.basename(file, ext);
        const out = path.join(dir, base + '.jpg');
        try {
          await sharp(input)
            .jpeg({ quality: 85 })
            .toFile(out);
          await fs.unlink(input);
          console.log(`Converted ${file} -> ${base}.jpg`);
        } catch (err) {
          console.error(`Failed to convert ${file}:`, err.message);
        }
      }
    }
    console.log('Conversion finished.');
  } catch (err) {
    console.error('Error scanning img folder:', err.message);
    process.exit(1);
  }
})();
