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
