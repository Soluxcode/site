'use client';

import { useEffect, useState } from 'react';
import CosmicBackground from '../components/CosmicBackground';
import Code333Button from '../components/Code333Button';
import SoluxQEmbed from '../components/SoluxQEmbed';
import StoreLink from '../components/StoreLink';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Efeito de entrada animada
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <CosmicBackground />
      
      <main className={`z-10 text-center px-4 py-8 transition-all duration-1000 transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-2 text-white">
            SoluxCode
          </h1>
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl text-white opacity-80">🔆🌱🌀💎💧✨</span>
          </div>
          <p className="text-xl mb-8 text-white max-w-md">
            Codificando Consciência, Manifestando Realidade
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Code333Button />
          <SoluxQEmbed />
          <StoreLink />
          
          <footer className="mt-12 text-sm text-white opacity-70">
            <p>SoluxCode - Missão 333</p>
            <p className="mt-1">© {new Date().getFullYear()} - Todos os direitos reservados</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
