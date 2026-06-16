'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardNav } from "@/components/ui/DashboardNav";
import { ScrollRevealTitle } from "@/components/ui/ScrollRevealTitle";

export default function CriarOportunidade() {
  const router = useRouter();
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);
    
    // Simula o tempo do Agente Curador rodando o Matchmaking
    setTimeout(() => {
      // Passaríamos o ID da oportunidade real aqui. 
      // Por enquanto, jogamos direto para o Matchboard (Visão da Empresa com os matches).
      router.push('/dashboard/matchboard');
    }, 2000);
  };

  return (
    <div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
      <DashboardNav />
      
      {/* Main Content Canvas */}
      <main className="flex-grow pt-32 pb-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
        {/* Hero Header */}
        <header className="mb-16 md:mb-24 flex flex-col items-start gap-4 relative">
          <div className="absolute right-0 top-0 border border-[#393939] bg-[#0E0E0E] px-4 py-2 hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-mono text-xs text-[#10B981] tracking-widest uppercase">SHC_NETWORK // ZK_READY</span>
          </div>
          <ScrollRevealTitle
            className="font-archivo text-5xl md:text-[64px] font-bold text-white tracking-tighter uppercase max-w-3xl leading-tight text-[#10B981]"
          >
            CRIAR OPORTUNIDADE
          </ScrollRevealTitle>
          <p className="font-mono text-sm text-neutral-400 max-w-2xl border-l-2 border-[#10B981] pl-4">
            Publique uma oportunidade para artistas independentes e conecte-se com talentos validados pela Street Hub.
          </p>
        </header>
        
        {/* Form Panel */}
        <form onSubmit={handlePublish} className="bg-[#0E0E0E] border border-[#393939] p-6 flex flex-col gap-6 relative overflow-hidden">
          
          {/* Tela de Loading do Agente (UX) */}
          {isPublishing && (
            <div className="absolute inset-0 z-50 bg-[#0E0E0E]/95 backdrop-blur-sm flex flex-col items-center justify-center border border-[#10B981]">
              <div className="w-12 h-12 border border-[#393939] bg-[#131313] flex items-center justify-center mb-6">
                <span className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse shadow-[0_0_12px_#10B981]"></span>
              </div>
              <h3 className="font-archivo text-2xl font-bold uppercase tracking-tight text-white mb-2">AGENTE CURADOR ATIVADO</h3>
              <p className="font-mono text-xs text-neutral-400 text-center max-w-sm">
                Propagando evento na rede e cruzando metadados (EXP / Cache / Base). Gerando painel de Matchmaking...
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Título da Oportunidade
              </label>
              <input 
                type="text" 
                placeholder="Ex: Festival de Verão 2026" 
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Gênero Musical
              </label>
              <select className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors appearance-none">
                <option value="">Selecione um gênero</option>
                <option value="dj">DJ Set</option>
                <option value="rap">Rap / Hip-Hop</option>
                <option value="trap">Trap</option>
                <option value="mpb">Nova MPB</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Local
              </label>
              <input 
                type="text" 
                placeholder="Ex: Curitiba, PR" 
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Data
              </label>
              <input 
                type="date" 
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Descrição
              </label>
              <textarea 
                placeholder="Descreva a oportunidade, requisitos e benefícios" 
                rows={4}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors resize-none placeholder:text-neutral-600"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Orçamento (R$)
              </label>
              <input 
                type="number" 
                placeholder="5000" 
                step="500" 
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Tipo de Oportunidade
              </label>
              <select className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors appearance-none">
                <option value="">Selecione o tipo</option>
                <option value="show">Show</option>
                <option value="collab">Colaboração</option>
                <option value="residency">Residência</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end gap-4 pt-4 border-t border-[#393939]">
            <button type="button" className="bg-transparent border border-[#393939] text-neutral-400 font-mono text-[10px] uppercase tracking-widest px-8 py-3 hover:text-white transition-colors duration-0">
              Cancelar
            </button>
            <button type="submit" disabled={isPublishing} className="bg-[#10B981] text-black font-mono font-bold text-[10px] uppercase tracking-widest px-8 py-3 hover:bg-white transition-colors duration-0 disabled:opacity-50">
              Publicar Oportunidade
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
