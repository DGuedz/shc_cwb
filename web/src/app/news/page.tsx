'use client';

import { DashboardNav } from "@/components/ui/DashboardNav";
import { ScrollRevealTitle } from "@/components/ui/ScrollRevealTitle";
import { GlassCTA } from "@/components/ui/GlassCTA";

const posts = [
  {
    id: "001", date: "Jun 2026", tag: "LANÇAMENTO",
    title: "Street Hub Connect entra em fase beta",
    excerpt: "A plataforma que conecta artistas independentes e empresas abre as portas para os primeiros associados. Catálogo curado, sistema de XP e matchmaking inteligente já disponíveis.",
    highlight: true,
  },
  {
    id: "002", date: "Mai 2026", tag: "PROTOCOLO",
    title: "Sistema de XP e multiplicador de cachê explicado",
    excerpt: "Como funciona o sistema de atividade da associação: de INICIANTE a REFERÊNCIA, cada nível impacta diretamente no valor de cachê do artista e na visibilidade no catálogo.",
    highlight: false,
  },
  {
    id: "003", date: "Mai 2026", tag: "PARCERIA",
    title: "Primeiras empresas confirmadas no protocolo",
    excerpt: "Marcas de Curitiba e região começam a usar o Matchboard para conectar com artistas verificados. O fluxo de booking foi validado em evento piloto com 3 contratações confirmadas.",
    highlight: false,
  },
  {
    id: "004", date: "Abr 2026", tag: "HACKATHON",
    title: "SHC apresentado no Hackathon Stitch Street",
    excerpt: "O protótipo da plataforma foi apresentado e validado com feedback de artistas, empresas e investidores. A tese: tecnologia a serviço da economia criativa underground.",
    highlight: false,
  },
];

export default function NewsPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <DashboardNav />

      <main className="flex-grow pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">

        {/* HERO */}
        <header className="mb-16 border-b border-[#393939] pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_NEWS</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">Atualizado Jun 2026</span>
          </div>
          <div className="font-archivo text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
            <ScrollRevealTitle as="div" metallic progressRange={[0, 0.5]}>
              NOVIDADES
            </ScrollRevealTitle>
            <ScrollRevealTitle as="div" className="text-[#10B981]" progressRange={[0.1, 0.6]}>
              DA ASSOCIAÇÃO
            </ScrollRevealTitle>
          </div>
        </header>

        {/* POSTS */}
        <div className="flex flex-col gap-px bg-[#393939] border border-[#393939]">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`bg-[#0E0E0E] p-6 md:p-8 flex flex-col md:flex-row gap-6 group cursor-pointer hover:bg-[#131313] transition-colors ${post.highlight ? "border-l-2 border-[#10B981]" : ""}`}
            >
              <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:min-w-[120px]">
                <span className="font-mono text-[9px] text-[#10B981] tracking-widest uppercase border border-[#10B981]/30 bg-[#10B981]/10 px-2 py-1 h-fit w-fit">{post.tag}</span>
                <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase self-center md:self-auto md:mt-2">{post.date}</span>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <ScrollRevealTitle as="h2" className="font-archivo text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#10B981] transition-colors">
                  {post.title}
                </ScrollRevealTitle>
                <p className="font-mono text-xs text-neutral-500 leading-relaxed max-w-2xl">{post.excerpt}</p>
              </div>
              <div className="hidden md:flex items-center text-neutral-700 group-hover:text-[#10B981] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* NEWSLETTER CTA */}
        <div className="mt-16 border border-[#393939] bg-[#0E0E0E] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] text-[#10B981] tracking-widest uppercase mb-2">// Em breve</p>
            <ScrollRevealTitle as="h2" metallic className="font-archivo text-xl md:text-2xl font-bold uppercase tracking-tight mb-1">
              NEWSLETTER SHC
            </ScrollRevealTitle>
            <p className="font-mono text-[10px] text-neutral-500">Receba novidades, lançamentos e oportunidades direto no seu email.</p>
          </div>
          <GlassCTA href="/waitlist" variant="secondary">ENTRAR NA WAITLIST</GlassCTA>
        </div>

      </main>
    </div>
  );
}
