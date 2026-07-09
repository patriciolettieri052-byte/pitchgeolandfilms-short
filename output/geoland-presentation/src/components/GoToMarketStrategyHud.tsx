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

const GoToMarketStrategyHud: React.FC<{
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
              {overline || "GO-TO-MARKET"}
            </span>
            <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-4">
              {title || "De 11 productoras activas a 40 clientes pagos."}
            </h1>
            <p className="text-white/70 font-arimo text-sm md:text-base leading-relaxed font-light">
              {text || "Adopción primero, monetización después: abrimos la red, introducimos pagos por proyecto y activamos ciudades según la demanda real."}
            </p>
          </motion.div>
        </div>

        {/* Top Grid: Three Column Phase Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch justify-center mb-6"
        >
          {/* Card 1: Hoy */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">
              Hoy
            </span>
            <h4 className="text-white font-bold text-base tracking-wide uppercase mb-3 font-arimo">
              11 productoras activas
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
              Uso real en decisiones de producción. Barcelona, Madrid y Lisboa activos. Validación pre-comercial: aún sin cobrar.
            </p>
          </motion.div>

          {/* Card 2: Próximo Paso */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">
              Próximo paso
            </span>
            <h4 className="text-white font-bold text-base tracking-wide uppercase mb-3 font-arimo">
              Más productoras y primeros pagos
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
              Incorporar 10-12 productoras calificadas fuera del círculo actual. Freemium controlado + primeros pagos On-Demand.
            </p>
          </motion.div>

          {/* Card 3: 6-12 Meses */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >
            <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-3 block">
              6–12 meses
            </span>
            <h4 className="text-white font-bold text-base tracking-wide uppercase mb-3 font-arimo">
              Escalar por ciudad / 40 clientes pagos
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed font-arimo">
              Cada productora define proyectos, necesidades y ciudades objetivo. GEOLAND activa cobertura mínima, red local y soporte operativo para convertir el uso recurrente en Hub mensual, con una meta de 40 clientes pagos en 12 meses.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Grid: Info Boxes */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch justify-center mb-6"
        >
          {/* Box 1: Cliente */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-5 backdrop-blur-sm"
          >
            <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-2 block">
              Cliente
            </span>
            <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
              Line Producer · Executive Producer · Head of Production
            </p>
          </motion.div>

          {/* Box 2: Canales */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/[0.02] border border-white/5 rounded-xl p-5 backdrop-blur-sm"
          >
            <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-2 block">
              Canales
            </span>
            <p className="text-white/80 text-[11px] font-light tracking-wide leading-relaxed font-arimo">
              Service Companies · Productoras · Scouts/Fixers · Film Commissions · Industry Markets · Referidos
            </p>
          </motion.div>

          {/* Box 3: Meta año 1 (Highlighted Box) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-white/[0.08] border border-white/30 rounded-xl p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          >
            <span className="text-white/40 font-arimo text-[10px] tracking-[0.2em] uppercase font-bold mb-2 block">
              Meta año 1
            </span>
            <p className="text-white font-bold text-xs tracking-wide leading-relaxed font-arimo">
              40 clientes pagos · €270K ARR proyectado
            </p>
          </motion.div>
        </motion.div>

        {/* Footnote text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full text-left"
        >
          <p className="text-[10px] text-white font-light italic leading-relaxed tracking-wide">
            Modelo: productora → proyecto → ciudad objetivo → datos + partners + memoria. Cada ciudad reduce el coste y mejora la siguiente búsqueda.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GoToMarketStrategyHud;
