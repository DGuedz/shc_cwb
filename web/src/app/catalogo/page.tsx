"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";

const MOCK_ARTISTS = [
	{
		id: "1",
		name: "NAVE",
		city: "Curitiba, PR",
		base: "Centro",
		genre: "Trap / Melodic Rap",
		formats: "Show pocket · Festival · Club",
		minCache: "R$ 2.500",
		duration: "35–45 min",
		image: "/images/artists/01.jpg",
	},
	{
		id: "2",
		name: "KAYO VX",
		city: "Curitiba, PR",
		base: "Boqueirão",
		genre: "Drill / Trap",
		formats: "Club · Batalha · Evento urbano",
		minCache: "R$ 1.800",
		duration: "30–40 min",
		image: "/images/artists/02.jpg",
	},
	{
		id: "3",
		name: "LIL VILA",
		city: "Curitiba, PR",
		base: "CIC",
		genre: "Trap / Funk Trap",
		formats: "Baile · Festa univ. · Showcase",
		minCache: "R$ 2.200",
		duration: "35 min",
		image: "/images/artists/03.jpg",
	},
	{
		id: "4",
		name: "MC AURA",
		city: "Curitiba, PR",
		base: "Água Verde",
		genre: "Rap / R&B",
		formats: "Acústico · Pocket · Marca",
		minCache: "R$ 3.000",
		duration: "40–50 min",
		image: "/images/artists/04.jpg",
	},
	{
		id: "5",
		name: "D7 NOIR",
		city: "Curitiba, PR",
		base: "Sítio Cercado",
		genre: "Trap / Gangsta Rap",
		formats: "Festival · Club · Evento urbano",
		minCache: "R$ 2.800",
		duration: "40 min",
		image: "/images/artists/05.jpg",
	},
	{
		id: "6",
		name: "YUNG PINHA",
		city: "Curitiba, PR",
		base: "Santa Felicidade",
		genre: "Plug / Trap Soul",
		formats: "Lounge · Marca · Evento privado",
		minCache: "R$ 2.000",
		duration: "30–45 min",
		image: "/images/artists/06.jpg",
	},
	{
		id: "7",
		name: "BRISA 41",
		city: "Curitiba, PR",
		base: "Portão",
		genre: "Rap / Boom Bap / Trap",
		formats: "Sarau · Festival · Cultural",
		minCache: "R$ 1.500",
		duration: "30–40 min",
		image: "/images/artists/07.jpg",
	},
	{
		id: "8",
		name: "RUAH",
		city: "Curitiba, PR",
		base: "Rebouças",
		genre: "Trap Exp. / Afrotrap",
		formats: "Galeria · Club · Conceitual",
		minCache: "R$ 2.600",
		duration: "35–45 min",
		image: "/images/artists/08.jpg",
	},
];

