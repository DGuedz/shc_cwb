import { DashboardNav } from "@/components/ui/DashboardNav";
import { getSessionUser } from "@/lib/auth";
import { QuemSomosContent } from "./QuemSomosContent";

export const metadata = {
  title: "Quem Somos | Street Hub Connect",
  description: "A associação que conecta artistas independentes e empresas por meio de tecnologia e curadoria humana.",
};

export default async function QuemSomos() {
  const session = await getSessionUser();
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <DashboardNav session={session} />
      <QuemSomosContent />
    </div>
  );
}
