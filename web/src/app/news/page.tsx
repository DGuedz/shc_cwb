import { Footer } from "@/components/layout/Footer";
import { NewsContent } from "./NewsContent";

export const metadata = {
  title: "News",
  description: "Novidades, lançamentos e movimentações da associação Street Hub Connect.",
};

export default async function NewsPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <NewsContent />
      <Footer />
    </div>
  );
}
