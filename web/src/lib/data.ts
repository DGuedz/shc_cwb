import { cache } from "react";

import { mockArtists, mockCompanies, mockDeals, mockMatches, mockOpportunities } from "@/lib/mock-data";
import { buildArtistSlug } from "@/lib/slug";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Artist, Company, Deal, Match, Opportunity, SessionUser } from "@/types/domain";

function toNumber(value: unknown, fallback = 0) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? fallback : parsed;
  }

  return fallback;
}

function mapArtistRow(row: Record<string, unknown>): Artist {
  const id = String(row.id);

  return {
    id,
    slug: row.slug ? String(row.slug) : buildArtistSlug(String(row.stage_name ?? "Talent"), id),
    userId: row.user_id ? String(row.user_id) : undefined,
    stageName: String(row.stage_name ?? "Talent"),
    genre: String(row.genre ?? "Nao informado"),
    city: String(row.city ?? "Cidade"),
    state: String(row.state ?? "UF"),
    minFee: toNumber(row.min_fee),
    idealFee: toNumber(row.ideal_fee),
    bio: String(row.bio ?? "Perfil sincronizado do Supabase."),
    verified: Boolean(row.is_verified ?? true),
    tags: Array.isArray(row.tags) ? row.tags.map(String) : ["supabase"],
  };
}

function mapCompanyRow(row: Record<string, unknown>): Company {
  return {
    id: String(row.id),
    userId: row.user_id ? String(row.user_id) : undefined,
    name: String(row.name ?? "Empresa"),
    segment: String(row.segment ?? "Segmento"),
    city: String(row.city ?? "Cidade"),
    state: String(row.state ?? "UF"),
  };
}

function mapOpportunityRow(row: Record<string, unknown>): Opportunity {
  return {
    id: String(row.id),
    companyId: String(row.company_id),
    title: String(row.title ?? "Oportunidade"),
    segment: String(row.segment ?? "Brand Experience"),
    city: String(row.city ?? "Cidade"),
    state: String(row.state ?? "UF"),
    budgetMin: toNumber(row.budget_min),
    budgetMax: toNumber(row.budget_max),
    eventDate: String(row.event_date ?? new Date().toISOString().slice(0, 10)),
    briefing: String(row.briefing ?? ""),
    active: Boolean(row.is_active ?? true),
  };
}

function mapMatchRow(row: Record<string, unknown>): Match {
  return {
    id: String(row.id),
    artistId: String(row.artist_id),
    opportunityId: String(row.opportunity_id),
    affinityScore: toNumber(row.affinity_score),
    agreedBudget: toNumber(row.agreed_budget),
    status: String(row.status ?? "pending_artist_approval") as Match["status"],
    reasons: Array.isArray(row.reasons)
      ? row.reasons.map(String)
      : ["Match sincronizado a partir do backend Supabase."],
  };
}

export type AgreementViewModel = {
  match: Match;
  artist: Artist;
  company: Company;
  opportunity: Opportunity;
  agreementTitle: string;
  agreementSummary: string;
  agreedBudget: number;
  venueLabel: string;
  validityLabel: string;
  deliveryPackets: Array<{
    id: "company" | "artist" | "shc";
    title: string;
    recipient: string;
    summary: string;
    items: string[];
  }>;
  obligations: Array<{
    id: "company" | "artist" | "shc";
    title: string;
    summary: string;
  }>;
  audit: {
    templateLabel: string;
    proofLabel: string;
    hashPreview: string;
  };
};

