import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início" },
    { href: "/catalogo", label: "Artistas" },
    { href: "/oportunidades/criar", label: "Oportunidades" },
    { href: "/dashboard/acordos", label: "Conexões" },
    { href: "/onboarding/artista", label: "Perfil/Contratos" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#393939] bg-[#0E0E0E]/90 backdrop-blur-xl h-20 px-6 md:px-12 flex justify-between items-center transition-colors duration-0">
      <div className="flex items-center space-x-8 h-full">
        <Link href="/" className="font-archivo text-xl font-bold tracking-tighter text-white uppercase">
          STREET HUB CONNECT
        </Link>
        <div className="hidden md:flex space-x-6 h-full items-center font-mono text-xs text-neutral-400">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href as any}
                className={`h-full flex items-center transition-colors duration-0 px-4 ${
                  isActive
                    ? "text-[#10B981] border-b-2 border-[#10B981] bg-[#131313]/50 pt-[2px]"
                    : "hover:text-white hover:bg-[#131313]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search TX, Block, or ID..."
            className="bg-[#131313] border border-[#393939] text-white font-mono text-xs pl-4 pr-4 py-2 w-64 focus:outline-none focus:border-[#10B981] transition-colors placeholder:text-neutral-600"
          />
        </div>
        <div className="w-10 h-10 border border-[#393939] bg-[#131313] flex items-center justify-center font-mono text-xs text-[#10B981]">
          PR
        </div>
      </div>
    </nav>
  );
}
