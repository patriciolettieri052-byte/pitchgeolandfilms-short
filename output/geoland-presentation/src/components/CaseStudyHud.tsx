import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyHud: React.FC = () => {
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
          <span className="text-white font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            PRUEBA REAL
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            Uno de nuestros casos reales
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            Caso Real - Activación en Barcelona
          </p>
        </motion.div>
      </div>

      <div style={{ width: '100%', maxWidth: '1400px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black/50 border border-white/10 p-8 rounded-lg backdrop-blur-md flex flex-col"
          >
            <p className="font-arimo text-[10px] tracking-[0.3em] uppercase text-geoland-blue mb-4 font-bold">EL RETO</p>
            <h2 className="font-gothic text-3xl uppercase text-white mb-2">Campaña ASCER</h2>
            <p className="font-arimo text-xs text-white/50 mb-6 uppercase tracking-wider">Weber Shandwick Europe</p>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-arimo text-[11px] text-white/40 uppercase tracking-widest">Escenas</span>
                <span className="font-gothic text-xl text-white">+10</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-arimo text-[11px] text-white/40 uppercase tracking-widest">Rodaje</span>
                <span className="font-gothic text-xl text-white">2 Días</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-arimo text-[11px] text-white/40 uppercase tracking-widest">Presupuesto</span>
                <span className="font-gothic text-xl text-white">200K</span>
              </div>
            </div>
            <p className="font-arimo text-[12px] text-white/70 leading-relaxed font-light mt-auto">
              +10 escenas con estética europea y cerámicas específicas, sin rodar en varios países. Todo concentrado en Barcelona.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/50 border border-white/10 p-8 rounded-lg backdrop-blur-md flex flex-col"
          >
            <p className="font-arimo text-[10px] tracking-[0.3em] uppercase text-geoland-blue mb-4 font-bold">ANÁLISIS</p>
            <h2 className="font-gothic text-2xl uppercase text-white mb-6">Fortalezas & Riesgos</h2>
            <div className="mb-6">
              <h3 className="font-arimo text-[10px] uppercase text-white/40 tracking-widest mb-2 border-b border-white/10 pb-1">Fortalezas</h3>
              <p className="font-arimo text-[12px] text-white/70 leading-relaxed font-light">
                Variedad visual dentro del hub, reducción de traslados, control de costes y equipo local disponible.
              </p>
            </div>
            <div className="mt-auto">
              <h3 style={{ color: '#EAD8C0' }} className="font-arimo text-[10px] uppercase tracking-widest mb-2 border-b border-white/10 pb-1">Riesgos Operativos</h3>
              <p className="font-arimo text-[12px] text-white/70 leading-relaxed font-light">
                Disponibilidad limitada de locaciones con cerámicas específicas, permisos y ruido urbano.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/50 border border-white/10 p-8 rounded-lg backdrop-blur-md flex flex-col"
          >
            <p className="font-arimo text-[10px] tracking-[0.3em] uppercase text-geoland-blue mb-4 font-bold">RESULTADO</p>
            <h2 className="font-gothic text-2xl uppercase text-white mb-6">Conclusión</h2>
            <p className="font-arimo text-[12px] text-white/80 leading-relaxed font-light italic mb-8">
              "GEOLAND convirtió una búsqueda urgente y compleja en una selección accionable de locaciones - concentrando la producción en un único hub y haciendo viable el rodaje en los 2 días previstos."
            </p>
            <div className="mt-auto border-t border-white/10 pt-4">
              <p className="font-arimo text-[12px] text-[#F7F6ED] tracking-wider uppercase">
                ✓ Producción viable en el plazo previsto.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudyHud;
