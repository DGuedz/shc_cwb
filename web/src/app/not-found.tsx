import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <main className="flex-grow flex flex-col items-start justify-center px-4 md:px-8 max-w-[1400px] mx-auto w-full py-20">

        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">404</span>
          <span className="w-8 h-px bg-[#393939]" />
          <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">NOT FOUND</span>
        </div>

        <h1 className="font-archivo text-[clamp(2.5rem,8vw,6rem)] font-bold uppercase tracking-tighter leading-[0.85] mb-6">
          ROTA FORA
          <span className="block text-[#10B981]">DO GRID</span>
        </h1>

        <p className="font-mono text-xs text-neutral-500 max-w-lg border-l border-[#393939] pl-4 leading-relaxed mb-10">
          A pagina requisitada nao existe no mapa funcional da plataforma. Volte para a operacao principal ou reabra o catalogo publico.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#10B981] text-black font-mono text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-[#0ea572] transition-colors"
          >
            Voltar ao início
          </Link>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center border border-[#393939] text-neutral-400 font-mono text-[10px] uppercase tracking-widest px-6 py-3 hover:border-white hover:text-white transition-colors"
          >
            Abrir catálogo
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
