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
  variant?: "subtitulo" | "titulo" | "portada" | "portada81" | "portadafinal" | "texto" | "barras" | "barras-pro" | "apertura" | "apertura2" | "hub" | "backtest-stats" | "backtest-cities" | "numeric" | "business-units" | "reviews" | "neural-map" | "titulo-grande" | "titulo-chico" | "advisors" | "roadmap" | "soluciones-grid" | "diagrama-fuentes" | "diagrama-expansion" | "market" | "pricing" | "texto-arriba" | "titulo-cuerpo-bold" | "validation-hud" | "how-it-works-hud" | "case-study-hud" | "financial-hud" | "round-hud" | "problem-hud-1" | "problem-hud-2" | "problem-hud-3" | "problem-hud-4" | "problem-hud-5" | "idea-hud" | "vision-cards" | "go-to-market-hud" | "go-to-market-strategy-hud" | "why-now-hud" | "defensibility-hud" | "unit-economics-hud" | "financial-roadmap-hud" | "skin-in-the-game-hud";
  align?: "left" | "center" | "right" | "center-left";
  maxWidth?: string;
  ctaUrl?: string;
  ctaText?: string;
  footer?: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "PROBLEM",
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
    backgroundMedia: "slide2.mp4",
    overlayOpacity: 80
  },
  {
    id: 3,
    text: "",
    variant: "problem-hud-3",
    backgroundMedia: "slide3.mp4",
    overlayOpacity: 80
  },
  {
    id: 4,
    text: "",
    variant: "problem-hud-2",
    backgroundMedia: "split:6.mp4,7.mp4,8.mp4",
    overlayOpacity: 80
  },
  {
    id: 5,
    text: "",
    variant: "problem-hud-4",
    backgroundMedia: "revenant.mp4",
    overlayOpacity: 80
  },
  {
    id: 6,
    text: "",
    variant: "problem-hud-5",
    backgroundMedia: "slide6.mp4",
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
    backgroundMedia: "25.png",
    overlayOpacity: 55
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
    text: "",
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
    title: "Un mercado global de USD 360B anuales",
    text: "",
    variant: "market",
    backgroundMedia: "",
    overlayOpacity: 85
  },
  {
    id: 14,
    text: "",
    variant: "pricing",
    backgroundMedia: "slide14.mp4",
    overlayOpacity: 85
  },
  {
    id: 15,
    overline: "GO-TO-MARKET",
    title: "Adopción primero. Monetización después.",
    text: "En este mercado, cobrar antes de generar confianza frena la adopción. El cine y la publicidad son industrias de relación, urgencia y reputación: el freemium no es falta de tracción, es el mecanismo para entrar.",
    variant: "go-to-market-hud",
    backgroundMedia: "slide15.mp4",
    overlayOpacity: 85
  },
  {
    id: 16,
    overline: "GO-TO-MARKET",
    title: "De 11 productoras activas a 40 clientes pagos.",
    text: "Adopción primero, monetización después: abrimos la red, introducimos pagos por proyecto y activamos ciudades según la demanda real.",
    variant: "go-to-market-strategy-hud",
    backgroundMedia: "slide16.mp4",
    overlayOpacity: 85
  },
  {
    id: 17,
    overline: "WHY NOW",
    title: "más contenido. más datos. menos tiempo para decidir.",
    text: "streaming, producción global e ia multiplicaron la demanda. hoy hay que analizar más variables en menos tiempo, con datos cada vez más fragmentados.",
    variant: "why-now-hud",
    backgroundMedia: "slide17.mp4",
    overlayOpacity: 85
  },
  {
    id: 18,
    overline: "DEFENSIBILIDAD",
    title: "El sistema se vuelve más fuerte con cada producción.",
    text: "El moat no es “usar IA”. Es la memoria operacional propietaria que se acumula con cada análisis y activación.",
    variant: "defensibility-hud",
    backgroundMedia: "slide18.mp4",
    overlayOpacity: 85
  },
  {
    id: 19,
    overline: "UNIT ECONOMICS",
    title: "Margen bruto estimado del 87%.",
    text: "",
    variant: "unit-economics-hud",
    backgroundMedia: "slide19.mp4",
    overlayOpacity: 85
  },
  {
    id: 20,
    overline: "ROADMAP FINANCIERO",
    title: "De adopción gratuita a revenue recurrente.",
    text: "Proyección base: no depende de enterprise en el inicio. El crecimiento sale de convertir uso recurrente en Hub y expandir ciudades por demanda real.",
    variant: "financial-roadmap-hud",
    backgroundMedia: "slide20.mp4",
    overlayOpacity: 85
  },
  {
    id: 21,
    overline: "SKIN IN THE GAME",
    title: "10 meses construyendo antes de pedir capital.",
    text: "El equipo ya asumió el riesgo inicial. La ronda permite convertir compromiso parcial en ejecución full-time.",
    variant: "skin-in-the-game-hud",
    backgroundMedia: "slide21.mp4",
    overlayOpacity: 85
  },

  {
    id: 22,
    title: "",
    text: `<div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 justify-center items-start w-full max-w-[1400px] mx-auto mt-4'><div class='flex flex-col items-center text-center w-full'><div class='h-36 md:h-44 flex items-end justify-center mb-6'><img src='team/pepe_transparent.png' class='w-36 h-36 md:w-44 md:h-44 object-cover object-top scale-[1.25] translate-y-[20px] md:translate-y-[28px] origin-bottom [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.4rem;letter-spacing:0.12em;line-height:1.1;" class='text-white mb-2 uppercase flex items-center justify-center min-h-[48px]'>José Luis Curcio</h3><h4 class='text-white/40 tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center justify-center min-h-[32px] text-center' style="font-family:'Arimo',sans-serif;line-height:1.3;">Co-Founder, Product Vision & Strategy</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-xs leading-relaxed font-light text-center max-w-[240px] mx-auto'>18+ años en campañas globales (Coca-Cola, Ford, Samsung); origen directo de GEOLAND.</p></div><div class='flex flex-col items-center text-center w-full'><div class='h-36 md:h-44 flex items-end justify-center mb-6'><img src='team/pato_transparent.png' class='w-36 h-36 md:w-44 md:h-44 object-cover object-top scale-[0.95] translate-y-[-12px] md:translate-y-[-16px] origin-bottom [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.4rem;letter-spacing:0.12em;line-height:1.1;" class='text-white mb-2 uppercase flex items-center justify-center min-h-[48px]'>Patricio Lettieri</h3><h4 class='text-white/40 tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center justify-center min-h-[32px] text-center' style="font-family:'Arimo',sans-serif;line-height:1.3;">Co-Founder - Data Infrastructure</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-xs leading-relaxed font-light text-center max-w-[240px] mx-auto'>15+ años en marketing analytics e IA aplicada para marcas como John Deere y Porsche.</p></div><div class='flex flex-col items-center text-center w-full'><div class='h-36 md:h-44 flex items-end justify-center mb-6'><img src='team/damian_transparent.png' class='w-36 h-36 md:w-44 md:h-44 object-cover object-top scale-[1.0] translate-y-[-8px] md:translate-y-[-10px] origin-bottom [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.4rem;letter-spacing:0.12em;line-height:1.1;" class='text-white mb-2 uppercase flex items-center justify-center min-h-[48px]'>Damián Scheck</h3><h4 class='text-white/40 tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center justify-center min-h-[32px] text-center' style="font-family:'Arimo',sans-serif;line-height:1.3;">Co-Founder & CTO</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-xs leading-relaxed font-light text-center max-w-[240px] mx-auto'>CTO de Mythology Labs; lidera arquitectura técnica y escalabilidad de la plataforma.</p></div><div class='flex flex-col items-center text-center w-full'><div class='h-36 md:h-44 flex items-end justify-center mb-6'><img src='team/juancarlos_transparent.png' class='w-36 h-36 md:w-44 md:h-44 object-cover object-top scale-[1.25] translate-y-[20px] md:translate-y-[28px] origin-bottom [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.4rem;letter-spacing:0.12em;line-height:1.1;" class='text-white mb-2 uppercase flex items-center justify-center min-h-[48px]'>Juan Carlos Casalderrey</h3><h4 class='text-white/40 tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center justify-center min-h-[32px] text-center' style="font-family:'Arimo',sans-serif;line-height:1.3;">Co-Founder & Engineering Strategy</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-xs leading-relaxed font-light text-center max-w-[240px] mx-auto'>Arquitecto de sistemas y co-founder de Mythology Labs.</p></div><div class='flex flex-col items-center text-center w-full'><div class='h-36 md:h-44 flex items-end justify-center mb-6'><img src='team/oliver_transparent.png' class='w-36 h-36 md:w-44 md:h-44 object-cover object-top scale-[1.05] translate-y-[10px] md:translate-y-[14px] origin-bottom [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.4rem;letter-spacing:0.12em;line-height:1.1;" class='text-white mb-2 uppercase flex items-center justify-center min-h-[48px]'>Oliver Garland</h3><h4 class='text-white/40 tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center justify-center min-h-[32px] text-center' style="font-family:'Arimo',sans-serif;line-height:1.3;">Co-Founder & Industry Strategy Vision</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-xs leading-relaxed font-light text-center max-w-[240px] mx-auto'>Founder de Olga Lee y Mamma Team. 25+ años produciendo campañas AAA globales.</p></div></div>`,
    variant: "texto",
    backgroundMedia: "",
    overlayOpacity: 85,
    align: "center",
    maxWidth: "1400px"
  },
  {
    id: 23,
    text: "",
    variant: "financial-hud",
    backgroundMedia: "slide23.mp4",
    overlayOpacity: 80
  },
  {
    id: 24,
    text: "",
    variant: "round-hud",
    backgroundMedia: "round.png",
    overlayOpacity: 85
  },
  {
    id: 25,
    overline: "CIERRE",
    title: "",
    text: "Let's talk.",
    variant: "titulo-grande",
    backgroundMedia: "portada2.mp4",
    overlayOpacity: 75,
    align: "center"
  }
];
