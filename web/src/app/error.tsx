"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-start justify-center px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-red-300">500 // error boundary</p>
      <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3.75rem)] font-bold uppercase tracking-[-0.06em]">
        Sistema em degradacao controlada
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
        O app interceptou uma excecao inesperada e manteve a experiencia consistente com o design system.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="primary-button" onClick={() => unstable_retry()}>
          tentar novamente
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center border border-white/15 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-white/75 hover:border-white/35 hover:text-white"
        >
          voltar ao inicio
        </Link>
      </div>
    </div>
  );
}
