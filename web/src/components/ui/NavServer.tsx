import { getSessionUser } from "@/lib/auth";
import { DashboardNav } from "./DashboardNav";

/** Renderiza o DashboardNav em nível de layout — fora de qualquer stacking context de página */
export async function NavServer() {
  const session = await getSessionUser();
  return <DashboardNav session={session} />;
}
