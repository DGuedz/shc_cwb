import { redirect } from "next/navigation";

import { requireSession } from "@/lib/auth";
import { DEFAULT_REDIRECT_BY_ROLE } from "@/lib/constants";

export default async function DashboardEntryPage() {
  const session = await requireSession({ redirectTo: "/sign-in" });

  redirect(DEFAULT_REDIRECT_BY_ROLE[session.role]);
}
