import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
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

interface ScalabilityHudProps {
  title?: string;
  overline?: string;
  text?: string;
}

const ScalabilityHud: React.FC<ScalabilityHudProps> = ({ title, overline, text }) => {
  const { language } = useLanguage();

  const cards = language === 'en' ? [
    {
      label: "1. TRAVEL",
      desc: "Comprehensive travel decision."
    },
    {
      label: "2. LOGISTICS",
      desc: "Routes, costs, risks, and incidents."
    },
    {
      label: "3. REAL ESTATE",
      desc: "Assets, location, ROI, and viability."
    },
    {
      label: "4. AVIATION",
      desc: "Operations, maintenance, and risk."
    }
  ] : [
    {
      label: "1. TRAVEL",
      desc: "Decisión integral de viaje."
    },
    {
      label: "2. LOGÍSTICA",
      desc: "Rutas, costes, riesgos e incidencias."
    },
    {
      label: "3. REAL ESTATE",
      desc: "Activos, ubicación, retorno y viabilidad."
    },
    {
      label: "4. AERONÁUTICA",
      desc: "Operaciones, mantenimiento y riesgo."
    }
  ];

  const banner = language === 'en' ? {
    bold: "The industry layer changes.",
    light: "The decision engine remains."
  } : {
    bold: "Cambia la capa sectorial.",
    light: "El motor de decisión permanece."
  };

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
              {overline || "80% UNIVERSAL. 20% ADAPTABLE."}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "UN NÚCLEO. MÚLTIPLES INDUSTRIAS."}
            </h1>
            <p className="text-[#EAD8C0] font-arimo text-sm md:text-base leading-relaxed font-bold uppercase tracking-wider">
              {text || "El núcleo permanece: ENTENDER • ESTRUCTURAR • COMPARAR • PRIORIZAR • EXPLICAR"}
            </p>
          </motion.div>
        </div>

        {/* 4 Column Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full items-stretch justify-center mb-6"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300"
            >
              <h4 className="text-[#EAD8C0] font-bold text-sm tracking-wide uppercase mb-3 font-arimo">
                {card.label}
              </h4>
              <p className="text-white/80 text-sm font-light leading-relaxed font-arimo">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full p-5 bg-white/5 border border-white/10 rounded-xl flex items-center text-xs md:text-sm backdrop-blur-md"
        >
          <Layers size={22} className="text-[#EAD8C0] mr-4 shrink-0" strokeWidth={1.5} />
          <div className="flex flex-col md:flex-row md:items-baseline gap-1">
            <span className="text-white font-bold tracking-wide uppercase">
              {banner.bold}
            </span>
            <span className="text-white/50 font-light ml-0 md:ml-2">
              {banner.light}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScalabilityHud;
