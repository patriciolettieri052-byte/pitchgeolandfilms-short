import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Mountain, Train, TriangleAlert } from 'lucide-react';

const CaseCard: React.FC<{
  overline: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  extraCost: string;
  extraCostLabel: string;
  footer: string;
  delay: number;
}> = ({ overline, icon, title, description, extraCost, extraCostLabel, footer, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className="flex flex-col h-full bg-black/50 border border-white/10 rounded-xl p-8 backdrop-blur-md relative"
  >
    <div className="absolute top-8 right-8 text-white/10">
      {icon}
    </div>
    
    <span style={{ color: '#EAD8C0' }} className="font-arimo text-[10px] tracking-[0.15em] font-bold mb-4 block uppercase">
      {overline}
    </span>
    
    <h3 className="text-white text-2xl font-gothic tracking-wide uppercase mb-4 leading-tight">
      {title}
    </h3>
    
    <p className="text-white/60 text-sm font-arimo font-light leading-relaxed mb-6 min-h-[72px]">
      {description}
    </p>
    
    <div className="w-10 h-[1px] bg-white mb-6"></div>
    
    <div className="mb-6">
      <div className="text-white text-3xl md:text-4xl font-gothic tracking-wide uppercase leading-none mb-2">
        {extraCost}
      </div>
      <div className="text-white/40 text-xs md:text-sm font-arimo font-light">
        {extraCostLabel}
      </div>
    </div>
    
    <div className="pt-4 mt-auto">
      <p className="text-white/30 text-[10px] font-arimo italic">
        {footer}
      </p>
    </div>
  </motion.div>
);

const ProblemHud4: React.FC = () => {
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
          <span style={{ color: '#EAD8C0' }} className="font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
            REFERENCIAS EXTERNAS
          </span>
          <h1 className="text-white font-gothic text-5xl md:text-6xl tracking-wide uppercase mb-6">
            Cuando una locación falla, falla toda la producción.
          </h1>
          <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light">
            Casos históricos documentados. No son casos realizados con GEOLAND.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          <CaseCard 
            overline="THE REVENANT"
            icon={<Snowflake size={36} strokeWidth={1} />}
            title="La nieve desapareció."
            description="La producción necesitaba nieve real. Al fallar las condiciones en Canadá, parte del rodaje tuvo que moverse a Patagonia."
            extraCost="USD 10M extra"
            extraCostLabel="por 6 días no planificados de rodaje."
            footer="Fuente: TheWrap / Vanity Fair"
            delay={0.2}
          />
          <CaseCard 
            overline="MAD MAX: FURY ROAD"
            icon={<Mountain size={36} strokeWidth={1} />}
            title="El desierto dejó de ser desierto."
            description="Broken Hill estaba preparada como locación, pero lluvias inusuales cambiaron el paisaje. El rodaje se movió a Namibia."
            extraCost="USD 1.3M"
            extraCostLabel="en infraestructura preparada que quedó varada."
            footer="Fuente: NFSA / ABC Australia"
            delay={0.3}
          />
          <CaseCard 
            overline="MIDNIGHT RIDER"
            icon={<Train size={36} strokeWidth={1} />}
            title="El permiso no existía."
            description="La producción filmó en una infraestructura ferroviaria activa sin autorización. El proyecto quedó cancelado."
            extraCost="USD 11.2M"
            extraCostLabel="en exposición legal tras una locación operativamente inviable."
            footer="Fuente: NTSB / Variety"
            delay={0.4}
          />
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-6 bg-black/50 border border-white/10 rounded-xl p-6 w-full mt-4 backdrop-blur-md"
        >
          <TriangleAlert size={28} className="text-white shrink-0" strokeWidth={1.5} />
          <div className="flex flex-col">
            <p className="text-white/80 text-sm font-arimo leading-relaxed font-light">
              Una locación puede fallar por <strong className="text-white font-bold">clima</strong>, <strong className="text-white font-bold">cambio visual</strong> del entorno o <strong className="text-white font-bold">falta de control operativo</strong>.
            </p>
            <p className="text-white/30 text-[10px] font-arimo italic mt-1">
              Fuentes: TheWrap, Vanity Fair, NFSA, ABC Australia, NTSB, Variety.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProblemHud4;

