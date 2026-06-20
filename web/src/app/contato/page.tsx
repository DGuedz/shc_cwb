import { Footer } from "@/components/layout/Footer";
import { DashboardNav } from "@/components/ui/DashboardNav";
import { GlassCTA } from "@/components/ui/GlassCTA";
import { getSessionUser } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Street Hub Connect — dúvidas sobre associação, parcerias via renúncia fiscal, imprensa e proteção de dados.",
};

const canais = [
  {
    id: "01",
    label: "Associação — Artistas",
    description:
      "Quer fazer parte do catálogo? Inscreva-se na waitlist. Sua candidatura passa pela curadoria e você recebe retorno em até 5 dias úteis.",
    cta: "Entrar na waitlist",
    href: "/waitlist",
    external: false,
  },
  {
    id: "02",
    label: "Parcerias — Empresas",
    description:
      "Sua empresa quer patrocinar shows via renúncia fiscal (Lei 9.249/95)? Inscreva-se como contratante e nossa equipe entra em contato com a carta-proposta completa.",
    cta: "Cadastro de empresas",
    href: "/onboarding/empresa",
    external: false,
  },
  {
    id: "03",
    label: "Imprensa e Institucional",
    description:
      "Jornalistas, pesquisadores e parceiros institucionais: acesse os documentos públicos da associação. Para entrevistas ou parcerias acadêmicas, use o formulário abaixo.",
    cta: "Ver documentação",
    href: "/documentos",
    external: false,
  },
  {
    id: "04",
    label: "Proteção de Dados — DPO",
    description:
      "Exercício de direitos LGPD (acesso, correção, exclusão), notificação de incidentes ou dúvidas sobre a Política de Privacidade. Resposta em até 15 dias úteis.",
    cta: "Ver política de privacidade",
    href: "/privacidade",
    external: false,
  },
  {
    id: "05",
    label: "GitHub — Plataforma",
    description:
      "A plataforma Street Hub Connect é open source (MIT). Reporte bugs, sugira melhorias ou contribua diretamente no repositório público.",
    cta: "Abrir no GitHub",
    href: "https://github.com/DGuedz/shc_cwb",
    external: true,
  },
];

const redes = [
  { label: "Instagram", handle: "@dguedz", href: "https://instagram.com/dguedz" },
  { label: "X / Twitter", handle: "@dg_doublegreen", href: "https://x.com/dg_doublegreen" },
  { label: "YouTube", handle: "Canal DGuedz", href: "https://youtube.com/@dguedz" },
  { label: "GitHub", handle: "DGuedz/shc_cwb", href: "https://github.com/DGuedz/shc_cwb" },
];

export default async function ContatoPage() {
  const session = await getSessionUser();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <DashboardNav session={session} />

      <main className="flex-grow pt-24 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto w-full">

        {/* HERO */}
        <header className="mb-14 border-b border-[#1A1A1A] pb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_CONTATO</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">Curitiba · PR · Brasil</span>
          </div>
          <h1 className="font-archivo text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            FALE COM
            <span className="block text-[#10B981]">A ASSOCIAÇÃO</span>
          </h1>
          <p className="font-mono text-xs text-neutral-500 max-w-xl border-l border-[#10B981] pl-4 leading-relaxed">
            Escolha o canal correto para sua demanda. Somos uma associação pequena e respondemos com mais agilidade quando o assunto está no canal certo.
          </p>
        </header>

        {/* CANAIS */}
        <section className="mb-16">
          <h2 className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-6 border-b border-[#111111] pb-3">
            Canais de contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
            {canais.map((canal) => (
              <div
                key={canal.id}
                className="flex flex-col gap-4 bg-[#0A0A0A] p-6 hover:bg-[#0E0E0E] transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[9px] text-[#10B981] tracking-widest">[{canal.id}]</span>
                  <h3 className="font-archivo text-sm font-bold uppercase tracking-tight text-white">{canal.label}</h3>
                </div>
                <p className="font-mono text-[10px] text-neutral-500 leading-relaxed flex-grow">
                  {canal.description}
                </p>
                <GlassCTA
                  href={canal.href}
                  variant="secondary"
                  {...(canal.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {canal.cta}
                </GlassCTA>
              </div>
            ))}
          </div>
        </section>

        {/* REDES SOCIAIS */}
        <section className="mb-16">
          <h2 className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-6 border-b border-[#111111] pb-3">
            Redes sociais — DGuedz / Fundador
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
            {redes.map((rede) => (
              <a
                key={rede.href}
                href={rede.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 bg-[#0A0A0A] p-5 hover:bg-[#0E0E0E] hover:border-[#393939] transition-colors group"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">{rede.label}</span>
                <span className="font-archivo text-sm font-bold text-white group-hover:text-[#10B981] transition-colors">
                  {rede.handle}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* IDENTIDADE */}
        <section className="border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">Associação</span>
              <p className="font-archivo text-sm font-bold uppercase tracking-tight text-white leading-snug">
                Street Hub Connect
              </p>
              <div className="font-mono text-[10px] text-neutral-500 leading-relaxed flex flex-col gap-1">
                <span>Associação de Curadoria, Booking e Governança para a Economia Criativa</span>
                <span>Filha da ASTEPAM — ICT Mãe</span>
                <span>Sede: Curitiba, Paraná — Brasil</span>
                <span>CNPJ: em registro</span>
                <span>Fundação: 20 de junho de 2026</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">Documentos legais</span>
              <div className="flex flex-col gap-2 font-mono text-[10px]">
                <a href="/documentos" className="text-neutral-500 hover:text-white transition-colors">→ Documentação institucional</a>
                <a href="/privacidade" className="text-neutral-500 hover:text-white transition-colors">→ Política de Privacidade (LGPD)</a>
                <a href="/termos" className="text-neutral-500 hover:text-white transition-colors">→ Termos de Uso</a>
                <a href="/documentos#estatuto" className="text-neutral-500 hover:text-white transition-colors">→ Estatuto Social</a>
                <a href="/documentos#licencas" className="text-neutral-500 hover:text-white transition-colors">→ Licenças MIT e CC</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
