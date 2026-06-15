"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { usePathname } from "next/navigation";

import { APP_NAME, DASHBOARD_LINKS, PUBLIC_NAV_LINKS } from "@/lib/constants";
import type { AppRoute, ShellNavItem } from "@/lib/constants";

type ShellProps = {
  children: React.ReactNode;
  badge?: string;
  navItems?: readonly ShellNavItem[];
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function AppShell({
  children,
  badge = "Brutalismo Institucional",
  navItems = PUBLIC_NAV_LINKS,
}: ShellProps) {
  const pathname = usePathname();

  return (
    <MotionProvider>
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:color-mix(in_srgb,var(--surface)_84%,transparent)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
            <div>
              <Link href="/" className="font-heading text-2xl font-bold uppercase tracking-[-0.04em]">
                {APP_NAME}
              </Link>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]">
                {badge}
              </p>
            </div>
            <nav className="flex max-w-[68vw] flex-wrap items-center justify-end gap-3 md:gap-6">
              {navItems.map((item) => {
                const isAnchor = item.href.startsWith("#");
                const active = !isAnchor && (pathname === item.href || pathname.startsWith(`${item.href}/`));

                return (
                  isAnchor ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                        active ? "text-white" : "text-white/55 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                );
              })}
            </nav>
          </div>
        </header>
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 md:px-8 md:py-12">
          {children}
        </main>
      </div>
    </MotionProvider>
  );
}

export function DashboardShell({
  children,
  roleLabel,
}: {
  children: React.ReactNode;
  roleLabel: string;
}) {
  const pathname = usePathname();

  return (
    <AppShell badge={roleLabel} navItems={DASHBOARD_LINKS}>
      <div className="mb-10 flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
            Dashboard protegido
          </p>
          <h1 className="font-heading text-5xl font-bold uppercase tracking-[-0.05em]">
            Operacao conectada
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          {DASHBOARD_LINKS.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border px-4 py-3 font-mono text-xs uppercase tracking-[0.24em] transition-colors ${
                  active
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </AppShell>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <m.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.45 }}
      className="grid gap-6 border-b border-white/10 pb-8 md:grid-cols-[1.15fr_0.85fr]"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-[-0.05em] md:text-6xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl self-end text-lg leading-8 text-white/72">{body}</p>
    </m.section>
  );
}

export function MetricCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="panel">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">{label}</p>
      <p className={`mt-4 font-mono text-5xl ${accent ? "text-[var(--accent)]" : "text-white"}`}>{value}</p>
    </div>
  );
}

export function EmptyState({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: AppRoute;
  cta: string;
}) {
  return (
    <div className="panel flex flex-col gap-4 text-left">
      <h2 className="font-heading text-3xl font-bold uppercase tracking-[-0.04em]">{title}</h2>
      <p className="max-w-xl text-white/70">{body}</p>
      <Link
        href={href}
        className="inline-flex w-fit border border-[var(--accent)] px-5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/10"
      >
        {cta}
      </Link>
    </div>
  );
}
