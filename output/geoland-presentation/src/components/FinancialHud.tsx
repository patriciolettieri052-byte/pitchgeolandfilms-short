import React from 'react';
import { motion } from 'framer-motion';

const YearCard: React.FC<{
  year: string;
  clients: string;
  arpa: string;
  arr: string;
  delay: number;
}> = ({ year, clients, arpa, arr, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg p-5 backdrop-blur-sm text-center"
  >
    <span className="font-arimo text-[10px] uppercase text-[#EAD8C0] tracking-[0.2em] mb-2">{year}</span>
    <span className="font-gothic text-4xl text-white mb-0.5">{clients}</span>
    <span className="font-arimo text-[9px] uppercase text-white/40 tracking-wider mb-2">Clientes</span>
    
    <span className="font-arimo text-xs font-semibold text-white mb-0.5">{arpa}</span>
    <span className="font-arimo text-[8px] uppercase text-white/40 tracking-wider mb-2">ARPA Anual</span>

    <span className="font-arimo text-sm font-bold text-[#EAD8C0] mb-0.5">{arr}</span>
    <span className="font-arimo text-[8px] uppercase text-white/40 tracking-wider">ARR Proyectado</span>
  </motion.div>
);

const FinancialHud: React.FC = () => {
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

        {/* Content Section */}
        <div className="w-full flex flex-col gap-10">
          
          {/* Top Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full"
          >
            <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
              <span className="font-arimo text-[10px] text-white tracking-widest uppercase mb-2">Con</span>
              <span className="font-gothic text-5xl text-[#F7F6ED]">€295K</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
              <span className="font-arimo text-[10px] text-white tracking-widest uppercase mb-2">Runway</span>
              <span className="font-gothic text-4xl text-white">12 Meses</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10">
              <span className="font-arimo text-[10px] text-white tracking-widest uppercase mb-2">Clientes Pagando</span>
              <span className="font-gothic text-4xl text-white">40</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6">
              <span className="font-arimo text-[10px] text-white tracking-widest uppercase mb-2">ARR / Next Round Ready</span>
              <span className="font-gothic text-4xl text-white">€272K</span>
            </div>
          </motion.div>

          {/* 5 Year Projection */}
          <div className="w-full">
            <p className="font-arimo text-[10px] text-geoland-blue tracking-[0.3em] uppercase text-center mb-6">Proyecciones a 5 Años</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <YearCard year="AÑO 1" clients="40" arpa="€6.8K" arr="€272K" delay={0.2} />
              <YearCard year="AÑO 2" clients="155" arpa="€9.5K" arr="€1.47M" delay={0.3} />
              <YearCard year="AÑO 3" clients="400" arpa="€12K" arr="€4.8M" delay={0.4} />
              <YearCard year="AÑO 4" clients="900" arpa="€15K" arr="€13.5M" delay={0.5} />
              <YearCard year="AÑO 5" clients="2,000" arpa="€18K" arr="€36M" delay={0.6} />
            </div>
          </div>

          {/* Milestone Details */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm"
            >
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.2em] uppercase font-bold mb-2 block">AÑO 1</span>
              <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
                Principalmente On-Demand
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm"
            >
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.2em] uppercase font-bold mb-2 block">AÑO 2</span>
              <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
                On-Demand + primeros Hub
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm"
            >
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.2em] uppercase font-bold mb-2 block">AÑO 3</span>
              <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
                Hub gana peso + primeros Enterprise
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm"
            >
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.2em] uppercase font-bold mb-2 block">AÑO 4</span>
              <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
                Hub + Enterprise
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm"
            >
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.2em] uppercase font-bold mb-2 block">AÑO 5</span>
              <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
                Hub consolidado + Enterprise
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FinancialHud;
