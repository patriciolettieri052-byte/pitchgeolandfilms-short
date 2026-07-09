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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const FinancialRoadmapHud: React.FC<{
  title?: string;
  overline?: string;
  text?: string;
}> = ({ title, overline, text }) => {
  const columns = [
    {
      year: "Año 1",
      clients: "40",
      arpa: "€6.8K",
      arr: "€272K",
      desc: "Principalmente On-Demand",
      barHeight: 12,
      barColor: "bg-white/15"
    },
    {
      year: "Año 2",
      clients: "155",
      arpa: "€9.5K",
      arr: "€1.47M",
      desc: "On-Demand + primeros Hub",
      barHeight: 28,
      barColor: "bg-white/35"
    },
    {
      year: "Año 3",
      clients: "400",
      arpa: "€12K",
      arr: "€4.8M",
      desc: "Hub gana peso + primeros Enterprise",
      barHeight: 50,
      barColor: "bg-white/55"
    },
    {
      year: "Año 4",
      clients: "900",
      arpa: "€15K",
      arr: "€13.5M",
      desc: "Hub + Enterprise",
      barHeight: 75,
      barColor: "bg-white/75"
    },
    {
      year: "Año 5",
      clients: "2000",
      arpa: "€18K",
      arr: "€36M",
      desc: "Hub consolidado + Enterprise",
      barHeight: 100,
      barColor: "bg-white"
    }
  ];

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
              {overline || "ROADMAP FINANCIERO"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "De adopción gratuita a revenue recurrente."}
            </h1>
            <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
              {text || "Proyección base: no depende de enterprise en el inicio. El crecimiento sale de convertir uso recurrente en Hub y expandir ciudades por demanda real."}
            </p>
          </motion.div>
        </div>

        {/* Main Table Card (5 columns) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md mb-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {columns.map((col, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center ${idx >= 2 ? 'pt-6 md:pt-0' : ''} ${idx > 0 ? 'md:pl-4' : ''}`}
              >
                <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">
                  {col.year}
                </span>
                
                {/* Ascending vertical bar */}
                <div className="h-12 w-full flex items-end justify-center mb-4">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${col.barHeight}%` }}
                    transition={{ duration: 1.2, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
                    className={`w-3 rounded-t ${col.barColor} backdrop-blur-sm`}
                  />
                </div>
                
                {/* Clients block */}
                <div className="mb-4">
                  <span className="text-white font-gothic text-3xl md:text-4xl block leading-none mb-1">
                    {col.clients}
                  </span>
                  <span className="text-white/50 text-[10px] font-arimo uppercase tracking-wider">
                    clientes pagos
                  </span>
                </div>

                {/* ARPA block */}
                <div className="mb-4">
                  <span className="text-white font-bold text-base md:text-lg block leading-none mb-1 font-arimo">
                    {col.arpa}
                  </span>
                  <span className="text-white/50 text-[10px] font-arimo uppercase tracking-wider">
                    ARPA anual
                  </span>
                </div>

                {/* ARR block */}
                <div>
                  <span className="text-white font-bold text-xl md:text-2xl block leading-none mb-1 font-arimo">
                    {col.arr}
                  </span>
                  <span className="text-white/50 text-[10px] font-arimo uppercase tracking-wider">
                    ARR proyectado
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Details Grid (5 columns) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full"
        >
          {columns.map((col, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm"
            >
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.2em] uppercase font-bold mb-2 block">
                {col.year}
              </span>
              <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
                {col.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialRoadmapHud;
