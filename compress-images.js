// Compress all images in ./images to under 4MB.
// Originals are backed up to ./originals/<same relative path> before modification.
// Run: node compress-images.js

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');

const TARGET      = 4 * 1024 * 1024;  // 4MB
const IMAGES_DIR  = path.join(__dirname, 'images');
const ORIG_DIR    = path.join(__dirname, 'originals');

async function processFile(fullPath) {
  const stat = fs.statSync(fullPath);
  if (stat.size <= TARGET) return;  // already under 4MB

  // Back up original before touching it
  const rel    = path.relative(IMAGES_DIR, fullPath);
  const backup = path.join(ORIG_DIR, rel);
  fs.mkdirSync(path.dirname(backup), { recursive: true });
  fs.copyFileSync(fullPath, backup);

  const ext   = path.extname(fullPath).toLowerCase();
  const isPng = ext === '.png';
  const meta  = await sharp(fullPath).metadata();
  let buf;

  if (isPng) {
    // PNGs: lossless-only, shrink dimensions progressively
    for (const scale of [1.0, 0.75, 0.5, 0.35]) {
      const w = Math.round(meta.width  * scale);
      const h = Math.round(meta.height * scale);
      buf = await sharp(fullPath)
        .resize(w, h, { withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toBuffer();
      if (buf.length <= TARGET) break;
    }
  } else {
    // JPEGs: clamp long-edge to 3840 first if oversized, then step quality down
    const maxEdge    = Math.max(meta.width, meta.height);
    const resizeOpts = maxEdge > 3840
      ? { width: 3840, height: 3840, fit: 'inside', withoutEnlargement: true }
      : null;

    for (const q of [85, 75, 65, 55]) {
      let pipe = sharp(fullPath);
      if (resizeOpts) pipe = pipe.resize(resizeOpts);
      buf = await pipe.jpeg({ quality: q, mozjpeg: true }).toBuffer();
      if (buf.length <= TARGET) break;

      // Quality 55 still too big — also shrink to 2560 long-edge
      if (q === 55 && buf.length > TARGET) {
        buf = await sharp(fullPath)
          .resize(2560, 2560, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 65, mozjpeg: true })
          .toBuffer();
        break;
      }
    }
  }

  const tmp = fullPath + '.tmp';
  fs.writeFileSync(tmp, buf);
  try {
    fs.unlinkSync(fullPath);
    fs.renameSync(tmp, fullPath);
  } catch (e) {
    // Clean up tmp and skip — file may be locked
    try { fs.unlinkSync(tmp); } catch {}
    console.warn(`SKIPPED (locked): ${rel}`);
    return;
  }
  const before = Math.round(stat.size   / 1024);
  const after  = Math.round(buf.length  / 1024);
  console.log(`${rel}  ${before}KB → ${after}KB`);
}

async function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory())              { await walkDir(full); continue; }
    if (/\.(jpe?g|png)$/i.test(entry.name)) await processFile(full);
  }
}

walkDir(IMAGES_DIR)
  .then(() => console.log('\nDone.'))
  .catch(err => { console.error(err); process.exit(1); });
