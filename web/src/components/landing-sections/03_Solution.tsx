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
          <ScrollRevealTitle className="font-archivo text-3xl md:text-5xl font-bold uppercase tracking-tight max-w-2xl">
            <span className="text-white">A ESTRUTURA</span><br />
            <span className="text-gradient">INVISÍVEL.</span>
          </ScrollRevealTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Panel 1: Artistas */}
          <motion.div 
            className="bg-neutral-950 border border-white/10 p-8 md:p-12 flex flex-col group hover:border-[#10B981]/50 transition-colors"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex justify-between items-start mb-16">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <span className="material-symbols-outlined">mic_external_on</span>
              </div>
              <span className="font-mono text-[10px] text-[#393939] uppercase tracking-widest">
                MODULE_A // TALENT
              </span>
            </div>
            
            <h3 className="font-archivo text-3xl font-bold uppercase text-white mb-4">Para Artistas</h3>
            <p className="font-mono text-[#A3A3A3] text-sm leading-relaxed mb-8 flex-1">
              Crie seu perfil. Mostre seu trabalho. Centralize seus ativos em um hub de alta performance e encontre oportunidades reais de contratação, com repasses transparentes e proteção em Acordos Tripartites.
            </p>

            <ul className="space-y-4 border-t border-[#393939] pt-8">
              <li className="flex items-center gap-3 font-mono text-xs text-[#10B981] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" /> Portfólio Multimídia
              </li>
              <li className="flex items-center gap-3 font-mono text-xs text-white uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#393939] rounded-full" /> Gestor de Contratos
              </li>
            </ul>
          </motion.div>

          {/* Panel 2: Parceiros */}
          <motion.div 
            className="bg-neutral-950 border border-white/10 p-8 md:p-12 flex flex-col group hover:border-[#10B981]/50 transition-colors"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex justify-between items-start mb-16">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <span className="font-mono text-[10px] text-[#393939] uppercase tracking-widest">
                MODULE_B // PARTNERS
              </span>
            </div>
            
            <h3 className="font-archivo text-3xl font-bold uppercase text-white mb-4">Para Empresas e Eventos</h3>
            <p className="font-mono text-[#A3A3A3] text-sm leading-relaxed mb-8 flex-1">
              Descubra novos talentos com curadoria baseada em dados e monte lineups completos em minutos. Invista no futuro da cultura urbana com risco zero, amparado pelo <strong className="text-white">MROSC (Lei 13.019/14)</strong> e com dedução e segurança fiscal garantidas pelas <strong className="text-white">Leis 9.249/95</strong> e <strong className="text-white">8.313/91</strong>.
            </p>

            <ul className="space-y-4 border-t border-[#393939] pt-8">
              <li className="flex items-center gap-3 font-mono text-xs text-[#10B981] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" /> Curadoria Analítica
              </li>
              <li className="flex items-center gap-3 font-mono text-xs text-white uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#393939] rounded-full" /> Compliance Fiscal & Logística
              </li>
            </ul>
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
