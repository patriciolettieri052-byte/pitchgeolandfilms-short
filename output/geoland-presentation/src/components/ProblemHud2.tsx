import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Plane } from 'lucide-react';

const ProblemCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className="flex flex-col h-full bg-black/50 border border-white/10 rounded-xl p-8 backdrop-blur-md"
  >
    <div className="w-12 h-12 rounded-full border border-[#e27329] flex items-center justify-center text-[#e27329] mb-8">
      {icon}
    </div>
    
    <h3 className="text-white text-2xl font-gothic tracking-wide uppercase mb-4">
      {title}
    </h3>
    
    <p className="text-white/60 text-sm font-arimo font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const ProblemHud2: React.FC = () => {
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
          <span className="text-[#e27329] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            EL PROBLEMA
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            Una sola variable no detectada compromete toda la producción.
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            La locación puede ser visualmente perfecta — y aun así, un solo detalle fuera de plano puede parar el rodaje:
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          <ProblemCard 
            icon={<Building size={22} strokeWidth={2} />}
            title="Una obra al lado del set"
            description="Martillos, taladros y vibraciones contaminan el sonido directo — aunque la locación sea perfecta, la escena no puede rodarse."
            delay={0.2}
          />
          <ProblemCard 
            icon={<Users size={22} strokeWidth={2} />}
            title="Un festival a metros del rodaje"
            description="Accesos bloqueados, tráfico cortado y seguridad alterada. La producción queda detenida mientras el presupuesto sigue corriendo."
            delay={0.3}
          />
          <ProblemCard 
            icon={<Plane size={22} strokeWidth={2} />}
            title="Una ruta aérea sobre una escena de época"
            description="Cada pocos minutos cruza un avión. La imagen no funciona, el sonido tampoco."
            delay={0.4}
          />
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-white/40 text-sm font-arimo italic font-light">
            No son casos hipotéticos: The Revenant se quedó sin nieve en Canadá y tuvo que trasladar el rodaje a Patagonia — un imprevisto de ~USD 10M por elegir mal la locación.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default ProblemHud2;
