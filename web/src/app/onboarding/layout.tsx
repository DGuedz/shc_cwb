import { ReactNode } from 'react';
import Link from 'next/link';

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col font-archivo selection:bg-[#10B981] selection:text-black">
      {/* Top Header Simplificado */}
      <header className="border-b border-[#393939] px-6 py-4 flex justify-between items-center bg-[#0E0E0E]">
        <Link href="/" className="font-archivo font-bold text-xl tracking-tighter uppercase hover:text-[#10B981] transition-colors">
          Street Hub Connect
        </Link>
        <div className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-3 py-1 uppercase tracking-widest border border-[#10B981]/30">
          SECURE_ENROLLMENT
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Background Grid Pattern Brutalista */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#393939_1px,transparent_1px),linear-gradient(to_bottom,#393939_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
        <div className="w-full max-w-3xl relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
