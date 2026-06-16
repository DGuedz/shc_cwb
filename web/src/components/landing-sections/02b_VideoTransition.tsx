'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ScrollRevealTitle } from '../ui/ScrollRevealTitle';

export function VideoTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax suave para o vídeo
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Controle da opacidade do vídeo para ele "surgir" das sombras
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.8, 0.8, 0]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden bg-[#131313] border-t border-[#393939]/30">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <video 
          src="/videos/show_video.mp4" 
          muted playsInline loop autoPlay preload="auto"
          className="w-full h-full object-cover grayscale mix-blend-luminosity"
        />
      </motion.div>
      
      {/* Sombras de topo e base para mesclar perfeitamente com as seções vizinhas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-transparent to-[#131313] z-10" />

      {/* Título Centralizado com a Narrativa Ativada pelo Scroll */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-20">
        <ScrollRevealTitle className="font-archivo text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
          <span className="text-white block mb-2">A CULTURA</span>
          <span className="text-gradient">NÃO ESPERA.</span>
        </ScrollRevealTitle>
      </div>
    </section>
  );
}
