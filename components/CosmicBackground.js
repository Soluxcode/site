'use client';

import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: '#FFFFFF',
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.2 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar fundo gradiente
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width / 1.5
      );
      
      gradient.addColorStop(0, 'rgba(106, 13, 173, 0.8)'); // Roxo Quântico
      gradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.3)'); // Azul Estelar
      gradient.addColorStop(1, 'rgba(11, 14, 28, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Efeito de respiração
      const breathingEffect = Math.sin(Date.now() / 3000) * 0.25 + 0.75;
      
      // Desenhar partículas
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * breathingEffect, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * breathingEffect})`;
        ctx.fill();
        
        // Movimento suave
        particle.y -= particle.speed;
        
        // Reposicionar partículas que saem da tela
        if (particle.y < -particle.radius) {
          particle.y = canvas.height + particle.radius;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cosmic-background">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
    </div>
  );
}