export default function VitrineArtistas() {
	const [isVerifiedOnly, setIsVerifiedOnly] = useState(true);

	return (
		<div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#10B981] selection:text-black">
			<Navbar />

			<main className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
				{/* HERO EDITORIAL */}
				<header className="mb-16 md:mb-24 max-w-3xl">
					<div className="flex items-center gap-3 mb-6">
						<span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
						<span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest">
							DIRETÓRIO CURADO
						</span>
					</div>
					<h1 className="font-archivo text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.1em] text-white mb-4 leading-tight">
						VITRINE DE ARTISTAS
					</h1>
					<p className="font-mono text-[#A3A3A3] text-xs md:text-sm leading-relaxed border-l border-[#393939] pl-6 max-w-xl">
						Artistas independentes de Curitiba prontos para shows, ativações de
						marca, eventos privados e festivais.
					</p>
				</header>

				{/* FILTROS COMPACTOS */}
				<div className="flex flex-col lg:flex-row gap-4 lg:items-center bg-[#131313] border border-[#393939] p-2 mb-12">
					<div className="flex-1 flex items-center px-4 py-2">
						<label htmlFor="search-artist" className="sr-only">
							Buscar artista
						</label>
						<svg
							className="w-4 h-4 text-[#A3A3A3] mr-3"
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
							className="bg-transparent border-none outline-none text-sm font-mono text-white placeholder-[#A3A3A3] w-full"
						/>
					</div>

					<div className="hidden lg:block w-px h-6 bg-[#393939]"></div>

					<div className="flex-1 flex items-center px-4 py-2 border-t border-[#393939] lg:border-none">
						<label htmlFor="filter-style" className="sr-only">
							Filtrar por estilo
						</label>
						<select
							id="filter-style"
							className="bg-transparent border-none outline-none text-sm font-mono text-[#A3A3A3] w-full appearance-none cursor-pointer"
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
							className="bg-transparent border-none outline-none text-sm font-mono text-[#A3A3A3] w-full appearance-none cursor-pointer"
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
							className="bg-transparent border-none outline-none text-sm font-mono text-[#A3A3A3] w-full appearance-none cursor-pointer"
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
								className={`w-8 h-4 rounded-full transition-colors ${isVerifiedOnly ? "bg-[#10B981]" : "bg-[#393939]"} relative`}
								aria-hidden="true"
							>
								<div
									className={`absolute top-0.5 w-3 h-3 rounded-full bg-black transition-transform ${isVerifiedOnly ? "translate-x-4.5 left-[1px]" : "translate-x-0.5 left-[1px]"}`}
								></div>
							</div>
							<input
								type="checkbox"
								className="sr-only"
								checked={isVerifiedOnly}
								onChange={() => setIsVerifiedOnly(!isVerifiedOnly)}
							/>
							<span className="font-mono text-xs text-[#A3A3A3] group-hover:text-white transition-colors">
								Apenas verificados
							</span>
						</label>
						<button
							type="button"
							className="font-mono text-xs text-[#393939] hover:text-white transition-colors uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
						>
							Limpar
						</button>
					</div>
				</div>

				{/* GRID EDITORIAL DE ARTISTAS */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{MOCK_ARTISTS.map((artist, i) => (
						<motion.article
							key={artist.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: i * 0.05 }}
							className="group relative bg-[#131313] border border-[#393939] overflow-hidden hover:border-[#10B981] transition-colors duration-300 flex flex-col h-full"
						>
							<div className="relative h-[220px] w-full overflow-hidden bg-[#1A1A1A]">
								<img
									src={artist.image}
									alt={`Foto de perfil do artista ${artist.name}`}
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
										{artist.name}
									</h3>

									{/* Localização */}
									<div className="flex items-center gap-2 mt-2 mb-4">
										<span className="font-mono text-[9px] text-[#A3A3A3] uppercase tracking-widest">
											{artist.city}
										</span>
										<span className="w-1 h-1 bg-[#393939] rounded-full"></span>
										<span className="font-mono text-[9px] text-[#A3A3A3] uppercase tracking-widest">
											{artist.base}
										</span>
									</div>

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
												{artist.formats}
											</span>
										</div>

										<div className="flex items-center justify-between pt-2">
											<div className="flex flex-col">
												<span className="font-mono text-[9px] text-[#393939] uppercase tracking-widest">
													Cachê Base
												</span>
												<span className="font-mono text-xs text-[#10B981] font-bold tracking-widest">
													{artist.minCache}
												</span>
											</div>
											<div className="flex flex-col items-end">
												<span className="font-mono text-[9px] text-[#393939] uppercase tracking-widest">
													Duração
												</span>
												<span className="font-mono text-[10px] text-[#A3A3A3] tracking-widest">
													{artist.duration}
												</span>
											</div>
										</div>
									</div>
								</div>

								{/* Ações (Booking & Presskit) */}
								<div className="mt-6 flex items-center gap-2">
									<button
										type="button"
										className="flex-1 bg-[#10B981] text-black font-mono text-[10px] uppercase tracking-widest py-2.5 font-bold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
									>
										Solicitar Booking
									</button>
									<button
										type="button"
										className="px-3 border border-[#393939] bg-transparent text-[#A3A3A3] hover:text-white hover:border-white transition-colors flex items-center justify-center py-2.5 group-hover:border-[#10B981] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
									>
										<span className="font-mono text-[10px] uppercase tracking-widest">
											Press Kit
										</span>
									</button>
								</div>
							</div>
						</motion.article>
					))}
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
		</div>
	);
}