function buildAgreementViewModel({
  match,
  artist,
  company,
  opportunity,
}: {
  match: Match;
  artist: Artist;
  company: Company;
  opportunity: Opportunity;
}): AgreementViewModel {
  const agreedBudget = match.agreedBudget || opportunity.budgetMax || opportunity.budgetMin;
  const cityState = `${opportunity.city}/${opportunity.state}`;
  const validityLabel = opportunity.eventDate
    ? new Date(`${opportunity.eventDate}T12:00:00`).toLocaleDateString("pt-BR")
    : "Conforme cronograma da oportunidade";

  return {
    match,
    artist,
    company,
    opportunity,
    agreementTitle: `Acordo celebrado entre ${company.name}, ${artist.stageName} e Street Hub Connect`,
    agreementSummary:
      "Parceria tripartite para formalizar booking, escopo operacional e governanca de execucao, observando o memorial e estatuto da associacao.",
    agreedBudget,
    venueLabel: cityState,
    validityLabel,
    deliveryPackets: [
      {
        id: "company",
        title: "Email da empresa",
        recipient: company.name,
        summary: "Recebe confirmacao do booking, valor comprometido e dados essenciais do artista contratado.",
        items: [
          `${company.name}, ${artist.stageName} e Street Hub Connect nomeados no cabecalho do termo`,
          `Resumo com valor de R$ ${agreedBudget.toLocaleString("pt-BR")} e data-base ${validityLabel}`,
          "PDF do termo ou link seguro para download",
          "Hash de auditoria para prova de integridade documental",
        ],
      },
      {
        id: "artist",
        title: "Email do artista",
        recipient: artist.stageName,
        summary: "Recebe confirmacao da contratacao, cache aprovado e dados oficiais da empresa.",
        items: [
          `Empresa contratante ${company.name} identificada com local ${cityState}`,
          `Cache aprovado em R$ ${agreedBudget.toLocaleString("pt-BR")}`,
          "Resumo de obrigacoes, agenda e validacao institucional",
          "PDF do termo ou link seguro para download",
        ],
      },
      {
        id: "shc",
        title: "Email institucional SHC",
        recipient: "Street Hub Connect",
        summary: "Recebe copia integral do termo e comprovante de orquestracao do acordo.",
        items: [
          "Copia completa do acordo tripartite com os tres titulares",
          "Registro do fluxo de confirmacoes e etapa liberada para assinatura",
          "Hash de auditoria e referencia do template institucional",
          "Status operacional para futura integracao SMTP Hostinger",
        ],
      },
    ],
    obligations: [
      {
        id: "company",
        title: "Empresa confirma valor, objeto e agenda do booking.",
        summary: "Aceita o valor final, a finalidade da contratacao e a responsabilidade pelas informacoes da oportunidade.",
      },
      {
        id: "artist",
        title: "Artista aceita cache, entrega e condicoes de execucao.",
        summary: "Confirma disponibilidade, escopo da apresentacao e validacao dos dados oficiais do perfil associado.",
      },
      {
        id: "shc",
        title: "SHC valida conformidade institucional antes da assinatura.",
        summary: "Confere memorial, estatuto, coerencia do acordo e libera o pacote final para formalizacao.",
      },
    ],
    audit: {
      templateLabel: "Termo tripartite institucional",
      proofLabel: "Hash auditavel visivel apenas na camada tecnica",
      hashPreview: `shc_${match.id.slice(0, 6)}_${artist.id.slice(0, 4)}_${company.id.slice(0, 4)}`,
    },
  };
}

async function getAgreementFromMock(session: SessionUser, matchId?: string) {
  const company =
    session.role === "contractor"
      ? mockCompanies.find((item) => item.userId === session.id) ?? mockCompanies[0]
      : mockCompanies[0];
  const artist =
    session.role === "artist"
      ? mockArtists.find((item) => item.userId === session.id) ?? mockArtists[0]
      : mockArtists[0];

  const targetMatch =
    mockMatches.find((item) => item.id === matchId)
    ?? mockMatches.find((item) => item.artistId === artist.id)
    ?? mockMatches.find((item) => item.opportunityId === mockOpportunities[0]?.id)
    ?? mockMatches[0];

  if (!company || !artist || !targetMatch) {
    return null;
  }

  const resolvedArtist = mockArtists.find((item) => item.id === targetMatch.artistId) ?? artist;
  const opportunity = mockOpportunities.find((item) => item.id === targetMatch.opportunityId) ?? mockOpportunities[0];

  if (!opportunity) {
    return null;
  }

  const resolvedCompany = mockCompanies.find((item) => item.id === opportunity.companyId) ?? company;

  return buildAgreementViewModel({
    match: targetMatch,
    artist: resolvedArtist,
    company: resolvedCompany,
    opportunity,
  });
}

