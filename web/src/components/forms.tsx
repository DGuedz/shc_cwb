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
          <span className="font-mono text-xs text-neutral-400 uppercase">E-mail Operacional</span>
          <input 
            className="bg-[#131313] border border-[#393939] text-white font-mono text-sm p-3 focus:outline-none focus:border-[#10B981] transition-colors rounded-none placeholder:text-neutral-600" 
            name="email" 
            placeholder="ops@streethub.connect" 
            type="email" 
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

      <button 
        className="mt-4 border border-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981] text-[#10B981] hover:text-black uppercase font-bold py-3 transition-colors tracking-widest font-archivo text-sm rounded-none" 
        type="submit" 
        disabled={pending}
      >
        {pending ? "PROCESSANDO..." : "AUTENTICAR E ROTEAR"}
      </button>
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
      <section className="panel space-y-5">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">01 // Perfil</p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-[-0.05em]">Artist Onboarding</h1>
        </div>

        <label className="field">
          <span className="field-label">Nome artistico</span>
          <input
            className="field-input"
            name="stageName"
            value={draft.stageName}
            onChange={(event) => patchDraft({ stageName: event.target.value })}
          />
          <FieldError state={state} name="stageName" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="field">
            <span className="field-label">Genero</span>
            <input
              className="field-input"
              name="genre"
              value={draft.genre}
              onChange={(event) => patchDraft({ genre: event.target.value })}
            />
            <FieldError state={state} name="genre" />
          </label>
          <label className="field">
            <span className="field-label">Cidade</span>
            <input
              className="field-input"
              name="city"
              value={draft.city}
              onChange={(event) => patchDraft({ city: event.target.value })}
            />
            <FieldError state={state} name="city" />
          </label>
        </div>

        <label className="field">
          <span className="field-label">UF</span>
          <input
            className="field-input"
            name="state"
            value={draft.state}
            onChange={(event) => patchDraft({ state: event.target.value })}
          />
          <FieldError state={state} name="state" />
        </label>
      </section>

      <section className="panel space-y-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">02 // Negocio</p>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="field">
            <span className="field-label">Cache minimo</span>
            <input
              className="field-input"
              name="minFee"
              type="number"
              value={draft.minFee}
              onChange={(event) => patchDraft({ minFee: event.target.value })}
            />
            <FieldError state={state} name="minFee" />
          </label>
          <label className="field">
            <span className="field-label">Cache ideal</span>
            <input
              className="field-input"
              name="idealFee"
              type="number"
              value={draft.idealFee}
              onChange={(event) => patchDraft({ idealFee: event.target.value })}
            />
            <FieldError state={state} name="idealFee" />
          </label>
        </div>

        <label className="field">
          <span className="field-label">Bio operacional</span>
          <textarea
            className="field-input min-h-36"
            name="bio"
            value={draft.bio}
            onChange={(event) => patchDraft({ bio: event.target.value })}
          />
          <FieldError state={state} name="bio" />
        </label>

        {state.message ? <p className="text-sm text-red-200">{state.message}</p> : null}

        <button className="primary-button" type="submit" disabled={pending}>
          {pending ? "Sincronizando..." : "Salvar e abrir dossie"}
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
      <section className="panel space-y-5">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
            01 // Contratante
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold uppercase tracking-[-0.05em]">
            Opportunity Creation
          </h1>
        </div>

        <label className="field">
          <span className="field-label">Empresa</span>
          <input
            className="field-input"
            name="companyName"
            value={draft.companyName}
            onChange={(event) => patchDraft({ companyName: event.target.value })}
          />
          <FieldError state={state} name="companyName" />
        </label>

        <label className="field">
          <span className="field-label">Segmento</span>
          <input
            className="field-input"
            name="segment"
            value={draft.segment}
            onChange={(event) => patchDraft({ segment: event.target.value })}
          />
          <FieldError state={state} name="segment" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="field">
            <span className="field-label">Cidade</span>
            <input
              className="field-input"
              name="city"
              value={draft.city}
              onChange={(event) => patchDraft({ city: event.target.value })}
            />
            <FieldError state={state} name="city" />
          </label>
          <label className="field">
            <span className="field-label">UF</span>
            <input
              className="field-input"
              name="state"
              value={draft.state}
              onChange={(event) => patchDraft({ state: event.target.value })}
            />
            <FieldError state={state} name="state" />
          </label>
        </div>
      </section>

      <section className="panel space-y-5">
        <label className="field">
          <span className="field-label">Titulo da oportunidade</span>
          <input
            className="field-input"
            name="title"
            value={draft.title}
            onChange={(event) => patchDraft({ title: event.target.value })}
          />
          <FieldError state={state} name="title" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="field">
            <span className="field-label">Budget minimo</span>
            <input
              className="field-input"
              name="budgetMin"
              type="number"
              value={draft.budgetMin}
              onChange={(event) => patchDraft({ budgetMin: event.target.value })}
            />
            <FieldError state={state} name="budgetMin" />
          </label>
          <label className="field">
            <span className="field-label">Budget maximo</span>
            <input
              className="field-input"
              name="budgetMax"
              type="number"
              value={draft.budgetMax}
              onChange={(event) => patchDraft({ budgetMax: event.target.value })}
            />
            <FieldError state={state} name="budgetMax" />
          </label>
        </div>

        <label className="field">
          <span className="field-label">Data do evento</span>
          <input
            className="field-input"
            name="eventDate"
            type="date"
            value={draft.eventDate}
            onChange={(event) => patchDraft({ eventDate: event.target.value })}
          />
          <FieldError state={state} name="eventDate" />
        </label>

        <label className="field">
          <span className="field-label">Briefing</span>
          <textarea
            className="field-input min-h-36"
            name="briefing"
            value={draft.briefing}
            onChange={(event) => patchDraft({ briefing: event.target.value })}
          />
          <FieldError state={state} name="briefing" />
        </label>

        {state.message ? <p className="text-sm text-red-200">{state.message}</p> : null}

        <button className="primary-button" type="submit" disabled={pending}>
          {pending ? "Processando..." : "Salvar e abrir matchboard"}
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
