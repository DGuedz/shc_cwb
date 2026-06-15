export type UserRole = "artist" | "contractor";

export type SessionUser = {
  id: string;
  email: string;
  role: UserRole;
  isDemo: boolean;
};

export type Artist = {
  id: string;
  slug: string;
  userId?: string;
  stageName: string;
  genre: string;
  city: string;
  state: string;
  minFee: number;
  idealFee: number;
  bio: string;
  verified: boolean;
  tags: string[];
};

export type Company = {
  id: string;
  userId?: string;
  name: string;
  segment: string;
  city: string;
  state: string;
};

export type Opportunity = {
  id: string;
  companyId: string;
  title: string;
  segment: string;
  city: string;
  state: string;
  budgetMin: number;
  budgetMax: number;
  eventDate: string;
  briefing: string;
  active: boolean;
};

export type MatchStatus =
  | "pending_artist_approval"
  | "match_accepted"
  | "declined"
  | "in_contract"
  | "settlement_pending"
  | "completed";

export type Match = {
  id: string;
  artistId: string;
  opportunityId: string;
  affinityScore: number;
  agreedBudget: number;
  status: MatchStatus;
  reasons: string[];
};

export type DealLane =
  | "analisando"
  | "aprovacao_artista"
  | "contrato"
  | "liquidacao"
  | "concluido";

export type Deal = {
  id: string;
  title: string;
  counterpart: string;
  value: number;
  lane: DealLane;
  dueDate: string;
  status: string;
};

export type ArtistDraft = {
  stageName: string;
  genre: string;
  city: string;
  state: string;
  minFee: string;
  idealFee: string;
  bio: string;
};

export type OpportunityDraft = {
  companyName: string;
  segment: string;
  city: string;
  state: string;
  title: string;
  budgetMin: string;
  budgetMax: string;
  eventDate: string;
  briefing: string;
};
