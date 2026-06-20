"use client";

import { create } from "zustand";

import type { ArtistDraft, OpportunityDraft, UserRole, GovBrLevel } from "@/types/domain";

type AppState = {
  role: UserRole | null;
  govBrLevel: GovBrLevel;
  artistDraft: ArtistDraft;
  opportunityDraft: OpportunityDraft;
  setRole: (role: UserRole | null) => void;
  setGovBrLevel: (level: GovBrLevel) => void;
  patchArtistDraft: (payload: Partial<ArtistDraft>) => void;
  patchOpportunityDraft: (payload: Partial<OpportunityDraft>) => void;
  resetDrafts: () => void;
};

const initialArtistDraft: ArtistDraft = {
  stageName: "MC Aurora",
  genre: "Hip Hop / Trap",
  city: "Curitiba",
  state: "PR",
  minFee: "3500",
  idealFee: "5000",
  bio: "Artista urbana com repertorio autoral, historico em festivais locais e foco em impacto cultural, formacao de publico e ativacoes de marca.",
};

const initialOpportunityDraft: OpportunityDraft = {
  companyName: "Grupo Araucaria Energia",
  segment: "Energia e Infraestrutura",
  city: "Curitiba",
  state: "PR",
  title: "Circuito Urbano de Inverno 2026",
  budgetMin: "5000",
  budgetMax: "8000",
  eventDate: "2026-07-18",
  briefing: "Buscamos artista com presenca de palco, aderencia ESG e capacidade de ativacao cultural para evento urbano com audiencia jovem e marcas patrocinadoras.",
};

export const useAppStore = create<AppState>((set) => ({
  role: null,
  govBrLevel: "none",
  artistDraft: initialArtistDraft,
  opportunityDraft: initialOpportunityDraft,
  setRole: (role) => set({ role }),
  setGovBrLevel: (level) => set({ govBrLevel: level }),
  patchArtistDraft: (payload) =>
    set((state) => ({
      artistDraft: {
        ...state.artistDraft,
        ...payload,
      },
    })),
  patchOpportunityDraft: (payload) =>
    set((state) => ({
      opportunityDraft: {
        ...state.opportunityDraft,
        ...payload,
      },
    })),
  resetDrafts: () =>
    set({
      artistDraft: initialArtistDraft,
      opportunityDraft: initialOpportunityDraft,
    }),
}));
