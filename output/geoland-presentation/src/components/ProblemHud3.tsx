import React from 'react';
import { motion } from 'framer-motion';
import { TriangleAlert } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ProblemHud3: React.FC = () => {
  const { t } = useLanguage();
  const hud = t.hud.problem3;

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
            {hud.overline}
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6 leading-[1.1]">
            {hud.title}
          </h1>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full mt-2 items-center">
          {/* Left Panel (Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col bg-black/50 border border-white/10 rounded-xl p-8 backdrop-blur-md shadow-2xl"
          >
            <TriangleAlert size={32} className="text-white mb-6" strokeWidth={1.5} />
            <h2 className="text-white text-[50px] md:text-[64px] font-gothic tracking-wide uppercase mb-2 leading-none">
              {hud.statTitle}
            </h2>
            <p className="text-white text-xl md:text-[24px] font-bold font-arimo leading-[1.2] mb-6">
              {hud.statDesc}
            </p>
            <div className="w-10 h-[1px] bg-white mb-6"></div>
            <p className="text-white/40 text-xs md:text-sm font-arimo italic leading-relaxed">
              {hud.statFooter}
            </p>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {/* Item 1 */}
            <div className="flex items-start">
              <p className="text-white/85 text-lg md:text-xl font-arimo leading-relaxed font-light mt-0.5 whitespace-pre-line">
                {hud.variablesText}
              </p>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-white/10 my-1"></div>

            {/* Item 2 */}
            <div className="flex items-start">
              <p className="text-white/50 text-lg md:text-[19px] font-arimo leading-relaxed font-light mt-0.5">
                {hud.dispersedText}<br/>
                <strong className="text-white font-bold">{hud.dispersedBold}</strong>
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProblemHud3;
