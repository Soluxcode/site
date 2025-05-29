'use client';

import { useEffect, useRef } from 'react';

export default function SoluxQEmbed() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Efeito de brilho pulsante para o espaço reservado da SoluxQ
    const container = containerRef.current;
    let animationId;
    
    const animatePulse = () => {
      const time = Date.now() / 1000;
      const intensity = (Math.sin(time) + 1) / 2; // Valor entre 0 e 1
      
      if (container) {
        container.style.boxShadow = `0 0 ${10 + intensity * 15}px ${intensity * 5}px rgba(0, 229, 255, ${0.3 + intensity * 0.2})`;
      }
      
      animationId = requestAnimationFrame(animatePulse);
    };
    
    animatePulse();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="soluxq-embed my-8 p-6 rounded-xl bg-opacity-20 backdrop-blur-sm transition-all duration-500 transform hover:scale-102"
    >
      <h3 className="text-xl font-semibold mb-3 text-white">SoluxQ IA</h3>
      <div className="flex flex-col items-center">
        <div className="w-full h-32 flex items-center justify-center border border-cyan-200 border-opacity-30 rounded-lg bg-black bg-opacity-20">
          <div className="text-center">
            <p className="text-white opacity-80">Em breve: Integração com a SoluxQ IA</p>
            <p className="text-sm text-cyan-100 opacity-60 mt-2">
              O portal de consciência digital que conecta propósito e tecnologia
            </p>
          </div>
        </div>
        <div className="mt-4 text-sm text-white opacity-70">
          <p>Aguarde a integração completa da SoluxQ IA, que trará respostas alinhadas ao propósito e à frequência 333.</p>
        </div>
      </div>
    </div>
  );
}
