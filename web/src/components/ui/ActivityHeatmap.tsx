'use client';

import { useMemo, useState } from 'react';

const WEEKS = 52;
const DAY_LABELS = ['S', '', 'T', '', 'Q', '', 'S', 'D']; // Mon–Sun, label every 2
const MONTHS_PT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateCells(seed: string): { date: Date; value: number }[] {
  const rand = seededRand(seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0));
  const today = new Date();
  const cells: { date: Date; value: number }[] = [];

  for (let w = WEEKS - 1; w >= 0; w--) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(today.getDate() - w * 7 - (6 - d));
      const r = rand();
      const recency = 1 - w / WEEKS;
      const raw = r * recency;
      const value = raw < 0.42 ? 0 : raw < 0.56 ? 1 : raw < 0.70 ? 2 : raw < 0.84 ? 3 : 4;
      cells.push({ date, value });
    }
  }
  return cells;
}

function cellColor(value: number) {
  switch (value) {
    case 0: return 'bg-[#1c1c1c]';
    case 1: return 'bg-[#10B981]/25';
    case 2: return 'bg-[#10B981]/50';
    case 3: return 'bg-[#10B981]/78';
    case 4: return 'bg-[#10B981]';
    default: return 'bg-[#1c1c1c]';
  }
}

function getMonthLabels(cells: { date: Date }[]) {
  const labels: { label: string; colIndex: number }[] = [];
  let lastMonth = -1;
  cells.forEach((cell, i) => {
    const col = Math.floor(i / 7);
    const month = cell.date.getMonth();
    if (month !== lastMonth) {
      if (!labels.find(l => l.colIndex === col)) {
        labels.push({ label: MONTHS_PT[month], colIndex: col });
      }
      lastMonth = month;
    }
  });
  return labels;
}

type StatCategory = { label: string; count: number; accent?: boolean };

export function ActivityHeatmap({
  artistId,
  exp,
  stats,
}: {
  artistId: string;
  exp: number;
  stats?: StatCategory[];
}) {
  const [tooltip, setTooltip] = useState<{ date: Date; value: number; x: number; y: number } | null>(null);

  const cells = useMemo(() => generateCells(artistId), [artistId]);
  const monthLabels = useMemo(() => getMonthLabels(cells), [cells]);

  const columns = useMemo(() => {
    const cols: { date: Date; value: number }[][] = [];
    for (let w = 0; w < WEEKS; w++) cols.push(cells.slice(w * 7, w * 7 + 7));
    return cols;
  }, [cells]);

  const activeDays = cells.filter(c => c.value > 0).length;

  const defaultStats: StatCategory[] = stats ?? [
    { label: 'dias ativos', count: activeDays, accent: true },
    { label: 'shows', count: 12 },
    { label: 'contratos', count: 3 },
    { label: 'conexoes', count: 8 },
    { label: 'votos', count: 5 },
  ];

  return (
    <div className="flex flex-col gap-4">

      {/* Month labels */}
      <div className="flex pl-6 pr-0 gap-0">
        {columns.map((_, wi) => {
          const label = monthLabels.find(m => m.colIndex === wi);
          return (
            <div key={wi} className="flex-1 min-w-0">
              {label ? (
                <span className="font-mono text-[9px] text-neutral-500 uppercase whitespace-nowrap">
                  {label.label}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Grid rows: day label + cells */}
      <div className="flex gap-1.5">
        {/* Day labels column */}
        <div className="flex flex-col justify-between pb-px" style={{ width: '18px', flexShrink: 0 }}>
          {['S','','T','','Q','','S','D'].map((label, i) => (
            <span key={i} className="font-mono text-[9px] text-neutral-500 leading-none" style={{ height: '12.5%' }}>
              {label}
            </span>
          ))}
        </div>

        {/* Columns of cells */}
        <div className="flex gap-[3px] flex-1 min-w-0">
          {columns.map((col, wi) => (
            <div key={wi} className="flex flex-col gap-[3px] flex-1 min-w-0">
              {col.map((cell, di) => (
                <div
                  key={di}
                  className={`w-full aspect-square rounded-[2px] cursor-default transition-opacity hover:opacity-80 ${cellColor(cell.value)}`}
                  onMouseEnter={e => {
                    const r = e.currentTarget.getBoundingClientRect();
                    setTooltip({ ...cell, x: r.left + r.width / 2, y: r.top });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1 mt-0.5">
        <span className="font-mono text-[9px] text-neutral-500 mr-1">Menos</span>
        {[0,1,2,3,4].map(v => (
          <div key={v} className={`w-3 h-3 rounded-[2px] ${cellColor(v)}`} />
        ))}
        <span className="font-mono text-[9px] text-neutral-500 ml-1">Mais</span>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-5 gap-px bg-[#393939] border border-[#393939] mt-2">
        {defaultStats.map(({ label, count, accent }) => (
          <div key={label} className="bg-[#0E0E0E] px-4 py-3 flex flex-col gap-1">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">{label}</span>
            <span className={`font-mono text-2xl font-bold leading-none ${accent ? 'text-[#10B981]' : 'text-white'}`}>
              {count}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none bg-[#0E0E0E] border border-[#393939] px-2.5 py-1.5 font-mono text-[9px] text-white shadow-lg"
          style={{ left: tooltip.x, top: tooltip.y - 32, transform: 'translateX(-50%)' }}
        >
          {tooltip.date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
          {' · '}
          <span className="text-[#10B981]">
            {tooltip.value === 0 ? 'sem atividade' : `${tooltip.value * 30} pts`}
          </span>
        </div>
      )}
    </div>
  );
}
