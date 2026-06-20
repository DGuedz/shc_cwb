import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentação",
  description:
    "Documentos públicos da Street Hub Connect: memorial fundacional, estatuto social, licenças, roadmap e base legal.",
};

// ——————————————————————————————————————————————————————
// Tipos
// ——————————————————————————————————————————————————————

type DocCard = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  badgeVariant?: "green" | "neutral" | "blue";
  href: string;
  external?: boolean;
};

// ——————————————————————————————————————————————————————
// Dados
// ——————————————————————————————————————————————————————

const sections: Array<{ id: string; label: string; description: string }> = [
  {
    id: "fundacao",
    label: "Fundação",
    description: "Documentos que constituem a identidade jurídica e institucional da associação.",
  },
  {
    id: "estatuto",
    label: "Estatuto",
    description: "O estatuto social com 76 artigos que regem a governança da SHC.",
  },
  {
    id: "licencas",
    label: "Licenças",
    description: "Termos sob os quais o código e o conteúdo da SHC podem ser utilizados.",
  },
  {
    id: "roadmap",
    label: "Roadmap",
    description: "Visão estratégica de crescimento orientada pelo memorial fundacional.",
  },
  {
    id: "plataforma",
    label: "Plataforma",
    description: "Documentação técnica e repositório público da plataforma SHC.",
  },
];

const docs: DocCard[] = [
  // FUNDAÇÃO
  {
    id: "memorial-shc",
    category: "fundacao",
    title: "Memorial Fundacional",
    subtitle: "SHC — Filha da ASTEPAM",
    description:
      "Apresenta a estrutura completa da Street Hub Connect: 3 filhas (Social, Tecnologia ICT, Fonográfica), Fundo Patrimonial, gov.chain blockchain e ISRC como SpectralHash Fonográfico. Modelo Takashi com 10 seções.",
    badge: "Vigente",
    badgeVariant: "green",
    href: "https://github.com/DGuedz/shc_cwb/blob/main/legal/memorial-shc.md",
    external: true,
  },
  {
    id: "vinculacao-astepam",
    category: "fundacao",
    title: "Nota de Vinculação ASTEPAM",
    subtitle: "Hierarquia institucional",
    description:
      "Explica a relação entre a ASTEPAM (ICT Mãe — agromineral, Campos Verdes/GO) e a Street Hub Connect (filha especializada em economia criativa — Curitiba/PR), com o organograma completo.",
    badge: "Vigente",
    badgeVariant: "green",
    href: "https://github.com/DGuedz/shc_cwb/blob/main/legal/memorial-astepam.md",
    external: true,
  },

  // ESTATUTO
  {
    id: "estatuto-social",
    category: "estatuto",
    title: "Estatuto Social",
    subtitle: "76 artigos — Modelo Takashi",
    description:
      "Estatuto completo da SHC: natureza sem fins econômicos (art. 6), imunidade tributária (CTN art. 9/14 + CF art. 150 VI c), Conselho de Profissionais Fonográficos com autoridade sobre ISRC Registry, 30 fontes de receita, Fundo Patrimonial (Lei 13.800/19) e ICT (Lei 13.243/16).",
    badge: "76 artigos",
    badgeVariant: "green",
    href: "https://github.com/DGuedz/shc_cwb/blob/main/legal/estatuto-shc.md",
    external: true,
  },

  // LICENÇAS
  {
    id: "licenca-mit",
    category: "licencas",
    title: "MIT License",
    subtitle: "Código-fonte da plataforma",
    description:
      "O código da plataforma Street Hub Connect é software livre. Qualquer pessoa pode usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e vender cópias sem restrição.",
    badge: "MIT",
    badgeVariant: "blue",
    href: "https://github.com/DGuedz/shc_cwb/blob/main/LICENSE",
    external: true,
  },
  {
    id: "licenca-cc",
    category: "licencas",
    title: "CC BY-NC-ND 4.0",
    subtitle: "Conteúdo, marca e metodologia",
    description:
      "Conteúdo, identidade visual, metodologia curatorial e documentação institucional protegidos. Compartilhamento permitido com atribuição. Uso comercial por terceiros e obras derivadas são vedados sem autorização expressa.",
    badge: "CC BY-NC-ND 4.0",
    badgeVariant: "blue",
    href: "https://github.com/DGuedz/shc_cwb/blob/main/legal/CC-BY-NC-ND-4.0-registro-oficial.md",
    external: true,
  },
  {
    id: "guia-cc",
    category: "licencas",
    title: "Guia Creative Commons",
    subtitle: "Como usar e aplicar o CC",
    description:
      "O que é o Creative Commons, as 4 condições (BY, NC, ND, SA), como a SHC aplica o CC BY-NC-ND 4.0, como artistas podem licenciar suas obras, e a dupla proteção ISRC + CC para soberania fonográfica.",
    badge: "Guia",
    badgeVariant: "neutral",
    href: "/documentos/creative-commons",
    external: false,
  },

  // ROADMAP
  {
    id: "roadmap-estrategico",
    category: "roadmap",
    title: "Roadmap Estratégico",
    subtitle: "Memorial como guia de crescimento",
    description:
      "4 fases de expansão: (1) Fundação e Cadastro — loop central via renúncia fiscal, (2) Governança Fonográfica — ISRC Registry, (3) Fundo Patrimonial e Programa Social, (4) Escala nacional e gov.chain blockchain.",
    badge: "2026–2027",
    badgeVariant: "neutral",
    href: "https://github.com/DGuedz/shc_cwb/blob/main/legal/roadmap-estrategico.md",
    external: true,
  },

  // PLATAFORMA
  {
    id: "readme",
    category: "plataforma",
    title: "README",
    subtitle: "Stack · Arquitetura · Demo",
    description:
      "Documentação técnica completa: Next.js 16, TypeScript 5, Supabase, Playwright. Instruções de instalação local, links de demo com 1 clique e visão geral da arquitetura.",
    badge: "Open Source",
    badgeVariant: "green",
    href: "https://github.com/DGuedz/shc_cwb",
    external: true,
  },
];