export async function getAgreementViewModel(session: SessionUser, matchId?: string) {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return getAgreementFromMock(session, matchId);
  }

  let match: Match | null = null;
  let artist: Artist | null = null;
  let company: Company | null = null;
  let opportunity: Opportunity | null = null;

  if (session.role === "contractor") {
    const { data: companyRow } = await supabase
      .from("companies")
      .select("*")
      .eq("user_id", session.id)
      .maybeSingle();

    if (!companyRow) {
      return null;
    }

    company = mapCompanyRow(companyRow as Record<string, unknown>);

    const { data: opportunityRows } = await supabase
      .from("opportunities")
      .select("*")
      .eq("company_id", company.id)
      .order("created_at", { ascending: false });

    if (!opportunityRows?.length) {
      return null;
    }

    const opportunityIds = opportunityRows.map((row) => String(row.id));
    const matchesQuery = supabase
      .from("matches")
      .select("*")
      .in("opportunity_id", opportunityIds)
      .order("affinity_score", { ascending: false });

    const { data: matchRows } = matchId
      ? await matchesQuery.eq("id", matchId).limit(1)
      : await matchesQuery.limit(1);

    const matchRow = matchRows?.[0];

    if (!matchRow) {
      return null;
    }

    match = mapMatchRow(matchRow as Record<string, unknown>);
    const opportunityRow =
      opportunityRows.find((row) => String(row.id) === match?.opportunityId) ?? opportunityRows[0];
    opportunity = mapOpportunityRow(opportunityRow as Record<string, unknown>);

    const { data: artistRow } = await supabase
      .from("artists")
      .select("*")
      .eq("id", match.artistId)
      .maybeSingle();

    if (!artistRow) {
      return null;
    }

    artist = mapArtistRow(artistRow as Record<string, unknown>);
  } else {
    const { data: artistRow } = await supabase
      .from("artists")
      .select("*")
      .eq("user_id", session.id)
      .maybeSingle();

    if (!artistRow) {
      return null;
    }

    artist = mapArtistRow(artistRow as Record<string, unknown>);

    const matchesQuery = supabase
      .from("matches")
      .select("*")
      .eq("artist_id", artist.id)
      .order("affinity_score", { ascending: false });

    const { data: matchRows } = matchId
      ? await matchesQuery.eq("id", matchId).limit(1)
      : await matchesQuery.limit(1);

    const matchRow = matchRows?.[0];

    if (!matchRow) {
      return null;
    }

    match = mapMatchRow(matchRow as Record<string, unknown>);

    const { data: opportunityRow } = await supabase
      .from("opportunities")
      .select("*")
      .eq("id", match.opportunityId)
      .maybeSingle();

    if (!opportunityRow) {
      return null;
    }

    opportunity = mapOpportunityRow(opportunityRow as Record<string, unknown>);

    const { data: companyRow } = await supabase
      .from("companies")
      .select("*")
      .eq("id", opportunity.companyId)
      .maybeSingle();

    if (!companyRow) {
      return null;
    }

    company = mapCompanyRow(companyRow as Record<string, unknown>);
  }

  if (!match || !artist || !company || !opportunity) {
    return null;
  }

  return buildAgreementViewModel({
    match,
    artist,
    company,
    opportunity,
  });
}

export const getCatalogArtists = cache(async () => {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return mockArtists;
  }

  const { data, error } = await supabase
    .from("artists")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return mockArtists;
  }

  return data.map((row) => mapArtistRow(row as Record<string, unknown>));
});

export const getPublicArtistSlugs = cache(async () => {
  const artists = await getCatalogArtists();

  return artists.map((artist) => artist.slug);
});

export const getPublicArtistBySlug = cache(async (slug: string) => {
  const artists = await getCatalogArtists();

  return artists.find((artist) => artist.slug === slug) ?? null;
});

export const getArtistDossier = cache(async (session: SessionUser) => {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return mockArtists.find((artist) => artist.userId === session.id) ?? mockArtists[0];
  }

  const { data } = await supabase
    .from("artists")
    .select("*")
    .eq("user_id", session.id)
    .maybeSingle();

  if (!data) {
    return null; // Ao invés de mock, retorna null se o artist não existir na base de dados (onboarding incompleto)
  }

  return mapArtistRow(data as Record<string, unknown>);
});

export const getOpportunitiesForUser = cache(async (session: SessionUser) => {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return mockOpportunities;
  }

  const { data: company } = await supabase
    .from("companies")
    .select("id")
    .eq("user_id", session.id)
    .maybeSingle();

  if (!company?.id) {
    return []; // Retorna vazio real
  }

  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .eq("company_id", company.id)
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return []; // Retorna vazio real
  }

  return data.map((row) => mapOpportunityRow(row as Record<string, unknown>));
});

export const getMatchesForUser = cache(async (session: SessionUser) => {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    if (session.role === "artist") {
      return mockMatches.filter((match) => match.artistId === "artist-1");
    }

    return mockMatches;
  }

  const { data, error } = await supabase
    .from("matches")
    .select("*")
    .order("affinity_score", { ascending: false });

  if (error || !data?.length) {
    return []; // Retorna vazio real
  }

  return data.map((row) => mapMatchRow(row as Record<string, unknown>));
});

export async function getMatchBoardModel(session: SessionUser) {
  const [artists, opportunities, matches] = await Promise.all([
    getCatalogArtists(),
    getOpportunitiesForUser(session),
    getMatchesForUser(session),
  ]);

  const activeOpportunity = opportunities.length > 0 ? opportunities[0] : null;

  const entries = activeOpportunity 
    ? matches
        .filter((match) => match.opportunityId === activeOpportunity.id || session.role === "artist")
        .map((match) => {
          const artist = artists.find((item) => item.id === match.artistId) ?? artists[0];

          return {
            ...match,
            artist,
          };
        })
        .filter(entry => entry.artist != null)
    : [];

  return {
    activeOpportunity,
    entries,
  };
}

export async function getDealsBoardModel(session: SessionUser) {
  const deals: Deal[] =
    session.role === "artist"
      ? mockDeals.filter((deal) => deal.title.toLowerCase().includes("vnxx"))
      : mockDeals;

  return deals;
}
