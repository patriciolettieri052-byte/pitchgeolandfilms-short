import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Layers } from 'lucide-react';

const ProblemCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  footer: string;
  delay: number;
}> = ({ icon, title, description, footer, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className="flex flex-col h-full bg-black/50 border border-white/10 rounded-xl p-8 backdrop-blur-md"
  >
    <div className="text-white/30 mb-8">
      {icon}
    </div>
    
    <h3 className="text-white text-3xl font-gothic tracking-wide uppercase mb-4">
      {title}
    </h3>
    
    <p className="text-white/60 text-sm font-arimo font-light leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    
    <div className="pt-4 mt-auto">
      <p className="text-white/30 text-[10px] font-arimo italic">
        {footer}
      </p>
    </div>
  </motion.div>
);

const ProblemHud1: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start pl-[120px] pr-[120px]">
      <div className="w-full max-w-[1400px] flex flex-col gap-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left max-w-[1100px]"
        >
          <span className="text-white font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            EL PROBLEMA
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            Una locación no es solo filmar.
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            Son permisos, accesos, tráfico, parking, seguridad, ruido y cientos de variables más. Una sola variable no detectada compromete toda la producción — y un error de locación puede costar cientos de miles de euros.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          <ProblemCard 
            icon={<Coins size={36} strokeWidth={1.5} />}
            title="USD 670K–1.3M"
            description="por día de rodaje en locación, en producciones profesionales."
            footer="Fuente: Motion Picture Association"
            delay={0.2}
          />
          <ProblemCard 
            icon={<TrendingUp size={36} strokeWidth={1.5} />}
            title="+USD 300K/día"
            description="de gasto local promedio en producciones de alto presupuesto."
            footer="Fuente: Olsberg SPI / MPA"
            delay={0.3}
          />
          <ProblemCard 
            icon={<Layers size={36} strokeWidth={1.5} />}
            title="Decenas de variables"
            description="permisos, accesos, tráfico, parking, generadores, seguridad, ruido y comunidad."
            footer="Fuente: NYC Mayor's Office of Media & Entertainment"
            delay={0.4}
          />
        </div>

      </div>
    </div>
  );
};

export default ProblemHud1;
