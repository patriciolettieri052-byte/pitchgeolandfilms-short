import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const DiagramaFuentes: React.FC = () => {
  // Geometric Constants
  const width = 1100;
  const height = 500;
  const cx = width / 2;
  const cy = height / 2;

  const leftCards = useMemo(() => [
    { label: "APIs privadas" },
    { label: "Fuentes geoespaciales y mapas" },
    { label: "Imágenes satelitales" },
    { label: "Clima y luz solar" },
    { label: "Tráfico y movilidad" },
    { label: "Catastro y urbanismo" }
  ], []);

  const rightCards = useMemo(() => [
    { label: "Municipios, ayuntamientos y film commissions" },
    { label: "Permisos, ruido y medio ambiente" },
    { label: "Bases de locaciones y catálogos visuales" },
    { label: "Incentivos fiscales y proveedores locales" },
    { 
      label: "Red de expertos en terreno",
      subtitle: "Scouters · Fixers · Location Managers"
    },
    { label: "Feedback operativo de producciones reales" }
  ], []);

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      {/* Scaling Container to fit slide dimensions perfectly */}
      <div className="relative w-[1100px] h-[500px] shrink-0 scale-[1.15] md:scale-[1.2] transition-transform origin-center">
        
        {/* SVG Canvas for connection lines and joints */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Left Lines */}
          {leftCards.map((_, idx) => {
            const y_i = 60 + idx * 76;
            const y_center_i = 175 + idx * 30;
            const path = `M 270 ${y_i} L 290 ${y_i} L 445 ${y_center_i} L 465 ${y_center_i}`;
            return (
              <g key={`left-line-${idx}`}>
                <motion.path
                  d={path}
                  fill="none"
                  stroke="rgba(247, 246, 237, 0.15)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 + idx * 0.05 }}
                />
                <motion.circle
                  cx={270}
                  cy={y_i}
                  r={2.5}
                  fill="#F7F6ED"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                />
                <motion.circle
                  cx={465}
                  cy={y_center_i}
                  r={2.5}
                  fill="#F7F6ED"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                />
              </g>
            );
          })}

          {/* Right Lines */}
          {rightCards.map((_, idx) => {
            const y_i = 60 + idx * 76;
            const y_center_i = 175 + idx * 30;
            const path = `M 830 ${y_i} L 810 ${y_i} L 655 ${y_center_i} L 635 ${y_center_i}`;
            return (
              <g key={`right-line-${idx}`}>
                <motion.path
                  d={path}
                  fill="none"
                  stroke="rgba(247, 246, 237, 0.15)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 + idx * 0.05 }}
                />
                <motion.circle
                  cx={830}
                  cy={y_i}
                  r={2.5}
                  fill="#F7F6ED"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                />
                <motion.circle
                  cx={635}
                  cy={y_center_i}
                  r={2.5}
                  fill="#F7F6ED"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                />
              </g>
            );
          })}
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-[170px] h-[180px] bg-black border border-white/15 rounded-xl shadow-2xl flex flex-col items-center justify-center text-center p-6"
          style={{ left: cx - 85, top: cy - 90 }}
        >
          <div className="w-32 h-auto mb-1">
            <img 
              src="/logo.svg" 
              alt="Geoland Logo" 
              className="w-full h-auto brightness-200 invert"
              style={{ 
                filter: 'invert(1) brightness(2)',
                display: 'block'
              }} 
            />
          </div>
          <div className="w-10 h-[1px] bg-white/20 my-3" />
          <span 
            className="text-white/60 tracking-[0.1em] font-normal uppercase text-center text-[7.5px] leading-relaxed"
            style={{
              fontFamily: "'Arimo', sans-serif",
            }}
          >
            Production Strategy<br />Vector
          </span>
        </motion.div>

        {/* Left Side Cards */}
        {leftCards.map((card, idx) => {
          const y_i = 60 + idx * 76;
          return (
            <motion.div
              key={`left-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + idx * 0.05 }}
              className="absolute w-[220px] min-h-[46px] flex flex-col justify-center items-end text-right px-4 bg-black border border-white/5 rounded-lg shadow-lg hover:border-white/25 hover:bg-zinc-900 transition-all duration-300"
              style={{ left: 50, top: y_i - 23 }}
            >
              <span 
                className="tracking-wide text-white/80 font-normal leading-snug"
                style={{
                  fontFamily: "'Arimo', sans-serif",
                  fontSize: '9.5px',
                }}
              >
                {card.label}
              </span>
            </motion.div>
          );
        })}

        {/* Right Side Cards */}
        {rightCards.map((card, idx) => {
          const y_i = 60 + idx * 76;
          return (
            <motion.div
              key={`right-${idx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + idx * 0.05 }}
              className="absolute w-[220px] min-h-[46px] flex flex-col justify-center items-center text-center px-4 bg-black border border-white/5 rounded-lg shadow-lg hover:border-white/25 hover:bg-zinc-900 transition-all duration-300"
              style={{ left: 830, top: y_i - 23 }}
            >
              <span 
                className="tracking-wide text-white/80 font-normal leading-snug"
                style={{
                  fontFamily: "'Arimo', sans-serif",
                  fontSize: '9.5px',
                }}
              >
                {card.label}
              </span>
              {card.subtitle && (
                <span 
                  className="tracking-wide text-white/40 mt-0.5 leading-none"
                  style={{
                    fontFamily: "'Arimo', sans-serif",
                    fontSize: '7.5px',
                  }}
                >
                  {card.subtitle}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DiagramaFuentes;
