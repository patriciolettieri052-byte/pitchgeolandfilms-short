import React from 'react';
import { motion } from 'framer-motion';

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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const UnitEconomicsHud: React.FC<{
  title?: string;
  overline?: string;
  text?: string;
}> = ({ title, overline, text }) => {
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
            <span className="text-white/40 font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-3">
              {overline || "UNIT ECONOMICS"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-2">
              {title || "Márgenes brutos superiores al 99%."}
            </h1>
          </motion.div>
        </div>

        {/* Rows Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-4 mb-6"
        >
          {/* Row 1: On-Demand */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md flex flex-col gap-3"
          >
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-white font-bold tracking-wide uppercase font-arimo">
                On-Demand
              </span>
              <span className="text-white/50 text-xs md:text-sm font-light font-arimo">
                Cobramos <strong className="text-white font-semibold">€349</strong> · nos cuesta <strong className="text-white font-semibold">€0.80</strong>
              </span>
            </div>
            <div className="flex items-center w-full">
              <div className="flex-grow h-3 bg-white/10 rounded-full overflow-hidden relative mr-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "99%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
              <span className="text-white font-bold text-xs md:text-sm tracking-wider shrink-0 font-arimo">
                nos queda 99%
              </span>
            </div>
          </motion.div>

          {/* Row 2: Hub (Highlighted) */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-white/[0.08] border border-white/20 rounded-xl p-5 backdrop-blur-md flex flex-col gap-3 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          >
            <div className="flex justify-between items-center text-sm md:text-base">
              <div className="flex items-center">
                <span className="text-white font-bold tracking-wide uppercase font-arimo">
                  Hub
                </span>
                <span className="bg-white text-black font-extrabold uppercase text-[9px] px-2 py-0.5 rounded-full ml-3 tracking-wider font-arimo">
                  Más popular
                </span>
              </div>
              <span className="text-white/50 text-xs md:text-sm font-light font-arimo">
                Cobramos <strong className="text-white font-semibold">€899/mes</strong> · nos cuesta <strong className="text-white font-semibold">€4.50</strong>
              </span>
            </div>
            <div className="flex items-center w-full">
              <div className="flex-grow h-3 bg-white/10 rounded-full overflow-hidden relative mr-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "99%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
              <span className="text-white font-bold text-xs md:text-sm tracking-wider shrink-0 font-arimo">
                nos queda 99%
              </span>
            </div>
          </motion.div>

          {/* Row 3: Enterprise */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md flex flex-col gap-3"
          >
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-white font-bold tracking-wide uppercase font-arimo">
                Enterprise
              </span>
              <span className="text-white/50 text-xs md:text-sm font-light font-arimo">
                Cobramos <strong className="text-white font-semibold">€3K–15K/mes</strong> · nos cuesta <strong className="text-white font-semibold">€25</strong>
              </span>
            </div>
            <div className="flex items-center w-full">
              <div className="flex-grow h-3 bg-white/10 rounded-full overflow-hidden relative mr-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "99%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
              <span className="text-white font-bold text-xs md:text-sm tracking-wider shrink-0 font-arimo">
                nos queda 99%
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlight Box */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full p-5 bg-white/10 border border-white/20 rounded-xl flex flex-col gap-2 mb-4 backdrop-blur-md"
        >
          <h4 className="text-white font-bold text-base tracking-wide uppercase font-arimo">
            Analizar 1.000 locaciones nos cuesta ~€10.
          </h4>
          <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed font-arimo">
            Un solo cliente Hub lo paga con el 3% de su cuota. El cómputo nunca es el problema — invertimos en construir el dataset y la red, no en atender búsquedas.
          </p>
        </motion.div>

        {/* Footnote text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full text-left"
        >
          <p className="text-[10px] text-white font-light leading-relaxed tracking-wide font-arimo">
            La barra representa lo que queda después del costo de cómputo (IA + mapas + almacenamiento, ~€0.01 por búsqueda). No incluye el equipo humano de activación y curación — esa es la inversión que financia la ronda. Precios verificados a julio 2026.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UnitEconomicsHud;
