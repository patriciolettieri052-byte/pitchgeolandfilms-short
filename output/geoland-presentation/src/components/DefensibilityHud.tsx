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

const DefensibilityHud: React.FC<{
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
              {overline || "DEFENSIBILIDAD"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "El sistema se vuelve más fuerte con cada producción."}
            </h1>
            <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
              {text || "El moat no es “usar IA”. Es la memoria operacional propietaria que se acumula con cada análisis y activación."}
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
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md items-center text-center justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/80 bg-white/5 mb-4 shrink-0">
                1
              </div>
              <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-3 font-arimo">
                Memoria operacional
              </h4>
              <p className="text-white/50 text-[11px] font-light leading-relaxed font-arimo">
                Qué funcionó, qué falló, qué permisos fueron difíciles y qué costes aparecieron tarde.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md items-center text-center justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/80 bg-white/5 mb-4 shrink-0">
                2
              </div>
              <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-3 font-arimo">
                Dataset de riesgo por ciudad
              </h4>
              <p className="text-white/50 text-[11px] font-light leading-relaxed font-arimo">
                Ruido, accesos, tráfico, horarios, ventanas, restricciones y fricción local.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md items-center text-center justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/80 bg-white/5 mb-4 shrink-0">
                3
              </div>
              <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-3 font-arimo">
                Red verificada
              </h4>
              <p className="text-white/50 text-[11px] font-light leading-relaxed font-arimo">
                Scouts, fixers y location managers evaluados por desempeño real.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md items-center text-center justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/80 bg-white/5 mb-4 shrink-0">
                4
              </div>
              <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-3 font-arimo">
                Switching cost
              </h4>
              <p className="text-white/50 text-[11px] font-light leading-relaxed font-arimo">
                La productora acumula contexto operativo propio dentro de GEOLAND. Cambiar implica perder memoria.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xs md:text-sm backdrop-blur-md text-center"
        >
          <span className="text-white font-bold tracking-wide uppercase leading-relaxed">
            Cada producción genera datos que no existen en bases públicas: decisiones, fricciones, costes reales y desempeño local.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default DefensibilityHud;
