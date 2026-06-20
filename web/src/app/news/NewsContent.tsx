'use client';

import Link from "next/link";
import type { Route } from "next";
import { ScrollRevealTitle } from "@/components/ui/ScrollRevealTitle";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PageEntrance } from "@/components/ui/PageEntrance";
import { GlassCTA } from "@/components/ui/GlassCTA";
import { ChromaticSpan } from "@/components/ui/ChromaticSpan";
import { articles } from "@/lib/articles";

const updates = [
  { id: "upd-01", date: "Jun 2026", tag: "FUNDAÇÃO",
    title: "Documentação institucional publicada",
    excerpt: "Memorial fundacional, estatuto social (76 artigos), roadmap estratégico e páginas legais publicados no site.",
    href: "/documentos" },
  { id: "upd-02", date: "Jun 2026", tag: "HACKATHON",
    title: "SHC apresentado no Hackathon TRAE + AI Brasil 2026",
    excerpt: "Protótipo desenvolvido e publicado durante o desafio. Plataforma no ar com catálogo, matchboard e fluxos de demo.",
    href: "https://www.youtube.com/watch?v=OMFsVcebzLQ" },
];

export function NewsContent() {
  return (
    <PageEntrance>
      <main className="flex-grow pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">

        {/* HERO */}
        <header className="mb-16 border-b border-[#393939] pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase title-reveal">SHC_NEWS</span>
            <span className="w-8 h-px bg-[#393939] title-reveal reveal-delay-1" />
            <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase title-reveal reveal-delay-1">Atualizado Jun 2026</span>
          </div>
          <h1 className="font-archivo shc-hero font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
            <ChromaticSpan delay={0.05}>NOVIDADES</ChromaticSpan>
            <span className="block text-[#10B981] title-reveal reveal-delay-2">DA ASSOCIAÇÃO</span>
          </h1>
        </header>

        {/* ARTIGOS — publicações reais */}
        <SectionReveal>
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">Artigos</span>
              <span className="flex-1 h-px bg-[#1A1A1A]" />
              <span className="font-mono text-[9px] text-neutral-700">{articles.length} publicações</span>
            </div>

            <div className="flex flex-col gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
              {articles.map((article, i) => (
                <SectionReveal key={article.slug} delay={i * 0.06}>
                  <Link
                    href={`/news/${article.slug}`}
                    className="group flex flex-col md:flex-row gap-6 bg-[#0A0A0A] p-6 md:p-8 hover:bg-[#0E0E0E] transition-colors border-l-2 border-[#10B981]"
                  >
                    <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:min-w-[120px]">
                      <span className="font-mono text-[8px] text-[#10B981] border border-[#10B981]/30 bg-[#10B981]/5 px-2 py-1 h-fit w-fit uppercase tracking-widest">
                        {article.tag}
                      </span>
                      <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase self-center md:self-auto md:mt-2">
                        {article.date}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h2 className="font-archivo text-base font-bold uppercase tracking-tight text-white group-hover:text-[#10B981] transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="font-mono text-[10px] text-neutral-500 leading-relaxed max-w-2xl">
                        {article.excerpt}
                      </p>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-700 group-hover:text-[#10B981] transition-colors">
                        Ler artigo →
                      </span>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* ATUALIZAÇÕES */}
        <SectionReveal>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">Atualizações</span>
              <span className="flex-1 h-px bg-[#1A1A1A]" />
            </div>

            <div className="flex flex-col gap-px bg-[#393939] border border-[#393939]">
              {updates.map((post, i) => {
                const inner = (
                  <>
                    <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:min-w-[120px]">
                      <span className="font-mono text-[8px] text-neutral-400 border border-[#393939] bg-[#0E0E0E] px-2 py-1 h-fit w-fit uppercase tracking-widest">
                        {post.tag}
                      </span>
                      <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase self-center md:self-auto md:mt-2">
                        {post.date}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <ScrollRevealTitle as="h2" className="font-archivo shc-block font-bold uppercase tracking-tight text-white group-hover:text-[#10B981] transition-colors">
                        {post.title}
                      </ScrollRevealTitle>
                      <p className="font-mono text-[10px] text-neutral-500 leading-relaxed max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="hidden md:flex items-center text-neutral-700 group-hover:text-[#10B981] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </>
                );
                const cls = "group flex flex-col md:flex-row gap-6 bg-[#0E0E0E] p-6 md:p-8 hover:bg-[#131313] transition-colors cursor-pointer";
                return (
                  <SectionReveal key={post.id} delay={i * 0.06}>
                    {post.href.startsWith("http") ? (
                      <a href={post.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                    ) : (
                      <Link href={post.href as Route} className={cls}>{inner}</Link>
                    )}
                  </SectionReveal>
                );
              })}
            </div>
          </section>
        </SectionReveal>

        {/* NEWSLETTER */}
        <SectionReveal delay={0.1}>
          <div className="border border-[#393939] bg-[#0E0E0E] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[9px] text-[#10B981] tracking-widest uppercase mb-2">Em breve</p>
              <ScrollRevealTitle as="h2" chromatic className="font-archivo shc-block font-bold uppercase tracking-tight mb-1">
                NEWSLETTER SHC
              </ScrollRevealTitle>
              <p className="font-mono text-[10px] text-neutral-500">Receba novidades, lançamentos e oportunidades direto no seu email.</p>
            </div>
            <GlassCTA href="/waitlist" variant="secondary">ENTRAR NA WAITLIST</GlassCTA>
          </div>
        </SectionReveal>

      </main>
    </PageEntrance>
  );
}
