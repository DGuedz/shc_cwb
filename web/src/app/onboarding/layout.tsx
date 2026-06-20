import { ReactNode } from 'react';

export default async function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col font-archivo selection:bg-[#10B981] selection:text-black">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        {/* Background Grid Pattern Brutalista */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#393939_1px,transparent_1px),linear-gradient(to_bottom,#393939_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
        <div className="w-full max-w-3xl relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
