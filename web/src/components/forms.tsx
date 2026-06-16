"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import type { FormActionState } from "@/app/actions";
import {
  saveArtistOnboardingAction,
  saveOpportunityAction,
  signInAction,
  signOutAction,
} from "@/app/actions";
import { useAppStore } from "@/store/app-store";
import type { UserRole } from "@/types/domain";

const initialState: FormActionState = {};

function FieldError({
  state,
  name,
}: {
  state: FormActionState;
  name: string;
}) {
  const message = state.fieldErrors?.[name]?.[0];

  if (!message) {
    return null;
  }

  return <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-red-300">{message}</p>;
}

function useRedirectOnSuccess(state: FormActionState) {
  const router = useRouter();

  useEffect(() => {
    if (state.success && state.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [router, state.redirectTo, state.success]);
}

export function SignInForm({ supabaseEnabled }: { supabaseEnabled: boolean }) {
  const [state, action, pending] = useActionState(signInAction, initialState);
  const role = useAppStore((store) => store.role);
  const setRole = useAppStore((store) => store.setRole);

  return (
    <form action={action} className="bg-[#0E0E0E] border border-[#393939] p-6 flex flex-col gap-6 rounded-none w-full">
      <div className="flex justify-between items-center border-b border-[#393939] pb-4">
        <h3 className="font-archivo uppercase font-bold text-white tracking-tight">Credenciais de Acesso</h3>
        <span className="font-mono text-xs text-[#10B981]">GATEWAY: {supabaseEnabled ? 'SECURE' : 'DEMO'}</span>
      </div>

      <div className="grid gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">E-mail Operacional ou Gov.br</span>
          <input 
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600" 
            name="email" 
            placeholder="gov.br/cpf ou ops@streethub.connect" 
            type="text" 
            required 
          />
          <FieldError state={state} name="email" />
        </label>
        
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Senha / Auth Key</span>
          <input 
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600" 
            name="password" 
            placeholder="••••••••" 
            type="password" 
            required 
          />
          <FieldError state={state} name="password" />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-neutral-400 uppercase">Perfil de Roteamento</span>
        <div className="relative">
          <select
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none appearance-none w-full"
            name="role"
            value={role ?? "artist"}
            onChange={(event) => setRole(event.target.value as UserRole)}
          >
            <option value="artist">ARTISTA (TALENT)</option>
            <option value="contractor">CONTRATANTE (PARTNER)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#10B981]">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
        <FieldError state={state} name="role" />
      </label>

      {state.message ? <p className="font-mono text-xs text-red-400 uppercase">{state.message}</p> : null}

      <div className="flex flex-col gap-3 mt-4">
        <button 
          className="border border-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981] text-[#10B981] hover:text-black uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-sm rounded-none" 
          type="submit" 
          disabled={pending}
        >
          {pending ? "PROCESSANDO..." : "AUTENTICAR E ROTEAR"}
        </button>

        {role === "artist" && (
          <button 
            className="border border-[#0042B1] bg-[#0042B1]/10 hover:bg-[#0042B1] text-[#0042B1] hover:text-white uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-sm rounded-none flex items-center justify-center gap-2" 
            type="button" 
            onClick={() => alert("Integração com gov.br em desenvolvimento...")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
            </svg>
            ENTRAR COM GOV.BR
          </button>
        )}
      </div>
    </form>
  );
}

export function ArtistOnboardingForm() {
  const [state, action, pending] = useActionState(saveArtistOnboardingAction, initialState);
  const draft = useAppStore((store) => store.artistDraft);
  const patchDraft = useAppStore((store) => store.patchArtistDraft);

  useRedirectOnSuccess(state);

  return (
    <form action={action} className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="bg-[#0E0E0E] border border-[#393939] p-6 space-y-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#10B981]">01 // Perfil</p>
          <h1 className="mt-2 font-archivo text-2xl font-bold uppercase tracking-tight text-white">Artist Onboarding</h1>
        </div>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Nome artistico</span>
          <input
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
            name="stageName"
            value={draft.stageName}
            onChange={(event) => patchDraft({ stageName: event.target.value })}
          />
          <FieldError state={state} name="stageName" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Genero</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="genre"
              value={draft.genre}
              onChange={(event) => patchDraft({ genre: event.target.value })}
            />
            <FieldError state={state} name="genre" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Cidade</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="city"
              value={draft.city}
              onChange={(event) => patchDraft({ city: event.target.value })}
            />
            <FieldError state={state} name="city" />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">UF</span>
          <input
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
            name="state"
            value={draft.state}
            onChange={(event) => patchDraft({ state: event.target.value })}
          />
          <FieldError state={state} name="state" />
        </label>
      </section>

      <section className="bg-[#0E0E0E] border border-[#393939] p-6 space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#10B981]">02 // Negocio</p>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Cache minimo</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="minFee"
              type="number"
              value={draft.minFee}
              onChange={(event) => patchDraft({ minFee: event.target.value })}
            />
            <FieldError state={state} name="minFee" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Cache ideal</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="idealFee"
              type="number"
              value={draft.idealFee}
              onChange={(event) => patchDraft({ idealFee: event.target.value })}
            />
            <FieldError state={state} name="idealFee" />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Bio operacional</span>
          <textarea
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600 min-h-36"
            name="bio"
            value={draft.bio}
            onChange={(event) => patchDraft({ bio: event.target.value })}
          />
          <FieldError state={state} name="bio" />
        </label>

        {state.message ? <p className="font-mono text-xs text-red-400 uppercase">{state.message}</p> : null}

        <button 
          className="w-full mt-4 border border-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981] text-[#10B981] hover:text-black uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-sm rounded-none" 
          type="submit" 
          disabled={pending}
        >
          {pending ? "SINCRONIZANDO..." : "SALVAR E ABRIR DOSSIÊ"}
        </button>
      </section>
    </form>
  );
}

export function ContractorOnboardingForm() {
  const [state, action, pending] = useActionState(saveOpportunityAction, initialState);
  const draft = useAppStore((store) => store.opportunityDraft);
  const patchDraft = useAppStore((store) => store.patchOpportunityDraft);

  useRedirectOnSuccess(state);

  return (
    <form action={action} className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="bg-[#0E0E0E] border border-[#393939] p-6 space-y-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#10B981]">
            01 // Contratante
          </p>
          <h1 className="mt-2 font-archivo text-2xl font-bold uppercase tracking-tight text-white">
            Opportunity Creation
          </h1>
          <p className="mt-2 font-mono text-xs text-neutral-400">
            Focado em empresas optantes pelo <span className="text-[#10B981]">LUCRO REAL</span>. Insira os dados para buscar as parcerias adequadas.
          </p>
        </div>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Empresa</span>
          <input
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
            name="companyName"
            value={draft.companyName}
            onChange={(event) => patchDraft({ companyName: event.target.value })}
          />
          <FieldError state={state} name="companyName" />
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Segmento</span>
          <input
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
            name="segment"
            value={draft.segment}
            onChange={(event) => patchDraft({ segment: event.target.value })}
          />
          <FieldError state={state} name="segment" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Cidade</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="city"
              value={draft.city}
              onChange={(event) => patchDraft({ city: event.target.value })}
            />
            <FieldError state={state} name="city" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">UF</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="state"
              value={draft.state}
              onChange={(event) => patchDraft({ state: event.target.value })}
            />
            <FieldError state={state} name="state" />
          </label>
        </div>
      </section>

      <section className="bg-[#0E0E0E] border border-[#393939] p-6 space-y-6">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Titulo da oportunidade</span>
          <input
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
            name="title"
            value={draft.title}
            onChange={(event) => patchDraft({ title: event.target.value })}
          />
          <FieldError state={state} name="title" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Budget minimo</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="budgetMin"
              type="number"
              value={draft.budgetMin}
              onChange={(event) => patchDraft({ budgetMin: event.target.value })}
            />
            <FieldError state={state} name="budgetMin" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Budget maximo</span>
            <input
              className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
              name="budgetMax"
              type="number"
              value={draft.budgetMax}
              onChange={(event) => patchDraft({ budgetMax: event.target.value })}
            />
            <FieldError state={state} name="budgetMax" />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Data do evento</span>
          <input
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600"
            name="eventDate"
            type="date"
            value={draft.eventDate}
            onChange={(event) => patchDraft({ eventDate: event.target.value })}
          />
          <FieldError state={state} name="eventDate" />
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-neutral-400 uppercase">Briefing</span>
          <textarea
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600 min-h-36"
            name="briefing"
            value={draft.briefing}
            onChange={(event) => patchDraft({ briefing: event.target.value })}
          />
          <FieldError state={state} name="briefing" />
        </label>

        {state.message ? <p className="font-mono text-xs text-red-400 uppercase">{state.message}</p> : null}

        <button 
          className="w-full mt-4 border border-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981] text-[#10B981] hover:text-black uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-sm rounded-none" 
          type="submit" 
          disabled={pending}
        >
          {pending ? "PROCESSANDO..." : "SALVAR E ABRIR MATCHBOARD"}
        </button>
      </section>
    </form>
  );
}

export function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="border border-white/15 px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] text-white/75 hover:border-white/35 hover:text-white">
        Sair
      </button>
    </form>
  );
}
