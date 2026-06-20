import type { Metadata } from "next";

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
  await requireSession({ redirectTo: "/sign-in" });

  return (
    <div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
      <main className="flex-grow pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
