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
  stageName: "",
  genre: "",
  city: "",
  state: "",
  minFee: "",
  idealFee: "",
  bio: "",
};

const initialOpportunityDraft: OpportunityDraft = {
  companyName: "",
  segment: "",
  city: "",
  state: "",
  title: "",
  budgetMin: "",
  budgetMax: "",
  eventDate: "",
  briefing: "",
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
