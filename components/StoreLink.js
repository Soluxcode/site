'use client';

import { useState } from 'react';

export default function StoreLink() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="store-link-container my-8 flex flex-col items-center">
      <a 
        href="https://soluxcode.com" 
        className="store-link relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="relative z-10 flex items-center">
          <span className="mr-2">Visite a Loja Universo Solux</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
        <div className={`absolute inset-0 bg-gradient-to-r from-cyan-100 to-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
      </a>
      <p className="text-sm text-white opacity-70 mt-2 max-w-xs text-center">
        Descubra produtos e experiências que elevam sua frequência vibracional
      </p>
    </div>
  );
}