// ——————————————————————————————————————————————————————
// Componentes auxiliares
// ——————————————————————————————————————————————————————

function Badge({ label, variant = "neutral" }: { label: string; variant?: "green" | "neutral" | "blue" }) {
  const styles = {
    green: "text-[#10B981] border-[#10B981]/30 bg-[#10B981]/5",
    neutral: "text-neutral-400 border-[#393939] bg-[#0E0E0E]",
    blue: "text-blue-400 border-blue-800/40 bg-blue-950/20",
  };
  return (
    <span className={`font-mono text-[8px] uppercase tracking-widest border px-2 py-0.5 ${styles[variant]}`}>
      {label}
    </span>
  );
}

function DocCardComponent({ doc }: { doc: DocCard }) {
  const Tag = doc.external ? "a" : "div";
  const props = doc.external
    ? { href: doc.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...props}
      className="group flex flex-col gap-4 border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#393939] hover:bg-[#0E0E0E] transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <p className="font-archivo text-sm font-bold uppercase tracking-tight text-white group-hover:text-[#10B981] transition-colors">
            {doc.title}
          </p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">
            {doc.subtitle}
          </p>
        </div>
        {doc.badge && <Badge label={doc.badge} variant={doc.badgeVariant} />}
      </div>

      <p className="font-mono text-[10px] text-neutral-500 leading-relaxed flex-grow">
        {doc.description}
      </p>

      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-neutral-700 group-hover:text-[#10B981] transition-colors">
        <span>Ver documento</span>
        <span aria-hidden>→</span>
      </div>
    </Tag>
  );
}

// ——————————————————————————————————————————————————————
// Page
// ——————————————————————————————————————————————————————

export default async function DocumentosPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto w-full">

        {/* HERO */}
        <header className="mb-16 border-b border-[#1A1A1A] pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_DOCS</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">Documentos Públicos</span>
          </div>
          <h1 className="font-archivo text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            DOCUMENTAÇÃO
            <span className="block text-[#10B981]">INSTITUCIONAL</span>
          </h1>
          <p className="font-mono text-xs text-neutral-500 max-w-2xl border-l border-[#10B981] pl-4 leading-relaxed">
            Documentos fundacionais, estatuto social, licenças e roadmap da Street Hub Connect — associação de direito privado sem fins econômicos, filha da ASTEPAM, com sede em Curitiba, Paraná.
          </p>
        </header>

        {/* SEÇÕES */}
        <div className="flex flex-col gap-16">
          {sections.map((section) => {
            const sectionDocs = docs.filter((d) => d.category === section.id);
            if (sectionDocs.length === 0) return null;

            return (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                {/* Cabeçalho da seção */}
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="font-archivo text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                    {section.label}
                  </h2>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-700">
                    {sectionDocs.length} {sectionDocs.length === 1 ? "documento" : "documentos"}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-neutral-600 mb-6 max-w-2xl">
                  {section.description}
                </p>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
                  {sectionDocs.map((doc) => (
                    <DocCardComponent key={doc.id} doc={doc} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* AVISO LEGAL */}
        <aside className="mt-16 border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] text-[#10B981] uppercase tracking-widest">Aviso Legal</span>
            <p className="font-mono text-[10px] text-neutral-600 leading-relaxed max-w-3xl">
              Os documentos aqui listados são de caráter público e informativo. O estatuto social e o memorial fundacional são documentos em processo de registro legal — CNPJ em obtenção. Para questões jurídicas ou comerciais, entre em contato pela página de{" "}
              <a href="/waitlist" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-2">
                associação
              </a>
              . O código da plataforma é disponibilizado sob licença MIT. O conteúdo institucional é protegido sob CC BY-NC-ND 4.0 — uso comercial por terceiros é vedado sem autorização expressa da diretoria.
            </p>
          </div>
        </aside>

      </main>

      <Footer />
    </div>
  );
}
