"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import type { AgreementViewModel } from "@/lib/data";
import type { UserRole } from "@/types/domain";

type StepKey = "company" | "artist" | "shc";

const stepOrder: StepKey[] = ["company", "artist", "shc"];

function formatCurrency(value: number) {
  return `R$ ${value.toLocaleString("pt-BR")}`;
}

function getViewerLabel(role: UserRole) {
  return role === "contractor" ? "empresa logada" : "artista logado";
}

export function AgreementFlow({
  agreement,
  sessionRole,
  currentEmail,
}: {
  agreement: AgreementViewModel;
  sessionRole: UserRole;
  currentEmail: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [confirmed, setConfirmed] = useState<Record<StepKey, boolean>>({
    company: false,
    artist: false,
    shc: false,
  });
  const [reviewRequested, setReviewRequested] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroShift = useSpring(useTransform(scrollYProgress, [0, 1], [0, -52]), {
    stiffness: 120,
    damping: 24,
  });

  const completedCount = stepOrder.filter((item) => confirmed[item]).length;
  const allConfirmed = completedCount === stepOrder.length;
  const nextStep = stepOrder.find((item) => !confirmed[item]);
  const showSuccess = reviewRequested && allConfirmed;

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden text-white">

      {/* ── POP-UP DE CONCLUSÃO ─────────────────────────────────────── */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            key="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="relative w-full max-w-lg overflow-hidden border border-white/10 bg-[#080808]/90 backdrop-blur-2xl"
            >
              {/* sheen superior */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/60 to-transparent" />
              {/* glow de fundo */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10B981]/10 blur-[80px]" />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-6 px-8 py-12 text-center">
                {/* Ícone animado */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
                  className="flex h-16 w-16 items-center justify-center border border-[#10B981]/30 bg-[#10B981]/10"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">
                    acordo firmado
                  </p>
                  <h2 className="mt-3 font-archivo text-3xl font-bold uppercase tracking-tight text-white">
                    Parceria formalizada
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-7 text-white/60">
                  O acordo tripartite entre{" "}
                  <span className="font-semibold text-white">{agreement.company.name}</span>,{" "}
                  <span className="font-semibold text-white">{agreement.artist.stageName}</span> e{" "}
                  <span className="font-semibold text-white">Street Hub Connect</span> foi registrado com
                  sucesso.
                </p>

                <div className="w-full border border-white/8 bg-white/[0.03] px-5 py-4 text-left">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#10B981]">próximos passos</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Verifique seu email com os detalhes do acordo",
                      "O contrato chegará aos 3 titulares em instantes",
                      "Aguarde atualizações da Street Hub Connect",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-white/65">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10B981]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <a
                    href="/dashboard/acordos"
                    className="flex-1 border border-[#10B981] bg-[#10B981]/10 px-5 py-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#10B981] transition-colors hover:bg-[#10B981] hover:text-black"
                  >
                    ver meus acordos
                  </a>
                  <a
                    href="/dashboard"
                    className="flex-1 border border-white/10 bg-white/5 px-5 py-3 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-white/50 transition-colors hover:border-white/20 hover:text-white"
                  >
                    voltar ao início
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-[#10B981]/10 blur-[120px]" />
        <div className="absolute right-0 top-[28rem] h-72 w-72 rounded-full bg-[#1351B4]/10 blur-[140px]" />
      </div>

      <motion.section
        style={{ y: heroShift }}
        className="relative overflow-hidden border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-2xl md:px-10 md:py-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent" />

        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-4xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">
                fluxo de acordo tripartite
              </p>
              <h1 className="mt-4 font-archivo text-4xl font-bold uppercase tracking-tight md:text-6xl">
                Confirmacao clara
                <br />
                para assinatura institucional
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72 md:text-base">
                {agreement.agreementTitle}, observando o memorial e estatuto da associacao. O usuario ve
                apenas o que precisa aprovar, quem ja confirmou e qual e o proximo passo para liberar a
                assinatura.
              </p>
            </div>

            <div className="grid gap-3 md:min-w-[18rem]">
              <div className="border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">parte logada</p>
                <p className="mt-2 font-archivo text-lg font-bold uppercase">{getViewerLabel(sessionRole)}</p>
                <p className="mt-1 font-mono text-[11px] text-[#10B981]">{currentEmail}</p>
              </div>
              <div className="border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">progresso</p>
                <p className="mt-2 font-mono text-xl text-white">{completedCount}/3 confirmacoes</p>
                <p className="mt-1 text-sm text-white/60">
                  {nextStep ? `Proximo passo: ${stepLabel[nextStep]}` : "Fluxo pronto para revisao e assinatura"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard label="empresa" value={agreement.company.name} />
            <MetricCard label="artista" value={agreement.artist.stageName} />
            <MetricCard label="valor aprovado" value={formatCurrency(agreement.agreedBudget)} accent />
            <MetricCard label="evento / data" value={agreement.validityLabel} />
          </div>
        </div>
      </motion.section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">termos em portugues claro</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <TermRow label="Objeto" value={agreement.opportunity.title} />
            <TermRow label="Valor total" value={formatCurrency(agreement.agreedBudget)} />
            <TermRow label="Local base" value={agreement.venueLabel} />
            <TermRow label="Data de referencia" value={agreement.validityLabel} />
            <TermRow label="Segmento" value={agreement.opportunity.segment} />
            <TermRow label="Governanca" value="Validacao humana pela Street Hub Connect antes da assinatura" />
          </div>
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm leading-7 text-white/72">{agreement.agreementSummary}</p>
          </div>
        </div>

        <div className="border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">briefing consolidado</p>
          <p className="mt-5 text-sm leading-7 text-white/72">
            {agreement.opportunity.briefing || "Oportunidade sincronizada com escopo institucional e agenda valida."}
          </p>
          <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
            <StatusPill label="status do match" value={agreement.match.status.replaceAll("_", " ")} />
            <StatusPill label="prova tecnica" value="oculta na experiencia principal" />
            <StatusPill label="camada de envio" value="smtp hostinger em evolucao" />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">3 passos visuais</p>
            <h2 className="mt-2 font-archivo text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Quem confirma, o que aceita e quem falta
            </h2>
          </div>
          <div className="hidden min-w-[12rem] gap-2 md:flex">
            {stepOrder.map((item) => (
              <div key={item} className="h-1 flex-1 overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-[#10B981]"
                  animate={{ width: confirmed[item] ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {agreement.obligations.map((item, index) => {
            const isConfirmed = confirmed[item.id];
            const isLocked = index > 0 && !confirmed[stepOrder[index - 1]];

            return (
              <StepCard
                key={item.id}
                accent={item.id === "shc"}
                confirmed={isConfirmed}
                disabled={isLocked}
                label={`passo ${index + 1}`}
                title={stepLabel[item.id]}
                partyName={
                  item.id === "company"
                    ? agreement.company.name
                    : item.id === "artist"
                      ? agreement.artist.stageName
                      : "Street Hub Connect"
                }
                summary={item.summary}
                description={item.title}
                buttonLabel={
                  item.id === "company"
                    ? "empresa confirma"
                    : item.id === "artist"
                      ? "artista aceita"
                      : "shc valida"
                }
                onConfirm={() => setConfirmed((current) => ({ ...current, [item.id]: true }))}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">proxima acao</p>
          <h2 className="mt-3 font-archivo text-3xl font-bold uppercase tracking-tight">Revisao e assinatura</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">
            O hash, o template institucional e os metadados de auditoria continuam existindo por baixo. Aqui
            o usuario ve apenas se o acordo ja passou por empresa, artista e validacao SHC.
          </p>
          <div className="mt-6 border-t border-white/10 pt-5">
            <button
              type="button"
              disabled={!allConfirmed}
              onClick={() => setReviewRequested(true)}
              className={`w-full border px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] transition-colors ${
                allConfirmed
                  ? "border-[#1351B4] bg-[#1351B4] text-white hover:bg-white hover:text-[#1351B4]"
                  : "cursor-not-allowed border-white/10 bg-white/5 text-white/25"
              }`}
            >
              {reviewRequested ? "revisao solicitada" : "solicitar revisao e assinatura"}
            </button>
            <p className="mt-3 text-xs text-white/50">
              {allConfirmed
                ? "Fluxo completo. O proximo modulo pode anexar PDF, disparar email e liberar assinatura."
                : "Assinatura bloqueada ate os tres passos ficarem confirmados."}
            </p>
          </div>
        </div>

        <div className="border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">entregaveis logicos por email</p>
          <div className="mt-5 space-y-4">
            {agreement.deliveryPackets.map((packet) => (
              <article key={packet.id} className="border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{packet.title}</p>
                    <h3 className="mt-2 font-archivo text-lg font-bold uppercase tracking-tight">{packet.recipient}</h3>
                  </div>
                  <span className="border border-[#10B981]/30 bg-[#10B981]/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-[#10B981]">
                    contrato + prova
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">{packet.summary}</p>
                <ul className="mt-4 space-y-2">
                  {packet.items.map((item) => (
                    <li key={item} className="border-l border-white/10 pl-3 text-sm text-white/62">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <span className="h-2 w-2 rounded-full bg-[#10B981]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#10B981]">camada tecnica discreta</p>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <TechRow label="template institucional" value={agreement.audit.templateLabel} />
          <TechRow label="prova de integridade" value={agreement.audit.proofLabel} />
          <TechRow label="hash resumido" value={agreement.audit.hashPreview} />
        </div>
      </section>
    </div>
  );
}

const stepLabel: Record<StepKey, string> = {
  company: "empresa confirma",
  artist: "artista aceita",
  shc: "shc valida",
};

function MetricCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="border border-white/10 bg-black/35 px-4 py-4 backdrop-blur-xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</p>
      <p className={`mt-3 font-mono text-sm uppercase ${accent ? "text-[#10B981]" : "text-white"}`}>{value}</p>
    </div>
  );
}

function TermRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/10 pb-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</p>
      <p className="mt-2 text-sm leading-6 text-white/78">{value}</p>
    </div>
  );
}

function StatusPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border border-white/10 px-3 py-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/72">{value}</span>
    </div>
  );
}

function StepCard({
  label,
  title,
  partyName,
  description,
  summary,
  buttonLabel,
  confirmed,
  disabled,
  accent,
  onConfirm,
}: {
  label: string;
  title: string;
  partyName: string;
  description: string;
  summary: string;
  buttonLabel: string;
  confirmed: boolean;
  disabled: boolean;
  accent?: boolean;
  onConfirm: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden border p-6 backdrop-blur-2xl ${
        confirmed
          ? "border-[#10B981]/40 bg-[#10B981]/8"
          : accent
            ? "border-white/12 bg-white/[0.04]"
            : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</p>
            <h3 className="mt-3 font-archivo text-2xl font-bold uppercase tracking-tight">{title}</h3>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#10B981]">{partyName}</p>
          </div>
          <span
            className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.24em] ${
              confirmed
                ? "border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981]"
                : "border-white/10 bg-black/30 text-white/50"
            }`}
          >
            {confirmed ? "confirmado" : "pendente"}
          </span>
        </div>

        <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
          <p className="text-base leading-7 text-white">{description}</p>
          <p className="text-sm leading-6 text-white/65">{summary}</p>
        </div>

        <div className="mt-auto pt-6">
          {confirmed ? (
            <div className="border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#10B981]">
              passo confirmado
            </div>
          ) : (
            <button
              type="button"
              disabled={disabled}
              onClick={onConfirm}
              className={`w-full border px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] transition-colors ${
                disabled
                  ? "cursor-not-allowed border-white/10 bg-white/5 text-white/25"
                  : "border-white/12 bg-black/30 text-white hover:border-[#10B981] hover:text-[#10B981]"
              }`}
            >
              {disabled ? "aguardando passo anterior" : buttonLabel}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function TechRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-black/35 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</p>
      <p className="mt-3 font-mono text-xs uppercase text-white/70">{value}</p>
    </div>
  );
}
