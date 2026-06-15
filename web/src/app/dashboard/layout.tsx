import type { Metadata } from "next";

import { DashboardShell } from "@/components/ui";
import { SignOutButton } from "@/components/forms";
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
    <DashboardShell roleLabel={session.role === "artist" ? "Artist control room" : "Contractor control room"}>
      <div className="mb-6 flex items-center justify-end">
        <SignOutButton />
      </div>
      {children}
    </DashboardShell>
  );
}
