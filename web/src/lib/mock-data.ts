import type { Artist, Company, Deal, Match, Opportunity } from "@/types/domain";

export const mockArtists: Artist[] = [
  {
    id: "artist-1",
    slug: "vnxx-artist-1",
    userId: "demo-artist",
    stageName: "Vnxx",
    genre: "Trap / Drill",
    city: "Sao Paulo",
    state: "SP",
    minFee: 4500,
    idealFee: 6500,
    bio: "Artista com alta conversao regional, rider enxuto e repertorio para marcas urbanas.",
    verified: true,
    tags: ["campanhas", "shows", "brand fit"],
  },
  {
    id: "artist-2",
    slug: "dj-lua-artist-2",
    stageName: "DJ Lua",
    genre: "Funk / Baile",
    city: "Rio de Janeiro",
    state: "RJ",
    minFee: 5500,
    idealFee: 7800,
    bio: "Set de alta energia, forte presenca de publico jovem e disponibilidade para ativações.",
    verified: true,
    tags: ["festival", "live set", "experiencia"],
  },
  {
    id: "artist-3",
    slug: "zito-beats-artist-3",
    stageName: "Zito Beats",
    genre: "Boom Bap / Lo-Fi",
    city: "Belo Horizonte",
    state: "MG",
    minFee: 3000,
    idealFee: 4200,
    bio: "Perfil editorial e catalogo forte para conteudo de marca com narrativa de rua.",
    verified: true,
    tags: ["content", "producer", "licensing"],
  },
];

export const mockCompanies: Company[] = [
  {
    id: "company-1",
    userId: "demo-contractor",
    name: "Neon Pulse Drinks",
    segment: "Bebidas",
    city: "Sao Paulo",
    state: "SP",
  },
];

export const mockOpportunities: Opportunity[] = [
  {
    id: "opp-1",
    companyId: "company-1",
    title: "Lançamento de linha zero alcool",
    segment: "Brand Experience",
    city: "Sao Paulo",
    state: "SP",
    budgetMin: 4000,
    budgetMax: 7000,
    eventDate: "2026-08-12",
    briefing:
      "Campanha com foco em awareness, creator content e live performance em evento fechado.",
    active: true,
  },
];

export const mockMatches: Match[] = [
  {
    id: "match-1",
    artistId: "artist-1",
    opportunityId: "opp-1",
    affinityScore: 98,
    agreedBudget: 6500,
    status: "match_accepted",
    reasons: [
      "Orcamento compativel com a oportunidade ativa.",
      "Genero com fit exato para a audiencia da campanha.",
      "Alta taxa de engajamento na regiao metropolitana.",
    ],
  },
  {
    id: "match-2",
    artistId: "artist-2",
    opportunityId: "opp-1",
    affinityScore: 92,
    agreedBudget: 7600,
    status: "pending_artist_approval",
    reasons: [
      "Excelente aderencia ao publico 18-24.",
      "Agenda disponivel na janela da ativacao.",
      "Custo logistico acima da media, mas controlado.",
    ],
  },
  {
    id: "match-3",
    artistId: "artist-3",
    opportunityId: "opp-1",
    affinityScore: 85,
    agreedBudget: 4200,
    status: "in_contract",
    reasons: [
      "Budget altamente aderente ao tier da campanha.",
      "Perfil editorial alinha com o briefing de conteudo.",
      "Crescimento organico forte nos ultimos 90 dias.",
    ],
  },
];

export const mockDeals: Deal[] = [
  {
    id: "deal-1",
    title: "Neon Pulse x Vnxx",
    counterpart: "Aguardando comprovantes do contratante",
    value: 6500,
    lane: "liquidacao",
    dueDate: "2026-08-18",
    status: "Tripartite em validacao",
  },
  {
    id: "deal-2",
    title: "Neon Pulse x DJ Lua",
    counterpart: "Pendencia de aceite do artista",
    value: 7600,
    lane: "aprovacao_artista",
    dueDate: "2026-08-10",
    status: "Aguardando clickwrap",
  },
  {
    id: "deal-3",
    title: "Neon Pulse x Zito Beats",
    counterpart: "Contrato em redline interno",
    value: 4200,
    lane: "contrato",
    dueDate: "2026-08-14",
    status: "Jurídico revisando",
  },
  {
    id: "deal-4",
    title: "Campanha piloto licenciamento",
    counterpart: "Briefing em analise",
    value: 3000,
    lane: "analisando",
    dueDate: "2026-08-09",
    status: "Scoring automatico",
  },
  {
    id: "deal-5",
    title: "Neon Pulse x Vnxx Remix Cut",
    counterpart: "Entrega aprovada",
    value: 2500,
    lane: "concluido",
    dueDate: "2026-07-28",
    status: "Pagamento reconciliado",
  },
];
