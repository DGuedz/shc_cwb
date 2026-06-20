'use client';

import { DashboardNav } from "@/components/ui/DashboardNav";
import { ScrollRevealTitle } from "@/components/ui/ScrollRevealTitle";
import { GlassCTA } from "@/components/ui/GlassCTA";

export default function QuemSomos() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <DashboardNav />

      <main className="flex-grow pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">

        {/* HERO */}
        <header className="mb-16 md:mb-24 border-b border-[#393939] pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_001</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">Manifesto</span>
          </div>
          <div className="font-archivo text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl mb-8">
            <ScrollRevealTitle as="div" metallic progressRange={[0, 0.5]}>
              A ASSOCIAÇÃO
            </ScrollRevealTitle>
            <ScrollRevealTitle as="div" className="text-[#10B981]" progressRange={[0.1, 0.6]}>
              QUE FAZ A RODA GIRAR
            </ScrollRevealTitle>
          </div>
          <p className="font-mono text-sm text-neutral-400 max-w-2xl border-l border-[#10B981] pl-4 leading-relaxed">
            Street Hub Connect é uma associação de artistas e empresas que opera no cruzamento entre tecnologia, curadoria humana e economia criativa. Nascemos do underground. Construímos para todos.
          </p>
        </header>

        {/* QUATRO PILARES */}
        <section className="mb-20">
          <ScrollRevealTitle as="h2" metallic className="font-archivo text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            NOSSOS PILARES
          </ScrollRevealTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#393939] border border-[#393939]">
            {[
              { n: "01", title: "CURADORIA HUMANA", body: "Todo artista no catálogo passa por validação real — não é só algoritmo. A associação garante que só entram quem tem comprometimento, histórico e potencial." },
              { n: "02", title: "TECNOLOGIA COMO MOAT", body: "Nosso sistema de XP, matchmaking e acordos inteligentes coloca a tecnologia a serviço dos artistas independentes — não das grandes plataformas." },
              { n: "03", title: "ECONOMIA JUSTA", body: "Cachê com peso real. Quanto mais ativo e presente nas decisões da associação, maior o multiplicador do artista. Atividade gera valor tangível." },
              { n: "04", title: "DOIS LADOS, UM PROTOCOLO", body: "Artistas e empresas entram pelo mesmo sistema. Cada lado tem ferramentas específicas. O match acontece de forma transparente — sem intermediários fantasmas." },
            ].map((p) => (
              <div key={p.n} className="bg-[#0E0E0E] p-8 flex flex-col gap-4">
                <span className="font-mono text-[9px] text-[#10B981] tracking-widest">[{p.n}]</span>
                <ScrollRevealTitle as="h3" className="font-archivo text-xl font-bold uppercase tracking-tight text-white">
                  {p.title}
                </ScrollRevealTitle>
                <p className="font-mono text-xs text-neutral-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="mb-20 bg-[#0E0E0E] border border-[#393939] p-8 md:p-12">
          <ScrollRevealTitle as="h2" metallic className="font-archivo text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            ASSOCIAÇÃO EM NÚMEROS
          </ScrollRevealTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#393939] border border-[#393939]">
            {[
              { val: "3+", label: "Cidades ativas" },
              { val: "50+", label: "Artistas na fila" },
              { val: "12+", label: "Empresas parceiras" },
              { val: "2026", label: "Ano de fundação" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0E0E0E] p-6 flex flex-col gap-2">
                <span className="font-archivo text-3xl md:text-4xl font-bold text-[#10B981]">{s.val}</span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* EQUIPE FUNDADORA */}
        <section className="mb-20">
          <ScrollRevealTitle as="h2" metallic className="font-archivo text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            TIME FUNDADOR
          </ScrollRevealTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: "DG", name: "Double Green", role: "Founder & CEO", bio: "Produtor, empreendedor criativo e arquiteto do protocolo SHC. Ativo na cena underground há mais de 10 anos." },
              { initials: "??", name: "Em Breve", role: "CTO", bio: "Responsável pela stack técnica — sistema de XP, matchmaking e infraestrutura da associação." },
              { initials: "??", name: "Em Breve", role: "Head de Curadoria", bio: "Avalia e valida cada artista no catálogo. Garante a qualidade e diversidade da rede." },
            ].map((m) => (
              <div key={m.name} className="border border-[#393939] bg-[#0E0E0E] p-6 flex flex-col gap-4">
                <div className="w-10 h-10 border border-[#393939] bg-[#131313] flex items-center justify-center font-mono text-xs text-[#10B981]">
                  {m.initials}
                </div>
                <div>
                  <p className="font-archivo text-sm font-bold uppercase tracking-tight text-white">{m.name}</p>
                  <p className="font-mono text-[9px] text-[#10B981] tracking-widest uppercase mt-1">{m.role}</p>
                </div>
                <p className="font-mono text-[10px] text-neutral-500 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border border-[#393939] bg-[#0E0E0E] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <ScrollRevealTitle as="h2" metallic className="font-archivo text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
              FAÇA PARTE DA ASSOCIAÇÃO
            </ScrollRevealTitle>
            <p className="font-mono text-xs text-neutral-400">Artistas e empresas. Dois caminhos. Um protocolo.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <GlassCTA href="/sign-in" variant="primary">CADASTRO DE ARTISTAS</GlassCTA>
            <GlassCTA href="/onboarding/empresa" variant="secondary">CADASTRO DE EMPRESAS</GlassCTA>
          </div>
        </section>

      </main>
    </div>
  );
}
