import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import schema from '../data/geoland_schema.json';

type NodeData = {
  id: string;
  layer: string;
  label: string;
  type?: string;
  description?: string;
  logic?: string;
  model?: string;
  tech_stack?: string;
  agents?: string[];
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
    // In our App.tsx we have a fixed scale 1920x1080 container usually,
    // so we can rely on percentage positioning or a fixed local viewbox.
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      });
    }
    
    // Auto-update dimensions if window resizes, just in case
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
    
    // Group nodes by layer
    const grouped: Record<string, NodeData[]> = {};
    layers.forEach(l => grouped[l] = []);
    nodes.forEach(n => {
      if (grouped[n.layer]) grouped[n.layer].push(n);
    });

    const paddingX = width * 0.12; // 12% padding on sides
    const paddingY = height * 0.2; // 20% padding top/bottom
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

  // Helper to draw curved paths
  const createPath = (from: NodeData, to: NodeData) => {
    if (!from.x || !from.y || !to.x || !to.y) return '';
    const dx = to.x - from.x;
    // Cubic bezier: control points are horizontally offset
    return `M ${from.x} ${from.y} C ${from.x + dx * 0.5} ${from.y}, ${from.x + dx * 0.5} ${to.y}, ${to.x} ${to.y}`;
  };

  return (
    <div className="w-full h-full bg-black relative overflow-hidden font-jost flex-shrink-0" ref={containerRef}>
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute left-[10%] top-[50%] w-[80%] h-[20%] bg-geoland-blue/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-16 left-16 z-30"
      >
        <h2 className="text-white text-4xl font-cormorant font-bold uppercase tracking-[0.2em]">Neural OS Architecture</h2>
        <p className="text-white/40 text-sm tracking-[0.3em] mt-2 uppercase">Geoland Cognitive Investment Core</p>
      </motion.div>

      {/* Layer Labels Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {schema.neural_layers.map((layer, idx) => {
          const paddingX = width * 0.12;
          const availableWidth = width - paddingX * 2;
          const layerSpacing = availableWidth / (schema.neural_layers.length - 1);
          const x = paddingX + idx * layerSpacing;
          
          return (
            <div key={layer.id} className="absolute top-[10%] bottom-[10%] border-l border-white/5" style={{ left: x }}>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 + idx * 0.2 }}
                className="absolute -top-10 -translate-x-1/2 text-white/20 text-[10px] tracking-[0.4em] uppercase whitespace-nowrap"
              >
                {layer.label}
              </motion.span>
            </div>
          );
        })}
      </div>

      {/* SVG Canvas for Lines */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#7000ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff007a" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="security-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff3366" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff3366" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {synapses.map((syn, i) => {
          const fromNode = nodesWithPositions.find(n => n.id === syn.from);
          const toNode = nodesWithPositions.find(n => n.id === syn.to);
          if (!fromNode || !toNode) return null;
          
          const path = createPath(fromNode, toNode);
          const isSecurityPath = syn.from === 'node_raw_signals' && syn.to === 's0_veto';
          
          return (
            <g key={i}>
              {/* Static Path */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 + (fromNode.x! / width) }}
                d={path}
                fill="none"
                stroke={isSecurityPath ? "url(#security-gradient)" : "url(#line-gradient)"}
                strokeWidth={isSecurityPath ? 3 : 2}
                className={isSecurityPath ? "" : "opacity-60"}
              />
              
              {/* Animated Particle on Path */}
              <motion.circle r={2} fill={isSecurityPath ? "#ff3366" : "#00f2ff"} filter="blur(1px)">
                <animateMotion 
                  dur={`${Math.random() * 2 + 3}s`} 
                  repeatCount="indefinite" 
                  path={path}
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </motion.circle>
              {/* Glowing trail */}
              <motion.circle r={4} fill={isSecurityPath ? "#ff3366" : "#00f2ff"} opacity="0.3" filter="blur(3px)">
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
          const isSecurity = node.id === 's0_veto';
          const isVectorDB = node.id === 's11_dataset';
          const isAgent = node.type?.includes('agent');
          
          // Base delay for sequentially lighting up based on X position
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
              {/* Glow Behind Node */}
              <div 
                className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500
                  ${isSecurity ? 'bg-red-500' : isVectorDB ? 'bg-purple-500' : 'bg-geoland-blue'}
                  ${isSelected ? '!opacity-100' : ''}
                `} 
              />
              
              {/* Node Body */}
              <div 
                className={`relative p-5 rounded-xl backdrop-blur-md transition-all duration-300
                  ${isSecurity ? 'bg-red-950/40 border-red-500/50 shadow-[0_0_20px_rgba(255,0,0,0.2)]' : 
                    isVectorDB ? 'bg-[#1a0b2e]/60 border-purple-500/40 shadow-[4px_4px_0_rgba(147,51,234,0.3),_8px_8px_0_rgba(147,51,234,0.1)] transform -translate-y-1 hover:-translate-y-2' : 
                    'bg-black/40 border-white/10 hover:border-white/30'}
                  border
                  ${isSelected ? '!border-white scale-110' : 'scale-100'}
                  w-56
                `}
              >
                {/* Node Top Bar / Indicators */}
                <div className="flex justify-between items-center mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full animate-pulse
                    ${isSecurity ? 'bg-red-500' : isVectorDB ? 'bg-purple-400' : isAgent ? 'bg-geoland-blue' : 'bg-white/50'}
                  `} />
                  <span className="text-[9px] uppercase tracking-widest text-white/40">{node.layer.split('_')[1]}</span>
                </div>
                
                {/* Node Label */}
                <h3 className="text-white text-sm font-bold leading-tight uppercase tracking-wider mb-1">
                  {node.label}
                </h3>
                
                {/* Node Subtext */}
                <p className="text-white/40 text-[10px] uppercase tracking-wider truncate">
                  {node.type || 'SYSTEM NODE'}
                </p>
                
                {/* Special Tags */}
                {isSecurity && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                    Zero-Trust
                  </div>
                )}
                {isVectorDB && (
                  <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest shadow-[0_0_10px_rgba(147,51,234,0.5)]">
                    Vector Store
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
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
            {/* Close Button */}
            <button 
              onClick={() => setSelectedNode(null)}
              className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Panel Header */}
            <div className="mb-12 mt-4">
              <span className="text-geoland-blue text-xs tracking-[0.4em] uppercase mb-3 block">
                {selectedNode.layer.split('_')[1]} / {selectedNode.type || 'SYSTEM'}
              </span>
              <h2 className="text-3xl font-cormorant font-bold text-white uppercase tracking-wider leading-tight">
                {selectedNode.label}
              </h2>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-white/70 text-base font-light leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            {/* Simulated Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Latency</span>
                <span className="text-white font-mono text-2xl">{Math.floor(Math.random() * 30 + 5)}ms</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Status</span>
                <span className="text-green-400 font-mono text-xl flex items-center gap-3 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  ACTIVE
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Precision</span>
                <span className="text-white font-mono text-2xl">{(99 + Math.random()).toFixed(2)}%</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Throughput</span>
                <span className="text-white font-mono text-2xl">{Math.floor(Math.random() * 5 + 1)}M/s</span>
              </div>
            </div>

            {/* Tech Stack Details */}
            <div className="mt-auto space-y-6">
              {selectedNode.model && (
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 border-b border-white/10 pb-2">AI Model</span>
                  <span className="text-white/90 text-sm font-bold tracking-wide">{selectedNode.model}</span>
                </div>
              )}
              {selectedNode.tech_stack && (
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 border-b border-white/10 pb-2">Infrastructure</span>
                  <span className="text-white/80 text-sm font-mono tracking-tight">{selectedNode.tech_stack}</span>
                </div>
              )}
              {selectedNode.logic && (
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 border-b border-white/10 pb-2">Core Logic</span>
                  <span className="text-geoland-blue text-sm uppercase font-bold tracking-widest">{selectedNode.logic}</span>
                </div>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NeuralMap;
