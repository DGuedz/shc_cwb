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
    <form action={action} className="panel max-w-xl space-y-6">
      <div className="space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
          Acesso autenticado
        </p>
        <h1 className="font-heading text-4xl font-bold uppercase tracking-[-0.05em]">Entrar na operacao</h1>
        <p className="text-white/72">
          {supabaseEnabled
            ? "Auth ativo via Supabase. Selecione o perfil para aplicar o roteamento protegido."
            : "Sem credenciais Supabase no ambiente: o login entra em modo demo seguro para validar rotas e UX."}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span className="field-label">E-mail</span>
          <input className="field-input" name="email" placeholder="ops@streethub.connect" type="email" required />
          <FieldError state={state} name="email" />
        </label>
        <label className="field">
          <span className="field-label">Senha</span>
          <input className="field-input" name="password" placeholder="******" type="password" required />
          <FieldError state={state} name="password" />
        </label>
      </div>

      <label className="field">
        <span className="field-label">Perfil de acesso</span>
        <select
          className="field-input"
          name="role"
          value={role ?? "artist"}
          onChange={(event) => setRole(event.target.value as UserRole)}
        >
          <option value="artist">Artista</option>
          <option value="contractor">Contratante</option>
        </select>
        <FieldError state={state} name="role" />
      </label>

      {state.message ? <p className="text-sm text-red-200">{state.message}</p> : null}

      <button className="primary-button" type="submit" disabled={pending}>
        {pending ? "Autenticando..." : "Entrar"}
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
