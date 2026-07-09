import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const GoToMarketHud: React.FC<{
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
      <div className="w-full mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left max-w-[1000px]"
        >
          <span className="text-white/40 font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-3">
            {overline || "GO-TO-MARKET"}
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
            {title || "Adopción primero. Monetización después."}
          </h1>
          <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
            {text || "En este mercado, cobrar antes de generar confianza frena la adopción. El cine y la publicidad son industrias de relación, urgencia y reputación: el freemium no es falta de tracción, es el mecanismo para entrar."}
          </p>
        </motion.div>
      </div>

      {/* Columns Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch justify-center mb-6"
      >
        {/* Column 1: Motion Comercial */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden"
        >
          <span className="text-white/40 font-arimo text-[10px] tracking-[0.25em] uppercase font-bold mb-8 block">
            MOTION COMERCIAL
          </span>

          <div className="relative flex flex-col space-y-8 pl-14">
            {/* Connecting Vertical Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[1px] bg-white/10" />

            {/* Step 1 */}
            <div className="relative flex items-start">
              <div className="absolute -left-[50px] w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-gothic text-base text-white/80 bg-black/80 backdrop-blur-sm">
                1
              </div>
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1">
                  Freemium dirigido
                </h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">
                  Productoras seleccionadas prueban GEOLAND en proyectos reales.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start">
              <div className="absolute -left-[50px] w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-gothic text-base text-white/80 bg-black/80 backdrop-blur-sm">
                2
              </div>
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1">
                  Dolor concreto
                </h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">
                  Poco tiempo, permisos, ruido o restricciones, datos fragmentados.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start">
              <div className="absolute -left-[50px] w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-gothic text-base text-white/80 bg-black/80 backdrop-blur-sm">
                3
              </div>
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1">
                  Conversión natural
                </h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">
                  AHA! MOMENT y se activa On-Demand o Hub.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Expansión City-by-City */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md justify-between"
        >
          <div className="flex flex-col">
            <span className="text-white/40 font-arimo text-[10px] tracking-[0.25em] uppercase font-bold mb-6 block">
              EXPANSIÓN CITY-BY-CITY
            </span>
            <h3 className="text-white font-gothic text-3xl tracking-wide uppercase mb-3">
              No "llenamos el mapa" antes de vender.
            </h3>
            <p className="text-white/60 font-arimo text-xs md:text-sm leading-relaxed font-light mb-8">
              Cada productora trae necesidades reales: ciudades, permisos, scouts y restricciones. GEOLAND activa cobertura donde hay demanda y deja memoria reutilizable para el siguiente proyecto.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-4 w-full mt-auto">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-sm">
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.1em] uppercase mb-1 block">
                Cliente
              </span>
              <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider block">
                demanda real
              </span>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-sm">
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.1em] uppercase mb-1 block">
                Ciudad
              </span>
              <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider block">
                dataset + red local
              </span>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-sm">
              <span className="text-white/40 font-arimo text-[9px] tracking-[0.1em] uppercase mb-1 block">
                Proyecto
              </span>
              <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider block">
                memoria operacional
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Principle Banner */}
      <motion.div 
        variants={itemVariants}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl flex items-center text-xs md:text-sm backdrop-blur-md"
      >
        <span className="text-white font-bold tracking-wider uppercase mr-3 shrink-0">
          Principio comercial:
        </span>
        <span className="text-white/85 font-bold leading-relaxed">
          primero adopción y confianza; luego monetización. Pedir contrato anual en el primer contacto reduce conversión.
        </span>
      </motion.div>
    </div>
    </div>
  );
};

export default GoToMarketHud;
