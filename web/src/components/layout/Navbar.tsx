import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 h-16 bg-[#131313]/90 backdrop-blur-xl border-b border-[#393939]">
      <Link href="/" className="font-archivo font-bold uppercase tracking-tight text-white hover:text-[#10B981] transition-colors">
        STREET HUB CONNECT
      </Link>
      <div className="hidden md:flex items-center gap-8">
          <Link className="font-mono text-xs text-[#A3A3A3] hover:text-[#10B981] transition-colors uppercase tracking-widest" href="/pitchdeck">Pitchdeck</Link>
          <Link className="font-mono text-xs text-[#A3A3A3] hover:text-[#10B981] transition-colors uppercase tracking-widest" href="/catalogo">Artistas</Link>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-[#10B981] tracking-widest border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 hidden sm:block">
            SYSTEM LINKED
          </span>
          <Link href="/waitlist" className="font-mono text-xs text-white border border-[#393939] px-4 py-2 hover:border-[#10B981] hover:text-[#10B981] transition-colors uppercase tracking-widest">
            WAITLIST
          </Link>
        </div>
    </nav>
  );
}
