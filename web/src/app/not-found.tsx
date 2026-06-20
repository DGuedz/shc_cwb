import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-start justify-center px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">404 // not found</p>
      <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3.75rem)] font-bold uppercase tracking-[-0.06em]">Rota fora do grid</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
        A pagina requisitada nao existe no mapa funcional da plataforma. Volte para a operacao principal ou reabra o catalogo publico.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="primary-button">
          voltar ao inicio
        </Link>
        <Link
          href="/catalogo"
          className="inline-flex items-center justify-center border border-white/15 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-white/75 hover:border-white/35 hover:text-white"
        >
          abrir catalogo
        </Link>
      </div>
    </div>
  );
}
