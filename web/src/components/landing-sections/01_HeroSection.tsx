'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (videoRef.current && videoRef.current.duration) {
        videoRef.current.currentTime = latest * videoRef.current.duration;
      }
    });
  }, [scrollYProgress]);

  // Clean Separation Mappings (Resolvendo sobreposição DE UMA VEZ POR TODAS)
  // O scrollYProgress vai de 0.0 (topo) a 1.0 (fim do container hero)
  
  // Chapter 1: Aparece no começo (0) e morre TOTALMENTE em 0.40
  const opacityChapter1 = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.40], [0, 1, 1, 0]);
  const pointerEventsChapter1 = useTransform(scrollYProgress, [0, 0.35], ["auto", "none"]);

  // Chapter 2: SÓ COMEÇA A APARECER EM 0.50 (depois que o 1 sumiu 100%), e fica até 1.0
  const opacityChapter2 = useTransform(scrollYProgress, [0.50, 0.65, 1], [0, 1, 1]);
  const pointerEventsChapter2 = useTransform(scrollYProgress, [0.55, 1], ["none", "auto"]);
  
  const indicatorHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={heroRef} className="relative h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        <video 
          ref={videoRef}
          src="/videos/street_hub_intro_scrub.mp4" 
          muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-[#131313]/60" />
        
        <div className="relative z-10 w-full px-6 md:px-16 max-w-5xl flex flex-col justify-center items-center text-center">
          
          {/* Phase 01: O Gancho Inicial */}
          <motion.div 
            className="absolute w-full px-6"
            style={{ opacity: opacityChapter1, pointerEvents: pointerEventsChapter1 }}
          >
            <h1 className="font-archivo text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none mb-6 text-white">
              Muito talento.<br />Pouca estrutura.
            </h1>
            <p className="font-mono text-[#A3A3A3] text-xs md:text-sm max-w-xl mx-auto">
              Transformamos a economia criativa com um poderoso algoritmo de Business Match para a cena underground.
            </p>
          </motion.div>

          {/* Phase 02: A Tese Final & Conversão */}
          <motion.div 
            className="absolute w-full px-6"
            style={{ opacity: opacityChapter2, pointerEvents: pointerEventsChapter2 }}
          >
            <h1 className="font-archivo text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none mb-6 text-white">
              Descubra. Conecte.<br />Contrate.
            </h1>
            <p className="font-mono text-[#A3A3A3] text-xs md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
              O motor tecnológico que transforma a música independente em um ativo de alto impacto para o seu negócio.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/onboarding/artista" className="bg-[#10B981] text-black px-6 py-3 font-mono text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors border border-[#10B981]">
                Onboarding de Ativos
              </Link>
              <Link href="#conversion" className="border border-[#393939] bg-transparent text-white px-6 py-3 font-mono text-xs tracking-widest uppercase hover:border-white transition-colors">
                Acesso Institucional
              </Link>
            </div>
          </motion.div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#10B981] mb-3">SCROLL</span>
          <div className="w-[1px] h-16 bg-[#393939] overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[#10B981]" 
              style={{ height: indicatorHeight }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
