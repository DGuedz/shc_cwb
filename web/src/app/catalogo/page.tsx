import { getSessionUser } from "@/lib/auth";
import { getCatalogArtists } from "@/lib/data";

import VitrineArtistas from "./CatalogoClient";

export default async function CatalogoPage() {
  const [session, artists] = await Promise.all([
    getSessionUser(),
    getCatalogArtists(),
  ]);

  return <VitrineArtistas initialArtists={artists} session={session} />;
}
