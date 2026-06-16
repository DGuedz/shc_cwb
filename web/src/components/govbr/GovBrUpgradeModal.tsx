import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/app-store';

export function GovBrUpgradeModal({
  isOpen,
  onClose,
  requiredLevel = "ouro",
  currentActionValue = "50.000"
}: {
  isOpen: boolean;
  onClose: () => void;
  requiredLevel?: "prata" | "ouro";
  currentActionValue?: string;
}) {
  const govBrLevel = useAppStore(s => s.govBrLevel);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-[#0E0E0E] border border-[#393939] max-w-md w-full shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
          >
            {/* Header */}
            <div className="border-b border-[#393939] p-6 bg-[#131313] flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] text-[#1351B4] tracking-widest uppercase block mb-1">
                  RESTRIÇÃO DE COMPLIANCE
                </span>
                <h2 className="font-archivo text-2xl font-bold uppercase text-white tracking-tight">
                  UPGRADE GOV.BR EXIGIDO
                </h2>
              </div>
              <button onClick={onClose} className="text-[#A3A3A3] hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-4">
              <div className="bg-[#131313] border border-[#393939] p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest">NÍVEL ATUAL DA CONTA</span>
                <span className="font-mono text-sm text-white uppercase">{govBrLevel}</span>
              </div>

              <p className="font-mono text-sm text-[#A3A3A3] leading-relaxed">
                Para fechar contratos com valor estimado de <span className="text-white font-bold">R$ {currentActionValue}</span>, sua conta Street Hub requer autenticação de nível <span className="text-[#10B981] font-bold uppercase">{requiredLevel}</span> no Gov.br.
              </p>

              <div className="mt-2 text-xs font-mono text-[#A3A3A3] leading-relaxed border-l-2 border-[#1351B4] pl-3">
                Você pode subir para o nível {requiredLevel} gratuitamente realizando a validação facial no aplicativo do governo ou utilizando um Certificado Digital ICP-Brasil.
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#393939] p-6 bg-[#131313] flex flex-col gap-3">
              <button 
                className="w-full border border-[#1351B4] bg-[#1351B4]/10 hover:bg-[#1351B4] text-[#1351B4] hover:text-white uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-sm rounded-none flex items-center justify-center gap-3" 
                onClick={() => {
                  alert("Iniciando fluxo de reautenticação OAuth com Gov.br...");
                  onClose();
                }}
              >
                <img src="/govbr-logo.svg" alt="gov.br" className="h-4 brightness-0 invert opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span>REAUTENTICAR COM GOV.BR</span>
              </button>
              <button 
                className="w-full text-[#A3A3A3] hover:text-white font-mono text-xs uppercase tracking-widest py-2 transition-colors"
                onClick={onClose}
              >
                Cancelar Operação
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
