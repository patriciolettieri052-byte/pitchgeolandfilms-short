import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error(`Directory not found: ${assetsDir}`);
  process.exit(1);
}

console.log(`Scanning assets directory: ${assetsDir}`);
const files = fs.readdirSync(assetsDir);
const mp4Files = files.filter(f => f.toLowerCase().endsWith('.mp4'));

if (mp4Files.length === 0) {
  console.log('No .mp4 files found.');
  process.exit(0);
}

let successCount = 0;
let skippedCount = 0;
let failedCount = 0;

for (const file of mp4Files) {
  const mp4Path = path.join(assetsDir, file);
  const jpgName = file.replace(/\.mp4$/i, '.jpg');
  const jpgPath = path.join(assetsDir, jpgName);

  console.log(`Extracting frame at 1.5s from ${file}...`);
  try {
    // -ss 00:00:01.5 extracts at 1.5 seconds to avoid black/blank frames at the very start
    execSync(`ffmpeg -y -i "${mp4Path}" -ss 00:00:01.5 -vframes 1 -f image2 "${jpgPath}"`, { stdio: 'ignore' });
    
    if (fs.existsSync(jpgPath)) {
      console.log(`Successfully generated: ${jpgName}`);
      successCount++;
    } else {
      console.error(`FAILED to generate: ${jpgName}`);
      failedCount++;
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
    failedCount++;
  }
}

console.log('\n--- RESULTS ---');
console.log(`Total MP4 files: ${mp4Files.length}`);
console.log(`Successfully generated: ${successCount}`);
console.log(`Skipped (already exist): ${skippedCount}`);
console.log(`Failed: ${failedCount}`);
