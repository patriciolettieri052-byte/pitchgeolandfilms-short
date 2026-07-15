import React from 'react';
import { motion } from 'framer-motion';
import { TriangleAlert } from 'lucide-react';

const MetricCard: React.FC<{
  value: string;
  description: string;
  delay: number;
}> = ({ value, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className="flex flex-col items-center justify-center text-center bg-black/50 border border-white/10 rounded-xl p-8 backdrop-blur-md h-full min-h-[160px]"
  >
    <div className="text-white text-[36px] md:text-[44px] font-gothic tracking-wide uppercase mb-3 leading-none">
      {value}
    </div>
    <p className="text-white/50 text-[11px] md:text-[12px] font-arimo font-light leading-normal max-w-[220px]">
      {description}
    </p>
  </motion.div>
);

const ProblemHud5: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pl-[120px] pr-[120px]">
      <div className="w-full max-w-[1400px] flex flex-col gap-8 mt-[-30px]">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left max-w-[1200px]"
        >
          <span className="text-[#EAD8C0] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            EL PROBLEMA
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            La industria no tiene un sistema global de decisión.
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            Tiene imágenes, bases dispersas, scouts, intuición, contactos y mucha fricción. Y el problema crece con la escala del mercado:
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-2">
          <MetricCard 
            value="USD 360B"
            description="mercado global anual de producción audiovisual"
            delay={0.2}
          />
          <MetricCard 
            value="+300K"
            description="productoras activas en el mundo"
            delay={0.3}
          />
          <MetricCard 
            value="+9,500"
            description="películas al año, sin contar series, publicidad y streaming"
            delay={0.4}
          />
          <MetricCard 
            value="Millones"
            description="de decisiones de locación y operación cada año"
            delay={0.5}
          />
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-6 bg-black/50 border border-white/10 rounded-xl p-6 w-full mt-4 backdrop-blur-md"
        >
          <TriangleAlert size={28} className="text-white/10 shrink-0" strokeWidth={1.5} />
          <div className="flex flex-col">
            <p className="text-white/60 text-sm font-arimo leading-relaxed font-light">
              Hoy, encontrar una locación puede tomar semanas o meses de scouts, referencias visuales y análisis manual — <strong className="text-white font-bold">y ninguna herramienta actual organiza la decisión operacional completa.</strong>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProblemHud5;
