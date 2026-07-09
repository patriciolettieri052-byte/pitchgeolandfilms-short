import React from 'react';
import { motion } from 'framer-motion';

const F = {
  gothic: "'League Gothic', sans-serif",
  arimo:  "'Arimo', sans-serif",
  white:  "#F7F6ED",
  dim:    "rgba(247,246,237,0.52)",
  dimBr:  "rgba(247,246,237,0.85)",
  border: "rgba(247,246,237,0.08)",
  dimRed: "rgba(247,246,237,0.4)"
};

const ValidationCard: React.FC<{
  statNumber: string;
  statLabel: string;
  subtext: string;
  delay: number;
}> = ({ statNumber, statLabel, subtext, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    whileHover={{
      borderColor: 'rgba(247,246,237,0.18)',
      background: 'rgba(12,12,12,0.85)',
    }}
    style={{
      border: `1px solid ${F.border}`,
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(8,8,8,0.5)',
      backdropFilter: 'blur(8px)',
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: '8px'
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', textAlign: 'center' }}>
      <span style={{
        fontFamily: F.gothic,
        fontSize: 'clamp(3rem, 4.5vw, 4rem)',
        color: F.white,
        lineHeight: 0.9,
        letterSpacing: '-0.02em',
        fontWeight: 'normal',
        marginBottom: '8px'
      }}>
        {statNumber}
      </span>
      <p style={{
        fontFamily: F.arimo, fontSize: '10px', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: F.dimBr, margin: '0 0 12px 0', fontWeight: 'bold'
      }}>
        {statLabel}
      </p>
      <div style={{ width: '40px', height: 1, background: 'rgba(247,246,237,0.15)', marginBottom: 12 }} />
      <p style={{
        fontFamily: F.arimo, fontSize: '11px', lineHeight: 1.5, color: F.dim, margin: 0, flexGrow: 1
      }}>
        {subtext}
      </p>
    </div>
  </motion.div>
);

const ValidationHud: React.FC = () => {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '120px', paddingRight: '120px'
    }}>
      {/* Header Section */}
      <div className="w-full max-w-[1000px] mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left max-w-[900px]"
        >
          <span className="text-white font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            BETA NETWORK
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            VALIDACIÓN INICIAL
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            Módulo de pruebas operativas privadas con productoras asociadas de mercados seleccionados.
          </p>
        </motion.div>
      </div>

      {/* Grid container */}
      <div style={{ width: '100%', maxWidth: '1400px' }}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <ValidationCard
            statNumber="10"
            statLabel="MESES"
            subtext="Probando el sistema en entornos reales."
            delay={0.1}
          />
          <ValidationCard
            statNumber="3"
            statLabel="CIUDADES OPERATIVAS"
            subtext="Barcelona, Madrid y Lisboa."
            delay={0.2}
          />
          <ValidationCard
            statNumber="11"
            statLabel="PRODUCTORAS ACTIVAS"
            subtext="Testeando y nutriendo el sistema."
            delay={0.3}
          />
          <ValidationCard
            statNumber="+620"
            statLabel="PROCESOS"
            subtext="Análisis y búsquedas operativas completadas."
            delay={0.4}
          />
          <ValidationCard
            statNumber="9/11"
            statLabel="USO RECURRENTE"
            subtext="Productoras con uso constante de la herramienta."
            delay={0.5}
          />
          <ValidationCard
            statNumber="60%"
            statLabel="PARA PRESUPUESTOS"
            subtext="El sistema ya está integrado en decisiones financieras reales, no solo en búsquedas exploratorias."
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default ValidationHud;
