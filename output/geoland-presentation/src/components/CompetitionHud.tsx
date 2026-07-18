import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

interface CompetitionHudProps {
  title?: string;
  overline?: string;
  text?: string;
}

const CompetitionHud: React.FC<CompetitionHudProps> = ({ title, overline, text }) => {
  const competitors = [
    {
      name: "Shotdeck",
      category: "Referencias visuales",
      desc: "Solo estética — sin datos de permisos, costes ni riesgo."
    },
    {
      name: "Set Scouter",
      category: "Marketplace de locaciones",
      desc: "Conecta con propietarios — sin análisis de viabilidad."
    },
    {
      name: "StudioBinder",
      category: "Planificación de producción",
      desc: "Organiza el rodaje — no decide dónde rodar."
    },
    {
      name: "Wrapbook",
      category: "Payroll y operaciones",
      desc: "Gestiona pagos — no locaciones ni decisiones."
    },
    {
      name: "Reel-Scout",
      category: "Bases de datos de locaciones",
      desc: "Cataloga opciones — sin cruzarlas con la escena."
    },
    {
      name: "GEOLAND",
      category: "Decisión operacional completa",
      desc: "Visual + costes + permisos + riesgo + activación — en un solo sistema, no en cinco herramientas distintas.",
      highlight: true
    }
  ];

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '120px', paddingRight: '120px'
    }}>
      <div className="w-full max-w-[1400px] py-4 flex flex-col justify-center items-start select-none font-jost">
        {/* Header Section */}
        <div className="w-full mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left max-w-[1000px]"
          >
            <span className="text-[#EAD8C0] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-3">
              {overline || "COMPETENCIA"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "Un mercado fragmentado, no una solución completa."}
            </h1>
            <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
              {text || "Cada herramienta resuelve una parte del problema — ninguna conecta lo visual, lo operativo y lo legal en una sola decisión."}
            </p>
          </motion.div>
        </div>

        {/* Competitors List/Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 w-full mb-6"
        >
          {competitors.map((comp, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={
                comp.highlight 
                  ? "grid grid-cols-[180px_250px_1fr] gap-6 items-center bg-[#EAD8C0]/10 border-2 border-[#EAD8C0] shadow-[0_0_15px_rgba(234,216,192,0.15)] rounded-xl px-6 py-4 backdrop-blur-sm"
                  : "grid grid-cols-[180px_250px_1fr] gap-6 items-center bg-white/5 border border-white/5 hover:border-white/10 rounded-xl px-6 py-3 backdrop-blur-sm transition-all duration-300"
              }
            >
              <span className={comp.highlight ? "text-[#EAD8C0] font-gothic text-xl uppercase tracking-widest font-bold" : "text-white font-gothic text-lg uppercase tracking-wider"}>
                {comp.name}
              </span>
              <span className={comp.highlight ? "text-white font-arimo text-xs font-bold tracking-wider uppercase" : "text-[#EAD8C0] font-arimo text-xs italic tracking-wider"}>
                {comp.category}
              </span>
              <p className={comp.highlight ? "text-white font-arimo text-sm font-medium leading-relaxed" : "text-white/60 font-arimo text-sm font-light leading-relaxed"}>
                {comp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full border-l-4 border-[#EAD8C0] bg-white/5 rounded-r-xl p-5 backdrop-blur-sm flex flex-col items-start"
        >
          <span className="text-white font-gothic text-xl uppercase tracking-wider mb-2 font-bold">
            Todas resuelven una pieza. Ninguna resuelve la decisión completa.
          </span>
          <p className="text-white/70 font-arimo text-sm font-light leading-relaxed">
            Por eso el mercado sigue decidiendo con llamadas, Excel y experiencia — no con un sistema. Ahí es donde entra GEOLAND.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetitionHud;
