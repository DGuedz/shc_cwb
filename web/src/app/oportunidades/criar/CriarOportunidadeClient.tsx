"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardNav } from "@/components/ui/DashboardNav";
import { ScrollRevealTitle } from "@/components/ui/ScrollRevealTitle";
import { saveOpportunityAction, type FormActionState } from "@/app/actions";
import { useAppStore } from "@/store/app-store";
import type { SessionUser } from "@/types/domain";

const initialState: FormActionState = {};

export default function CriarOportunidadeClient({ session }: { session: SessionUser }) {
  const router = useRouter();
  const [state, action, pending] = useActionState(saveOpportunityAction, initialState);
  
  const draft = useAppStore((store) => store.opportunityDraft);
  const patchDraft = useAppStore((store) => store.patchOpportunityDraft);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (state.success && state.redirectTo) {
      // O estado pendente de publicação acaba aqui, e passamos para o efeito visual de matchmaking
      // Como o form já não está pending, garantimos que isPublishing continue true para mostrar o loader
      // Não chamamos o setState diretamente, deixamos o render seguir, só reagimos ao timeout
      timeoutId = setTimeout(() => {
        router.push(state.redirectTo!);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [state.success, state.redirectTo, router]);

  // Deriva o estado de isPublishing da success do form e se está renderizando (antes do redirect)
  const showLoader = pending || (state.success && !state.fieldErrors);

  return (
    <div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
      <DashboardNav session={session} />
      
      {/* Main Content Canvas */}
      <main className="flex-grow pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
        {/* Hero Header */}
        <header className="mb-16 md:mb-24 flex flex-col items-start gap-4 relative">
          <div className="absolute right-0 top-0 border border-[#393939] bg-[#0E0E0E] px-4 py-2 hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-mono text-xs text-[#10B981] tracking-widest uppercase">SHC_NETWORK // ZK_READY</span>
          </div>
          <ScrollRevealTitle
            className="font-archivo text-[clamp(2.5rem,5.5vw,4rem)] font-bold text-[#10B981] tracking-tighter uppercase leading-[0.88] max-w-3xl"
          >
            CRIAR OPORTUNIDADE
          </ScrollRevealTitle>
          <p className="font-mono text-sm text-neutral-400 max-w-2xl border-l-2 border-[#10B981] pl-4">
            Publique uma oportunidade para artistas independentes e conecte-se com talentos validados pela Street Hub.
          </p>
        </header>
        
        {/* Form Panel */}
        <form action={action} className="bg-[#0E0E0E] border border-[#393939] p-6 flex flex-col gap-6 relative overflow-hidden">
          
          {/* Tela de Loading do Agente (UX) */}
          {showLoader && (
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
                Empresa
              </label>
              <input 
                name="companyName"
                type="text" 
                placeholder="Ex: HOLDING S/A" 
                value={draft.companyName}
                onChange={(e) => patchDraft({ companyName: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
              {state.fieldErrors?.companyName && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.companyName[0]}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Segmento
              </label>
              <input 
                name="segment"
                type="text" 
                placeholder="Ex: Brand Experience" 
                value={draft.segment}
                onChange={(e) => patchDraft({ segment: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
              {state.fieldErrors?.segment && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.segment[0]}</span>}
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Título da Oportunidade
              </label>
              <input 
                name="title"
                type="text" 
                placeholder="Ex: Festival de Verão 2026" 
                value={draft.title}
                onChange={(e) => patchDraft({ title: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
              {state.fieldErrors?.title && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.title[0]}</span>}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Cidade
              </label>
              <input 
                name="city"
                type="text" 
                placeholder="Ex: Curitiba" 
                value={draft.city}
                onChange={(e) => patchDraft({ city: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
              {state.fieldErrors?.city && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.city[0]}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                UF
              </label>
              <input 
                name="state"
                type="text" 
                placeholder="Ex: PR" 
                value={draft.state}
                onChange={(e) => patchDraft({ state: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
              {state.fieldErrors?.state && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.state[0]}</span>}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Data do Evento
              </label>
              <input 
                name="eventDate"
                type="date" 
                value={draft.eventDate}
                onChange={(e) => patchDraft({ eventDate: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors"
              />
              {state.fieldErrors?.eventDate && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.eventDate[0]}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Budget Máximo (R$)
              </label>
              <input 
                name="budgetMax"
                type="number" 
                placeholder="5000" 
                step="500" 
                value={draft.budgetMax}
                onChange={(e) => patchDraft({ budgetMax: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
              />
              {state.fieldErrors?.budgetMax && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.budgetMax[0]}</span>}
              <input type="hidden" name="budgetMin" value="0" />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Briefing
              </label>
              <textarea 
                name="briefing"
                placeholder="Descreva a oportunidade, requisitos e benefícios" 
                rows={4}
                value={draft.briefing}
                onChange={(e) => patchDraft({ briefing: e.target.value })}
                className="w-full bg-[#131313] border border-[#393939] text-white font-mono text-xs px-4 py-3 focus:outline-none focus:border-[#10B981] transition-colors resize-none placeholder:text-neutral-600"
              />
              {state.fieldErrors?.briefing && <span className="font-mono text-[10px] text-red-400 uppercase">{state.fieldErrors.briefing[0]}</span>}
            </div>
            
          </div>
          
          {state.message && <p className="font-mono text-xs text-red-400 uppercase">{state.message}</p>}

          <div className="flex justify-end gap-4 pt-4 border-t border-[#393939]">
            <button type="button" onClick={() => router.back()} className="bg-transparent border border-[#393939] text-neutral-400 font-mono text-[10px] uppercase tracking-widest px-8 py-3 hover:text-white transition-colors duration-0">
              Cancelar
            </button>
            <button type="submit" disabled={showLoader} className="bg-[#10B981] text-black font-mono font-bold text-[10px] uppercase tracking-widest px-8 py-3 hover:bg-white transition-colors duration-0 disabled:opacity-50">
              Publicar Oportunidade
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
