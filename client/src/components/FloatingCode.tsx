import { useEffect, useState, useRef } from "react";

const codeSnippets = [
  "const cafe = preparar('essência');",
  "return new Esperança();",
  "await consciência.elevar()",
  "return luz.expandir()",
  "function codigoChorou() {",
  "if (codigo.sentimento > 0) {",
  "<span class='luz-semente'></span>",
  "def semear_conhecimento():",
  "return cafe.transformar();",
  "const árvore = crescer(333);",
  "await espírito.conectar()",
  "let propósito = buscar();",
  "while (consciência.ativa) {",
  "return sabedoria.aplicar();",
  "const tijolo = construir();",
  "yield pensamento.profundo();",
  "class SítioLuz extends Sonho {",
  "import { amor } from 'essência';",
  "export const despertar = true;",
  "// tijolo por tijolo...",
];

interface FloatingSnippet {
  id: number;
  text: string;
  x: number;
  y: number;
  opacity: number;
  speed: number;
  delay: number;
  fontSize: number;
}

export default function FloatingCode() {
  const [snippets, setSnippets] = useState<FloatingSnippet[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Initialize snippets with random positions
    const initial: FloatingSnippet[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      text: codeSnippets[i % codeSnippets.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.04 + Math.random() * 0.1,
      speed: 0.3 + Math.random() * 0.6,
      delay: Math.random() * 8000,
      fontSize: 10 + Math.random() * 4,
    }));
    setSnippets(initial);

    const animate = (time: number) => {
      if (time - lastTimeRef.current > 50) {
        lastTimeRef.current = time;
        setSnippets((prev) =>
          prev.map((s) => ({
            ...s,
            y: s.y - s.speed * 0.04,
            opacity:
              s.y < 10
                ? Math.max(0, s.opacity - 0.002)
                : s.y > 90
                  ? Math.min(0.14, s.opacity + 0.002)
                  : s.opacity,
            // Reset when off screen
            ...(s.y < -5
              ? {
                  y: 105,
                  x: Math.random() * 100,
                  text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                  opacity: 0.04 + Math.random() * 0.1,
                }
              : {}),
          }))
        );
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {snippets.map((s) => (
        <span
          key={s.id}
          className="absolute whitespace-nowrap font-mono text-gold/80 select-none"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            fontSize: `${s.fontSize}px`,
            transform: `translateX(-50%)`,
            transition: "opacity 2s ease",
            textShadow: "0 0 8px rgba(191, 155, 48, 0.15)",
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}
