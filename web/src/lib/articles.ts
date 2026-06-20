export type ArticleSection = {
  heading?: string;
  body: string;
};

export type Article = {
  slug: string;
  id: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  sections: ArticleSection[];
  cta: { label: string; href: string };
};

export const articles: Article[] = [
  {
    slug: "empresa-pioneira-street-hub-connect",
    id: "003",
    date: "Jun 2026",
    tag: "PARCERIA",
    title: "Como Sua Empresa do Lucro Real Pode Ser Pioneira no Street Hub Connect",
    excerpt:
      "Guia completo para empresas que querem patrocinar shows, reduzir IRPJ e se tornar parceiras fundadoras da associação — via renúncia fiscal legal.",
    author: "DGuedz",
    authorRole: "Rapper, compositor e fundador do Street Hub Connect",
    sections: [
      {
        body: "Existe uma lacuna pouco explorada na legislação tributária brasileira: empresas optantes pelo Lucro Real podem destinar até 2% do lucro operacional para programas sociais e culturais — e abater esse valor diretamente do Imposto de Renda.\n\nO instrumento existe há décadas. A maioria das empresas simplesmente não usa.\n\nO Street Hub Connect foi estruturado exatamente para viabilizar essa ponte: sua empresa apoia a economia criativa, patrocina shows de artistas curadados, recebe um relatório de sustentabilidade cultural verificável — e ainda reduz a carga tributária.",
      },
      {
        heading: "O MECANISMO LEGAL",
        body: "A base jurídica é o Art. 13, § 2º, incisos II e III da Lei Federal nº 9.249/95:\n\n— Até 2% do lucro operacional pode ser destinado a programas sociais de entidades sem fins econômicos;\n— Até 1,5% adicional pode ser destinado a P&D via Instituição de Ciência e Tecnologia (ICT).\n\nA Street Hub Connect se qualifica em ambas as categorias:\n\nComo associação sem fins econômicos registrada nos termos do Código Civil (Art. 53), a SHC recebe doações dedutíveis como programas sociais.\n\nComo ICT nos termos da Lei Federal nº 13.243/16, a SHC pode receber aportes destinados a P&D em tecnologia fonográfica e curadoria de impacto.\n\nIsso significa que empresas com lucro operacional de R$ 1.000.000/mês podem destinar até R$ 20.000/mês para a associação — com dedução direta no IRPJ. Dinheiro que sairia para o imposto passa a financiar cultura, arte e impacto local.",
      },
      {
        heading: "O QUE VOCÊ RECEBE COMO EMPRESA PARCEIRA",
        body: "A parceria com a SHC não é filantropia. É uma troca estruturada:\n\nVISIBILIDADE\nSua marca associada ao catálogo curado de artistas independentes de Curitiba e região. Logo nas comunicações dos shows, nos perfis dos artistas apoiados e nos materiais institucionais da associação.\n\nATESTADO DE SUSTENTABILIDADE CULTURAL\nRelatório NBC T 15 (Valor Adicionado Cultural) emitido pela SHC com os dados de impacto dos shows patrocinados — documento válido para relatórios ESG, certificações e auditorias de responsabilidade social.\n\nACESSO AO MATCHBOARD\nSua empresa tem acesso ao Matchboard da plataforma: catálogo curado de artistas com perfil completo, gênero musical, faixa de cachê, histórico de acordos e avaliações. Você escolhe o artista certo para o evento certo.\n\nHISTÓRICO RASTREÁVEL\nTodos os acordos e patrocínios ficam registrados com data, valor e partes — histórico imutável que integra sua prestação de contas junto à contabilidade e ao fisco.\n\nPIONEIRISMO\nAs primeiras empresas a formalizarem parceria com a SHC são reconhecidas como parceiras fundadoras — com menção permanente nos documentos institucionais da associação.",
      },
      {
        heading: "PASSO A PASSO: COMO FECHAR A PARCERIA",
        body: "01. CADASTRO\nAcesse shc-cwb.vercel.app/onboarding/empresa e preencha o formulário de cadastro como contratante. Dados da empresa, CNPJ, responsável financeiro e tipo de evento de interesse.\n\n02. ANÁLISE DE VIABILIDADE\nNossa equipe recebe seus dados e calcula exatamente quanto sua empresa pode destinar à SHC com base no lucro operacional do último exercício — sem compromisso.\n\n03. CARTA-PROPOSTA\nVocê recebe uma carta-proposta com o enquadramento legal completo (Lei 9.249/95, art. 13), o valor estimado de dedução fiscal e as contrapartidas da parceria. Documento pronto para sua contabilidade e diretoria analisarem.\n\n04. CONVÊNIO DE PARCERIA\nAssinatura do convênio entre sua empresa e a Street Hub Connect, com prazo, valor, contrapartidas e obrigações de ambas as partes. Tudo registrado na plataforma SHC com histórico rastreável.\n\n05. MATCHBOARD\nCom o convênio ativo, você acessa o Matchboard e começa a selecionar artistas para seus eventos. Curadoria nossa, decisão sua.\n\n06. SHOWS E RELATÓRIO\nShows realizados, artistas pagos com histórico de acordo. Ao final do período, você recebe o Atestado de Sustentabilidade Cultural com os dados de impacto para sua contabilidade.",
      },
      {
        heading: "QUANTO ISSO REPRESENTA NA PRÁTICA",
        body: "Exemplo com empresa de lucro operacional de R$ 500.000/mês:\n\nValor disponível para a SHC:\n→ 2% de R$ 500.000 = R$ 10.000/mês\n→ Em 12 meses: R$ 120.000 financiando shows e artistas locais\n\nImpacto tributário:\n→ Sem a SHC: R$ 10.000 vai para o IRPJ\n→ Com a SHC: R$ 10.000 financia cultura, vira dedução e reduz a base de cálculo\n\nEssa diferença não é abstrata. É a diferença entre financiar a Receita Federal ou financiar 8 a 12 shows de artistas independentes por mês em Curitiba e região.",
      },
      {
        heading: "QUEM PODE SER PARCEIRO FUNDADOR",
        body: "Empresas optantes pelo Lucro Real, de qualquer setor, com interesse em:\n\n— Associar a marca a eventos culturais locais;\n— Cumprir obrigações ESG com impacto verificável;\n— Reduzir a carga tributária de forma legal e documentada;\n— Ter acesso a talentos artísticos curadados para eventos corporativos, lançamentos de produto ou ações de marketing.\n\nNão é necessário ter experiência prévia com o setor cultural. A SHC faz a curadoria, organiza o briefing e entrega o artista certo para cada ocasião.",
      },
      {
        body: "O mercado da música independente no Brasil movimenta bilhões. A maioria desse dinheiro passa por intermediários que não conhecem o artista, não curadaram o talento e não têm nenhum interesse no resultado além da margem.\n\nA Street Hub Connect oferece outra rota: sua empresa financia cultura com eficiência fiscal, o artista recebe cachê justo com histórico verificável, e a associação cresce como infraestrutura coletiva da economia criativa brasileira.\n\nAs primeiras vagas de parceria fundadora estão abertas.",
      },
    ],
    cta: { label: "Cadastro de empresas", href: "/onboarding/empresa" },
  },
  {
    slug: "direitos-autorais-digitais",
    id: "001",
    date: "Jun 2026",
    tag: "GOVERNANÇA",
    title: "Como Artistas Independentes Podem Usar o Street Hub Connect para Proteger Seus Direitos Autorais e Digitais",
    excerpt:
      "Identidade verificável, ISRC e rastreabilidade de acordos — o primeiro passo para ser tratado como o profissional que você é.",
    author: "DGuedz",
    authorRole: "Rapper, compositor e fundador do Street Hub Connect",
    sections: [
      {
        body: "Quem vive da música independente no Brasil sabe: o problema raramente é o talento. O problema é a invisibilidade estrutural. Você cria, você grava, você lança — e não tem onde apresentar suas credenciais de forma verificável, não tem contrato acessível, não tem histórico que fale por você quando uma marca ou produtora bate na porta.\n\nO Street Hub Connect nasceu dessa lacuna. E uma das dimensões menos faladas da plataforma é justamente a que mais importa no longo prazo: governança fonográfica.",
      },
      {
        heading: "Identidade digital verificável",
        body: "No SHC, cada artista constrói um dossiê público indexável — com gênero musical, localização, faixa de cachê, press kit e histórico de acordos. Esse perfil é rastreável por mecanismos de busca via JSON-LD e Open Graph, o que significa que sua identidade artística passa a existir de forma formal na internet, não apenas em bios de redes sociais que qualquer um pode copiar ou impersonar.",
      },
      {
        heading: "ISRC e rastreabilidade de obras",
        body: "O ISRC — International Standard Recording Code — é o código que identifica sua gravação de forma única em qualquer plataforma de streaming, rádio ou serviço de gestão de direitos no mundo. Artistas que dependem de distribuidoras para registrar seus ISRCs perdem controle sobre o próprio catálogo. O SHC orienta seus associados sobre como obter um código de registrador próprio, garantindo autonomia total sobre cada obra lançada.",
      },
      {
        heading: "Contratos com rastreabilidade",
        body: "O módulo de Acordos do SHC registra o histórico de negociações entre artistas e contratantes dentro da plataforma. Isso não substitui um contrato jurídico, mas cria um rastro digital do que foi combinado, quando e com quem — dado valioso em qualquer disputa.",
      },
      {
        heading: "Curadoria como proteção",
        body: "Entrar em um ambiente curado não é elitismo — é proteção. Quando tanto artistas quanto contratantes passam por critérios mínimos de completude e verificação, o ecossistema se torna menos propício a golpes, calotes e acordos informais que prejudicam quem cria.",
      },
      {
        body: "A tecnologia sozinha não resolve direitos autorais. Mas uma infraestrutura digital bem construída — com identidade verificável, rastreabilidade de obras e histórico de acordos — é o primeiro passo para que um artista independente seja tratado como o profissional que é.",
      },
    ],
    cta: { label: "Entrar na waitlist", href: "/waitlist" },
  },
  {
    slug: "codigo-aberto-para-a-musica",
    id: "002",
    date: "Jun 2026",
    tag: "OPEN SOURCE",
    title: "Código Aberto Para a Música: O que a Economia Criativa Pode Aprender com o Open Source",
    excerpt:
      "A indústria que mais depende de contribuição coletiva ainda não aprendeu a documentar, creditar e proteger quem contribui.",
    author: "DGuedz",
    authorRole: "Rapper, compositor e fundador do Street Hub Connect",
    sections: [
      {
        body: "Existe uma ironia silenciosa no mercado musical brasileiro: a indústria que mais depende de contribuição coletiva — onde uma beat, um flow, um sample e uma letra se transformam em obra — é também a que menos documenta, credita e protege quem contribui.\n\nO movimento de código aberto resolveu esse problema para o software. Licenças públicas, repositórios auditáveis, histórico de contribuições, revisão por pares. Qualquer pessoa pode ver o que foi construído, por quem e quando.\n\nA música ainda não chegou lá. E não chegará enquanto depender de estruturas que lucram exatamente da opacidade.",
      },
      {
        heading: "Contribuição sem atribuição é exploração",
        body: "No open source, existe uma regra simples: se você usa o trabalho de alguém, você credita. Não como favor — como protocolo. O Creative Commons formalizou isso em licenças que qualquer pessoa pode aplicar sem precisar de advogado.\n\nNa música independente brasileira, a norma ainda é o oposto: samples sem clearance, composições sem contrato, shows pagos em dinheiro vivo sem recibo. O artista entrega, o intermediário fica com a margem, e o histórico some.",
      },
      {
        heading: "O repositório do artista precisa existir",
        body: "Todo desenvolvedor tem um GitHub. Um histórico verificável de o que construiu, quando e com quem. Qualquer recrutador, parceiro ou investidor pode auditar sua trajetória em minutos.\n\nO artista independente não tem equivalente. Tem redes sociais — que são vitrines, não registros. Tem portfólios — que são autodeclaratórios, não verificáveis.\n\nO Street Hub Connect existe para ser esse repositório. Dossiê público com histórico de acordos, perfil indexável, identidade digital que permanece e pode ser auditada por qualquer contratante, marca ou parceiro.",
      },
      {
        heading: "Governança não é burocracia. É proteção.",
        body: "O Creative Commons não proíbe contribuições de IA por capricho — proíbe porque a rastreabilidade da autoria importa. Saber quem criou o quê é a base de qualquer sistema de direitos.\n\nNa música, ISRC é esse protocolo. Cada gravação com código único, rastreável em qualquer plataforma do mundo. Um artista com registro próprio de ISRCs não precisa pedir permissão para saber o que é seu.\n\nIsso não é detalhe técnico. É soberania sobre o próprio catálogo.",
      },
      {
        body: "A internet aberta foi construída por pessoas que decidiram documentar, licenciar e compartilhar o que sabiam. A economia criativa independente precisa da mesma decisão — e das ferramentas que a tornem possível.",
      },
    ],
    cta: { label: "Entrar na waitlist", href: "/waitlist" },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
