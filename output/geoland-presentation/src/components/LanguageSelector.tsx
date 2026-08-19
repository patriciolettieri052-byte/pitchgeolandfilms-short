import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-8 right-10 z-[60] flex items-center bg-black/40 border border-white/10 rounded-full p-1 backdrop-blur-md transition-all duration-300 hover:border-white/30">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 text-[11px] font-jost tracking-widest font-light uppercase rounded-full transition-all duration-300 ${
          language === 'es'
            ? 'bg-white text-black font-medium shadow-[0_0_12px_rgba(255,255,255,0.4)]'
            : 'text-white/40 hover:text-white/80'
        }`}
      >
        ES
      </button>
      <span className="text-white/20 text-[10px] mx-0.5">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-[11px] font-jost tracking-widest font-light uppercase rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-white text-black font-medium shadow-[0_0_12px_rgba(255,255,255,0.4)]'
            : 'text-white/40 hover:text-white/80'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
