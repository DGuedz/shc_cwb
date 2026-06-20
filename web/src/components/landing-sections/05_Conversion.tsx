'use client';

import { motion } from 'framer-motion';
import { ScrollRevealTitle } from '../ui/ScrollRevealTitle';
import { GlassCTA } from '../ui/GlassCTA';

export function Conversion() {
  return (
    <section className="bg-black py-24 px-6 md:px-16 border-t border-[#393939] relative overflow-hidden">
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

          <div className="font-archivo text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-16 leading-tight">
            <ScrollRevealTitle as="div" chromatic>
              FAÇA PARTE DA INFRAESTRUTURA
            </ScrollRevealTitle>
            <ScrollRevealTitle as="div" className="text-[#10B981]">
              DA ECONOMIA CRIATIVA
            </ScrollRevealTitle>
            <ScrollRevealTitle as="div" chromatic>
              UNDERGROUND.
            </ScrollRevealTitle>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <GlassCTA href="/sign-in" variant="primary" size="lg">
            CADASTRO DE ARTISTAS
          </GlassCTA>
          <GlassCTA href="/onboarding/contratante" variant="secondary" size="lg">
            CADASTRO DE EMPRESAS
          </GlassCTA>
        </div>
      </div>
    </section>
  );
}
