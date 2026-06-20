'use client';

import Link from 'next/link';
import type { Route } from 'next';

type Variant = 'primary' | 'secondary' | 'ghost';

interface GlassCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const sizes = {
  sm: 'px-4 py-2 text-[8px]',
  md: 'px-6 py-3 text-[9px]',
  lg: 'px-8 py-4 text-[10px]',
};

const variants: Record<Variant, string> = {
  primary: [
    'bg-[#10B981] text-black',
    'hover:shadow-[0_0_32px_rgba(16,185,129,0.45),inset_0_1px_0_rgba(255,255,255,0.35)]',
    'hover:bg-[#0fa572]',
  ].join(' '),

  secondary: [
    'border border-[#393939] text-white',
    'bg-[#0A0A0A]/60 backdrop-blur-md',
    'hover:border-[#10B981]/60',
    'hover:shadow-[0_0_20px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]',
    'hover:bg-[#0A0A0A]/80',
  ].join(' '),

  ghost: [
    'border border-[#393939]/60 text-neutral-400',
    'bg-transparent backdrop-blur-sm',
    'hover:border-[#393939] hover:text-white',
    'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
  ].join(' '),
};

export function GlassCTA({
  href,
  children,
  variant = 'primary',
  className = '',
  size = 'md',
  onClick,
}: GlassCTAProps) {
  const base = [
    'relative overflow-hidden group',
    'font-mono font-bold uppercase tracking-widest',
    'transition-all duration-300',
    'flex items-center gap-2 whitespace-nowrap',
    'select-none',
  ].join(' ');

  return (
    <Link
      href={href as Route}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {/* Glass overlay — fades in on hover */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-b from-white/8 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Glare sweep — slides across on hover */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/18 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

/* Button version (no href needed) */
export function GlassCTAButton({
  children,
  variant = 'primary',
  className = '',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
}: Omit<GlassCTAProps, 'href'> & { type?: 'button' | 'submit'; disabled?: boolean }) {
  const base = [
    'relative overflow-hidden group',
    'font-mono font-bold uppercase tracking-widest',
    'transition-all duration-300',
    'flex items-center gap-2 whitespace-nowrap',
    'select-none cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' ');

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-b from-white/8 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/18 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
