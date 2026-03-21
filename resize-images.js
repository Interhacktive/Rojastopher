// Resize all images in ./photos to a max of 3840x2160, in-place.
// Run once: node resize-images.js
// Requires: npm install sharp

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');

const MAX_W = 3840;
const MAX_H = 2160;

async function resizeDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { await resizeDir(full); continue; }
    if (!/\.(jpe?g|png)$/i.test(entry.name)) continue;

    const meta = await sharp(full).metadata();
    if (meta.width <= MAX_W && meta.height <= MAX_H) continue;

    console.log(`Resizing: ${full}  (${meta.width}x${meta.height} → max ${MAX_W}x${MAX_H})`);
    const tmp = full + '.tmp';
    await sharp(full)
      .resize(MAX_W, MAX_H, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(tmp);
    fs.renameSync(tmp, full);
  }
}

resizeDir(path.join(__dirname, 'photos'))
  .then(() => console.log('Done.'))
  .catch(err => { console.error(err); process.exit(1); });
