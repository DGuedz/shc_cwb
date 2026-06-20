import { EmptyState } from "@/components/ui";
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

  if (!activeOpportunity || !entries.length) {
    return (
      <EmptyState
        title="Sem matches para exibir"
        body="Crie ou sincronize uma oportunidade para alimentar o score de compatibilidade com os artistas validados."
        href="/oportunidades/criar"
        cta="criar oportunidade"
      />
    );
  }

  return (
    <div className="flex-grow flex flex-col gap-8 w-full">
      {/* Hero Header */}
      <header className="flex flex-col items-start gap-4 relative">
        <div className="absolute right-0 top-0 border border-[#393939] bg-[#0E0E0E] px-4 py-2 hidden md:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="font-mono text-xs text-[#10B981] tracking-widest uppercase">SHC_NETWORK // ZK_READY</span>
        </div>
        <h1 className="font-archivo text-[clamp(2.5rem,5.5vw,4rem)] font-bold text-white tracking-tighter uppercase leading-[0.88] max-w-3xl">
          DEALS <span className="text-[#10B981]">MATCHBOARD</span>
        </h1>
        <p className="font-mono text-sm text-neutral-400 max-w-2xl border-l-2 border-[#10B981] pl-4">
          Gerencie e liquide as oportunidades ativas do seu portfólio.
        </p>
      </header>
      <MatchBoard opportunity={activeOpportunity} entries={entries} />
    </div>
  );
}
