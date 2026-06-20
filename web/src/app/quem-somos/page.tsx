import { Footer } from "@/components/layout/Footer";
import { QuemSomosContent } from "./QuemSomosContent";

export const metadata = {
  title: "Quem Somos",
  description: "A associação que conecta artistas independentes e empresas por meio de tecnologia e curadoria humana.",
};

export default async function QuemSomos() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <QuemSomosContent />
      <Footer />
    </div>
  );
}
