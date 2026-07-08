import React from 'react';
import { motion } from 'framer-motion';

const YearCard: React.FC<{ year: string; clients: string; delay: number }> = ({ year, clients, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm"
  >
    <span className="font-arimo text-[10px] uppercase text-white/40 tracking-[0.2em] mb-2">{year}</span>
    <span className="font-gothic text-4xl text-white mb-1">{clients}</span>
    <span className="font-arimo text-[9px] uppercase text-geoland-blue tracking-widest">Clientes</span>
  </motion.div>
);

const FinancialHud: React.FC = () => {
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
            PROYECCIONES
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            ROADMAP FINANCIERO
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            De hoy al crecimiento sostenible.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-[1400px] flex flex-col gap-10">
        
        {/* Top Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
            <span className="font-arimo text-[10px] text-white/40 tracking-widest uppercase mb-2">Con</span>
            <span className="font-gothic text-5xl text-[#4a7c59]">€295K</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
            <span className="font-gothic text-4xl text-white mb-2">12 Meses</span>
            <span className="font-arimo text-[10px] text-white/40 tracking-widest uppercase">Runway</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
            <span className="font-gothic text-4xl text-white mb-2">40</span>
            <span className="font-arimo text-[10px] text-white/40 tracking-widest uppercase">Clientes Pagando</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6">
            <span className="font-gothic text-4xl text-white mb-2">€270K</span>
            <span className="font-arimo text-[10px] text-white/40 tracking-widest uppercase">ARR / Next Round Ready</span>
          </div>
        </motion.div>

        {/* 5 Year Projection */}
        <div>
          <p className="font-arimo text-[10px] text-geoland-blue tracking-[0.3em] uppercase text-center mb-6">Proyección de Clientes</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <YearCard year="AÑO 1" clients="40" delay={0.2} />
            <YearCard year="AÑO 2" clients="155" delay={0.3} />
            <YearCard year="AÑO 3" clients="500" delay={0.4} />
            <YearCard year="AÑO 4" clients="1,200" delay={0.5} />
            <YearCard year="AÑO 5" clients="3,000" delay={0.6} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinancialHud;
