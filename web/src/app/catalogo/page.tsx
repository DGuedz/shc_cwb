"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DashboardNav } from "@/components/ui/DashboardNav";
import { ScrollRevealTitle } from "@/components/ui/ScrollRevealTitle";
import { TripartiteHandshake } from "@/components/ui/TripartiteHandshake";
import { getCatalogArtists } from "@/lib/data";
import type { Artist, XpTier } from "@/types/domain";

const XP_TIER_STYLE: Record<XpTier, { label: string; color: string; border: string }> = {
  INICIANTE:  { label: "INICIANTE",  color: "text-neutral-400", border: "border-neutral-600" },
  ATIVO:      { label: "ATIVO",      color: "text-blue-400",    border: "border-blue-500/40" },
  DESTAQUE:   { label: "DESTAQUE",   color: "text-[#10B981]",   border: "border-[#10B981]/40" },
  REFERENCIA: { label: "REFERÊNCIA", color: "text-yellow-400",  border: "border-yellow-500/40" },
};

function fmt(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return String(n);
}

export default function VitrineArtistas() {
	const [isVerifiedOnly, setIsVerifiedOnly] = useState(true);
	const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
	const [artists, setArtists] = useState<Artist[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadArtists() {
			try {
				const data = await getCatalogArtists();
				setArtists(data);
			} catch (error) {
				console.error("Erro ao carregar artistas:", error);
			} finally {
				setIsLoading(false);
			}
		}
		loadArtists();
	}, []);

	const handleBookingClick = (artist: Artist) => {
		setSelectedArtist(artist);
	};

	const filteredArtists = isVerifiedOnly 
		? artists.filter(a => a.verified !== false) 
		: artists;

	return (
		<div className="bg-black text-[var(--on-background)] min-h-screen flex flex-col">
			<DashboardNav />

			<main className="flex-grow pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
				{/* HERO EDITORIAL */}
				<header className="mb-12 md:mb-16 flex flex-col items-start gap-4 relative">
					<div className="absolute right-0 top-0 border border-white/10 bg-[#0E0E0E] px-4 py-2 hidden md:flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
						<span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest">
							DIRETÓRIO CURADO // ZK_READY
						</span>
					</div>
					<ScrollRevealTitle
						className="font-archivo text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter max-w-3xl leading-[0.9] text-[#10B981]"
					>
						CATÁLOGO DE ARTISTAS
					</ScrollRevealTitle>
					<p className="font-mono text-xs text-neutral-400 max-w-xl border-l border-[#10B981] pl-4 mt-2">
						Artistas independentes prontos para shows, ativações de
						marca, eventos privados e festivais.
					</p>
				</header>

				{/* FILTROS COMPACTOS */}
				<div className="flex flex-col lg:flex-row gap-4 lg:items-center bg-[#0E0E0E] border border-[#393939] p-2 mb-12">
					<div className="flex-1 flex items-center px-4 py-2">
						<label htmlFor="search-artist" className="sr-only">
							Buscar artista
						</label>
						<svg
							className="w-4 h-4 text-neutral-500 mr-3"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
						<input
							id="search-artist"
							type="text"
							placeholder="Buscar artista, cidade ou tag..."
							className="bg-transparent border-none outline-none text-xs font-mono text-white placeholder-neutral-500 w-full"
						/>
					</div>

					<div className="hidden lg:block w-px h-6 bg-[#393939]"></div>

					<div className="flex-1 flex items-center px-4 py-2 border-t border-[#393939] lg:border-none">
						<label htmlFor="filter-style" className="sr-only">
							Filtrar por estilo
						</label>
						<select
							id="filter-style"
							className="bg-transparent border-none outline-none text-xs font-mono text-neutral-400 w-full appearance-none cursor-pointer"
						>
							<option value="">Estilo</option>
							<option value="trap">Trap / Drill</option>
							<option value="rap">Rap / Boom Bap</option>
							<option value="rnb">R&B / Soul</option>
						</select>
					</div>

					<div className="hidden lg:block w-px h-6 bg-[#393939]"></div>

					<div className="flex-1 flex items-center px-4 py-2 border-t border-[#393939] lg:border-none">
						<label htmlFor="filter-format" className="sr-only">
							Filtrar por formato
						</label>
						<select
							id="filter-format"
							className="bg-transparent border-none outline-none text-xs font-mono text-neutral-400 w-full appearance-none cursor-pointer"
						>
							<option value="">Formato</option>
							<option value="pocket">Show Pocket</option>
							<option value="club">Club / Batalha</option>
							<option value="festival">Festival</option>
						</select>
					</div>

					<div className="hidden lg:block w-px h-6 bg-[#393939]"></div>

					<div className="flex-1 flex items-center px-4 py-2 border-t border-[#393939] lg:border-none">
						<label htmlFor="filter-cache" className="sr-only">
							Filtrar por faixa de cachê
						</label>
						<select
							id="filter-cache"
							className="bg-transparent border-none outline-none text-xs font-mono text-neutral-400 w-full appearance-none cursor-pointer"
						>
							<option value="">Faixa de Cachê</option>
							<option value="2000">A partir de R$ 1.500</option>
							<option value="5000">A partir de R$ 3.000</option>
						</select>
					</div>

					<div className="hidden lg:block w-px h-6 bg-[#393939]"></div>

					<div className="flex items-center gap-6 px-4 py-2 border-t border-[#393939] lg:border-none justify-between lg:justify-end min-w-[280px]">
						<label className="flex items-center gap-2 cursor-pointer group">
							<div
								className={`w-8 h-4 rounded-none transition-colors ${isVerifiedOnly ? "bg-[#10B981]" : "bg-neutral-800 border border-[#393939]"} relative`}
								aria-hidden="true"
							>
								<div
									className={`absolute top-0.5 w-3 h-3 rounded-none bg-black transition-transform ${isVerifiedOnly ? "translate-x-4.5 left-[1px]" : "translate-x-0.5 left-[1px]"}`}
								></div>
							</div>
							<input
								type="checkbox"
								className="sr-only"
								checked={isVerifiedOnly}
								onChange={() => setIsVerifiedOnly(!isVerifiedOnly)}
							/>
							<span className="font-mono text-[10px] text-neutral-400 group-hover:text-white transition-colors uppercase tracking-widest">
								Verificados
							</span>
						</label>
						<button
							type="button"
							className="font-mono text-[10px] text-neutral-500 hover:text-white transition-colors uppercase tracking-widest focus-visible:outline-none"
						>
							Limpar
						</button>
					</div>
				</div>

				{/* GRID EDITORIAL DE ARTISTAS */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{isLoading ? (
						<div className="col-span-full py-12 flex justify-center items-center">
							<div className="w-8 h-8 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin"></div>
						</div>
					) : filteredArtists.length === 0 ? (
						<div className="col-span-full py-12 text-center border border-[#393939] bg-[#131313]">
							<p className="font-mono text-sm text-neutral-500 uppercase tracking-widest p-8">Nenhum artista encontrado com os filtros atuais.</p>
						</div>
					) : (
						filteredArtists.map((artist, i) => (
							<motion.article
								key={artist.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.05 }}
								className="group relative bg-[#131313] border border-[#393939] overflow-hidden hover:border-[#10B981] transition-colors duration-300 flex flex-col h-full"
							>
								<div className="relative h-[220px] w-full overflow-hidden bg-[#1A1A1A]">
									<img
										src={`/images/artists/0${(i % 8) + 1}.jpg`}
										alt={`Foto de perfil do artista ${artist.stageName}`}
										className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
									/>
									<div
										className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-[#10B981]/30 px-2 py-1 flex items-center gap-1.5"
										role="status"
										aria-label="Status do Artista"
									>
										<svg
											className="w-3 h-3 text-[#10B981]"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true"
										>
											<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
										</svg>
										<span className="font-mono text-[9px] text-[#10B981] tracking-widest uppercase">
											Associado Verificado
										</span>
									</div>
								</div>

								{/* Informações */}
								<div className="p-4 md:p-5 flex flex-col justify-between flex-1 bg-gradient-to-t from-[#0E0E0E] to-[#131313]">
									<div>
										<h3 className="font-archivo text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#10B981] transition-colors">
											{artist.stageName}
										</h3>

										{/* Localização */}
										<div className="flex items-center gap-2 mt-2 mb-4">
											<span className="font-mono text-[9px] text-[#A3A3A3] uppercase tracking-widest">
												{artist.city}
											</span>
											<span className="w-1 h-1 bg-[#393939] rounded-full"></span>
											<span className="font-mono text-[9px] text-[#A3A3A3] uppercase tracking-widest">
												{artist.state}
											</span>
										</div>

										{/* Atividade do associado */}
										{artist.activity && (() => {
											const { xpTier, feeMultiplier, activeDays, showsThisYear, monthlyStreams, associationVotes, socialReach, lastActiveLabel } = artist.activity;
											const t = XP_TIER_STYLE[xpTier];
											return (
												<div className={`mb-4 border ${t.border} p-3 flex flex-col gap-3`}>
													{/* Tier + peso */}
													<div className="flex items-center justify-between">
														<span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${t.color}`}>{t.label}</span>
														<span className={`font-mono text-[9px] font-bold ${t.color}`}>cachê {feeMultiplier}x</span>
													</div>
													{/* Stats grid */}
													<div className="grid grid-cols-2 gap-x-4 gap-y-2">
														{[
															{ label: "ativo há", value: lastActiveLabel },
															{ label: "dias/mês", value: `${activeDays}d` },
															{ label: "shows/ano", value: String(showsThisYear) },
															{ label: "streams/mês", value: fmt(monthlyStreams) },
															{ label: "alcance", value: `${socialReach}k` },
															{ label: "votos assoc.", value: String(associationVotes) },
														].map(({ label, value }) => (
															<div key={label} className="flex items-baseline justify-between gap-1">
																<span className="font-mono text-[8px] text-neutral-600 uppercase shrink-0">{label}</span>
																<span className="font-mono text-[10px] text-white font-medium">{value}</span>
															</div>
														))}
													</div>
												</div>
											);
										})()}

										{/* Metadados do Show */}
										<div className="space-y-2 border-t border-[#393939] pt-4">
											<div className="flex flex-col">
												<span className="font-mono text-[9px] text-[#393939] uppercase tracking-widest">
													Estilo Musical
												</span>
												<span className="font-mono text-[11px] text-white uppercase tracking-wider">
													{artist.genre}
												</span>
											</div>

											<div className="flex flex-col">
												<span className="font-mono text-[9px] text-[#393939] uppercase tracking-widest">
													Formatos
												</span>
												<span className="font-mono text-[10px] text-[#A3A3A3] uppercase tracking-wider">
													Show pocket · Festival · Club
												</span>
											</div>

											<div className="flex items-center justify-between pt-2">
												<div className="flex flex-col">
													<span className="font-mono text-[9px] text-[#393939] uppercase tracking-widest">
														Cachê Base
													</span>
													<span className="font-mono text-xs text-[#10B981] font-bold tracking-widest">
														R$ {artist.minFee.toLocaleString("pt-BR")}
													</span>
												</div>
												<div className="flex flex-col items-end">
													<span className="font-mono text-[9px] text-[#393939] uppercase tracking-widest">
														Duração
													</span>
													<span className="font-mono text-[10px] text-[#A3A3A3] tracking-widest">
														35-45 min
													</span>
												</div>
											</div>
										</div>
									</div>

									{/* Ações (Booking & Presskit) */}
									<div className="mt-6 flex items-center gap-2">
										{/* Solicitar Booking — glass verde */}
										<button
											type="button"
											onClick={() => handleBookingClick(artist)}
											className="relative flex-1 overflow-hidden group/btn
												bg-[#10B981] text-black
												font-mono text-[10px] uppercase tracking-widest py-2.5 font-bold
												transition-all duration-300
												hover:shadow-[0_0_24px_rgba(16,185,129,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
												focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
										>
											{/* glare sweep */}
											<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none" />
											{/* glass overlay ao hover */}
											<span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
											<span className="relative z-10">Solicitar Booking</span>
										</button>

										{/* Press Kit — glass escuro */}
										<button
											type="button"
											onClick={() => window.location.assign(`/catalogo/${artist.slug}`)}
											className="relative overflow-hidden group/pk
												px-3 py-2.5
												border border-[#10B981]/40 bg-[#10B981]/5 text-[#10B981]
												font-mono text-[10px] uppercase tracking-widest
												transition-all duration-300
												hover:border-[#10B981] hover:bg-[#10B981]/15
												hover:shadow-[0_0_16px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(16,185,129,0.2)]
												focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
										>
											<span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent -translate-x-full group-hover/pk:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none" />
											<span className="relative z-10">Press Kit</span>
										</button>
									</div>
								</div>
							</motion.article>
						))
					)}
				</div>

				{/* RODAPÉ INSTITUCIONAL DA SEÇÃO */}
				<div className="mt-24 pt-12 border-t border-[#393939] grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h4 className="font-archivo text-lg font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
							<svg
								className="w-4 h-4 text-[#10B981]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							ARTISTAS ASSOCIADOS
						</h4>
						<p className="font-mono text-[#A3A3A3] text-xs">
							Curadoria, validação e onboarding feito pelos próprios artistas
							para o diretório.
						</p>
					</div>
					<div>
						<h4 className="font-archivo text-lg font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
							<svg
								className="w-4 h-4 text-[#10B981]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								></path>
							</svg>
							BOOKING COM MENOS ATRITO
						</h4>
						<p className="font-mono text-[#A3A3A3] text-xs">
							Receba informações de cachê, formato de show, press kit e
							disponibilidade.
						</p>
					</div>
					<div>
						<h4 className="font-archivo text-lg font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
							<svg
								className="w-4 h-4 text-[#10B981]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
							CONEXÃO COM A CENA LOCAL
						</h4>
						<p className="font-mono text-[#A3A3A3] text-xs">
							Contrate talentos reais de Curitiba e fortaleça a economia
							cultural da cidade.
						</p>
					</div>
				</div>
			</main>

			{/* Modal: Tripartite Handshake / Legal Agent */}
			{selectedArtist && (
				<TripartiteHandshake 
					artistName={selectedArtist.stageName}
					artistExp={1050}
					companyName="EMPRESA CONTRATANTE" // No ambiente real, vem da session da empresa logada
					opportunityTitle="OPORTUNIDADE DE BOOKING"
					budget={selectedArtist.minFee || 0}
					onClose={() => setSelectedArtist(null)}
				/>
			)}
		</div>
	);
}
