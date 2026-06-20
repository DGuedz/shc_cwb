import { DashboardNav } from "@/components/ui/DashboardNav";

export default function Waitlist() {
	return (
		<div className="bg-black min-h-screen text-white flex flex-col">
			<DashboardNav />

			<main className="flex-1 flex flex-col items-center justify-center pt-20 pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[800px] mx-auto w-full">
				{/* CABEÇALHO */}
				<header className="mb-12 w-full text-center">
					<div className="flex items-center justify-center gap-3 mb-6">
						<span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
						<span className="font-mono text-[#10B981] text-[10px] uppercase tracking-widest">
							ACESSO RESTRITO
						</span>
					</div>
					<h1 className="font-archivo text-3xl md:text-5xl font-bold uppercase tracking-[0.1em] text-white mb-4 leading-tight">
						TORNAR-SE <br className="md:hidden" />
						ASSOCIADO
					</h1>
					<p className="font-mono text-[#A3A3A3] text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
						A Street Hub Connect opera sob um modelo de associação curada.
						Artistas e contratantes passam por validação para criar seus perfis
						(metadados/press kit), receber benefícios exclusivos e acessar o
						terminal de liquidação.
					</p>
				</header>

				{/* FORMULÁRIO */}
				<div className="w-full bg-[#131313] border border-[#393939] p-6 md:p-10">
					<form className="space-y-6">
						{/* TIPO DE ACESSO */}
						<fieldset className="space-y-3 border-none p-0 m-0">
							<legend className="block font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest mb-3">
								Perfil de Acesso
							</legend>
							<div className="grid grid-cols-2 gap-4">
								<label className="flex items-center gap-3 p-4 border border-[#393939] hover:border-[#10B981] cursor-pointer group transition-colors focus-within:ring-2 focus-within:ring-[#10B981]">
									<input
										type="radio"
										name="profile"
										value="artist"
										className="accent-[#10B981] bg-[#0E0E0E] border-[#393939]"
										defaultChecked
									/>
									<span className="font-mono text-xs uppercase text-white tracking-wider">
										Artista / Talento
									</span>
								</label>
								<label className="flex items-center gap-3 p-4 border border-[#393939] hover:border-[#10B981] cursor-pointer group transition-colors focus-within:ring-2 focus-within:ring-[#10B981]">
									<input
										type="radio"
										name="profile"
										value="business"
										className="accent-[#10B981] bg-[#0E0E0E] border-[#393939]"
									/>
									<span className="font-mono text-xs uppercase text-white tracking-wider">
										Empresa / Marca
									</span>
								</label>
							</div>
						</fieldset>

						{/* DADOS BÁSICOS */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-3">
								<label
									htmlFor="name"
									className="block font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest"
								>
									Nome Completo / Artístico
								</label>
								<input
									type="text"
									id="name"
									className="w-full bg-[#0E0E0E] border border-[#393939] px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-[#10B981] transition-colors"
									placeholder="Seu nome ou projeto"
									required
								/>
							</div>
							<div className="space-y-3">
								<label
									htmlFor="email"
									className="block font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest"
								>
									E-mail Corporativo / Profissional
								</label>
								<input
									type="email"
									id="email"
									className="w-full bg-[#0E0E0E] border border-[#393939] px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-[#10B981] transition-colors"
									placeholder="contato@exemplo.com"
									required
								/>
							</div>
						</div>

						{/* REDES / LINKS */}
						<div className="space-y-3">
							<label
								htmlFor="links"
								className="block font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest"
							>
								Links de Referência (Instagram, Spotify, Site)
							</label>
							<input
								type="text"
								id="links"
								className="w-full bg-[#0E0E0E] border border-[#393939] px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-[#10B981] transition-colors"
								placeholder="https://..."
							/>
						</div>

						{/* MENSAGEM */}
						<div className="space-y-3">
							<label
								htmlFor="message"
								className="block font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest"
							>
								Qual o seu objetivo com a Street Hub?
							</label>
							<textarea
								id="message"
								rows={4}
								className="w-full bg-[#0E0E0E] border border-[#393939] px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-[#10B981] transition-colors resize-none"
								placeholder="Breve descrição sobre como a plataforma pode te ajudar..."
							></textarea>
						</div>

						{/* BOTÃO */}
						<div className="pt-4 border-t border-[#393939]">
							<button
								type="button"
								className="w-full bg-[#10B981] hover:bg-white text-black font-archivo text-sm font-bold uppercase tracking-[0.1em] py-4 transition-colors flex justify-center items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
							>
								SOLICITAR ACESSO
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									></path>
								</svg>
							</button>
							<p className="text-center font-mono text-[9px] text-[#393939] mt-4 uppercase tracking-widest">
								Você será notificado por e-mail quando seu acesso for liberado.
							</p>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}
