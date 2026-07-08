import React from 'react';
import { motion } from 'framer-motion';

const StatCard: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}
    className="flex flex-col justify-center items-center p-6 bg-black/50 border border-white/10 rounded-xl text-center backdrop-blur-md h-full"
  >
    <span className="text-white text-5xl md:text-6xl font-extralight tracking-tight font-gothic mb-2">{value}</span>
    <span className="text-geoland-blue text-[10px] tracking-[0.2em] font-medium uppercase mb-1 font-arimo">{label}</span>
  </motion.div>
);

const RoundHud: React.FC = () => {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '120px', paddingRight: '120px'
    }}>
      <div className="w-full max-w-[1000px] mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left max-w-[900px]"
        >
          <span className="text-[#e27329] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            FUNDING
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            LA RONDA
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            RONDA EARLY SEED
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch w-full max-w-[1400px]">
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
          <div className="grid grid-cols-2 gap-6 h-full">
            <StatCard value="€295K" label="Ronda Early Seed" delay={0.1} />
            <StatCard value="15%" label="Equity Ofrecido" delay={0.2} />
            <StatCard value="€1.7M" label="Val. Pre-Money" delay={0.3} />
            <StatCard value="12m" label="Runway Garantizado" delay={0.4} />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-black/50 border border-white/10 rounded-xl backdrop-blur-md text-left"
        >
          <h3 className="text-white font-arimo font-bold text-xs tracking-[0.25em] uppercase mb-6 border-b border-white/10 pb-4 text-left">
            Uso de Fondos
          </h3>
          <ul className="space-y-5 text-left text-white/70 font-light text-xs font-arimo">
            <li className="flex items-start gap-3">
              <span className="text-geoland-blue mt-0.5 font-bold">—</span>
              <span><strong>Equipo</strong> (4 founders full-time)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-geoland-blue mt-0.5 font-bold">—</span>
              <span><strong>Red local</strong> de scouts, fixers y location managers verificados</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-geoland-blue mt-0.5 font-bold">—</span>
              <span><strong>Dataset de locaciones</strong> e infraestructura tecnológica</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-geoland-blue mt-0.5 font-bold">—</span>
              <span><strong>Pre-lanzamiento</strong> comercial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-geoland-blue mt-0.5 font-bold">—</span>
              <span><strong>Legal & contable</strong></span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default RoundHud;
