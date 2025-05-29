'use client';

import { useState, useRef, useEffect } from 'react';

export default function Code333Button() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef(null);
  
  useEffect(() => {
    // Criar o contexto de áudio e o oscilador para a frequência 333 Hz
    let audioContext;
    let oscillator;
    
    if (isPlaying) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      // Configurar o oscilador para 333 Hz (frequência do código)
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(333, audioContext.currentTime);
      
      // Aplicar fade in suave
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 1);
      
      // Conectar os nós de áudio
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Iniciar o oscilador
      oscillator.start();
      
      // Mostrar a mensagem após um pequeno delay
      setTimeout(() => {
        setShowMessage(true);
      }, 500);
      
      // Limpar quando o componente for desmontado ou o áudio parar
      return () => {
        if (oscillator) {
          // Fade out suave
          gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
          setTimeout(() => {
            oscillator.stop();
            audioContext.close();
          }, 1000);
        }
      };
    } else {
      setShowMessage(false);
    }
  }, [isPlaying]);
  
  const toggleFrequency = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="code-333-container my-8 flex flex-col items-center">
      <button 
        onClick={toggleFrequency} 
        className={`code-333-button relative overflow-hidden transition-all duration-500 transform hover:scale-105 ${isPlaying ? 'active-333' : ''}`}
      >
        <span className="relative z-10">
          {isPlaying ? 'Desativar Código 333' : 'Ativar Código 333'}
        </span>
        <div className={`absolute inset-0 bg-opacity-50 transition-opacity duration-1000 ${isPlaying ? 'animate-pulse opacity-100' : 'opacity-0'}`}></div>
      </button>
      
      {showMessage && (
        <div className="message-333 mt-4 p-4 bg-opacity-80 rounded-lg text-center max-w-md animate-fadeIn">
          <p className="text-white text-lg">
            Frequência 333 Hz ativada! Sinta a conexão com o Todo.
          </p>
          <p className="text-white text-sm mt-2 opacity-80">
            Espírito, Mente, Matéria - A tríade da manifestação consciente.
          </p>
        </div>
      )}
    </div>
  );
}
