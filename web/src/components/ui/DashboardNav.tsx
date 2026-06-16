'use client';

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
    <nav className="fixed top-0 w-full z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/95 backdrop-blur-md h-14 px-4 md:px-6 flex justify-between items-center transition-colors duration-0">
      <div className="flex items-center h-full">
        <Link href="/" className="font-archivo text-base font-bold tracking-tighter text-white uppercase leading-[0.9] mr-10">
          STREET HUB<br/>CONNECT
        </Link>
        <div className="hidden md:flex h-full items-center font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href as any}
                className={`h-full flex items-center transition-colors duration-0 px-4 ${
                  isActive
                    ? "text-white border-b border-white bg-transparent"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden lg:flex items-center">
          <svg className="absolute left-2 w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-b border-[#1A1A1A] text-white font-mono text-[9px] pl-6 pr-2 py-1 w-32 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 h-6"
          />
        </div>
        <div className="w-6 h-6 rounded-full border border-[#1A1A1A] bg-[#131313] flex items-center justify-center font-mono text-[8px] text-white hover:border-white transition-colors cursor-pointer">
          PR
        </div>
      </div>
    </nav>
  );
}
