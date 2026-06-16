'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 h-16 bg-[#131313]/90 backdrop-blur-xl border-b border-[#393939]">
        <Link href="/" className="font-archivo font-bold uppercase tracking-tight text-white hover:text-[#10B981] transition-colors">
          STREET HUB CONNECT
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="font-mono text-xs text-[#A3A3A3] hover:text-[#10B981] transition-colors uppercase tracking-widest" href="/pitchdeck">Pitchdeck</Link>
          <Link className="font-mono text-xs text-[#A3A3A3] hover:text-[#10B981] transition-colors uppercase tracking-widest" href="/catalogo">Artistas</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <span className="font-mono text-[10px] text-[#10B981] tracking-widest border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1">
            SYSTEM LINKED
          </span>
          <Link href="/waitlist" className="font-mono text-xs text-white border border-[#393939] px-4 py-2 hover:border-[#10B981] hover:text-[#10B981] transition-colors uppercase tracking-widest">
            WAITLIST
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-6 h-[1px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#131313] pt-24 px-6 flex flex-col gap-8 md:hidden border-b border-[#393939]"
          >
            <div className="flex flex-col gap-6 border-b border-[#393939] pb-8">
              <Link onClick={() => setIsOpen(false)} className="font-mono text-sm text-white hover:text-[#10B981] transition-colors uppercase tracking-widest" href="/pitchdeck">
                [01] Pitchdeck
              </Link>
              <Link onClick={() => setIsOpen(false)} className="font-mono text-sm text-white hover:text-[#10B981] transition-colors uppercase tracking-widest" href="/catalogo">
                [02] Artistas
              </Link>
              <Link onClick={() => setIsOpen(false)} className="font-mono text-sm text-[#10B981] transition-colors uppercase tracking-widest" href="/waitlist">
                [03] Waitlist
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#10B981] tracking-widest border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1">
                SYSTEM LINKED
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
