import { cache } from "react";

import { mockArtists, mockDeals, mockMatches, mockOpportunities } from "@/lib/mock-data";
import { buildArtistSlug } from "@/lib/slug";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Artist, Deal, Match, Opportunity, SessionUser } from "@/types/domain";

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

export const getCatalogArtists = cache(async () => {
  const supabase = await getSupabaseServerClient();

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
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return mockArtists.find((artist) => artist.userId === session.id) ?? mockArtists[0];
  }

  const { data } = await supabase
    .from("artists")
    .select("*")
    .eq("user_id", session.id)
    .maybeSingle();

  if (!data) {
    return mockArtists[0];
  }

  return mapArtistRow(data as Record<string, unknown>);
});

export const getOpportunitiesForUser = cache(async (session: SessionUser) => {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return mockOpportunities;
  }

  const { data: company } = await supabase
    .from("companies")
    .select("id")
    .eq("user_id", session.id)
    .maybeSingle();

  if (!company?.id) {
    return mockOpportunities;
  }

  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .eq("company_id", company.id)
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return mockOpportunities;
  }

  return data.map((row) => mapOpportunityRow(row as Record<string, unknown>));
});

export const getMatchesForUser = cache(async (session: SessionUser) => {
  const supabase = await getSupabaseServerClient();

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
    return mockMatches;
  }

  return data.map((row) => mapMatchRow(row as Record<string, unknown>));
});

export async function getMatchBoardModel(session: SessionUser) {
  const [artists, opportunities, matches] = await Promise.all([
    getCatalogArtists(),
    getOpportunitiesForUser(session),
    getMatchesForUser(session),
  ]);

  const activeOpportunity = opportunities[0] ?? mockOpportunities[0];

  const entries = matches
    .filter((match) => match.opportunityId === activeOpportunity.id || session.role === "artist")
    .map((match) => {
      const artist = artists.find((item) => item.id === match.artistId) ?? mockArtists[0];

      return {
        ...match,
        artist,
      };
    });

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
