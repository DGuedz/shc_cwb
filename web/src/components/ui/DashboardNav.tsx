'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { signOutAction } from "@/app/actions";
import type { SessionUser } from "@/types/domain";

type NavLink = { href: string; label: string };

const publicLinks: NavLink[] = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/pitchdeck", label: "Pitchdeck" },
  { href: "/catalogo", label: "Artistas" },
  { href: "/news", label: "News" },
];

const artistLinks: NavLink[] = [
  { href: "/dashboard/dossie", label: "Meu Dossiê" },
  { href: "/dashboard/acordos", label: "Acordos" },
  { href: "/catalogo", label: "Artistas" },
  { href: "/news", label: "News" },
];

const contractorLinks: NavLink[] = [
  { href: "/catalogo", label: "Artistas" },
  { href: "/oportunidades/criar", label: "Oportunidades" },
  { href: "/dashboard/matchboard", label: "Matchboard" },
  { href: "/news", label: "News" },
];

function LogoutButton({ onDone }: { onDone?: () => void }) {
  const [isPending, startTransition] = useTransition();
  return (
    <form action={() => startTransition(() => signOutAction())}>
      <button
        type="submit"
        disabled={isPending}
        onClick={onDone}
        className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors disabled:opacity-40"
      >
        {isPending ? "saindo..." : "sair"}
      </button>
    </form>
  );
}

export function DashboardNav({ session }: { session?: SessionUser | null }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links =
    session?.role === "artist"
      ? artistLinks
      : session?.role === "contractor"
      ? contractorLinks
      : publicLinks;

  const roleLabel =
    session?.role === "artist"
      ? "artista"
      : session?.role === "contractor"
      ? "contratante"
      : null;

  const initials = session?.email
    ? session.email.slice(0, 2).toUpperCase()
    : null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname?.startsWith(href + "/");

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/95 backdrop-blur-md h-14">
        <div className="max-w-[var(--spacing-container-max,1400px)] mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        {/* Left: logo + links */}
        <div className="flex items-center h-full gap-0">
          <Link
            href="/"
            className="font-archivo text-base font-bold tracking-tighter text-white uppercase leading-[0.9] mr-10 whitespace-nowrap hover:text-[#10B981] transition-colors"
          >
            STREET HUB CONNECT
          </Link>
          <div className="hidden md:flex h-full items-center font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className={`h-full flex items-center px-4 transition-colors ${
                  isActive(link.href)
                    ? "text-white border-b border-white"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: auth area */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3 border-l border-[#1A1A1A] pl-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#10B981] border border-[#10B981]/30 bg-[#10B981]/10 px-2 py-1">
                {roleLabel}
              </span>
              <div className="w-6 h-6 rounded-full border border-[#393939] bg-[#1a1a1a] flex items-center justify-center font-mono text-[8px] text-neutral-300">
                {initials}
              </div>
              <div className="border-l border-[#1A1A1A] pl-3">
                <LogoutButton />
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/waitlist"
                className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 border border-[#393939] px-3 py-1.5 hover:border-white hover:text-white transition-colors whitespace-nowrap"
              >
                WAITLIST
              </Link>
              <Link
                href="/sign-in"
                className="bg-[#10B981] text-black font-mono text-[9px] uppercase tracking-widest font-bold px-4 py-1.5 hover:bg-white transition-colors whitespace-nowrap"
              >
                ENTRAR
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1px] bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-[1px] bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-20 px-6 flex flex-col gap-8 md:hidden border-b border-[#1A1A1A]"
          >
            <div className="flex flex-col gap-6 border-b border-[#393939] pb-8">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href as any}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-sm text-white hover:text-[#10B981] transition-colors uppercase tracking-widest"
                >
                  [{String(i + 1).padStart(2, "0")}] {link.label}
                </Link>
              ))}
              {!session && (
                <Link
                  href="/waitlist"
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-sm text-[#10B981] uppercase tracking-widest"
                >
                  [{String(links.length + 1).padStart(2, "0")}] WAITLIST
                </Link>
              )}
            </div>

            <div className="flex items-center justify-between">
              {session ? (
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[#10B981] tracking-widest border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 uppercase">
                    {roleLabel}
                  </span>
                  <LogoutButton onDone={() => setIsOpen(false)} />
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#10B981] text-black font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 hover:bg-white transition-colors"
                >
                  ENTRAR
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
