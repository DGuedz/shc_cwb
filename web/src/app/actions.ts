"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import { getSessionUser } from "@/lib/auth";
import type { AppRoute } from "@/lib/constants";
import { DEFAULT_REDIRECT_BY_ROLE } from "@/lib/constants";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { UserRole } from "@/types/domain";

export type FormActionState = {
  success?: boolean;
  message?: string;
  redirectTo?: AppRoute;
  fieldErrors?: Record<string, string[]>;
};

const roleSchema = z.enum(["artist", "contractor"]);

const signInSchema = z.object({
  email: z.email("Informe um e-mail valido."),
  password: z.string().min(6, "Informe uma senha com pelo menos 6 caracteres."),
  role: roleSchema,
});

const artistSchema = z.object({
  stageName: z.string().min(2, "Nome artistico obrigatorio."),
  genre: z.string().min(2, "Genero obrigatorio."),
  city: z.string().min(2, "Cidade obrigatoria."),
  state: z.string().min(2, "UF obrigatoria."),
  minFee: z.coerce.number().min(0),
  idealFee: z.coerce.number().min(0),
  bio: z.string().min(20, "A bio precisa ter pelo menos 20 caracteres."),
});

const opportunitySchema = z.object({
  companyName: z.string().min(2, "Empresa obrigatoria."),
  segment: z.string().min(2, "Segmento obrigatorio."),
  city: z.string().min(2, "Cidade obrigatoria."),
  state: z.string().min(2, "UF obrigatoria."),
  title: z.string().min(3, "Titulo obrigatorio."),
  budgetMin: z.coerce.number().min(0),
  budgetMax: z.coerce.number().min(0),
  eventDate: z.string().min(8, "Data do evento obrigatoria."),
  briefing: z.string().min(24, "Descreva o briefing com mais detalhe."),
});

function flattenErrors(result: z.ZodError) {
  return result.flatten().fieldErrors;
}

function demoIdForRole(role: UserRole) {
  return role === "artist" ? "demo-artist" : "demo-contractor";
}

export async function signInAction(
  _prevState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  });

  if (!parsed.success) {
    return {
      message: "Corrija os campos antes de continuar.",
      fieldErrors: flattenErrors(parsed.error),
    };
  }

  const cookieStore = await cookies();
  const { email, password, role } = parsed.data;
  cookieStore.set("shc-role", role, { httpOnly: true, sameSite: "lax", path: "/" });

  if (!hasSupabaseEnv()) {
    cookieStore.set("shc-demo-role", role, { httpOnly: true, sameSite: "lax", path: "/" });
    cookieStore.set("shc-demo-email", email, { httpOnly: true, sameSite: "lax", path: "/" });
    cookieStore.set("shc-demo-user", demoIdForRole(role), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    redirect(DEFAULT_REDIRECT_BY_ROLE[role]);
  }

  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return { message: "Falha ao inicializar o cliente do Supabase." };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { message: error.message };
  }

  redirect(DEFAULT_REDIRECT_BY_ROLE[role]);
}

export async function signOutAction() {
  const cookieStore = await cookies();
  const supabase = await getSupabaseServerClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  ["shc-role", "shc-demo-role", "shc-demo-email", "shc-demo-user"].forEach((name) => {
    cookieStore.delete(name);
  });

  redirect("/");
}

export async function saveArtistOnboardingAction(
  _prevState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const session = await getSessionUser();

  if (!session || session.role !== "artist") {
    return { message: "Sessao invalida para onboarding de artista." };
  }

  const parsed = artistSchema.safeParse({
    stageName: formData.get("stageName"),
    genre: formData.get("genre"),
    city: formData.get("city"),
    state: formData.get("state"),
    minFee: formData.get("minFee"),
    idealFee: formData.get("idealFee"),
    bio: formData.get("bio"),
  });

  if (!parsed.success) {
    return {
      message: "Preencha todos os campos obrigatorios do onboarding.",
      fieldErrors: flattenErrors(parsed.error),
    };
  }

  if (!hasSupabaseEnv()) {
    return { success: true, redirectTo: "/dashboard/dossie" };
  }

  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return { message: "Cliente Supabase indisponivel." };
  }

  const payload = parsed.data;
  const { error } = await supabase.from("artists").upsert(
    {
      user_id: session.id,
      stage_name: payload.stageName,
      genre: payload.genre,
      city: payload.city,
      state: payload.state.toUpperCase(),
      min_fee: payload.minFee,
      ideal_fee: payload.idealFee,
      bio: payload.bio,
      is_verified: true,
      tags: [payload.genre.toLowerCase(), payload.city.toLowerCase()],
    },
    { onConflict: "user_id" },
  );

  if (error) {
    return { message: error.message };
  }

  return { success: true, redirectTo: "/dashboard/dossie" };
}

export async function saveOpportunityAction(
  _prevState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const session = await getSessionUser();

  if (!session || session.role !== "contractor") {
    return { message: "Sessao invalida para onboarding do contratante." };
  }

  const parsed = opportunitySchema.safeParse({
    companyName: formData.get("companyName"),
    segment: formData.get("segment"),
    city: formData.get("city"),
    state: formData.get("state"),
    title: formData.get("title"),
    budgetMin: formData.get("budgetMin"),
    budgetMax: formData.get("budgetMax"),
    eventDate: formData.get("eventDate"),
    briefing: formData.get("briefing"),
  });

  if (!parsed.success) {
    return {
      message: "Revise os dados da oportunidade antes de enviar.",
      fieldErrors: flattenErrors(parsed.error),
    };
  }

  if (!hasSupabaseEnv()) {
    return { success: true, redirectTo: "/dashboard/matchboard" };
  }

  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return { message: "Cliente Supabase indisponivel." };
  }

  const payload = parsed.data;
  const companyResult = await supabase
    .from("companies")
    .upsert(
      {
        user_id: session.id,
        name: payload.companyName,
        segment: payload.segment,
        city: payload.city,
        state: payload.state.toUpperCase(),
      },
      { onConflict: "user_id" },
    )
    .select("id")
    .single();

  if (companyResult.error || !companyResult.data) {
    return { message: companyResult.error?.message ?? "Nao foi possivel salvar a empresa." };
  }

  const { error } = await supabase.from("opportunities").insert({
    company_id: companyResult.data.id,
    title: payload.title,
    segment: payload.segment,
    city: payload.city,
    state: payload.state.toUpperCase(),
    budget_min: payload.budgetMin,
    budget_max: payload.budgetMax,
    event_date: payload.eventDate,
    briefing: payload.briefing,
    is_active: true,
  });

  if (error) {
    return { message: error.message };
  }

  return { success: true, redirectTo: "/dashboard/matchboard" };
}
