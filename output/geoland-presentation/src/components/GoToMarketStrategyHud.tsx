import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const GoToMarketStrategyHud: React.FC<{
  title?: string;
  overline?: string;
  text?: string;
}> = ({ title, overline, text }) => {
  const { language } = useLanguage();

  const phaseCards = language === 'en' ? [
    {
      badge: "Today",
      title: "11 active production houses",
      desc: "Real use in production decisions. Barcelona, Madrid, and Lisbon active. Pre-commercial validation: not yet charging."
    },
    {
      badge: "Next step",
      title: "More production houses & initial payments",
      desc: "Onboard 10-12 qualified production houses outside current circle. Controlled freemium + initial On-Demand payments."
    },
    {
      badge: "6–12 months",
      title: "Scale city-by-city / 40 paying clients",
      desc: "Each production company defines projects, needs, and target cities. GEOLAND activates minimum coverage, local network, and operational support to turn recurring use into a monthly Hub, targeting 40 paying clients in 12 months."
    }
  ] : [
    {
      badge: "Hoy",
      title: "11 productoras activas",
      desc: "Uso real en decisiones de producción. Barcelona, Madrid y Lisboa activos. Validación pre-comercial: aún sin cobrar."
    },
    {
      badge: "Próximo paso",
      title: "Más productoras y primeros pagos",
      desc: "Incorporar 10-12 productoras calificadas fuera del círculo actual. Freemium controlado + primeros pagos On-Demand."
    },
    {
      badge: "6–12 meses",
      title: "Escalar por ciudad / 40 clientes pagos",
      desc: "Cada productora define proyectos, necesidades y ciudades objetivo. GEOLAND activa cobertura mínima, red local y soporte operativo para convertir el uso recurrente en Hub mensual, con una meta de 40 clientes pagos en 12 meses."
    }
  ];

  const infoBoxes = language === 'en' ? [
    {
      label: "Client",
      text: "Line Producer · Executive Producer · Head of Production"
    },
    {
      label: "Channels",
      text: "Service Companies · Production Houses · Scouts/Fixers · Film Commissions · Industry Markets · Referrals"
    },
    {
      label: "Year 1 goal",
      text: "40 paying clients · €270K projected ARR"
    }
  ] : [
    {
      label: "Cliente",
      text: "Line Producer · Executive Producer · Head of Production"
    },
    {
      label: "Canales",
      text: "Service Companies · Productoras · Scouts/Fixers · Film Commissions · Industry Markets · Referidos"
    },
    {
      label: "Meta año 1",
      text: "40 clientes pagos · €270K ARR proyectado"
    }
  ];

  const footnote = language === 'en' 
    ? "Model: production company → project → target city → data + partners + memory. Each city lowers costs and improves the next search."
    : "Modelo: productora → proyecto → ciudad objetivo → datos + partners + memoria. Cada ciudad reduce el coste y mejora la siguiente búsqueda.";

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '120px', paddingRight: '120px'
    }}>
      <div className="w-full max-w-[1150px] py-4 flex flex-col justify-center items-start select-none font-jost">
        {/* Header Section */}
        <div className="w-full mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left max-w-[1000px]"
          >
            <span className="text-[#EAD8C0] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-3">
              {overline || "GO-TO-MARKET"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "De 11 productoras activas a 40 clientes pagos."}
            </h1>
            <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
              {text || "Adopción primero, monetización después: abrimos la red, introducimos pagos por proyecto y activamos ciudades según la demanda real."}
            </p>
          </motion.div>
        </div>

        {/* Top Grid: Three Column Phase Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch justify-center mb-6"
        >
          {phaseCards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
            >
              <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">
                {card.badge}
              </span>
              <h4 className="text-white font-bold text-base tracking-wide uppercase mb-3 font-arimo">
                {card.title}
              </h4>
              <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Grid: Info Boxes */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch justify-center mb-6"
        >
          {infoBoxes.map((box, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={
                idx === 2
                  ? "flex flex-col bg-white/[0.08] border border-white/30 rounded-xl p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                  : "flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-5 backdrop-blur-sm"
              }
            >
              <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-2 block">
                {box.label}
              </span>
              <p className={idx === 2 ? "text-white font-bold text-xs tracking-wide leading-relaxed font-arimo" : "text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo"}>
                {box.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full text-left"
        >
          <p className="text-[10px] text-white font-light italic leading-relaxed tracking-wide">
            {footnote}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GoToMarketStrategyHud;
