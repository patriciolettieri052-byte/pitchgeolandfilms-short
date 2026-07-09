export interface SlideData {
  id: number;
  title?: string;
  overline?: string;
  text: string;
  backgroundMedia: string;
  isTitleBlue?: boolean;
  overlayOpacity?: number;
  isBold?: boolean;
  isItalic?: boolean;
  titleSize?: string;
  variant?: "subtitulo" | "titulo" | "portada" | "portada81" | "portadafinal" | "texto" | "barras" | "barras-pro" | "apertura" | "apertura2" | "hub" | "backtest-stats" | "backtest-cities" | "numeric" | "business-units" | "reviews" | "neural-map" | "titulo-grande" | "titulo-chico" | "advisors" | "roadmap" | "soluciones-grid" | "diagrama-fuentes" | "diagrama-expansion" | "market" | "pricing" | "texto-arriba" | "titulo-cuerpo-bold" | "validation-hud" | "how-it-works-hud" | "case-study-hud" | "financial-hud" | "round-hud" | "problem-hud-1" | "problem-hud-2" | "problem-hud-3" | "problem-hud-4" | "problem-hud-5" | "idea-hud" | "vision-cards";
  align?: "left" | "center" | "right" | "center-left";
  maxWidth?: string;
  ctaUrl?: string;
  ctaText?: string;
  footer?: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "THE PROBLEM",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 80,
    titleSize: "small"
  },
  {
    id: 2,
    text: "",
    variant: "problem-hud-1",
    backgroundMedia: "3.mp4",
    overlayOpacity: 80
  },
  {
    id: 3,
    text: "",
    variant: "problem-hud-3",
    backgroundMedia: "3.mp4",
    overlayOpacity: 80
  },
  {
    id: 4,
    text: "",
    variant: "problem-hud-2",
    backgroundMedia: "3.mp4",
    overlayOpacity: 80
  },
  {
    id: 5,
    text: "",
    variant: "problem-hud-4",
    backgroundMedia: "3.mp4",
    overlayOpacity: 80
  },
  {
    id: 6,
    text: "",
    variant: "problem-hud-5",
    backgroundMedia: "3.mp4",
    overlayOpacity: 80
  },
  {
    id: 7,
    title: "THE IDEA",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 80,
    titleSize: "small"
  },
  {
    id: 8,
    text: "",
    variant: "idea-hud",
    backgroundMedia: "29.png",
    overlayOpacity: 75
  },
  {
    id: 9,
    text: "",
    variant: "how-it-works-hud",
    backgroundMedia: "14.mp4",
    overlayOpacity: 85
  },
  {
    id: 10,
    title: "FUENTES DE DATOS DEL SISTEMA",
    text: "Toda esta información se cruza con el PSV para recomendar qué locación conviene,<br/>por qué, con qué riesgos, a qué coste y cómo hacerla filmable.",
    variant: "diagrama-fuentes",
    backgroundMedia: "17.mp4",
    overlayOpacity: 85
  },
  {
    id: 11,
    text: "",
    variant: "case-study-hud",
    backgroundMedia: "caso_bcn_1.mp4",
    overlayOpacity: 80
  },
  {
    id: 12,
    text: "",
    variant: "validation-hud",
    backgroundMedia: "53.png",
    overlayOpacity: 80
  },
  {
    id: 13,
    text: "",
    variant: "market",
    backgroundMedia: "9.png",
    overlayOpacity: 85
  },
  {
    id: 14,
    title: "LAS SOLUCIONES ACTUALES<br/>RESUELVEN PARTES AISLADAS DEL PROCESO",
    text: "ShotDeck | Solo referencias visuales ;; Set Scouter | Marketplace de locaciones ;; StudioBinder | Planificación de producción ;; Wrapbook | Payroll y operaciones ;; Reel-Scout | Solo bases de locaciones ;; GEOLAND | Decisión operacional completa: visual + costes + permisos + riesgo + activación",
    variant: "soluciones-grid",
    backgroundMedia: "20.mp4",
    overlayOpacity: 85
  },
  {
    id: 15,
    text: "",
    variant: "pricing",
    backgroundMedia: "8.mp4",
    overlayOpacity: 85
  },
  {
    id: 16,
    overline: "VISIÓN",
    title: "BUILT TO SCALE.<br/>ONE SYSTEM. MULTIPLE INDUSTRIES.",
    text: "Real Estate & Farmland | ROI/IRR/NOI, riesgo macro, comparables y timing de mercado. ;; Aviation & Aeronautics | Rutas, clima operativo, mantenimiento y riesgo operativo. ;; Logistics & Supply Chain | Puertos, congestión, riesgo geopolítico y eficiencia. ;; Retail Expansion | Demografía, tráfico, competencia y expansión multi-ciudad.",
    variant: "vision-cards",
    backgroundMedia: "43.mp4",
    overlayOpacity: 80
  },
  {
    id: 17,
    title: "",
    text: `<div class='flex flex-col md:flex-row print:flex-row gap-16 justify-center items-start w-full max-w-[1200px] mx-auto mt-4'><div class='flex flex-col items-center text-center w-full md:w-1/3 print:w-1/3'><div class='scale-[1.15] origin-top print:scale-100 mb-8'><img src='team/pepe_transparent.png' class='w-48 h-48 md:w-56 md:h-56 print:w-56 print:h-56 object-cover object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.7rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>José Luis Curcio</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder, Product Vision & Strategy</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm leading-relaxed font-light text-center max-w-[300px] mx-auto'>18+ años en campañas globales (Coca-Cola, Ford, Samsung); origen directo de GEOLAND.</p></div><div class='flex flex-col items-center text-center w-full md:w-1/3 print:w-1/3'><img src='team/pato_transparent.png' class='w-48 h-48 md:w-56 md:h-56 print:w-56 print:h-56 object-cover object-top mb-8 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /><h3 style="font-family:'League Gothic',sans-serif;font-size:1.7rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>Patricio Lettieri</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder - Data Infrastructure</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm leading-relaxed font-light text-center max-w-[300px] mx-auto'>15+ años en marketing analytics e IA aplicada para marcas como John Deere y Porsche.</p></div><div class='flex flex-col items-center text-center w-full md:w-1/3 print:w-1/3'><img src='team/damian_transparent.png' class='w-48 h-48 md:w-56 md:h-56 print:w-56 print:h-56 object-cover object-top mb-8 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /><h3 style="font-family:'League Gothic',sans-serif;font-size:1.7rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>Damián Scheck</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder & CTO</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm leading-relaxed font-light text-center max-w-[300px] mx-auto'>CTO de Mythology Labs; lidera arquitectura técnica y escalabilidad de la plataforma.</p></div></div>`,
    variant: "texto",
    backgroundMedia: "3.mp4",
    overlayOpacity: 85,
    align: "center",
    maxWidth: "1400px"
  },
  {
    id: 18,
    title: "",
    text: `<div class='flex flex-col md:flex-row print:flex-row gap-16 justify-center items-start w-full max-w-[1200px] mx-auto mt-4'><div class='flex flex-col items-center text-center w-full md:w-1/2 print:w-1/2'><div class='scale-[1.25] origin-top print:scale-100 mb-8'><img src='team/juancarlos_transparent.png' class='w-48 h-48 md:w-56 md:h-56 print:w-56 print:h-56 object-cover object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.7rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>Juan Carlos Casalderrey</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder & Engineering Strategy</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm leading-relaxed font-light text-center max-w-[350px] mx-auto'>Arquitecto de sistemas y co-founder de Mythology Labs.</p></div><div class='flex flex-col items-center text-center w-full md:w-1/2 print:w-1/2'><div class='scale-[1.12] origin-top print:scale-100 mb-8'><img src='team/oliver_transparent.png' class='w-48 h-48 md:w-56 md:h-56 print:w-56 print:h-56 object-cover object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.7rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>Oliver Garland</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder & Industry Strategy Vision</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm leading-relaxed font-light text-center max-w-[350px] mx-auto'>Founder de Olga Lee y Mamma Team. 25+ años produciendo campañas AAA globales.</p></div></div>`,
    variant: "texto",
    backgroundMedia: "3.mp4",
    overlayOpacity: 85,
    align: "center",
    maxWidth: "1400px"
  },
  {
    id: 19,
    text: "",
    variant: "financial-hud",
    backgroundMedia: "7.mp4",
    overlayOpacity: 80
  },
  {
    id: 20,
    text: "",
    variant: "round-hud",
    backgroundMedia: "round.png",
    overlayOpacity: 85
  },
  {
    id: 21,
    overline: "CIERRE",
    title: "",
    text: "Let's talk.",
    variant: "titulo-grande",
    backgroundMedia: "portada2.mp4",
    overlayOpacity: 75,
    align: "center"
  }
];
