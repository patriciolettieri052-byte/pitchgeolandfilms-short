import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';

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

const WhyNowHud: React.FC<{
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
              {overline || "WHY NOW"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "más contenido. más datos. menos tiempo para decidir."}
            </h1>
            <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
              {text || "streaming, producción global e ia multiplicaron la demanda. hoy hay que analizar más variables en menos tiempo, con datos cada vez más fragmentados."}
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
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-2 font-arimo">
              1. más producción
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
              netflix, amazon, disney, hbo, apple y marcas producen más contenido en más países. más proyectos, más presión.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-2 font-arimo">
              2. más datos fragmentados
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
              permisos, clima, tráfico, ruido, incentivos, seguridad, accesos, disponibilidad y más. dispersos entre decenas de fuentes y herramientas.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-2 font-arimo">
              3. mejor tecnología
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
              llms, datos geoespaciales, apis climáticas y computer vision ya permiten cruzar variables creativas, operativas y de riesgo a escala global.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-2 font-arimo">
              4. white space claro
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
              las soluciones actuales son marketplaces, bases de datos o herramientas de planificación. no existe una capa global de decisión que conecte todo.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full p-5 bg-white/5 border border-white/10 rounded-xl flex items-center text-xs md:text-sm backdrop-blur-md"
        >
          <Crosshair size={22} className="text-white/80 mr-4 shrink-0" strokeWidth={1.5} />
          <div className="flex flex-col md:flex-row md:items-baseline gap-1">
            <span className="text-white font-bold tracking-wide uppercase">
              la industria produce más rápido que su capacidad para decidir bien dónde rodar.
            </span>
            <span className="text-white/50 font-light ml-0 md:ml-2">
              geoland conecta datos, contexto y operación para transformar la incertidumbre en decisiones claras.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyNowHud;
