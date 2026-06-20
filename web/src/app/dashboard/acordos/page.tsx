'use client';

export default function DealsPipeline() {
  const deals = [
    { id: 1, artist: "DJ ALX", status: "PENDING_ZK_PROOF", value: "R$ 4.000", date: "15/06/2026", hash: "0x8f2a...3b9c", block: "14589201" },
    { id: 2, artist: "MC RZ", status: "VALIDATING", value: "R$ 7.000", date: "14/06/2026", hash: "0x3e1d...9a2f", block: "14588934" },
    { id: 3, artist: "LIA B", status: "AWAITING_SIG", value: "R$ 10.000", date: "13/06/2026", hash: "0x1a4b...7d8e", block: "14588102" },
    { id: 4, artist: "VNXX", status: "SETTLED", value: "R$ 3.500", date: "10/06/2026", hash: "0x9c5f...2e1a", block: "14587045" }
  ];
  
  return (
      <div className="flex-grow flex flex-col gap-8 w-full">
        {/* Hero Header */}
        <header className="mt-12 flex flex-col items-start gap-4 relative">
          <div className="absolute right-0 top-0 border border-white/10 bg-[#0E0E0E] px-4 py-2 hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-mono text-xs text-[#10B981] tracking-widest uppercase">SHC_NETWORK // ZK_READY</span>
          </div>
          <h1 className="font-archivo text-[clamp(2.5rem,5.5vw,4rem)] font-bold text-white tracking-tighter uppercase leading-[0.88] max-w-3xl">
            DEALS <span className="text-[#10B981]">EXPLORER</span>
          </h1>
          <p className="font-mono text-sm text-neutral-400 max-w-2xl border-l-2 border-[#10B981] pl-4">
            Acompanhe as transações de contratos e liquidações. Dados sensíveis ofuscados (ZK).
          </p>
        </header>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "LATEST BLOCK", value: "14589201" },
            { label: "PENDING TXS", value: "2" },
            { label: "SETTLED TXS", value: "1" },
            { label: "TVL (SHC)", value: "R$ 24.500" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#0E0E0E] border border-[#393939] p-4 flex flex-col gap-2">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                {stat.label}
              </span>
              <span className="font-mono text-xl text-white">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
        
        {/* Deals List */}
        <div className="bg-[#0E0E0E] border border-[#393939] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-[#393939] bg-[#131313]">
                <tr className="text-left">
                  <th className="p-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    TX_HASH
                  </th>
                  <th className="p-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    BLOCK
                  </th>
                  <th className="p-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    TIMESTAMP
                  </th>
                  <th className="p-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    PARTICIPANT_ID
                  </th>
                  <th className="p-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    AMOUNT
                  </th>
                  <th className="p-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr key={deal.id} className="border-t border-[#393939] hover:bg-[#131313] transition-colors group">
                    <td className="p-4 font-mono text-sm text-[#10B981] group-hover:underline cursor-pointer">
                      {deal.hash}
                    </td>
                    <td className="p-4 font-mono text-xs text-white">
                      {deal.block}
                    </td>
                    <td className="p-4 font-mono text-xs text-neutral-400">
                      {deal.date}
                    </td>
                    <td className="p-4 font-mono text-xs text-neutral-300">
                      SHC_ART_{deal.artist.replace(" ", "_")}
                    </td>
                    <td className="p-4 font-mono text-sm text-white">
                      {deal.value}
                    </td>
                    <td className="p-4">
                      <span className={`font-mono text-[10px] px-2 py-1 uppercase tracking-widest border ${
                        deal.status === "SETTLED" ? "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30" : 
                        deal.status === "VALIDATING" ? "text-[#1351B4] bg-[#1351B4]/10 border-[#1351B4]/30" : 
                        deal.status === "AWAITING_SIG" ? "text-yellow-500 bg-yellow-500/10 border-yellow-500/30" :
                        "text-neutral-400 bg-neutral-800 border-neutral-600"
                      }`}>
                        {deal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
