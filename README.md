# GEOLAND Films · Pitch Presentation

Presentación interactiva y cinemática en formato web para **GEOLAND Films** (Decision System for Film Production). Diseñada con una estética HUD cinemática premium y animaciones fluidas de alta fidelidad.

## 🚀 Despliegue Automático (GitHub Pages)

Este repositorio está preconfigurado con una GitHub Action para desplegarse automáticamente.
1. Al subir los cambios a la rama `main`, la GitHub Action compilará el proyecto y lo publicará en la rama `gh-pages`.
2. Podrás acceder a la presentación desde: `https://<tu-usuario-de-github>.github.io/pitchgeolandfilms-short/`

---

## 💻 Ejecución Local

Para correr la presentación en tu máquina local:

1. **Navega a la carpeta del proyecto:**
   ```bash
   cd output/geoland-presentation
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Visualiza la presentación:**
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🛠️ Tecnologías Utilizadas

- **Core:** React 19 + TypeScript + Vite
- **Estilos y Animaciones:** Framer Motion (para transiciones cinemáticas) + Tailwind CSS + Vanilla CSS (estilos HSL personalizados de HUD y Bokeh animado)
- **Componentes HUD Especiales:**
  - `ValidationHud`: Módulo HUD interactivo con cálculo de Payment Ratio.
  - `AdvisorsHud`: Lista modular de asesores y early users.
  - `RoadmapCinematic`: Cronograma cinemático con vista táctica interactiva.

---

## 🗂️ Estructura del Proyecto

- `output/geoland-presentation/`: Código fuente de la aplicación React.
  - `src/components/`: Componentes interactivos HUD, diagramas, redes neuronales y vistas.
  - `src/data/slides.ts`: Definición de los slides, textos e imágenes de la presentación.
  - `public/`: Assets estáticos de video, imágenes y logos de la presentación.
- `.github/workflows/deploy.yml`: Automatización del despliegue en GitHub Pages.

---
*Desarrollado con criterio premium para GEOLAND.*