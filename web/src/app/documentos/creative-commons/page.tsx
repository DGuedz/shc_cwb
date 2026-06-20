import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia Creative Commons",
  description:
    "Como a Street Hub Connect aplica a licença CC BY-NC-ND 4.0 para proteger conteúdo, metodologia e identidade da associação — e como artistas podem usar o Creative Commons.",
};

const sections = [
  {
    id: "01",
    title: "O QUE É O CREATIVE COMMONS",
    body: `Creative Commons é um sistema de licenças públicas que permite ao criador definir exatamente o que os outros podem e não podem fazer com sua obra — sem precisar de advogado, sem burocracia, sem intermediário.

Criado em 2001 nos EUA e adotado globalmente, o CC é hoje o padrão de referência para licenciamento de conteúdo aberto na internet: Wikipedia, Flickr, Khan Academy, Internet Archive e milhares de outros projetos operam sob licenças Creative Commons.

Para artistas independentes, o CC resolve um problema real: como compartilhar sua obra com o mundo sem perder o controle sobre ela?`,
  },
  {
    id: "02",
    title: "AS 4 CONDIÇÕES BASE",
    body: `Toda licença Creative Commons combina quatro condições possíveis:

BY — Atribuição
O uso exige crédito ao criador original. É a condição obrigatória de todas as licenças CC. Você não pode usar sem citar a origem.

NC — Não Comercial (NonCommercial)
O material não pode ser usado para fins comerciais sem autorização. Uma empresa não pode usar sua música em publicidade sem negociar com você.

ND — Sem Derivativos (NoDerivatives)
Ninguém pode remixar, adaptar ou transformar o material sem permissão. Sua obra circula como foi criada.

SA — Compartilha Igual (ShareAlike)
Obras derivadas devem ser distribuídas sob a mesma licença. Variante de SA e ND são mutuamente exclusivas.`,
  },
  {
    id: "03",
    title: "A LICENÇA DA STREET HUB CONNECT",
    body: `A SHC adota a licença CC BY-NC-ND 4.0 para todo o conteúdo institucional:

— Conteúdo, identidade visual e marca SHC
— Metodologia curatorial e documentos fundacionais
— Artigos, guias e publicações da associação

O que isso significa na prática:

PERMITIDO: compartilhar, citar e referenciar o conteúdo da SHC em qualquer meio, desde que com atribuição correta.

PROIBIDO SEM AUTORIZAÇÃO: usar o conteúdo para fins comerciais (anúncios, produtos, serviços pagos), adaptar ou transformar o material para redistribuição.

EXCEÇÃO PARA ASSOCIADOS: artistas e contratantes formalmente associados têm direito de uso do conteúdo institucional para apresentação profissional e captação de oportunidades, conforme o Estatuto Social.`,
  },
  {
    id: "04",
    title: "COMO O CÓDIGO É DIFERENTE DO CONTEÚDO",
    body: `A SHC opera com dupla licença — e a distinção importa:

CÓDIGO-FONTE DA PLATAFORMA → MIT License
Qualquer pessoa pode usar, copiar, modificar, distribuir e até vender o código — desde que mantenha o aviso de copyright. Desenvolvedores que quiserem construir sobre a plataforma SHC podem fazer isso livremente.

CONTEÚDO INSTITUCIONAL → CC BY-NC-ND 4.0
O conteúdo, a identidade visual, os documentos e a metodologia da associação pertencem coletivamente aos associados e não podem ser explorados comercialmente por terceiros.

Essa separação é deliberada: queremos que a tecnologia seja o mais aberta possível, enquanto protegemos a identidade e o patrimônio intelectual da comunidade de artistas.`,
  },
  {
    id: "05",
    title: "COMO ARTISTAS PODEM USAR O CREATIVE COMMONS",
    body: `Qualquer artista pode licenciar suas obras sob Creative Commons em creativecommons.org — é gratuito, imediato e internacionalmente reconhecido.

Escolha a licença certa para o seu objetivo:

CC BY → Máxima abertura. Qualquer uso, inclusive comercial, desde que com atribuição. Ideal para obras que você quer que circulem amplamente.

CC BY-NC → Compartilhamento livre, mas veda uso comercial sem sua autorização. Ideal para proteger sua obra de exploração por terceiros.

CC BY-NC-ND → Circulação com crédito, sem uso comercial e sem derivativos. Sua obra chega ao mundo exatamente como você criou, sem remixes não autorizados.

CC BY-SA → Compartilhamento livre com a condição de que derivativos usem a mesma licença. Popular em projetos colaborativos de cultura livre.

O que o Creative Commons NÃO faz: não substitui o ISRC para gravações, não registra sua obra nos órgãos de direito autoral brasileiro (ECAD, Escritório de Direitos Autorais), e não garante que ninguém vai violar a licença. Mas estabelece um padrão público e verificável de como você autoriza o uso da sua obra.`,
  },
  {
    id: "06",
    title: "CC + ISRC: A DUPLA CAMADA DE PROTEÇÃO",
    body: `Para artistas que querem proteção máxima sobre suas gravações, a combinação ideal é:

ISRC → Identifica a gravação de forma única no ecossistema internacional de streaming, rádio e gestão de direitos. É o "RG" da sua música. A SHC auxilia associados a obter código de registrador próprio, eliminando dependência de distribuidoras.

CC → Define como outros podem usar e compartilhar sua obra. Complementa o ISRC com uma declaração pública de intenção sobre seus direitos.

Juntos, ISRC + CC criam uma trilha verificável: qualquer pessoa pode saber quem é o titular da gravação (ISRC) e o que está autorizado a fazer com ela (CC). Isso não é burocracia — é soberania sobre o próprio catálogo.`,
  },
  {
    id: "07",
    title: "COMO CITAR A SHC CORRETAMENTE",
    body: `Ao compartilhar conteúdo da Street Hub Connect, use o texto de atribuição oficial:

"Street Hub Connect — Plataforma de Curadoria, Booking e Governança para a Economia Criativa © 2026 por DGuedz / ASTEPAM está licenciado sob CC BY-NC-ND 4.0"

Para web, inclua o link: https://creativecommons.org/licenses/by-nc-nd/4.0/

O texto completo do registro de licença está disponível em /documentos.`,
  },
];

