import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const CaseStudyHud: React.FC = () => {
  const { t } = useLanguage();
  const hud = t.hud.caseStudy;

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '120px', paddingRight: '120px'
    }}>
      <div className="w-full max-w-[1400px] flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left max-w-[900px]"
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
        </div>

        {/* Grid container */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-black/50 border border-white/10 p-8 rounded-lg backdrop-blur-md flex flex-col"
            >
              <p className="font-arimo text-[10px] tracking-[0.3em] uppercase text-geoland-blue mb-4 font-bold">{hud.challengeBadge}</p>
              <h2 className="font-gothic text-3xl uppercase text-white mb-2">{hud.challengeTitle}</h2>
              <p className="font-arimo text-xs text-white/50 mb-6 uppercase tracking-wider">{hud.challengeAgency}</p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-arimo text-[11px] text-white/40 uppercase tracking-widest">{hud.scenesLabel}</span>
                  <span className="font-gothic text-xl text-white">{hud.scenesVal}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-arimo text-[11px] text-white/40 uppercase tracking-widest">{hud.shootLabel}</span>
                  <span className="font-gothic text-xl text-white">{hud.shootVal}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-arimo text-[11px] text-white/40 uppercase tracking-widest">{hud.budgetLabel}</span>
                  <span className="font-gothic text-xl text-white">{hud.budgetVal}</span>
                </div>
              </div>
              <p className="font-arimo text-[12px] text-white/70 leading-relaxed font-light mt-auto">
                {hud.challengeDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/50 border border-white/10 p-8 rounded-lg backdrop-blur-md flex flex-col"
            >
              <p className="font-arimo text-[10px] tracking-[0.3em] uppercase text-geoland-blue mb-4 font-bold">{hud.analysisBadge}</p>
              <h2 className="font-gothic text-2xl uppercase text-white mb-6">{hud.analysisTitle}</h2>
              <div className="mb-6">
                <h3 className="font-arimo text-[10px] uppercase text-white/40 tracking-widest mb-2 border-b border-white/10 pb-1">{hud.strengthsHeader}</h3>
                <p className="font-arimo text-[12px] text-white/70 leading-relaxed font-light">
                  {hud.strengthsDesc}
                </p>
              </div>
              <div className="mt-auto">
                <h3 style={{ color: '#EAD8C0' }} className="font-arimo text-[10px] uppercase tracking-widest mb-2 border-b border-white/10 pb-1">{hud.risksHeader}</h3>
                <p className="font-arimo text-[12px] text-white/70 leading-relaxed font-light">
                  {hud.risksDesc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-black/50 border border-white/10 p-8 rounded-lg backdrop-blur-md flex flex-col"
            >
              <p className="font-arimo text-[10px] tracking-[0.3em] uppercase text-geoland-blue mb-4 font-bold">{hud.resultBadge}</p>
              <h2 className="font-gothic text-2xl uppercase text-white mb-6">{hud.resultTitle}</h2>
              <p className="font-arimo text-[12px] text-white/80 leading-relaxed font-light italic mb-8">
                {hud.quote}
              </p>
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="font-arimo text-[12px] text-[#F7F6ED] tracking-wider uppercase">
                  {hud.check}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHud;
