import { notFound } from "next/navigation";
import Link from "next/link";
import type { Route } from "next";
import { Footer } from "@/components/layout/Footer";
import { articles, getArticleBySlug } from "@/lib/articles";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artigo não encontrado" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-20 px-4 md:px-8 max-w-[780px] mx-auto w-full">

        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-neutral-700 mb-10">
          <Link href="/news" className="hover:text-neutral-400 transition-colors">News</Link>
          <span>/</span>
          <span className="text-neutral-600">{article.tag}</span>
        </nav>

        {/* HEADER */}
        <header className="mb-12 border-b border-[#1A1A1A] pb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[8px] text-[#10B981] border border-[#10B981]/30 bg-[#10B981]/5 px-2 py-0.5 uppercase tracking-widest">
              {article.tag}
            </span>
            <span className="font-mono text-[9px] text-neutral-700 tracking-widest">{article.date}</span>
          </div>

          <h1 className="font-archivo text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.9] mb-6 text-white">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 pt-4 border-t border-[#111111]">
            <div className="w-8 h-8 bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center font-mono text-[9px] text-[#10B981]">
              DG
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-archivo text-xs font-bold uppercase tracking-tight text-white">{article.author}</span>
              <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest">{article.authorRole}</span>
            </div>
          </div>
        </header>

        {/* CORPO */}
        <article className="flex flex-col gap-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="font-archivo text-base md:text-lg font-bold uppercase tracking-tight text-[#10B981] mb-3">
                  {section.heading}
                </h2>
              )}
              <div className="font-mono text-[11px] md:text-xs text-neutral-400 leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </section>
          ))}
        </article>

        {/* SEPARADOR */}
        <div className="my-12 border-t border-[#1A1A1A]" />

        {/* CTA */}
        <div className="border border-[#393939] bg-[#0A0A0A] p-6 md:p-8 flex flex-col gap-4">
          <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">Próximo passo</p>
          <p className="font-archivo text-lg font-bold uppercase tracking-tight text-white leading-snug">
            As primeiras vagas são para quem acredita que a música independente merece rigor, rastreabilidade e respeito.
          </p>
          <Link
            href={article.cta.href as Route}
            className="w-fit inline-flex items-center justify-center bg-[#10B981] text-black font-mono text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-[#0ea572] transition-colors"
          >
            {article.cta.label}
          </Link>
        </div>

        {/* VOLTAR */}
        <div className="mt-10">
          <Link
            href="/news"
            className="font-mono text-[9px] uppercase tracking-widest text-neutral-700 hover:text-neutral-400 transition-colors"
          >
            ← Todos os artigos
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
