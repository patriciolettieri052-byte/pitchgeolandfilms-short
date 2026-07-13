import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Map, Database, RefreshCw, Headphones } from 'lucide-react';

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

const UnitEconomicsHud: React.FC<{
  title?: string;
  overline?: string;
  text?: string;
}> = ({ title, overline }) => {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '120px', paddingRight: '120px'
    }}>
      <div className="w-full max-w-[950px] py-4 flex flex-col justify-center items-start select-none font-jost">
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
              {title || "Margen bruto estimado del ~87%."}
            </h1>
          </motion.div>
        </div>

        {/* Main Grid/Containers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col gap-5"
        >
          {/* Top Card: Margen Bruto ~87% */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-4"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-5xl md:text-6xl font-gothic tracking-wide text-[#22c55e] leading-none">
                ~87%
              </span>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl font-arimo">
                  Margen bruto
                </span>
                <span className="text-white/40 text-xs md:text-sm font-light font-arimo">
                  Por encima de la mediana SaaS (75–80%)
                </span>
              </div>
            </div>

            {/* Custom Progress Bar */}
            <div className="w-full">
              <div className="w-full h-3.5 bg-white/15 rounded-full overflow-hidden flex">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
                  className="h-full bg-[#16a34a] rounded-l-full"
                />
                <div className="h-full w-[13%] bg-white/30" />
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px] md:text-xs font-semibold tracking-wider font-arimo">
                <span className="text-[#22c55e] uppercase">Margen</span>
                <span className="text-white/40 uppercase">COGS · ~13%</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Grid: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-stretch">
            {/* Left Card: Qué compone el COGS */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white/40 font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
                  QUÉ COMPONE EL COGS
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/80 text-xs md:text-sm font-light font-arimo">
                    <Cpu className="text-white/40 mr-3 w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>IA / LLM por búsqueda</span>
                  </li>
                  <li className="flex items-center text-white/80 text-xs md:text-sm font-light font-arimo">
                    <Server className="text-white/40 mr-3 w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>Servidores e infraestructura</span>
                  </li>
                  <li className="flex items-center text-white/80 text-xs md:text-sm font-light font-arimo">
                    <Map className="text-white/40 mr-3 w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>APIs de mapas y clima</span>
                  </li>
                  <li className="flex items-center text-white/80 text-xs md:text-sm font-light font-arimo">
                    <Database className="text-white/40 mr-3 w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>Almacenamiento de dataset</span>
                  </li>
                  <li className="flex items-center text-white/80 text-xs md:text-sm font-light font-arimo">
                    <RefreshCw className="text-white/40 mr-3 w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>Mantenimiento del dataset</span>
                  </li>
                  <li className="flex items-center text-white/80 text-xs md:text-sm font-light font-arimo">
                    <Headphones className="text-white/40 mr-3 w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>Soporte y QA</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Card: Por qué el margen mejora */}
            <motion.div
              variants={itemVariants}
              className="bg-[#16a34a]/10 border border-[#16a34a]/30 rounded-2xl p-6 backdrop-blur-md flex flex-col"
            >
              <h3 className="text-[#22c55e] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
                POR QUÉ EL MARGEN MEJORA
              </h3>
              <div className="flex flex-col gap-4 text-white/90 text-xs md:text-sm font-light leading-relaxed font-arimo">
                <p>
                  El coste de una búsqueda es casi todo fijo, no variable. La infraestructura ya está pagada; el cómputo por búsqueda es marginal.
                </p>
                <p>
                  Cada ciudad se cura una vez y se reutiliza en todas las búsquedas siguientes — el margen sube con el volumen.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full text-left"
          >
            <p className="text-[10px] text-white font-light leading-relaxed tracking-wide font-arimo">
              Margen bruto estimado sobre COGS completo (cómputo, infraestructura, APIs, almacenamiento y soporte). No incluye la construcción de dataset y red local, que es inversión de la ronda, no coste de operación. Se recalibra con volumen real de producción.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnitEconomicsHud;
