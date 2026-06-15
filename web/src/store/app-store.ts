"use client";

import { create } from "zustand";

import type { ArtistDraft, OpportunityDraft, UserRole } from "@/types/domain";

type AppState = {
  role: UserRole | null;
  artistDraft: ArtistDraft;
  opportunityDraft: OpportunityDraft;
  setRole: (role: UserRole | null) => void;
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
  artistDraft: initialArtistDraft,
  opportunityDraft: initialOpportunityDraft,
  setRole: (role) => set({ role }),
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
