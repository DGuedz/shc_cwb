import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#131313] text-white flex flex-col font-archivo selection:bg-[#10B981] selection:text-black">
      {/* Top Header Simplificado */}
      <header className="border-b border-[#393939] px-6 py-4 flex justify-between items-center bg-[#0E0E0E] sticky top-0 z-50">
        <Link href="/" className="font-archivo font-bold text-xl tracking-tighter uppercase hover:text-[#10B981] transition-colors">
          Street Hub Connect
        </Link>
        <div className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-3 py-1 uppercase tracking-widest border border-[#10B981]/30">
          AUTH_GATEWAY
        </div>
      </header>

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
          
          <div className="mt-8 border-t border-[#393939] pt-6 flex items-start gap-4">
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
        </div>
      </main>
    </div>
  );
}
