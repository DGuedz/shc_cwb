import { getCatalogArtists } from "@/lib/data";

import VitrineArtistas from "./CatalogoClient";

export default async function CatalogoPage() {
  const artists = await getCatalogArtists();

  return <VitrineArtistas initialArtists={artists} />;
}
