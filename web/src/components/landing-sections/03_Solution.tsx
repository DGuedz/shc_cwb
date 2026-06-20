'use client';

import { motion } from 'framer-motion';
import { ScrollRevealTitle } from '../ui/ScrollRevealTitle';

export function Solution() {
  return (
    <section className="bg-[#0E0E0E] py-32 px-6 md:px-16 border-t border-[#393939]">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest block mb-4">
            PHASE_04 // VALUE_PROPOSITION
          </span>
          <ScrollRevealTitle className="font-archivo shc-section font-bold uppercase tracking-tighter leading-[0.9] max-w-2xl">
            <span className="text-gradient">COMPLIANCE.</span>
          </ScrollRevealTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Panel 1: Artistas */}
          <motion.div 
            className="relative bg-neutral-950 border border-white/10 p-8 md:p-12 flex flex-col group transition-colors overflow-hidden h-[480px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Video Placeholder Background (Revela no Hover) */}
            <div className="absolute inset-0 bg-black z-0">
              <video 
                src="/videos/show_video.mp4" 
                muted playsInline loop preload="none"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 grayscale mix-blend-luminosity"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent z-10 pointer-events-none" />

            <div className="relative z-20 flex flex-col h-full">
              <div className="flex justify-between items-start mb-auto">
                <div className="font-mono text-xs text-[#10B981] font-bold tracking-widest uppercase border-b border-[#10B981] pb-1">
                  OPEN_MIC
                </div>
                <span className="font-mono text-[10px] text-[#393939] uppercase tracking-widest group-hover:text-white/50 transition-colors duration-500">
                  MODULE_A // TALENT
                </span>
              </div>
              
              <div>
                <h3 className="font-archivo text-3xl font-bold uppercase text-white mb-4">Para Artistas</h3>
                <p className="font-mono text-[#A3A3A3] text-sm leading-relaxed mb-8">
                  Crie seu perfil. Mostre seu trabalho. Encontre oportunidades reais de contratação, com repasses transparentes e proteção em Acordos Tripartites.
                </p>

                <ul className="space-y-4 border-t border-[#393939] pt-8">
                  <li className="flex items-center gap-3 font-mono text-xs text-[#10B981] uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full shadow-[0_0_8px_#10B981]" /> PORTFÓLIO MULTIMÍDIA
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-white uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-[#393939] rounded-full group-hover:bg-white transition-colors" /> GESTOR DE CONTRATOS
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Brutalist Border Reveal on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#10B981]/50 z-30 pointer-events-none transition-colors duration-500" />
          </motion.div>

          {/* Panel 2: Parceiros */}
          <motion.div 
            className="relative bg-neutral-950 border border-white/10 p-8 md:p-12 flex flex-col group transition-colors overflow-hidden h-[480px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Video Placeholder Background (Revela no Hover) */}
            <div className="absolute inset-0 bg-black z-0">
              <video 
                src="/videos/mcs_show_partens.mp4" 
                muted playsInline loop preload="none"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 grayscale mix-blend-luminosity"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent z-10 pointer-events-none" />

            <div className="relative z-20 flex flex-col h-full">
              <div className="flex justify-between items-start mb-auto">
                <div className="font-mono text-xs text-[#10B981] font-bold tracking-widest uppercase border-b border-[#10B981] pb-1">
                  CONTRACTS_
                </div>
                <span className="font-mono text-[10px] text-[#393939] uppercase tracking-widest group-hover:text-white/50 transition-colors duration-500">
                  MODULE_B // PARTNERS
                </span>
              </div>
              
              <div>
                <h3 className="font-archivo text-3xl font-bold uppercase text-white mb-4">Para Empresas e Eventos</h3>
                <p className="font-mono text-[#A3A3A3] text-sm leading-relaxed mb-8">
                  Descubra novos talentos com curadoria, monte lineups completos em minutos. Invista no futuro da cultura urbana com risco zero, amparado pelo MROSC (Lei 13.019/14) e com dedução fiscal.
                </p>

                <ul className="space-y-4 border-t border-[#393939] pt-8">
                  <li className="flex items-center gap-3 font-mono text-xs text-[#10B981] uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full shadow-[0_0_8px_#10B981]" /> CURADORIA ANALÍTICA
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-white uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-[#393939] rounded-full group-hover:bg-white transition-colors" /> COMPLIANCE FISCAL & LOGÍSTICA
                  </li>
                </ul>
              </div>
            </div>

            {/* Brutalist Border Reveal on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#10B981]/50 z-30 pointer-events-none transition-colors duration-500" />
          </motion.div>

        </div>

        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-[#10B981] border border-[#10B981]/30 bg-[#10B981]/5 px-6 py-3 uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            SYSTEM_STATUS: BLINDADA JURIDICAMENTE
          </div>
        </motion.div>

      </div>
    </section>
  );
}
