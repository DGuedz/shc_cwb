import { EmptyState, MetricCard } from "@/components/ui";
import { MatchBoard } from "@/components/views";
import { getSessionUser, requireSession } from "@/lib/auth";
import { getMatchBoardModel } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function MatchboardPage() {
  await requireSession({ role: "contractor", redirectTo: "/sign-in" });
  const session = await getSessionUser();

  if (!session) {
    return null;
  }

  const { activeOpportunity, entries } = await getMatchBoardModel(session);

  if (!entries.length) {
    return (
      <EmptyState
        title="Sem matches para exibir"
        body="Crie ou sincronize uma oportunidade para alimentar o score de compatibilidade com os artistas validados."
        href="/onboarding/contratante"
        cta="criar oportunidade"
      />
    );
  }

  return <MatchBoard opportunity={activeOpportunity} entries={entries} />;
}
