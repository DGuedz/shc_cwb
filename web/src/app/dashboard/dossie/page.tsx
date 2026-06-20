import { EmptyState } from "@/components/ui";
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

  return (
    <div className="flex-grow flex flex-col gap-8 w-full">
      {/* Hero Header */}
      <header className="flex flex-col items-start gap-4 relative">
        <div className="absolute right-0 top-0 border border-[#393939] bg-[#0E0E0E] px-4 py-2 hidden md:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="font-mono text-xs text-[#10B981] tracking-widest uppercase">perfil sincronizado</span>
        </div>
        <h1 className="font-archivo text-[clamp(2.5rem,5.5vw,4rem)] font-bold tracking-tighter uppercase leading-[0.88] max-w-3xl">
          <span className="block title-chromatic reveal-delay-1">DOSSIE DO</span>
          <span className="block text-[#10B981] title-reveal reveal-delay-2">ARTISTA</span>
        </h1>
        <p className="font-mono text-sm text-neutral-400 max-w-2xl border-l-2 border-[#10B981] pl-4">
          Aqui voce encontra suas informacoes principais, seu historico recente e os materiais validados do seu perfil.
        </p>
      </header>
      <DossierPanel artist={artist} />
    </div>
  );
}
