import { DashboardNav } from "@/components/ui/DashboardNav";
import { getSessionUser } from "@/lib/auth";

export const metadata = {
  title: "News | Street Hub Connect",
  description: "Novidades, lançamentos e movimentações da associação Street Hub Connect.",
};

const posts = [
  {
    id: "001",
    date: "Jun 2026",
    tag: "LANÇAMENTO",
    title: "Street Hub Connect entra em fase beta",
    excerpt: "A plataforma que conecta artistas independentes e empresas abre as portas para os primeiros associados. Catálogo curado, sistema de XP e matchmaking inteligente já disponíveis.",
    highlight: true,
  },
  {
    id: "002",
    date: "Mai 2026",
    tag: "PROTOCOLO",
    title: "Sistema de XP e multiplicador de cachê explicado",
    excerpt: "Como funciona o sistema de atividade da associação: de INICIANTE a REFERÊNCIA, cada nível impacta diretamente no valor de cachê do artista e na visibilidade no catálogo.",
    highlight: false,
  },
  {
    id: "003",
    date: "Mai 2026",
    tag: "PARCERIA",
    title: "Primeiras empresas confirmadas no protocolo",
    excerpt: "Marcas de Curitiba e região começam a usar o Matchboard para conectar com artistas verificados. O fluxo de booking foi validado em evento piloto com 3 contratações confirmadas.",
    highlight: false,
  },
  {
    id: "004",
    date: "Abr 2026",
    tag: "HACKATHON",
    title: "SHC apresentado no Hackathon Stitch Street",
    excerpt: "O protótipo da plataforma foi apresentado e validado com feedback de artistas, empresas e investidores. A tese: tecnologia a serviço da economia criativa underground.",
    highlight: false,
  },
];

export default async function NewsPage() {
  const session = await getSessionUser();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <DashboardNav session={session} />

      <main className="flex-grow pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">

        {/* HERO */}
        <header className="mb-16 border-b border-[#393939] pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_NEWS</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">Atualizado Jun 2026</span>
          </div>
          <h1 className="font-archivo text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] text-white max-w-4xl">
            NOVIDADES<br />
            <span className="text-[#10B981]">DA ASSOCIAÇÃO</span>
          </h1>
        </header>

        {/* POSTS */}
        <div className="flex flex-col gap-px bg-[#393939] border border-[#393939]">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`bg-[#0E0E0E] p-6 md:p-8 flex flex-col md:flex-row gap-6 group cursor-pointer hover:bg-[#131313] transition-colors ${post.highlight ? "border-l-2 border-[#10B981]" : ""}`}
            >
              {/* Meta */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:min-w-[120px]">
                <span className="font-mono text-[9px] text-[#10B981] tracking-widest uppercase border border-[#10B981]/30 bg-[#10B981]/10 px-2 py-1 h-fit w-fit">
                  {post.tag}
                </span>
                <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase self-center md:self-auto mt-0 md:mt-2">
                  {post.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-3">
                <h2 className="font-archivo text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#10B981] transition-colors">
                  {post.title}
                </h2>
                <p className="font-mono text-xs text-neutral-500 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>

              {/* Arrow */}
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
            <h3 className="font-archivo text-xl font-bold uppercase tracking-tight text-white mb-1">NEWSLETTER SHC</h3>
            <p className="font-mono text-[10px] text-neutral-500">Receba novidades, lançamentos e oportunidades direto no seu email.</p>
          </div>
          <a
            href="/waitlist"
            className="border border-[#393939] text-neutral-400 font-mono text-[9px] uppercase tracking-widest px-6 py-3 hover:border-[#10B981] hover:text-white transition-colors whitespace-nowrap"
          >
            ENTRAR NA WAITLIST
          </a>
        </div>

      </main>
    </div>
  );
}
