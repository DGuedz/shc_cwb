import { createClient } from "@supabase/supabase-js";

import { hasSupabaseEnv, supabaseAnonKey, supabaseUrl } from "@/lib/supabase/config";

export function getSupabaseServerClient() {
  if (!hasSupabaseEnv()) {
    return null;
  }

  // Usando createClient diretamente para Server Components
  // Sem cookies() que só funciona em Server Components do App Router
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}
