import React from 'react';

const IdeaHud: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start pl-[120px] pr-[120px]">
      <div className="w-full max-w-[1000px] flex flex-col items-start text-left mt-[-20px]">
        
        <span className="text-[#e27329] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-4">
          LA IDEA
        </span>
        <h1 className="text-white font-gothic text-6xl md:text-[85px] tracking-wide uppercase leading-none mb-3">
          GEOLAND
        </h1>
        <h2 className="text-[#e27329] font-arimo text-xs tracking-[0.2em] uppercase font-bold mb-8">
          Decision System for Film Production
        </h2>
        
        <p className="text-white/70 font-arimo text-base md:text-lg leading-relaxed font-light mb-8 max-w-[800px]">
          Un sistema de inteligencia de decisión que combina la comprensión contextual de la IA con el rigor de un software de precisión, para encontrar la mejor locación para cada escena — cruzando lo que la producción busca visualmente con lo que realmente necesita para rodar: permisos, costes, logística, clima, luz e infraestructura.
        </p>
        
        <div className="flex flex-col gap-3 font-arimo text-lg md:text-xl">
          <span className="text-white/30 font-light">No es un portal.</span>
          <span className="text-white/30 font-light">No es un dashboard.</span>
          <span className="text-white/30 font-light">No es una herramienta de búsqueda.</span>
          <span className="text-white font-bold mt-2">Es el sistema que conecta cada dato con cada decisión de producción.</span>
        </div>

      </div>
    </div>
  );
};

export default IdeaHud;
