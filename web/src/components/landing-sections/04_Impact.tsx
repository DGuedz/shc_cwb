'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { ScrollRevealTitle } from '../ui/ScrollRevealTitle';

// Counter Component Scroll-Driven
function ScrollCounter({ progress, targetValue, prefix = "", suffix = "" }: { progress: MotionValue<number>, targetValue: number, prefix?: string, suffix?: string }) {
  // O número cresce de 0 ao valor alvo conforme o usuário cruza os 20% aos 80% da seção
  const current = useTransform(progress, [0.2, 0.8], [0, targetValue]);
  
  const display = useTransform(current, (val) => {
    const isCurrency = prefix === "R$ ";
    if (isCurrency) {
      return `${prefix}${val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}${suffix}`;
    }
    return `${prefix}${Math.floor(val)}${suffix}`;
  });

  return <motion.span>{display}</motion.span>;
}

export function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mapeia o scroll da seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="bg-black py-24 px-6 md:px-16 border-t border-[#393939]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div className="max-w-sm lg:max-w-md w-full">
          <span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest block mb-4">
            PHASE_05 // PILOT
          </span>
          <ScrollRevealTitle className="font-archivo shc-section mb-6">
            <span className="text-white">A ECONOMIA </span>
            <span className="text-gradient">CULTURAL</span><br />
            <span className="text-white">ATIVADA.</span>
          </ScrollRevealTitle>
          <p className="font-mono text-[#A3A3A3] text-xs md:text-sm leading-relaxed border-l border-[#393939] pl-5 mb-4">
            Curitiba como laboratório vivo de conexão cultural.
          </p>
          <p className="font-mono text-[#A3A3A3] text-xs md:text-sm leading-relaxed border-l border-[#393939] pl-5">
            Cada cadastro, evento e oportunidade vira dado operacional para medir demanda, oferta e conversão.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full md:w-auto">
          {/* Stat 1 */}
          <div className="border-b border-[#393939] pb-4 flex flex-col items-start md:items-end">
            <span className="font-mono text-[#393939] text-[10px] uppercase tracking-widest mb-1">ARTISTAS_MAPEADOS</span>
            <div className="font-mono text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter font-bold">
              [ <ScrollCounter progress={scrollYProgress} targetValue={75} suffix="+" /> ]
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="border-b border-[#393939] pb-4 flex flex-col items-start md:items-end">
            <span className="font-mono text-[#393939] text-[10px] uppercase tracking-widest mb-1">EVENTOS_MAPEADOS</span>
            <div className="font-mono text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter font-bold">
              [ <ScrollCounter progress={scrollYProgress} targetValue={18} suffix="+" /> ]
            </div>
          </div>

          {/* Stat 3 */}
          <div className="pb-4 flex flex-col items-start md:items-end">
            <span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest mb-1">OPORTUNIDADES_POTENCIAIS</span>
            <div className="font-mono text-3xl md:text-4xl lg:text-5xl text-[#10B981] tracking-tighter font-bold">
              [ <ScrollCounter progress={scrollYProgress} targetValue={120000} prefix="R$ " /> ]
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
