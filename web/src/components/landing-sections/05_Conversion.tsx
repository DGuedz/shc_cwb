'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollRevealTitle } from '../ui/ScrollRevealTitle';

export function Conversion() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 border-t border-[#393939] relative overflow-hidden">
      {/* Background brutalist element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-[#393939]/30" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest block mb-4">
            GATEWAY // ENTRY_POINT
          </span>
          <ScrollRevealTitle className="font-archivo text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-16 leading-tight">
            <span className="text-white">FAÇA PARTE DA INFRAESTRUTURA DA </span>
            <span className="text-gradient">ECONOMIA CRIATIVA</span><br />
            <span className="text-white">UNDERGROUND.</span>
          </ScrollRevealTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Action A: Talent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href={"/onboarding" as any}
              className="block group relative w-full border border-[#10B981] bg-[#10B981] hover:bg-[#0e9f6e] transition-colors duration-200 p-8 md:p-10 flex flex-col items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black m-1" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black m-1" />
              
              <span className="font-archivo text-lg font-bold text-black uppercase tracking-widest mb-2">
                Sou um Talento
              </span>
              <span className="font-mono text-xs text-black/80">
                [ CADASTRAR ]
              </span>
            </Link>
          </motion.div>

          {/* Action B: Partner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href={"/onboarding" as any}
              className="block group relative w-full border border-[#393939] bg-[#0E0E0E] hover:bg-[#131313] transition-colors duration-200 p-8 md:p-10 flex flex-col items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#10B981] m-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#10B981] m-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="font-archivo text-lg font-bold text-white uppercase tracking-widest mb-2">
                Sou um Parceiro
              </span>
              <span className="font-mono text-xs text-[#A3A3A3] group-hover:text-white transition-colors">
                [ CONTRATAR ]
              </span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
