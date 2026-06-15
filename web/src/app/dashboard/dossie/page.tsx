import { EmptyState, MetricCard } from "@/components/ui";
import { DossierPanel } from "@/components/views";
import { getSessionUser, requireSession } from "@/lib/auth";
import { getArtistDossier } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function DossierPage() {
  await requireSession({ role: "artist", redirectTo: "/sign-in" });
  const session = await getSessionUser();

  if (!session) {
    return null;
  }

  const artist = await getArtistDossier(session);

  if (!artist) {
    return (
      <EmptyState
        title="Dossie indisponivel"
        body="Finalize o onboarding do artista para construir o dossie outsider com os metadados comerciais e operacionais."
        href="/onboarding/artista"
        cta="voltar ao onboarding"
      />
    );
  }

  return <DossierPanel artist={artist} />;
}
