'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ScrollRevealTitle } from '../ui/ScrollRevealTitle';

export function ProblemSolutionSplit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ASTEPAM Scroll-Scrubbing Engine para a Segunda Seção
  // Expandimos o offset para ["start start", "end end"] para travar a seção na tela
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"] 
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (videoRef.current && videoRef.current.duration) {
        // Mapeia o progresso do scroll da seção para o tempo do video
        videoRef.current.currentTime = latest * videoRef.current.duration;
      }
    });
  }, [scrollYProgress]);

  // Mapeamentos para atrelar a largura das barras diretamente ao scroll
  // O scrollYProgress vai de 0 a 1.
  // Ajuste de Timing: Começamos mais cedo e terminamos mais tarde, para que fiquem visíveis por mais tempo.
  // Além disso, mantemos a opacidade em 1 até o fim do scroll da seção (1.0).
  
  // Opacidade do Label Inicial "DISTRIBUIÇÃO DE CAPITAL (2024)"
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Barra 1: Mercado Total
  const bar1Width = useTransform(scrollYProgress, [0.05, 0.25], ["0%", "100%"]);
  const bar1Opacity = useTransform(scrollYProgress, [0.0, 0.1, 0.95, 1], [0, 1, 1, 0]);

  // Barra 2: Shows
  const bar2Width = useTransform(scrollYProgress, [0.15, 0.35], ["0%", "81%"]);
  const bar2Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.95, 1], [0, 1, 1, 0]);

  // Barra 3: Fomento Público
  const bar3Width = useTransform(scrollYProgress, [0.25, 0.45], ["0%", "2.2%"]);
  const bar3Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.95, 1], [0, 1, 1, 0]);

  // Barra 4: Direitos Autorais
  const bar4Width = useTransform(scrollYProgress, [0.35, 0.55], ["0%", "1.5%"]);
  const bar4Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.95, 1], [0, 1, 1, 0]);

  // Barra 5 (Verde): O Contraste Brutal
  const bar5Width = useTransform(scrollYProgress, [0.45, 0.65], ["0%", "0.5%"]);
  const bar5Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.95, 1], [0, 1, 1, 0]);

  // Efeito Glow/Neon nos textos numéricos
  // Conforme o scroll avança e as barras estabilizam, injetamos um text-shadow mais forte
  const glowEffect = useTransform(
    scrollYProgress, 
    [0.1, 0.5], 
    ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 12px rgba(255,255,255,0.8))"]
  );

  const glowEffectGreen = useTransform(
    scrollYProgress, 
    [0.4, 0.6], 
    ["drop-shadow(0 0 0px rgba(16,185,129,0))", "drop-shadow(0 0 16px rgba(16,185,129,0.9))"]
  );

  return (
    <section ref={sectionRef} className="bg-black border-t border-[#393939] h-[200vh]">
      <div className="sticky top-0 h-screen w-full grid grid-cols-1 lg:grid-cols-2">
        
        {/* Coluna da Esquerda: Texto */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-12 h-1 bg-[#10B981] mb-8" />
            <ScrollRevealTitle 
              className="font-archivo text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-8"
              progress={scrollYProgress}
              progressRange={[0.0, 0.15]}
            >
              <span className="text-white">O CUSTO DA</span><br />
              <span className="text-gradient">INVISIBILIDADE.</span>
            </ScrollRevealTitle>
            <p className="font-mono text-[#A3A3A3] text-sm md:text-base max-w-xl leading-relaxed border-l border-[#393939] pl-6 mb-8">
              A cena independente não é pobre, é invisível. O capital existe, mas o sistema é cego.
            </p>
            <div className="inline-block font-mono text-xs text-[#10B981] border border-[#10B981]/30 bg-[#10B981]/5 px-4 py-2 uppercase tracking-widest">
              SYSTEM_STATUS: CORRIGINDO ASSIMETRIA
            </div>
          </motion.div>
        </div>

        {/* Coluna da Direita: Vídeo com Painel de Dados */}
        <div className="bg-neutral-950 border-t lg:border-t-0 lg:border-l border-[#393939] relative overflow-hidden min-h-[50vh] lg:min-h-full group">
          
          {/* Vídeo Background (Scrubbing Ativado) */}
          <video 
            ref={videoRef}
            muted 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-700"
            src="/videos/show_video_scrub.mp4" 
          />
          
          {/* Painel Translúcido de Dados (SCROLL DRIVEN) - Fixo no canto inferior */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 bg-black/30 backdrop-blur-sm">
            <motion.div 
              className="max-w-md w-full ml-auto"
              style={{ opacity: titleOpacity }}
            >
              <span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest mb-4 block">
                DISTRIBUIÇÃO DE CAPITAL (2024)
              </span>

              <div className="space-y-4">
                
                {/* Barra 1 */}
                <motion.div className="group" style={{ opacity: bar1Opacity }}>
                  <div className="flex justify-between font-mono text-[10px] text-white mb-1">
                    <span>MERCADO TOTAL DA MÚSICA</span>
                    <motion.span style={{ filter: glowEffect }} className="font-bold">R$ 116 BI</motion.span>
                  </div>
                  <div className="w-full h-[2px] bg-[#393939] relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]"
                      style={{ width: bar1Width }}
                    />
                  </div>
                </motion.div>

                {/* Barra 2 */}
                <motion.div className="group" style={{ opacity: bar2Opacity }}>
                  <div className="flex justify-between font-mono text-[10px] text-[#A3A3A3] mb-1 group-hover:text-white transition-colors">
                    <span>SHOWS E APRESENTAÇÕES</span>
                    <motion.span style={{ filter: glowEffect }} className="text-white">R$ 94 BI</motion.span>
                  </div>
                  <div className="w-full h-[2px] bg-[#393939] relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#A3A3A3]"
                      style={{ width: bar2Width }}
                    />
                  </div>
                </motion.div>

                {/* Barra 3 */}
                <motion.div className="group" style={{ opacity: bar3Opacity }}>
                  <div className="flex justify-between font-mono text-[10px] text-[#A3A3A3] mb-1 group-hover:text-white transition-colors">
                    <span>FOMENTO PÚBLICO</span>
                    <motion.span style={{ filter: glowEffect }} className="text-white">R$ 2,6 BI</motion.span>
                  </div>
                  <div className="w-full h-[2px] bg-[#393939] relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#A3A3A3]"
                      style={{ width: bar3Width }}
                    />
                  </div>
                </motion.div>

                {/* Barra 4 */}
                <motion.div className="group" style={{ opacity: bar4Opacity }}>
                  <div className="flex justify-between font-mono text-[10px] text-[#A3A3A3] mb-1 group-hover:text-white transition-colors">
                    <span>DIREITOS AUTORAIS</span>
                    <motion.span style={{ filter: glowEffect }} className="text-white">R$ 1,8 BI</motion.span>
                  </div>
                  <div className="w-full h-[2px] bg-[#393939] relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#A3A3A3]"
                      style={{ width: bar4Width }}
                    />
                  </div>
                </motion.div>

                {/* Barra 5: O Contraste Brutal */}
                <motion.div className="group pt-2 border-t border-[#393939]" style={{ opacity: bar5Opacity }}>
                  <div className="flex justify-between font-mono text-[10px] text-[#10B981] mb-1">
                    <span>CRIADORES / COMPOSITORES</span>
                    <motion.span style={{ filter: glowEffectGreen }} className="text-[#10B981] font-bold text-xs">R$ 250 MI</motion.span>
                  </div>
                  <div className="w-full h-[2px] bg-[#393939] relative overflow-hidden mb-4">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#10B981] shadow-[0_0_16px_#10B981]"
                      style={{ width: bar5Width }}
                    />
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Corner Markers (Brutalism Aesthetic) */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#393939]" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#393939]" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#393939]" />
        </div>

      </div>
    </section>
  );
}
