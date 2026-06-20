import { Footer } from "@/components/layout/Footer";
import { DashboardNav } from "@/components/ui/DashboardNav";
import { getSessionUser } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Street Hub Connect coleta, usa e protege os dados pessoais dos associados e usuários da plataforma, em conformidade com a LGPD.",
};

const sections = [
  {
    id: "01",
    title: "QUEM SOMOS",
    content: `A Street Hub Connect — Associação de Curadoria, Booking e Governança para a Economia Criativa é uma associação civil de direito privado, sem fins econômicos, com sede em Curitiba, Paraná, filha da ASTEPAM — Associação Tecnológica e de Desenvolvimento Agromineral Gestora de Fundo Patrimonial.

Para fins desta Política, a Street Hub Connect atua como Controladora dos dados pessoais coletados na plataforma em shc-cwb.vercel.app e serviços associados.`,
  },
  {
    id: "02",
    title: "BASE LEGAL",
    content: `Esta Política está fundamentada na Lei Federal nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD) e observa os seguintes princípios: finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização.

Os tratamentos de dados realizados pela SHC têm por bases legais: consentimento do titular (art. 7, I), execução de contrato ou procedimentos preliminares (art. 7, V), cumprimento de obrigação legal (art. 7, II) e legítimo interesse da associação (art. 7, IX), conforme aplicável a cada finalidade descrita nesta Política.`,
  },
  {
    id: "03",
    title: "DADOS COLETADOS",
    content: `A SHC coleta apenas os dados necessários para a prestação dos serviços e cumprimento dos objetivos institucionais:

Dados de identificação: nome artístico ou razão social, e-mail, cidade, estado.

Dados profissionais (artistas): gênero musical, faixa de cachê, histórico de shows, press kit, links de redes sociais, ISRC de gravações.

Dados profissionais (contratantes): CNPJ, nome do responsável, tipo de evento, orçamento.

Dados de uso da plataforma: páginas visitadas, ações realizadas (login, criação de oportunidades, acordos), timestamps.

Dados técnicos: endereço IP, tipo de navegador, sistema operacional, cookies de sessão.

Dados sensíveis: a SHC não coleta dados sensíveis (origem racial, saúde, biometria, etc.) sem consentimento específico e expresso.`,
  },
  {
    id: "04",
    title: "FINALIDADES DO TRATAMENTO",
    content: `Os dados coletados são utilizados exclusivamente para:

— Operar a plataforma e seus módulos (catálogo, matchboard, acordos, dossiê);
— Autenticar usuários e manter sessões seguras;
— Enviar comunicações relacionadas à associação (eventos, atualizações, oportunidades);
— Emitir ISRCs e registrar obras fonográficas dos artistas associados;
— Cumprir obrigações legais e estatutárias da associação;
— Gerar relatórios anônimos de impacto cultural (NBC T 15) para empresas parceiras;
— Melhorar a plataforma com base em dados de uso agregados e anonimizados.

Os dados não são utilizados para publicidade de terceiros, perfilagem comportamental não relacionada à plataforma, nem são vendidos ou cedidos a terceiros.`,
  },
  {
    id: "05",
    title: "COMPARTILHAMENTO DE DADOS",
    content: `A SHC compartilha dados apenas nas situações necessárias e com as salvaguardas adequadas:

Supabase (Auth + banco de dados): provedor de infraestrutura que processa dados conforme DPA (Data Processing Agreement) e boas práticas de segurança internacionais.

Vercel (hospedagem): processa dados de tráfego e sessão conforme sua política de privacidade.

ABPD/IFPI (ISRC Registry): dados mínimos de identificação do artista e da obra para emissão de códigos ISRC, conforme regulamentação internacional.

ECAD: dados de obra e titularidade para gestão de direitos autorais, quando autorizado pelo associado.

Autoridades públicas: quando exigido por lei, ordem judicial ou norma regulatória.

Nenhum dado é compartilhado com empresas de publicidade, data brokers ou plataformas de marketing.`,
  },
  {
    id: "06",
    title: "RETENÇÃO E EXCLUSÃO",
    content: `Os dados são mantidos pelo tempo necessário para as finalidades declaradas:

Dados de conta ativa: mantidos enquanto o associado estiver ativo na plataforma.

Dados de ex-associados: mantidos por até 5 (cinco) anos após o encerramento da associação, para cumprimento de obrigações legais e contábeis.

Dados de uso e logs: mantidos por até 12 (doze) meses, após o que são anonimizados ou excluídos.

ISRCs e registros fonográficos: mantidos por prazo indeterminado, pois constituem registro de obra de interesse público.

O titular pode solicitar a exclusão de seus dados a qualquer tempo, observados os prazos legais de retenção obrigatória.`,
  },
  {
    id: "07",
    title: "DIREITOS DO TITULAR",
    content: `Nos termos da LGPD (art. 18), o titular dos dados tem direito a:

— Confirmação da existência de tratamento;
— Acesso aos dados;
— Correção de dados incompletos, inexatos ou desatualizados;
— Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;
— Portabilidade dos dados a outro fornecedor de serviço;
— Eliminação dos dados tratados com base no consentimento;
— Informação sobre entidades com as quais os dados foram compartilhados;
— Revogação do consentimento.

Para exercer esses direitos, entre em contato pelo canal indicado na seção Contato desta Política.`,
  },
  {
    id: "08",
    title: "SEGURANÇA",
    content: `A SHC adota medidas técnicas e organizacionais para proteger os dados pessoais:

— Autenticação segura via Supabase Auth com tokens JWT;
— Comunicação criptografada (HTTPS/TLS) em toda a plataforma;
— Dados sensíveis de obras não publicadas mantidos off-chain;
— Apenas hashes e identificadores públicos ancorados em blockchain;
— Controle de acesso por papel (artista/contratante/visitante) com validação server-side;
— Escape de dados em JSON-LD para prevenção de XSS;
— Monitoramento de acessos suspeitos e revisão periódica de permissões.

Nenhum sistema é 100% seguro. Em caso de incidente relevante, os titulares afetados serão notificados nos prazos previstos pela LGPD.`,
  },
  {
    id: "09",
    title: "COOKIES",
    content: `A plataforma SHC utiliza cookies para:

Cookies estritamente necessários: manutenção de sessão autenticada (shc-demo-role, shc-demo-user, shc-demo-email) — não podem ser desabilitados sem comprometer o funcionamento.

Cookies de desempenho: dados anônimos de uso da plataforma para melhoria contínua — podem ser desabilitados via configurações do navegador.

A SHC não utiliza cookies de rastreamento entre sites, pixels de publicidade ou tecnologias similares de perfilagem.`,
  },
  {
    id: "10",
    title: "ENCARREGADO DE DADOS (DPO)",
    content: `O Encarregado de Proteção de Dados (DPO) da Street Hub Connect pode ser contatado pelo canal de contato institucional da associação em /contato.

Dúvidas, solicitações de exercício de direitos e notificações de incidentes devem ser enviadas com identificação do titular e descrição clara da solicitação.

A SHC responderá às solicitações no prazo de até 15 (quinze) dias úteis.`,
  },
  {
    id: "11",
    title: "ALTERAÇÕES DESTA POLÍTICA",
    content: `Esta Política pode ser atualizada periodicamente para refletir mudanças na plataforma, na legislação ou nas práticas da associação. A data da última atualização é indicada no rodapé deste documento.

Alterações relevantes serão comunicadas aos associados por e-mail ou aviso na plataforma com antecedência mínima de 15 (quinze) dias.

O uso continuado da plataforma após a notificação de alterações implica concordância com os novos termos.`,
  },
];

export default async function PrivacidadePage() {
  const session = await getSessionUser();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <DashboardNav session={session} />

      <main className="flex-grow pt-24 pb-20 px-4 md:px-8 max-w-[900px] mx-auto w-full">

        {/* HERO */}
        <header className="mb-12 border-b border-[#1A1A1A] pb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[9px] text-[#10B981] tracking-[0.4em] uppercase">SHC_LEGAL</span>
            <span className="w-8 h-px bg-[#393939]" />
            <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">LGPD · Lei 13.709/2018</span>
          </div>
          <h1 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-5">
            POLÍTICA DE
            <span className="block text-[#10B981]">PRIVACIDADE</span>
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
            <a href="/termos" className="text-neutral-600 hover:text-white transition-colors">Termos de Uso</a>
            <a href="/contato" className="text-neutral-600 hover:text-white transition-colors">Contato / DPO</a>
            <a href="/documentos" className="text-neutral-600 hover:text-white transition-colors">Documentação</a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
