import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e condições de uso da plataforma Street Hub Connect para artistas, contratantes e visitantes.",
};

const sections = [
  {
    id: "01",
    title: "ACEITAÇÃO DOS TERMOS",
    content: `Ao acessar ou utilizar a plataforma Street Hub Connect (shc-cwb.vercel.app), você concorda com estes Termos de Uso. Se não concordar com qualquer disposição, não utilize a plataforma.

Estes Termos constituem um acordo legal entre você (usuário) e a Street Hub Connect — Associação de Curadoria, Booking e Governança para a Economia Criativa, associação civil sem fins econômicos com sede em Curitiba, Paraná, filha da ASTEPAM.

Os menores de 18 anos devem obter consentimento de seus responsáveis legais antes de utilizar a plataforma.`,
  },
  {
    id: "02",
    title: "DESCRIÇÃO DA PLATAFORMA",
    content: `A Street Hub Connect é uma plataforma digital que conecta artistas independentes a contratantes (empresas, marcas, produtoras e organizadores de eventos) por meio de curadoria humana, booking e governança digital.

A plataforma oferece:

— Para artistas: dossiê profissional digital, emissão de ISRC, histórico de acordos e visibilidade no catálogo público;
— Para contratantes: matchboard curado, criação de oportunidades com briefing e avaliação de artistas;
— Para visitantes: catálogo público indexável com perfis de artistas independentes.

A SHC não é uma gravadora, distribuidora, agência de talentos ou plataforma de streaming. É uma associação que provê infraestrutura institucional e tecnológica para a economia criativa.`,
  },
  {
    id: "03",
    title: "CADASTRO E CONTA",
    content: `O acesso completo à plataforma exige cadastro como associado. Para se cadastrar:

— Você deve fornecer informações verdadeiras, precisas e atualizadas;
— Artistas passam por aprovação do Comitê de Curadoria antes de ingressar no catálogo;
— Contratantes devem ser pessoas jurídicas regularmente constituídas;
— Cada pessoa física ou jurídica pode manter apenas uma conta ativa.

Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta. Notifique imediatamente a SHC em caso de uso não autorizado.

A SHC reserva-se o direito de suspender ou excluir contas que violem estes Termos, o Estatuto Social ou o Código de Conduta da associação.`,
  },
  {
    id: "04",
    title: "CONTEÚDO DO USUÁRIO",
    content: `Ao publicar conteúdo na plataforma (textos, imagens, links, informações de perfil), você declara que:

— É titular ou possui as autorizações necessárias sobre o conteúdo publicado;
— O conteúdo não viola direitos de terceiros, leis aplicáveis ou as normas da associação;
— Autoriza a SHC a exibir, indexar e promover o conteúdo nos contextos previstos na plataforma.

A SHC não reivindica propriedade sobre o conteúdo dos usuários. Você mantém todos os direitos sobre suas obras, gravações e informações.

Conteúdo falso, enganoso, ofensivo, ilegal ou que viole direitos de terceiros será removido e pode resultar em suspensão ou exclusão da conta.`,
  },
  {
    id: "05",
    title: "ISRC E REGISTROS FONOGRÁFICOS",
    content: `A SHC oferece serviço de emissão de International Standard Recording Codes (ISRCs) para artistas associados habilitados. Ao solicitar um ISRC, você declara que:

— É o titular ou co-titular dos direitos da gravação para a qual solicita o código;
— As informações fornecidas sobre a obra são verdadeiras e completas;
— Autoriza a SHC a registrar o ISRC junto à ABPD/IFPI em seu nome.

ISRCs emitidos são permanentes e imutáveis. Erros em dados de registro devem ser comunicados imediatamente para correção junto aos órgãos competentes.

A SHC não se responsabiliza por ISRCs duplicados ou incorretos decorrentes de informações falsas fornecidas pelo solicitante.`,
  },
  {
    id: "06",
    title: "ACORDOS E BOOKING",
    content: `A SHC facilita a comunicação e o registro de acordos entre artistas e contratantes, mas não é parte nos contratos firmados entre eles.

Os acordos registrados na plataforma têm valor de documento entre as partes, mas não substituem contratos formais quando exigidos por lei ou pelas partes.

A SHC não garante: a realização efetiva dos shows acordados, o pagamento dos cachês, a qualidade dos serviços prestados ou qualquer resultado comercial decorrente dos acordos.

Disputas entre artistas e contratantes devem ser resolvidas diretamente entre as partes ou, se necessário, pelo Conselho de Profissionais Fonográficos da associação e, em última instância, pelo Poder Judiciário.`,
  },
  {
    id: "07",
    title: "RENÚNCIA FISCAL E PARCERIAS",
    content: `As informações sobre incentivos fiscais (Lei 9.249/95, art. 13) disponibilizadas na plataforma têm caráter meramente informativo e não constituem assessoria jurídica ou tributária.

Empresas interessadas em firmar parcerias com renúncia fiscal devem consultar seus advogados e contadores antes de tomar decisões. A SHC não se responsabiliza por interpretações fiscais ou tributárias individuais.

Os relatórios de Valor Adicionado Cultural (NBC T 15) emitidos pela associação seguem as normas contábeis aplicáveis, mas devem ser validados pela contabilidade da empresa parceira.`,
  },
  {
    id: "08",
    title: "PROPRIEDADE INTELECTUAL",
    content: `O código-fonte da plataforma Street Hub Connect é distribuído sob licença MIT — uso, modificação e distribuição são permitidos conforme os termos da licença.

O conteúdo institucional, a identidade visual, a metodologia curatorial, os documentos fundacionais e a marca Street Hub Connect são protegidos sob licença Creative Commons CC BY-NC-ND 4.0. É vedado o uso comercial por terceiros sem autorização expressa da diretoria.

Artistas e contratantes mantêm integralmente seus direitos sobre obras, gravações e conteúdos publicados na plataforma.`,
  },
  {
    id: "09",
    title: "LIMITAÇÃO DE RESPONSABILIDADE",
    content: `A plataforma é fornecida "como está", sem garantias de disponibilidade ininterrupta, ausência de erros ou adequação a finalidades específicas.

A SHC não se responsabiliza por danos indiretos, incidentais ou consequentes decorrentes do uso ou impossibilidade de uso da plataforma, incluindo perda de oportunidades comerciais, dados ou receitas.

A responsabilidade total da SHC em relação ao usuário, em qualquer circunstância, é limitada ao valor pago pelo usuário à associação nos 12 meses anteriores ao evento que originou o dano.

Esta limitação não se aplica em casos de dolo ou culpa grave da associação, nem nos casos em que a legislação brasileira proíba tal limitação.`,
  },
  {
    id: "10",
    title: "MODIFICAÇÕES E ENCERRAMENTO",
    content: `A SHC pode modificar, suspender ou encerrar a plataforma ou qualquer de seus serviços a qualquer tempo, com ou sem aviso prévio, especialmente para manutenções, melhorias ou em razão de circunstâncias fora de seu controle.

Estes Termos podem ser atualizados periodicamente. Alterações relevantes serão comunicadas com antecedência mínima de 15 (quinze) dias. O uso continuado após a notificação implica aceitação dos novos termos.

Em caso de encerramento da associação, os dados dos usuários serão tratados conforme a Política de Privacidade e a legislação aplicável.`,
  },
  {
    id: "11",
    title: "FORO E LEGISLAÇÃO APLICÁVEL",
    content: `Estes Termos são regidos pela legislação brasileira, em especial pelo Código Civil, pelo Código de Defesa do Consumidor (quando aplicável) e pela LGPD.

Fica eleito o foro da Comarca de Curitiba, Estado do Paraná, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro foro, por mais privilegiado que seja.`,
  },
];

