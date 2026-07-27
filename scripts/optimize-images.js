/**
 * Audits every inline blog <img> referenced in src/data/blog/posts.ts,
 * reports size/dimensions, and (with --write) re-compresses any file
 * over a size threshold in place, at the same path/format, preserving
 * pixel dimensions and visual quality (no resizing, high-quality encode).
 *
 * This intentionally avoids next/image — compression happens locally so
 * Vercel's on-demand image optimization (rate-limited on Hobby plans)
 * is never invoked for these assets.
 *
 * Usage:
 *   node scripts/optimize-images.js            # audit only, no changes
 *   node scripts/optimize-images.js --write    # compress oversized files
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const WRITE = process.argv.includes('--write');
const SIZE_THRESHOLD_KB = 250; // only recompress files above this

const src = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
const re = /<img src=\\?"([^"\\]+)\\?"/g;
let m;
const set = new Set();
while ((m = re.exec(src))) set.add(m[1]);

async function run() {
  const rows = [];
  for (const s of set) {
    const p = path.join('public', s);
    if (!fs.existsSync(p)) {
      rows.push({ src: s, missing: true });
      continue;
    }
    const before = fs.statSync(p).size;
    const meta = await sharp(p).metadata();
    let after = before;

    if (WRITE && before / 1024 > SIZE_THRESHOLD_KB) {
      const buf = fs.readFileSync(p);
      let pipeline = sharp(buf);
      if (meta.format === 'png') {
        pipeline = pipeline.png({ quality: 85, compressionLevel: 9, palette: true });
      } else if (meta.format === 'webp') {
        pipeline = pipeline.webp({ quality: 85 });
      } else if (meta.format === 'jpeg' || meta.format === 'jpg') {
        pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
      } else {
        pipeline = null; // unknown format, skip
      }
      if (pipeline) {
        const out = await pipeline.toBuffer();
        // Only overwrite if we actually saved meaningful space
        if (out.length < before * 0.95) {
          fs.writeFileSync(p, out);
          after = out.length;
        }
      }
    }

    rows.push({
      src: s,
      w: meta.width,
      h: meta.height,
      format: meta.format,
      beforeKB: Math.round(before / 1024),
      afterKB: Math.round(after / 1024),
    });
  }

  rows.sort((a, b) => (b.beforeKB || 0) - (a.beforeKB || 0));
  let totalBefore = 0, totalAfter = 0;
  for (const r of rows) {
    if (r.missing) {
      console.log(`MISSING\t${r.src}`);
      continue;
    }
    totalBefore += r.beforeKB;
    totalAfter += r.afterKB;
    const changed = r.beforeKB !== r.afterKB ? `  -> ${r.afterKB}KB` : '';
    console.log(`${r.beforeKB}KB${changed}\t${r.w}x${r.h}\t${r.format}\t${r.src}`);
  }
  console.log(`\nTotal: ${totalBefore}KB -> ${totalAfter}KB (${WRITE ? 'written' : 'DRY RUN — pass --write to apply'})`);

  fs.writeFileSync(
    path.join(__dirname, '.image-audit.json'),
    JSON.stringify(rows, null, 2)
  );
}

run();
