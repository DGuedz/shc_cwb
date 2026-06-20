'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { MouseEvent } from 'react';
import QRCode from 'react-qr-code';

interface ArtistIDCardProps {
  artist: {
    id: string;
    stageName: string;
    genre: string;
    city: string;
    state: string;
    verified: boolean;
    exp?: number;
    health?: 'OPTIMAL' | 'WARNING' | 'REHAB';
  };
}

export function ArtistIDCard({ artist }: ArtistIDCardProps) {
  // Motion values for the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for a natural, premium feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Dynamic glare effect based on mouse position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Generate a mock URL for the QR code
  const publicProfileUrl = `https://streethub.connect/id/${artist.id.slice(0, 8)}`;

  return (
    <div
      className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] aspect-[1/1.6] mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Card Body: Glass & Metal Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#131313]/90 to-[#0E0E0E]/95 backdrop-blur-2xl border border-[#393939] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-hidden flex flex-col justify-between p-6 z-10">
          
          {/* Dynamic Glare Overlay */}
          <motion.div 
            className="absolute inset-0 pointer-events-none z-50 opacity-30 mix-blend-overlay"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 50%)",
              left: glareX,
              top: glareY,
              transform: "translate(-50%, -50%)",
              width: "200%",
              height: "200%"
            }}
          />

          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#393939] pb-4 relative z-20">
            <div>
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">SHC_PASS</p>
              <h2 className="font-archivo text-2xl font-bold text-white uppercase tracking-tighter mt-1">{artist.stageName}</h2>
            </div>
            <div className="w-8 h-8 border border-[#10B981]/30 bg-[#10B981]/10 flex items-center justify-center">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse shadow-[0_0_8px_#10B981]"></span>
            </div>
          </div>

          {/* Metadata */}
          <div className="flex flex-col gap-4 relative z-20">
            <div className="flex justify-between items-end">
              <div>
                <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">MEMBER_ID</p>
                <p className="font-mono text-xs text-[#10B981]">SHC-{artist.id.slice(0, 8).toUpperCase()}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">POE / EXP</p>
                <p className="font-mono text-xs text-[#10B981] font-bold">{artist.exp || 1250}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">DISCIPLINE</p>
                <p className="font-mono text-xs text-white">{artist.genre}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">BASE</p>
                <p className="font-mono text-xs text-white">{artist.city}</p>
              </div>
            </div>
          </div>

          {/* QR Code Container */}
          <div className="bg-black/50 border border-[#393939] p-4 flex flex-col items-center justify-center gap-3 relative z-20 mt-4 backdrop-blur-md">
            <div className="bg-white p-2">
              <QRCode 
                value={publicProfileUrl} 
                size={100}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 100 100`}
              />
            </div>
            <p className="font-mono text-[8px] text-neutral-500 uppercase tracking-[0.2em] text-center w-full break-all">
              {publicProfileUrl.replace('https://', '')}
            </p>
          </div>

          {/* Footer Status */}
          <div className="mt-4 pt-4 border-t border-[#393939] flex justify-between items-center relative z-20">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">HEALTH</span>
            <span className={`font-mono text-[10px] px-2 py-1 uppercase border ${
              (artist.health || 'OPTIMAL') === 'OPTIMAL' 
                ? "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30" 
                : (artist.health === 'WARNING' 
                    ? "text-yellow-500 bg-yellow-500/10 border-yellow-500/30" 
                    : "text-red-500 bg-red-500/10 border-red-500/30")
            }`}>
              {artist.health || 'OPTIMAL'}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
