'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTitleProps {
  children: React.ReactNode;
  className?: string;
  progress?: MotionValue<number>;
  progressRange?: [number, number];
}

export function ScrollRevealTitle({ 
  children, 
  className = "", 
  progress,
  progressRange = [0, 1] 
}: ScrollRevealTitleProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  // Fallback interno caso não seja passado um progress externo (ideal para seções normais, não-sticky)
  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const activeProgress = progress || internalProgress;

  // Transforma o progresso do scroll em um valor de clip-path (da esquerda para a direita)
  const clipPath = useTransform(activeProgress, progressRange, ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

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
