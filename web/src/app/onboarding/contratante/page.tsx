import { ContractorOnboardingForm } from "@/components/forms";
import { AppShell, SectionIntro } from "@/components/ui";
import { requireSession } from "@/lib/auth";

export default async function ContractorOnboardingPage() {
  await requireSession({ role: "contractor", redirectTo: "/sign-in" });

  return (
    <AppShell badge="Contractor onboarding">
      <div className="space-y-10">
        <SectionIntro
          eyebrow="Flow // Contractor"
          title="Criacao de oportunidade"
          body="O contratante registra os parametros comerciais, salva a oportunidade no backend e segue direto para o matchboard com o score de compatibilidade."
        />
        <ContractorOnboardingForm />
      </div>
    </AppShell>
  );
}
