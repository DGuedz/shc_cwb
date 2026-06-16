import type { Metadata } from "next";

import { DashboardNav } from "@/components/ui/DashboardNav";
import { requireSession } from "@/lib/auth";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await requireSession({ redirectTo: "/sign-in" });

  return (
    <div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
      <DashboardNav />
      <main className="flex-grow pt-32 pb-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
