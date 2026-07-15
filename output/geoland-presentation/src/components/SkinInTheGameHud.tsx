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

const SkinInTheGameHud: React.FC<{
  title?: string;
  overline?: string;
  text?: string;
}> = ({ title, overline, text }) => {
  const cards = [
    {
      label: "2 founders full-time",
      desc: "trabajando en GEOLAND desde hace 10 meses."
    },
    {
      label: "Resto del equipo al 50%",
      desc: "con el objetivo de pasar a full-time con la ronda."
    },
    {
      label: "Ahorros propios invertidos",
      desc: "capital, tiempo, red y producción del sistema."
    },
    {
      label: "Mentalidad de ejecución",
      desc: "rendirse no es una opción: el objetivo es convertir validación en compañía."
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
            <span className="text-[#EAD8C0] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-3">
              {overline || "SKIN IN THE GAME"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "10 meses construyendo antes de pedir capital."}
            </h1>
            <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
              {text || "El equipo ya asumió el riesgo inicial. La ronda permite convertir compromiso parcial en ejecución full-time."}
            </p>
          </motion.div>
        </div>

        {/* 2x2 Grid for Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch justify-center"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
            >
              <span className="text-[#EAD8C0] font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">
                {card.label}
              </span>
              <p className="text-white/80 text-sm font-light leading-relaxed font-arimo">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkinInTheGameHud;
