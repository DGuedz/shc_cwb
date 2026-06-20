import { getSessionUser } from "@/lib/auth";

import PitchdeckClient from "./PitchdeckClient";

export default async function PitchdeckPage() {
  const session = await getSessionUser();

  return <PitchdeckClient session={session} />;
}
