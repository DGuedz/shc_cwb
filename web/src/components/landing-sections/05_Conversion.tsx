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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          
          {/* CTA Artista */}
          <Link href={"/onboarding/artista" as any}>
            <motion.div 
              className="bg-[#10B981] border border-[#10B981] text-black px-6 py-4 flex items-center justify-center font-mono text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SOU UM TALENTO
            </motion.div>
          </Link>

          {/* CTA Empresa */}
          <Link href={"/onboarding/empresa" as any}>
            <motion.div 
              className="bg-transparent border border-[#393939] text-white px-6 py-4 flex items-center justify-center font-mono text-xs tracking-widest uppercase hover:border-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SOU UM PARCEIRO
            </motion.div>
          </Link>

        </div>

      </div>
    </section>
  );
}
