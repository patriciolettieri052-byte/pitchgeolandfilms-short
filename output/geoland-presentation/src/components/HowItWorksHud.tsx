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

const StepCard: React.FC<{
  step: string;
  title: string;
  description: string;
  delay: number;
}> = ({ step, title, description, delay }) => (
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
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(8,8,8,0.5)',
      backdropFilter: 'blur(8px)',
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: '8px'
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <p style={{
        fontFamily: F.arimo, fontSize: '10px', letterSpacing: '0.3em',
        textTransform: 'uppercase', color: '#4478FF', margin: '0 0 12px 0', fontWeight: 'bold'
      }}>
        {step}
      </p>

      <h2 style={{
        fontFamily: F.gothic, fontSize: 'clamp(1.3rem,2vw,1.8rem)',
        textTransform: 'uppercase', letterSpacing: '0.05em', color: F.white,
        fontWeight: 'normal', margin: '0 0 16px 0', lineHeight: 1
      }}>
        {title}
      </h2>

      <div style={{ width: '100%', height: 1, background: 'rgba(247,246,237,0.06)', marginBottom: 16 }} />

      <p style={{
        fontFamily: F.arimo, fontSize: '12px', lineHeight: 1.6, color: F.dim, margin: 0, flexGrow: 1
      }}>
        {description}
      </p>
    </div>
  </motion.div>
);

const HowItWorksHud: React.FC = () => {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '120px', paddingRight: '120px'
    }}>
      {/* Header Section */}
      <div className="w-full max-w-[1200px] mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left max-w-[900px]"
        >
          <span className="text-white font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            WORKFLOW
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            CÓMO FUNCIONA
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            De una escena a una locación lista para rodar.
          </p>
        </motion.div>
      </div>

      {/* Grid container */}
      <div style={{ width: '100%', maxWidth: '1400px' }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
          <StepCard
            step="1. INPUT"
            title="Describir Escena"
            description="Vía conversación, guion técnico o referencia visual."
            delay={0.1}
          />
          <StepCard
            step="2. ENGINE"
            title="PSV Vector"
            description="La IA traduce la necesidad en un perfil comparable de viabilidad y riesgo."
            delay={0.2}
          />
          <StepCard
            step="3. MATCH"
            title="Locaciones Rankeadas"
            description="Cards con G-Score, alineadas a las prioridades reales de producción."
            delay={0.3}
          />
          <StepCard
            step="4. ANALYZE"
            title="Dashboard Profundo"
            description="Costes, permisos, riesgos y próximos pasos por locación."
            delay={0.4}
          />
          <StepCard
            step="5. EXECUTE"
            title="Activación"
            description="Contacto directo con scouts y location managers verificados."
            delay={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksHud;
