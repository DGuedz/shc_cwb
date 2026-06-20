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
    slug: "fase-beta",
    id: "004",
    date: "Jun 2026",
    tag: "LANÇAMENTO",
    title: "Street Hub Connect Entra em Fase Beta",
    excerpt:
      "A plataforma abre as portas para os primeiros associados. Catálogo curado, dossiê digital, matchboard e governança fonográfica já disponíveis.",
    author: "DGuedz",
    authorRole: "Rapper, compositor e fundador do Street Hub Connect",
    sections: [
      {
        body: "Depois de meses de desenvolvimento, validação de produto e estruturação institucional, a Street Hub Connect entra oficialmente em fase beta.\n\nO que isso significa: a plataforma está no ar, funcional e aberta para os primeiros associados — artistas e contratantes que vão ajudar a moldar o produto antes do lançamento público completo.",
      },
      {
        heading: "O QUE ESTÁ DISPONÍVEL AGORA",
        body: "CATÁLOGO PÚBLICO\nTodos os artistas associados ganham um perfil indexável no catálogo público da SHC — visível sem login, rastreável por mecanismos de busca via JSON-LD e Open Graph. Qualquer contratante, marca ou parceiro pode encontrar o artista diretamente pelo Google.\n\nDOSSIÊ DIGITAL\nCada artista tem acesso ao próprio dossiê dentro da plataforma: gênero musical, cidade, faixa de cachê, press kit e histórico de acordos. É o perfil profissional que o artista independente nunca teve — organizado, verificável e permanente.\n\nMATCHBOARD\nContratantes criam oportunidades com briefing, orçamento e data. O Matchboard cruza esses dados com o catálogo curado e exibe os artistas compatíveis. Sem intermediários, sem achismo, sem ligação às cegas.\n\nACORDOS\nO módulo de Acordos registra o histórico de negociações entre artistas e contratantes dentro da plataforma — data, valor, partes envolvidas. Rastro digital que protege os dois lados.\n\nGOVERNANÇA FONOGRÁFICA\nOrientação sobre ISRC, registro de obras e proteção de propriedade intelectual para artistas associados. A SHC prepara o terreno para emissão própria de ISRCs como registradora habilitada.",
      },
      {
        heading: "QUEM PODE ENTRAR NA FASE BETA",
        body: "Artistas independentes: músicos, cantores, compositores, produtores, beatmakers e DJs com produção ativa e interesse em crescer com governança.\n\nContratantes: empresas, produtoras, agências de eventos, marcas e organizadores que contratam serviços artísticos e querem acesso a um catálogo curado.\n\nA curadoria é parte do produto. Não é qualquer um que entra — e isso é intencional. O valor do catálogo depende da qualidade de quem está dentro.",
      },
      {
        heading: "O QUE VEM A SEGUIR",
        body: "A fase beta é o início. O roadmap prevê:\n\n— ISRC Registry próprio da SHC: emissão de códigos diretamente para artistas associados, sem distribuidoras;\n— Programa de parceria com empresas via renúncia fiscal (Lei 9.249/95): shows financiados com abatimento de IRPJ;\n— Fundo Patrimonial SHC: sustentabilidade de longo prazo para a associação e apoio a artistas;\n— Expansão para outras cidades: São Paulo, Rio de Janeiro, Salvador, Recife.\n\nTudo construído sobre o mesmo princípio: tecnologia a serviço de quem cria, não de quem intermediia.",
      },
      {
        body: "A fase beta não é a versão definitiva. É o momento em que o produto encontra as pessoas que vão ajudar a definir o que ele precisa ser.\n\nSe você é artista ou empresa e quer fazer parte dessa fase, a waitlist está aberta. Os primeiros associados têm voz ativa no desenvolvimento do produto.",
      },
    ],
    cta: { label: "Entrar na waitlist", href: "/waitlist" },
  },
  {
    slug: "sistema-xp-multiplicador-cache",
    id: "005",
    date: "Mai 2026",
    tag: "PROTOCOLO",
    title: "Sistema de XP e Multiplicador de Cachê: Como Funciona a Progressão do Artista na SHC",
    excerpt:
      "De INICIANTE a REFERÊNCIA — cada nível impacta diretamente no valor de cachê e na visibilidade no catálogo. Entenda a lógica por trás do protocolo.",
    author: "DGuedz",
    authorRole: "Rapper, compositor e fundador do Street Hub Connect",
    sections: [
      {
        body: "A maioria das plataformas trata todos os artistas da mesma forma. O iniciante que acabou de criar o perfil aparece lado a lado com quem tem anos de estrada, histórico verificável e comprometimento comprovado.\n\nIsso não é curadoria. É uma lista telefônica.\n\nO Street Hub Connect foi construído com uma lógica diferente: presença e engajamento na associação geram progressão real, com impacto direto no valor de cachê e na visibilidade dentro do catálogo.",
      },
      {
        heading: "OS NÍVEIS DE PROGRESSÃO",
        body: "O sistema de XP da SHC organiza os artistas em cinco níveis:\n\nINICIANTE\nArtista recém-associado. Perfil básico, presença no catálogo, acesso às ferramentas essenciais. Multiplicador de cachê: 1.0x.\n\nATIVO\nArtista com histórico de acordos registrados na plataforma, perfil completo e participação nas decisões da associação. Multiplicador: 1.2x.\n\nESTABELECIDO\nArtista com consistência demonstrada: múltiplos acordos, avaliações positivas de contratantes e engajamento institucional. Multiplicador: 1.5x.\n\nDESTAQUE\nArtista reconhecido pela curadoria como referência de qualidade no catálogo. Aparição prioritária no Matchboard e materiais institucionais. Multiplicador: 1.8x.\n\nREFERÊNCIA\nO topo do protocolo. Artistas no nível REFERÊNCIA são a vitrine da associação — consultados na curadoria de novos associados, com voz ativa nas decisões estratégicas da SHC. Multiplicador: 2.0x.",
      },
      {
        heading: "O QUE GERA XP",
        body: "A progressão não é automática nem baseada em tempo. É baseada em ação verificável:\n\n— Acordos registrados e concluídos na plataforma\n— Avaliações positivas de contratantes\n— Perfil completo com press kit, gênero, cidade e faixa de cachê\n— Participação em assembleias e decisões da associação\n— Indicações de novos artistas que passam pela curadoria\n— Registros fonográficos (ISRCs) vinculados ao perfil\n\nO que não gera XP: número de seguidores em redes sociais, fama percebida, conexões fora da plataforma. O protocolo reconhece o que é verificável dentro do sistema.",
      },
      {
        heading: "POR QUE O MULTIPLICADOR DE CACHÊ IMPORTA",
        body: "O multiplicador de cachê não é uma restrição — é um argumento.\n\nQuando um artista no nível REFERÊNCIA apresenta sua faixa de cachê ao contratante, o histórico verificável dentro da plataforma sustenta esse valor. O contratante vê: quantos acordos foram concluídos, quais avaliações recebeu, qual o nível de engajamento institucional.\n\nIsso resolve um problema antigo do mercado independente: artistas sérios não conseguiam justificar cachês compatíveis com seu trabalho porque não tinham onde mostrar o histórico.\n\nO multiplicador não é o SHC decidindo quanto o artista vale. É o SHC criando a infraestrutura para que o artista mostre o próprio valor.",
      },
      {
        heading: "VISIBILIDADE NO CATÁLOGO",
        body: "Além do multiplicador de cachê, o nível de XP impacta a visibilidade dentro do Matchboard:\n\n— Artistas de nível superior aparecem com prioridade nos resultados de busca dos contratantes;\n— Contratantes podem filtrar por nível mínimo de XP no Matchboard;\n— Artistas de nível DESTAQUE e REFERÊNCIA são apresentados nos materiais institucionais da SHC;\n— O catálogo público ordena os perfis considerando o nível de XP como um dos critérios.\n\nIsso cria um incentivo real para que o artista mantenha presença ativa — não como obrigação, mas como progressão natural de quem está comprometido com a própria carreira.",
      },
      {
        body: "O sistema de XP está em desenvolvimento e será refinado com base no feedback dos primeiros associados da fase beta. Os parâmetros de progressão, os multiplicadores exatos e os critérios de avaliação serão ajustados em conjunto com a comunidade.\n\nEssa é a vantagem de entrar agora: os primeiros associados têm voz ativa na construção do protocolo.",
      },
    ],
    cta: { label: "Entrar na waitlist", href: "/waitlist" },
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
