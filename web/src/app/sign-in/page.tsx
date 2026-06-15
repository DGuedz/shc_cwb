import type { Metadata } from "next";

import { AppShell } from "@/components/ui";
import { SignInForm } from "@/components/forms";
import { hasSupabaseEnv } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Acesso",
  description: "Autenticacao de artistas e contratantes para entrada nas rotas protegidas da plataforma.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignInPage() {
  return (
    <AppShell badge="Auth gateway">
      <div className="grid flex-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="panel flex flex-col justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
              Security first
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold uppercase tracking-[-0.05em]">
              Autenticacao e roteamento por papel
            </h1>
            <p className="mt-6 max-w-xl text-white/72">
              As rotas protegidas usam verificacao otimista em `proxy.ts` e validacao real no servidor.
              O papel selecionado orienta o redirecionamento inicial e a leitura segura dos dados.
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              Ambiente
            </p>
            <p className="mt-3 text-white/72">
              {hasSupabaseEnv()
                ? "Cliente Supabase configurado para autenticar e persistir dados reais."
                : "Sem variaveis de ambiente: login demo habilitado para validar o fluxo ponta a ponta."}
            </p>
          </div>
        </section>

        <SignInForm supabaseEnabled={hasSupabaseEnv()} />
      </div>
    </AppShell>
  );
}
