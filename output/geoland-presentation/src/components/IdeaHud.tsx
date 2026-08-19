import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const IdeaHud: React.FC = () => {
  const { t } = useLanguage();
  const hud = t.hud.idea;

  return (
    <div className="w-full h-full flex flex-col justify-center items-start pl-[120px] pr-[120px]">
      <div className="w-full max-w-[610px] flex flex-col items-start text-left mt-[-20px]">
        
        <span className="text-[#EAD8C0] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
          {hud.overline}
        </span>
        <h1 className="text-white font-gothic text-6xl md:text-[85px] tracking-wide uppercase leading-none mb-3">
          {hud.title}
        </h1>
        
        <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light mb-5 max-w-full">
          {hud.subtitle}
        </p>
        
        <div className="flex flex-col gap-1 font-arimo text-lg md:text-xl">
          <span className="text-white font-medium">{hud.line1}</span>
          <span className="text-white font-medium">{hud.line2}</span>
          <span className="text-white font-medium">{hud.line3}</span>
          <span className="text-white font-bold mt-1.5">{hud.line4Bold}</span>
        </div>

      </div>
    </div>
  );
};

export default IdeaHud;
