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

// 1. Shift all IDs from 38 onwards up by 1
content = content.replace(/id:\s*(\d+)/g, (match, idStr) => {
  const id = parseInt(idStr, 10);
  if (id >= 38) {
    return `id: ${id + 1}`;
  }
  return match;
});

// 2. Locate slide 37 block and insert the new slide 38 right after it
const searchRegex = /(id:\s*37,[\s\S]*?variant:\s*"market",[\s\S]*?backgroundMedia:\s*"",[\s\S]*?overlayOpacity:\s*0\s*\},)/;

const insertText = `\n  {\n    id: 38,\n    title: "PRICING",\n    text: "",\n    variant: "titulo-grande",\n    backgroundMedia: "",\n    overlayOpacity: 0\n  },`;

if (!searchRegex.test(content)) {
  console.error('Could not find the TAM/SAM/SOM slide (id: 37) in slides.ts');
  process.exit(1);
}

content = content.replace(searchRegex, `$1${insertText}`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Slides successfully shifted and new "PRICING" slide inserted!');
