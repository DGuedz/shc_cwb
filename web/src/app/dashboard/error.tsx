"use client";

import { useEffect } from "react";

export default function DashboardError({
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
    <div className="panel">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-red-300">dashboard boundary</p>
      <h1 className="mt-3 font-heading text-4xl font-bold uppercase tracking-[-0.05em]">
        Falha no modulo operacional
      </h1>
      <p className="mt-4 max-w-2xl text-white/72">
        O segmento protegido encontrou uma excecao inesperada. O boundary isola o dashboard sem derrubar a aplicacao inteira.
      </p>
      <button className="primary-button mt-8" onClick={() => unstable_retry()}>
        tentar novamente
      </button>
    </div>
  );
}
