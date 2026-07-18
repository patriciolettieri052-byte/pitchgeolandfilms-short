import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

(async () => {
  console.log('Lanzando Puppeteer...');
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();

  // Aumentar deviceScaleFactor para evitar bordes serruchados (anti-aliasing)
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2 // Esto simula una pantalla Retina (mayor densidad de píxeles)
  });

  console.log('Navegando a http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });

  // Forzar un mejor renderizado de fuentes
  await page.addStyleTag({
    content: `
      * {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
        text-rendering: optimizeLegibility !important;
      }
      ::-webkit-scrollbar {
        display: none;
      }
      body {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `
  });

  const numSlides = 36;
  
  for (let i = 1; i <= numSlides; i++) {
    console.log(`Capturando slide ${i}...`);
    // Esperar a que terminen posibles animaciones (1.5 segundos)
    await new Promise(r => setTimeout(r, 1500));
    
    await page.screenshot({
      path: path.join(screenshotsDir, `slide_${i.toString().padStart(2, '0')}.png`),
      type: 'png' // PNG tiene mejor calidad que JPEG para texto
    });

    // Avanzar a la siguiente slide
    await page.keyboard.press('ArrowRight');
  }

  await browser.close();
  console.log('Capturas completadas exitosamente.');
})();
