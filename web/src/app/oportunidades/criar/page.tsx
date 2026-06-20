import { requireSession } from "@/lib/auth";

import CriarOportunidadeClient from "./CriarOportunidadeClient";

export default async function CriarOportunidadePage() {
  await requireSession({ role: "contractor", redirectTo: "/sign-in" });

  return <CriarOportunidadeClient />;
}