export default async function TermosPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-20 px-4 md:px-8 max-w-[900px] mx-auto w-full">

        {/* HERO */}
        <header className="mb-12 border-b border-[#1A1A1A] pb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_LEGAL</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">Código Civil · CC 2002</span>
          </div>
          <h1 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-5">
            TERMOS
            <span className="block text-[#10B981]">DE USO</span>
          </h1>
          <p className="font-mono text-[10px] text-neutral-500 leading-relaxed border-l border-[#393939] pl-4">
            Street Hub Connect — Associação de Curadoria, Booking e Governança para a Economia Criativa<br />
            Última atualização: 20 de junho de 2026
          </p>
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
                {s.content}
              </div>
            </section>
          ))}
        </div>

        {/* RODAPÉ DO DOC */}
        <div className="mt-12 border border-[#1A1A1A] bg-[#0A0A0A] p-6 flex flex-col gap-2">
          <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest">Documento</span>
          <p className="font-mono text-[10px] text-neutral-500">
            Street Hub Connect · Curitiba, Paraná · CNPJ em registro<br />
            Filha da ASTEPAM — Associação sem fins econômicos
          </p>
          <div className="flex gap-4 mt-2 font-mono text-[9px] uppercase tracking-widest">
            <a href="/privacidade" className="text-neutral-600 hover:text-white transition-colors">Privacidade</a>
            <a href="/contato" className="text-neutral-600 hover:text-white transition-colors">Contato</a>
            <a href="/documentos" className="text-neutral-600 hover:text-white transition-colors">Documentação</a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
