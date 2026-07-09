import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import schema from '../data/geoland_schema.json';

type NodeData = {
  id: string;
  layer: string;
  label: string;
  description?: string;
  lane?: string;
  is_llm?: boolean;
  llm_label?: string;
  veto_condition?: string;
  x?: number; // Calculated
  y?: number; // Calculated
};

type SynapseData = {
  from: string;
  to: string;
  type: string;
};

const NeuralMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      });
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimensions;

  const nodesWithPositions = useMemo(() => {
    const layers = schema.neural_layers.map(l => l.id);
    const nodes = schema.nodes as NodeData[];
    
    const grouped: Record<string, NodeData[]> = {};
    layers.forEach(l => grouped[l] = []);
    nodes.forEach(n => {
      if (grouped[n.layer]) grouped[n.layer].push(n);
    });

    const paddingX = width * 0.15; 
    const paddingY = height * 0.25; 
    const availableWidth = width - paddingX * 2;
    const availableHeight = height - paddingY * 2;

    const layerSpacing = availableWidth / (layers.length - 1);

    const positioned = nodes.map(node => {
      const layerIndex = layers.indexOf(node.layer);
      const nodesInLayer = grouped[node.layer];
      const nodeIndex = nodesInLayer.findIndex(n => n.id === node.id);
      
      const x = paddingX + layerIndex * layerSpacing;
      
      const ySpacing = nodesInLayer.length === 1 ? 0 : availableHeight / (nodesInLayer.length - 1);
      const yOffset = nodesInLayer.length === 1 ? availableHeight / 2 : 0;
      const y = paddingY + yOffset + nodeIndex * ySpacing;

      return { ...node, x, y };
    });

    return positioned;
  }, [width, height]);

  const synapses = schema.synapses as SynapseData[];

  const createPath = (from: NodeData, to: NodeData) => {
    if (!from.x || !from.y || !to.x || !to.y) return '';
    const dx = to.x - from.x;
    return `M ${from.x} ${from.y} C ${from.x + dx * 0.5} ${from.y}, ${from.x + dx * 0.5} ${to.y}, ${to.x} ${to.y}`;
  };

  return (
    <div className="w-full h-full bg-black relative overflow-hidden font-jost flex-shrink-0" ref={containerRef}>
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F7F6ED 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute left-[10%] top-[50%] w-[80%] h-[20%] bg-geoland-blue/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Legend & Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30 text-center"
      >
        <h2 className="text-white text-3xl font-cormorant font-bold uppercase tracking-[0.2em] mb-4">Pipeline Execution</h2>
        <div className="flex gap-6 justify-center items-center bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-[10px] tracking-widest text-white/70 uppercase">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#F7F6ED]"></div> Fast Lane (Pasan Veto)</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#F7F6ED]"></div> Slow Lane (Sólo High)</div>
          <div className="flex items-center gap-2"><div className="px-2 py-0.5 bg-[#F7F6ED]/20 text-[#F7F6ED] border border-[#F7F6ED]/50 rounded text-[8px]">LLM</div> Consume Modelo</div>
        </div>
      </motion.div>

      {/* Wrapper to scale and center everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full transform scale-[0.85] origin-center relative pointer-events-auto">
          
          {/* SVG Canvas for Lines */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {synapses.map((syn, i) => {
              const fromNode = nodesWithPositions.find(n => n.id === syn.from);
              const toNode = nodesWithPositions.find(n => n.id === syn.to);
              if (!fromNode || !toNode) return null;
              
              const path = createPath(fromNode, toNode);
              
              return (
                <g key={i}>
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 + (fromNode.x! / width) }}
                    d={path}
                    fill="none"
                    stroke="rgba(247,246,237,0.25)"
                    strokeWidth={2}
                  />
                  <motion.circle r={2} fill="#F7F6ED" filter="blur(1px)">
                    <animateMotion 
                      dur={`${Math.random() * 2 + 3}s`} 
                      repeatCount="indefinite" 
                      path={path}
                      keyPoints="0;1"
                      keyTimes="0;1"
                    />
                  </motion.circle>
                  <motion.circle r={4} fill="#F7F6ED" opacity="0.3" filter="blur(3px)">
                    <animateMotion 
                      dur={`${Math.random() * 2 + 3}s`} 
                      repeatCount="indefinite" 
                      path={path}
                    />
                  </motion.circle>
                </g>
              );
            })}
          </svg>

          {/* Nodes Layer */}
          <div className="absolute inset-0 z-20">
            {nodesWithPositions.map((node) => {
              if (!node.x || !node.y) return null;
              
              const isSelected = selectedNode?.id === node.id;
              const isFast = node.lane === 'fast';
              const laneColor = isFast ? '#F7F6ED' : '#F7F6ED';
              
              const delay = 1.2 + (node.x / width) * 1.5;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay, ease: "easeOut" }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: node.x, top: node.y }}
                  onClick={() => setSelectedNode(node)}
                >
                  <div 
                    className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500
                      ${isSelected ? '!opacity-80' : ''}
                    `} 
                    style={{ backgroundColor: laneColor }}
                  />
                  
                  <div 
                    className={`relative p-4 rounded-xl backdrop-blur-md transition-all duration-300
                      bg-black/40 border-t border-r border-b border-white/10 hover:border-white/30
                      border-l-4
                      ${isSelected ? '!border-white/60 scale-110 shadow-2xl' : 'scale-100'}
                      w-56 min-h-[90px] flex flex-col justify-center
                    `}
                    style={{ borderLeftColor: laneColor }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      <div className="flex gap-1.5 items-center">
                        {node.veto_condition && (
                          <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-widest whitespace-nowrap">
                            {node.veto_condition}
                          </span>
                        )}
                        {node.is_llm && (
                          <span className="bg-[#F7F6ED]/20 text-[#F7F6ED] border border-[#F7F6ED]/50 text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-widest whitespace-nowrap">
                            {node.llm_label || 'LLM'}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-white text-sm font-bold leading-tight uppercase tracking-wider">
                      {node.label}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Interactive Side Panel */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 w-[450px] h-full bg-black/80 backdrop-blur-3xl border-l border-white/10 z-40 p-12 shadow-2xl flex flex-col"
          >
            <button 
              onClick={() => setSelectedNode(null)}
              className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-8 mt-4">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold px-2 py-1 rounded" style={{ backgroundColor: selectedNode.lane === 'fast' ? '#F7F6ED' : '#F7F6ED', color: 'white' }}>
                  {selectedNode.lane === 'fast' ? 'FAST LANE' : 'SLOW LANE'}
                </span>
                {selectedNode.is_llm && (
                  <span className="bg-[#F7F6ED]/20 text-[#F7F6ED] border border-[#F7F6ED]/50 text-[10px] tracking-[0.2em] font-bold px-2 py-1 rounded uppercase">
                    {selectedNode.llm_label || 'LLM'}
                  </span>
                )}
                {selectedNode.veto_condition && (
                  <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] tracking-[0.2em] font-bold px-2 py-1 rounded uppercase">
                    {selectedNode.veto_condition}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-cormorant font-bold text-white uppercase tracking-wider leading-tight">
                {selectedNode.label}
              </h2>
            </div>

            <div className="mb-12">
              <div className="text-white/80 text-base font-light leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: selectedNode.description || '' }} />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NeuralMap;
