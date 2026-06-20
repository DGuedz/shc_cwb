import type { Metadata } from "next";
import Link from "next/link";

import { SignInForm } from "@/components/forms";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { DashboardNav } from "@/components/ui/DashboardNav";

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
    <div className="min-h-screen bg-black text-white flex flex-col">
      <DashboardNav />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Background Grid Pattern Brutalista */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#393939_1px,transparent_1px),linear-gradient(to_bottom,#393939_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
        <div className="w-full max-w-lg relative z-10">
          <div className="mb-8">
            <h1 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
              Autenticação<br /> e Roteamento.
            </h1>
            <p className="font-mono text-sm text-[#A3A3A3] leading-relaxed">
              O papel selecionado orienta o redirecionamento inicial e a leitura segura dos dados.
            </p>
          </div>

          <SignInForm supabaseEnabled={hasSupabaseEnv()} />
          
          <div className="mt-8 border-t border-[#393939] pt-6 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className={`w-2 h-2 mt-1.5 ${hasSupabaseEnv() ? 'bg-[#10B981] shadow-[0_0_8px_#10B981]' : 'bg-yellow-500 shadow-[0_0_8px_#EAB308]'}`} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3] mb-1">
                  SYSTEM_STATUS
                </p>
                <p className="font-mono text-xs text-white">
                  {hasSupabaseEnv()
                    ? "Conectado. Operando com dados reais e persistência Supabase."
                    : "Sem variáveis de ambiente. Operando em MODO DEMO SEGURO."}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <Link href="/" className="font-mono text-xs text-[#10B981] hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Voltar para a Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
