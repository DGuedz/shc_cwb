import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { AppRoute } from "@/lib/constants";
import { DEFAULT_REDIRECT_BY_ROLE } from "@/lib/constants";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { SessionUser, UserRole } from "@/types/domain";

type RequireOptions = {
  role?: UserRole;
  redirectTo?: AppRoute;
};

function normalizeRole(value: string | undefined): UserRole | null {
  if (value === "artist" || value === "contractor") {
    return value;
  }

  return null;
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const demoRole = normalizeRole(cookieStore.get("shc-demo-role")?.value);
  const demoUser = cookieStore.get("shc-demo-user")?.value;
  const demoEmail = cookieStore.get("shc-demo-email")?.value;

  if (demoRole && demoUser && demoEmail) {
    return {
      id: demoUser,
      email: demoEmail,
      role: demoRole,
      isDemo: true,
      govBrLevel: 'bronze' // Valor default seguro para o modo demo
    };
  }

  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return null;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return null;
  }

  const storedRole = normalizeRole(cookieStore.get("shc-role")?.value) ?? "artist";

  return {
    id: user.id,
    email: user.email!,
    role: storedRole,
    isDemo: false,
    govBrLevel: 'bronze' // Em produção real, este valor viria do banco/metadata do Supabase
  };
}

export async function requireSession(options: RequireOptions = {}) {
  const session = await getSessionUser();

  if (!session) {
    redirect(options.redirectTo ?? "/sign-in");
  }

  if (options.role && session.role !== options.role) {
    redirect(DEFAULT_REDIRECT_BY_ROLE[session.role]);
  }

  return session;
}
