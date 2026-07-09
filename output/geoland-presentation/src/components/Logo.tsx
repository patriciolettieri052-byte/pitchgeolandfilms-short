import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC<{ intro?: boolean; subtitle?: string; subtitleClassName?: string }> = ({ intro, subtitle, subtitleClassName }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`flex flex-col items-center justify-center w-full ${intro ? 'h-full' : 'py-12'}`}
      style={{ minHeight: intro ? '100%' : 'auto' }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-60 md:w-80 h-auto">
          <img 
            src="/logo.svg" 
            alt="Geoland OS Logo" 
            className="w-full h-auto brightness-200 invert keep-filter"
            style={{ 
              filter: 'invert(1) brightness(2)',
              display: 'block'
            }} 
          />
        </div>
        {intro && subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={`mt-6 text-[6.5px] md:text-[8px] uppercase tracking-[0.15em] font-light text-white/50 text-center whitespace-nowrap w-full max-w-[80vw] ${subtitleClassName || ''}`}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Logo;
