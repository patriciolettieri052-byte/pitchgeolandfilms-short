import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const ProblemCard: React.FC<{
  icon?: React.ReactNode;
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
    {icon && (
      <div className="text-white/30 mb-8">
        {icon}
      </div>
    )}
    
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
  const { t } = useLanguage();
  const hud = t.hud.problem1;

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
            footer={hud.card1Footer}
            delay={0.2}
          />
          <ProblemCard 
            title={hud.card2Title}
            description={hud.card2Desc}
            footer={hud.card2Footer}
            delay={0.3}
          />
          <ProblemCard 
            title={hud.card3Title}
            description={hud.card3Desc}
            footer={hud.card3Footer}
            delay={0.4}
          />
        </div>

      </div>
    </div>
  );
};

export default ProblemHud1;
