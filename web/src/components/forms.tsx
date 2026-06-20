"use client";

import { useState, useActionState, useEffect } from "react";
import { GovBrUpgradeModal } from "./govbr/GovBrUpgradeModal";
import { useRouter } from "next/navigation";

import type { FormActionState } from "@/app/actions";
import {
  saveArtistOnboardingAction,
  saveOpportunityAction,
  signInAction,
  signOutAction,
} from "@/app/actions";
import { useAppStore } from "@/store/app-store";
import type { UserRole, GovBrLevel } from "@/types/domain";
import { GovBrMockService } from "@/lib/govbr";

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
  const setGovBrLevel = useAppStore((store) => store.setGovBrLevel);
  const router = useRouter();

  const [isGovBrLoading, setIsGovBrLoading] = useState(false);
  const [mockLevel, setMockLevel] = useState<GovBrLevel>("bronze");

  const getRouteByRole = (currentRole: UserRole) =>
    currentRole === "contractor" ? "/onboarding/contratante" : "/onboarding/artista";

  const setDemoSessionCookies = (currentRole: UserRole, email: string) => {
    const maxAge = 60 * 60 * 8;
    const safeEmail = email || `demo+${currentRole}@streethub.connect`;
    const demoUser = currentRole === "artist" ? "demo-artist" : "demo-contractor";

    document.cookie = `shc-demo-role=${currentRole}; path=/; max-age=${maxAge}; samesite=lax`;
    document.cookie = `shc-demo-email=${encodeURIComponent(safeEmail)}; path=/; max-age=${maxAge}; samesite=lax`;
    document.cookie = `shc-demo-user=${demoUser}; path=/; max-age=${maxAge}; samesite=lax`;
    document.cookie = `shc-role=${currentRole}; path=/; max-age=${maxAge}; samesite=lax`;
  };

  const handleGovBrLogin = async () => {
    setIsGovBrLoading(true);
    try {
      const currentRole = role ?? "artist";
      const response = await GovBrMockService.simulateAuthCallback(currentRole, mockLevel as "bronze" | "prata" | "ouro");
      setGovBrLevel(response.level);
      setRole(currentRole);
      setDemoSessionCookies(currentRole, `govbr+${currentRole}@streethub.connect`);
      
      router.push(getRouteByRole(currentRole));
    } finally {
      setIsGovBrLoading(false);
    }
  };

  const handleDemoAuth = (e: React.FormEvent<HTMLFormElement>) => {
    if (!supabaseEnabled) {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const currentRole = (formData.get("role") as UserRole) ?? role ?? "artist";
      const email = String(formData.get("email") || "");

      setRole(currentRole);
      setGovBrLevel("ouro");
      setDemoSessionCookies(currentRole, email);
      router.push(getRouteByRole(currentRole));
    }
  };

  return (
    <form
      action={action}
      onSubmit={handleDemoAuth}
      className="bg-[#0E0E0E] border border-[#393939] p-6 flex flex-col gap-6 rounded-none w-full"
    >
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
            defaultValue={!supabaseEnabled ? "demo@streethub.connect" : ""}
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
            defaultValue={!supabaseEnabled ? "demo1234" : ""}
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

      {!supabaseEnabled && (
        <div className="bg-[#131313] border border-[#393939] p-4 flex flex-col gap-2">
          <p className="font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest">
            Simulador Gov.br (Ambiente Demo)
          </p>
          <select
            className="w-full bg-black border border-[#393939] text-white font-mono text-xs p-2 focus:border-[#10B981] outline-none"
            value={mockLevel}
            onChange={(e) => setMockLevel(e.target.value as GovBrLevel)}
          >
            <option value="bronze">Forçar Nível BRONZE (Teste de Bloqueios)</option>
            <option value="prata">Forçar Nível PRATA (Intermediário)</option>
            <option value="ouro">Forçar Nível OURO (Acesso Total)</option>
          </select>
        </div>
      )}

      <div className="flex flex-col gap-3 mt-4">
        <button 
          className="relative overflow-hidden bg-gradient-to-b from-[#10B981]/20 to-[#10B981]/5 backdrop-blur-md border border-[#10B981]/40 shadow-[inset_0_1px_0_0_rgba(16,185,129,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(16,185,129,0.6),0_0_20px_rgba(16,185,129,0.2)] text-[#10B981] hover:text-white uppercase font-bold py-3 transition-all duration-300 tracking-widest font-archivo text-sm rounded-none group" 
          type="submit" 
          disabled={pending}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">{pending ? "PROCESSANDO..." : "AUTENTICAR E ROTEAR"}</span>
        </button>

        <div className="flex items-center gap-4 my-2">
          <div className="h-px bg-[#393939] flex-1"></div>
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">OU</span>
          <div className="h-px bg-[#393939] flex-1"></div>
        </div>

        <button 
          className="relative overflow-hidden bg-gradient-to-b from-[#1351B4]/30 to-[#1351B4]/10 backdrop-blur-md border border-[#1351B4]/50 shadow-[inset_0_1px_0_0_rgba(19,81,180,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(19,81,180,0.7),0_0_20px_rgba(19,81,180,0.3)] text-[#6B9DFF] hover:text-white uppercase font-bold py-3 transition-all duration-300 tracking-widest font-archivo text-sm rounded-none flex items-center justify-center gap-3 group" 
          type="button" 
          onClick={handleGovBrLogin}
          disabled={isGovBrLoading}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          <img src="/govbr-logo.svg" alt="gov.br" className="h-4 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity relative z-10" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span className="relative z-10">{isGovBrLoading ? "CONECTANDO..." : "ENTRAR COM GOV.BR"}</span>
        </button>
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
  const govBrLevel = useAppStore((store) => store.govBrLevel);

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [requiredLevelForContract, setRequiredLevelForContract] = useState<"prata" | "ouro">("ouro");

  useRedirectOnSuccess(state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const maxBudget = parseInt(draft.budgetMax || "0", 10);
    
    // Regra de Negócio Gov.br MOCK
    // Se budget > 50000, exige ouro
    // Se budget > 10000, exige prata
    if (maxBudget > 50000 && govBrLevel !== "ouro") {
      setRequiredLevelForContract("ouro");
      setIsUpgradeModalOpen(true);
      return;
    }
    
    if (maxBudget > 10000 && govBrLevel !== "ouro" && govBrLevel !== "prata") {
      setRequiredLevelForContract("prata");
      setIsUpgradeModalOpen(true);
      return;
    }

    // Passou pela validação gov.br, continua com o action original
    const form = e.currentTarget;
    // Isso simula o submit chamando a action
    const formData = new FormData(form);
    // Nota: como useActionState não expõe a chamada direta facilmente com event,
    // Em React 19 podemos usar o action no form e interceptar via onSubmit ou usar startTransition
    // Por simplicidade na refatoração, vamos apenas despachar
    // Na prática, form.submit() bypassaria o useActionState, então usamos requestSubmit
    form.requestSubmit();
  };

  return (
    <>
      <form action={action} onSubmit={(e) => {
        // Se a validação customizada falhar, não propaga para o action original
        const maxBudget = parseInt(draft.budgetMax || "0", 10);
        if ((maxBudget > 50000 && govBrLevel !== "ouro") || (maxBudget > 10000 && govBrLevel !== "ouro" && govBrLevel !== "prata")) {
          e.preventDefault();
          handleSubmit(e);
        }
      }} className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
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
    
    <GovBrUpgradeModal 
      isOpen={isUpgradeModalOpen} 
      onClose={() => setIsUpgradeModalOpen(false)} 
      requiredLevel={requiredLevelForContract}
      currentActionValue={draft.budgetMax}
    />
  </>
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
