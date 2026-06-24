import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'data', 'slides.ts');

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// 1. Add "pricing" to SlideData variant union type
content = content.replace(
  /variant\?:\s*"subtitulo"[\s\S]*?"validation-hud";/,
  (match) => {
    return match.replace('"market"', '"market" | "pricing"');
  }
);

// 2. Shift all IDs from 39 onwards up by 1
content = content.replace(/id:\s*(\d+)/g, (match, idStr) => {
  const id = parseInt(idStr, 10);
  if (id >= 39) {
    return `id: ${id + 1}`;
  }
  return match;
});

// 3. Locate slide 38 block and insert the new slide 39 right after it
const searchRegex = /(id:\s*38,[\s\S]*?variant:\s*"titulo-grande",[\s\S]*?backgroundMedia:\s*"",[\s\S]*?overlayOpacity:\s*0\s*\},)/;

const insertText = `\n  {\n    id: 39,\n    title: "",\n    text: "",\n    variant: "pricing",\n    backgroundMedia: "",\n    overlayOpacity: 0\n  },`;

if (!searchRegex.test(content)) {
  console.error('Could not find the PRICING slide (id: 38) in slides.ts');
  process.exit(1);
}

content = content.replace(searchRegex, `$1${insertText}`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Slides successfully shifted and pricing cards slide (id: 39) inserted!');
