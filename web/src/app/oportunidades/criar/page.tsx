import { requireSession } from "@/lib/auth";

import CriarOportunidadeClient from "./CriarOportunidadeClient";

export default async function CriarOportunidadePage() {
  const session = await requireSession({ role: "contractor", redirectTo: "/sign-in" });

  return <CriarOportunidadeClient session={session} />;
}
