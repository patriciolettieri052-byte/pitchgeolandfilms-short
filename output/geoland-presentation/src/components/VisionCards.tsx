import React from 'react';
import { motion } from 'framer-motion';
import { Building, Plane, Truck, Store } from 'lucide-react';

const VisionCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className="flex flex-col bg-black/50 border border-white/10 rounded-xl p-8 backdrop-blur-md h-full relative group hover:border-[#e27329]/30 transition-all duration-300"
  >
    <div className="text-white/20 mb-6 group-hover:text-[#e27329]/60 transition-colors duration-300">
      {icon}
    </div>
    
    <h3 className="text-white text-2xl font-gothic tracking-wide uppercase mb-4">
      {title}
    </h3>
    
    <p className="text-white/50 text-[13px] font-arimo font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const VisionCards: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start pl-[120px] pr-[120px]">
      <div className="w-full max-w-[1400px] flex flex-col gap-8 mt-[-30px]">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left max-w-[1200px]"
        >
          <span className="text-[#e27329] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            VISIÓN
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            BUILT TO SCALE. ONE SYSTEM. MULTIPLE INDUSTRIES.
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-2">
          <VisionCard 
            title="Real Estate & Farmland"
            description="ROI/IRR/NOI, riesgo macro, comparables y timing de mercado."
            icon={<Building size={32} strokeWidth={1.5} />}
            delay={0.2}
          />
          <VisionCard 
            title="Aviation & Aeronautics"
            description="Rutas, clima operativo, mantenimiento y riesgo operativo."
            icon={<Plane size={32} strokeWidth={1.5} />}
            delay={0.3}
          />
          <VisionCard 
            title="Logistics & Supply Chain"
            description="Puertos, congestión, riesgo geopolítico y eficiencia."
            icon={<Truck size={32} strokeWidth={1.5} />}
            delay={0.4}
          />
          <VisionCard 
            title="Retail Expansion"
            description="Demografía, tráfico, competencia y expansión multi-ciudad."
            icon={<Store size={32} strokeWidth={1.5} />}
            delay={0.5}
          />
        </div>

      </div>
    </div>
  );
};

export default VisionCards;
