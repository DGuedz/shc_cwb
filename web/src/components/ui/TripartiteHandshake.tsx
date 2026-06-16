'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TripartiteHandshakeProps {
  artistName: string;
  artistExp: number;
  companyName: string;
  opportunityTitle: string;
  budget: number;
  onClose: () => void;
}

export function TripartiteHandshake({ artistName, artistExp, companyName, budget, onClose }: TripartiteHandshakeProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Simulate Legal Agent steps
    const timers = [
      setTimeout(() => setStep(1), 800),   // Collecting templates
      setTimeout(() => setStep(2), 1600),  // Injecting metadata
      setTimeout(() => setStep(3), 2400),  // Generating Hash
      setTimeout(() => setStep(4), 3200),  // Awaiting Signature
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#0E0E0E]/95 backdrop-blur-xl"
    >
      <div className="w-full max-w-5xl bg-black border border-[#393939] shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="border-b border-[#393939] p-6 flex justify-between items-center bg-[#131313]">
          <div>
            <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-1 uppercase border border-[#10B981]/30">SMART_CONTRACT // TRIPARTITE_MROSC</span>
            <h2 className="font-archivo text-2xl font-bold uppercase tracking-tight text-white mt-3">Formalização de Parceria</h2>
          </div>
          <button onClick={onClose} className="font-mono text-xs text-neutral-500 hover:text-white transition-colors uppercase">
            [ FECHAR_TERMINAL ]
          </button>
        </div>

        {/* 3 Pillars of Tripartite */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#393939] border-b border-[#393939]">
          
          {/* Pillar 1: Company */}
          <div className="p-6 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">CONTRATANTE (PARTE 1)</span>
            <div>
              <h3 className="font-archivo text-xl font-bold text-white uppercase">{companyName}</h3>
              <p className="font-mono text-xs text-neutral-400 mt-1">LUCRO REAL // CNPJ: ***</p>
            </div>
            <div className="mt-auto pt-4 border-t border-[#393939]">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">ALOCAÇÃO</span>
              <p className="font-mono text-lg text-[#10B981]">R$ {budget.toLocaleString('pt-BR')}</p>
            </div>
          </div>

          {/* Pillar 2: Infrastructure (SHC) */}
          <div className="p-6 flex flex-col gap-4 bg-[#131313] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#393939_1px,transparent_1px),linear-gradient(to_bottom,#393939_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-10 pointer-events-none" />
            <span className="font-mono text-[10px] text-[#10B981] uppercase tracking-widest relative z-10">INFRAESTRUTURA (TERCEIRO SETOR)</span>
            <div className="relative z-10">
              <h3 className="font-archivo text-xl font-bold text-white uppercase">Street Hub Connect</h3>
              <p className="font-mono text-xs text-neutral-400 mt-1">ORQUESTRAÇÃO & COMPLIANCE</p>
            </div>
            <div className="mt-auto pt-4 border-t border-[#393939] relative z-10">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">TEMPLATE JURÍDICO</span>
              <p className="font-mono text-xs text-white mt-1">MROSC_V2.4_STANDARD</p>
            </div>
          </div>

          {/* Pillar 3: Artist */}
          <div className="p-6 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">ARTISTA (PARTE 2)</span>
            <div>
              <h3 className="font-archivo text-xl font-bold text-white uppercase">{artistName}</h3>
              <p className="font-mono text-xs text-neutral-400 mt-1">MEMBER_ID: SHC-***</p>
            </div>
            <div className="mt-auto pt-4 border-t border-[#393939]">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">EXP / SAÚDE</span>
              <p className="font-mono text-lg text-[#10B981]">{artistExp} <span className="text-xs text-neutral-500">OPTIMAL</span></p>
            </div>
          </div>
        </div>

        {/* Legal Agent Terminal */}
        <div className="p-6 bg-[#0A0A0A] flex flex-col gap-2 font-mono text-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#10B981] animate-pulse"></span>
            <span className="text-[#10B981]">SHC_LEGAL_AGENT // PROTOTYPE</span>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-400">
            {'>'} Inicializando agente de governança institucional...
          </motion.div>
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-400">
              {'>'} Template institucional carregado.
            </motion.div>
          )}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-400">
              {'>'} Briefing e metadados da oportunidade consolidados.
            </motion.div>
          )}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neutral-400">
              {'>'} Termo tripartite gerado para revisão. Hash demonstrativo de auditoria criado: <span className="text-white">0x8a7b9c2f...4d5e</span>
            </motion.div>
          )}
          {step >= 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#10B981] font-bold mt-2">
              {'>'} PREPARADO PARA INTEGRAÇÃO COM ASSINATURA GOV.BR
            </motion.div>
          )}
        </div>

        {/* Action Footer */}
        <div className="p-6 border-t border-[#393939] bg-[#131313] flex justify-end">
          <button 
            disabled={step < 4}
            className={`font-mono font-bold text-[10px] uppercase tracking-widest px-8 py-4 transition-colors duration-0 ${
              step >= 4 
                ? "bg-[#1351B4] text-white hover:bg-white hover:text-[#1351B4] border border-[#1351B4]" 
                : "bg-[#393939] text-neutral-500 cursor-not-allowed border border-[#393939]"
            }`}
          >
            SOLICITAR REVISÃO E ASSINATURA
          </button>
        </div>

      </div>
    </motion.div>
  );
}