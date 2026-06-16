'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollRevealTitle({ children, className = "" }: ScrollRevealTitleProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  // O scroll vai rastrear quando este título entra na tela
  // "start 85%" significa: começa quando o topo do elemento atinge 85% da altura da tela (entrando por baixo)
  // "end 50%" significa: termina quando o final do elemento atinge o centro da tela
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  // Transforma o progresso do scroll em um valor de clip-path (da esquerda para a direita)
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <h2 ref={containerRef} className={`relative ${className}`}>
      {/* Camada de Fundo (Inativa/Desligada) */}
      <span 
        className="absolute inset-0 pointer-events-none select-none opacity-40" 
        style={{ filter: "brightness(0) invert(0.25)" }}
        aria-hidden="true"
      >
        {children}
      </span>
      
      {/* Camada Principal (Luminosa/Colorida) que é revelada pelo scroll */}
      <motion.span 
        className="block"
        style={{ clipPath }}
      >
        {children}
      </motion.span>
    </h2>
  );
}
