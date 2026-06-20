import { Footer } from "@/components/layout/Footer";
import { DashboardNav } from "@/components/ui/DashboardNav";
import { getSessionUser } from "@/lib/auth";
import { NewsContent } from "./NewsContent";

export const metadata = {
  title: "News",
  description: "Novidades, lançamentos e movimentações da associação Street Hub Connect.",
};

export default async function NewsPage() {
  const session = await getSessionUser();
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <DashboardNav session={session} />
      <NewsContent />
      <Footer />
    </div>
  );
}