export default async function CreativeCommonsPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-20 px-4 md:px-8 max-w-[900px] mx-auto w-full">

        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-neutral-700 mb-10">
          <Link href="/documentos" className="hover:text-neutral-400 transition-colors">Documentos</Link>
          <span>/</span>
          <span className="text-neutral-600">Creative Commons</span>
        </nav>

        {/* HERO */}
        <header className="mb-12 border-b border-[#1A1A1A] pb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_DOCS</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">CC BY-NC-ND 4.0</span>
          </div>
          <h1 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-5">
            GUIA
            <span className="block text-[#10B981]">CREATIVE COMMONS</span>
          </h1>
          <p className="font-mono text-[10px] text-neutral-500 leading-relaxed border-l border-[#393939] pl-4 max-w-xl">
            Como a SHC protege seu conteúdo — e como artistas podem usar o Creative Commons para proteger suas obras.
          </p>

          {/* BADGES CC */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["BY", "NC", "ND"].map((badge) => (
              <span
                key={badge}
                className="font-mono text-[9px] uppercase tracking-widest border border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981] px-3 py-1"
              >
                {badge}
              </span>
            ))}
            <span className="font-mono text-[9px] uppercase tracking-widest border border-[#393939] text-neutral-500 px-3 py-1">
              4.0 Internacional
            </span>
          </div>
        </header>

        {/* SEÇÕES */}
        <div className="flex flex-col gap-0 divide-y divide-[#111111]">
          {sections.map((s) => (
            <section key={s.id} className="py-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-[9px] text-[#10B981] tracking-widest">[{s.id}]</span>
                <h2 className="font-archivo text-base font-bold uppercase tracking-tight text-white">{s.title}</h2>
              </div>
              <div className="font-mono text-[11px] text-neutral-500 leading-relaxed whitespace-pre-line pl-8">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        {/* REGISTRO OFICIAL */}
        <div className="mt-12 border border-[#1A1A1A] bg-[#0A0A0A] p-6 md:p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] text-[#10B981] uppercase tracking-widest">[Licença Oficial]</span>
          </div>
          <p className="font-mono text-[10px] text-neutral-400 leading-relaxed">
            Street Hub Connect © 2026 por DGuedz / ASTEPAM está licenciado sob{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:underline"
            >
              CC BY-NC-ND 4.0
            </a>
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-[9px] uppercase tracking-widest mt-2">
            <Link href="/documentos#licencas" className="text-neutral-600 hover:text-white transition-colors">
              Registro completo →
            </Link>
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-white transition-colors"
            >
              Texto legal CC →
            </a>
            <Link href="/documentos" className="text-neutral-600 hover:text-white transition-colors">
              Todos os documentos →
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
