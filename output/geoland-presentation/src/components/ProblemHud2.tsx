import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const ProblemCard: React.FC<{
  icon?: React.ReactNode;
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
    {icon && (
      <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white mb-8">
        {icon}
      </div>
    )}
    
    <h3 className="text-white text-2xl font-gothic tracking-wide uppercase mb-4">
      {title}
    </h3>
    
    <p className="text-white/60 text-sm font-arimo font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const ProblemHud2: React.FC = () => {
  const { t } = useLanguage();
  const hud = t.hud.problem2;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pl-[120px] pr-[120px]">
      <div className="w-full max-w-[1400px] flex flex-col gap-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left max-w-[1100px]"
        >
          <span className="text-[#EAD8C0] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            {hud.overline}
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            {hud.title}
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            {hud.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          <ProblemCard 
            title={hud.card1Title}
            description={hud.card1Desc}
            delay={0.2}
          />
          <ProblemCard 
            title={hud.card2Title}
            description={hud.card2Desc}
            delay={0.3}
          />
          <ProblemCard 
            title={hud.card3Title}
            description={hud.card3Desc}
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
            {hud.footer}
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default ProblemHud2;
