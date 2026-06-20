import { EmptyState } from "@/components/ui";
import { AgreementFlow } from "@/components/dashboard/AgreementFlow";
import { getSessionUser } from "@/lib/auth";
import { getAgreementViewModel } from "@/lib/data";

export const dynamic = "force-dynamic";

type SearchParamsInput =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>
  | undefined;

export default async function AcordoPage({
  searchParams,
}: {
  searchParams?: SearchParamsInput;
}) {
  const session = await getSessionUser();

  if (!session) {
    return null;
  }

  const resolvedSearchParams = await searchParams;
  const matchIdValue = resolvedSearchParams?.matchId;
  const matchId = Array.isArray(matchIdValue) ? matchIdValue[0] : matchIdValue;
  const agreement = await getAgreementViewModel(session, matchId);

  if (!agreement) {
    return (
      <EmptyState
        title="Nenhum acordo disponivel"
        body="Sincronize um match valido para abrir o fluxo tripartite com empresa, artista e validacao institucional."
        href="/dashboard/matchboard"
        cta="voltar ao matchboard"
      />
    );
  }

  return (
    <AgreementFlow
      agreement={agreement}
      sessionRole={session.role}
      currentEmail={session.email}
    />
  );
}
