import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const StatCard: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}
    className="flex flex-col justify-center items-center p-6 bg-black/50 border border-white/10 rounded-xl text-center backdrop-blur-md h-full"
  >
    <span className="text-white text-5xl md:text-6xl font-extralight tracking-tight font-gothic mb-2">{value}</span>
    <span className="text-white/40 text-[10px] tracking-[0.2em] font-medium uppercase mb-1 font-arimo">{label}</span>
  </motion.div>
);

const RoundHud: React.FC = () => {
  const { language } = useLanguage();

  const labels = language === 'en' ? {
    overline: "FUNDING",
    title: "THE ROUND",
    subtitle: "EARLY SEED ROUND",
    roundLabel: "Early Seed Round",
    equityLabel: "Equity Offered",
    valuationLabel: "Pre-Money Valuation",
    runwayLabel: "Guaranteed Runway",
    useTitle: "Use of Funds",
    u1: "Team: transition all founders to full-time dedication",
    u2: "Local network of verified scouts, fixers, and location managers",
    u3: "Location dataset and technology infrastructure",
    u4: "Commercial pre-launch and freemium-to-paid conversion",
    u5: "Legal, IP, and accounting"
  } : {
    overline: "FUNDING",
    title: "LA RONDA",
    subtitle: "RONDA EARLY SEED",
    roundLabel: "Ronda Early Seed",
    equityLabel: "Equity Ofrecido",
    valuationLabel: "Val. Pre-Money",
    runwayLabel: "Runway Garantizado",
    useTitle: "Uso de Fondos",
    u1: "Equipo: pasar a todos los founders a dedicación full-time",
    u2: "Red local de scouts, fixers y location managers verificados",
    u3: "Dataset de locaciones e infraestructura tecnológica",
    u4: "Pre-lanzamiento comercial y conversión de freemium a pago",
    u5: "Legal, IP y contabilidad"
  };

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '120px', paddingRight: '120px'
    }}>
      <div className="w-full max-w-[1400px] flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left max-w-[900px]"
          >
            <span className="text-[#EAD8C0] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
              {labels.overline}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
              {labels.title}
            </h1>
            <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
              {labels.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
          <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
            <div className="grid grid-cols-2 gap-6 h-full">
              <StatCard value="€295K" label={labels.roundLabel} delay={0.1} />
              <StatCard value="15%" label={labels.equityLabel} delay={0.2} />
              <StatCard value="€1.7M" label={labels.valuationLabel} delay={0.3} />
              <StatCard value="12m" label={labels.runwayLabel} delay={0.4} />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-black/50 border border-white/10 rounded-xl backdrop-blur-md text-left"
          >
            <h3 className="text-white font-arimo font-bold text-xs tracking-[0.25em] uppercase mb-6 border-b border-white/10 pb-4 text-left">
              {labels.useTitle}
            </h3>
            <ul className="space-y-5 text-left text-white/70 font-light text-xs font-arimo">
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-0.5 font-bold">—</span>
                <span>{labels.u1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-0.5 font-bold">—</span>
                <span>{labels.u2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-0.5 font-bold">—</span>
                <span>{labels.u3}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-0.5 font-bold">—</span>
                <span>{labels.u4}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-0.5 font-bold">—</span>
                <span>{labels.u5}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoundHud;
