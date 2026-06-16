export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-16 border-t border-[#393939] bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-mono font-bold text-[#10B981] tracking-widest uppercase">STREET HUB CONNECT</span>
          <span className="font-mono text-xs text-[#A3A3A3] tracking-widest">© 2026 ASTEPAM. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="font-mono text-xs text-[#10B981] flex items-center gap-2 tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            SYSTEM STATUS: ONLINE
          </span>
          <span className="font-mono text-xs text-[#393939] tracking-widest">v2.4.0-STABLE</span>
        </div>
      </div>
    </footer>
  );
}
