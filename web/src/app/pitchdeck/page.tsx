"use client";

import {
	type MotionValue,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { DashboardNav } from "@/components/ui/DashboardNav";

// Componente para criar efeito metálico dinâmico atrelado ao scroll
function MetallicText({
	children,
	progress,
	range = [0, 1],
}: {
	children: React.ReactNode;
	progress: MotionValue<number>;
	range?: [number, number];
}) {
	// Mapeia o scroll para deslocar o background gradient horizontalmente
	const backgroundPosition = useTransform(progress, range, [
		"0% 50%",
		"200% 50%",
	]);

	return (
		<motion.span
			className="text-transparent bg-clip-text inline-block"
			style={{
				backgroundImage:
					"linear-gradient(to right, #FFFFFF 0%, #737373 20%, #10B981 40%, #FFFFFF 60%, #393939 80%, #FFFFFF 100%)",
				backgroundSize: "200% auto",
				backgroundPosition,
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
			}}
		>
			{children}
		</motion.span>
	);
}

// Componente para contadores animados no scroll
function ScrollCounter({
	progress,
	targetValue,
	prefix = "",
	suffix = "",
	range = [0, 1],
}: {
	progress: MotionValue<number>;
	targetValue: number;
	prefix?: string;
	suffix?: string;
	range?: [number, number];
}) {
	const current = useTransform(progress, range, [0, targetValue]);

	const display = useTransform(current, (val) => {
		const isCurrency = prefix === "R$ ";
		if (isCurrency) {
			return `${prefix}${val.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}${suffix}`;
		}
		return `${prefix}${Math.floor(val)}${suffix}`;
	});

	return <motion.span>{display}</motion.span>;
}

function Slide1() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

	return (
		<section ref={ref} className="h-[150vh] relative">
			<motion.div
				style={{ y, opacity }}
				className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-16 border-b border-[#393939]"
			>
				<div className="max-w-5xl pt-16">
					<span className="font-mono text-[#10B981] text-xs uppercase tracking-widest block mb-6">
						SLIDE 01 {/* TESE */}
					</span>
					<h1 className="font-archivo text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.05] mb-8">
						<MetallicText progress={scrollYProgress} range={[0, 0.5]}>
							A Economia Cultural
						</MetallicText>
						<br />
						<span className="text-[#393939]">Ativada.</span>
					</h1>
					<p className="font-mono text-[#A3A3A3] text-base md:text-lg max-w-2xl border-l border-[#393939] pl-6 leading-relaxed">
						Curitiba tem talento, marcas, eventos e espaços. O problema é que
						esses ativos ainda não operam como rede.
					</p>
				</div>
			</motion.div>
		</section>
	);
}

function Slide2() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 85%", "start 30%"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<section
			ref={ref}
			className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 border-b border-[#393939] bg-[#0A0A0A] py-32 overflow-hidden"
		>
			<motion.div
				style={{ y, opacity }}
				className="max-w-4xl ml-auto text-left md:text-right relative"
			>
				<span className="font-mono text-[#393939] text-xs uppercase tracking-widest block mb-6 relative z-10">
					SLIDE 02 {/* PROBLEMA */}
				</span>
				<h2 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] mb-8 relative z-10">
					<MetallicText progress={scrollYProgress} range={[0, 1]}>
						O Custo da <br />
						Invisibilidade.
					</MetallicText>
				</h2>
				<p className="font-mono text-[#A3A3A3] text-base md:text-lg max-w-xl md:ml-auto border-l md:border-l-0 md:border-r border-[#393939] pl-6 md:pl-0 md:pr-6 leading-relaxed relative z-10">
					Artistas independentes não acessam demanda qualificada. Marcas querem
					impacto cultural, mas não sabem contratar, medir e prestar contas.
				</p>

				{/* Micro-dados / Metadados */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="mt-16 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-16 justify-end font-mono text-xs text-[#737373] border-t border-[#1A1A1A] pt-8"
				>
					<div>
						<span className="block text-[#10B981] mb-1">
							{"//"} CONTRATAÇÕES INFORMAIS
						</span>
						<span>{">"} 80% VIA DM OU WHATSAPP</span>
					</div>
					<div>
						<span className="block text-[#10B981] mb-1">
							{"//"} RETENÇÃO DE DADOS
						</span>
						<span>{">"} NULA / SEM HISTÓRICO</span>
					</div>
					<div>
						<span className="block text-[#10B981] mb-1">
							{"//"} TAXA DE FORMALIZAÇÃO
						</span>
						<span>{"<"} 15% COM CONTRATO REAL</span>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}

function Slide3() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 85%", "start 25%"],
	});

	const y1 = useTransform(scrollYProgress, [0, 0.7], [100, 0]);
	const opacity1 = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

	const y2 = useTransform(scrollYProgress, [0.3, 1], [100, 0]);
	const opacity2 = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

	return (
		<section
			ref={ref}
			className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 border-b border-[#393939] py-32"
		>
			<div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
				<motion.div style={{ y: y1, opacity: opacity1 }}>
					<span className="font-mono text-[#10B981] text-xs uppercase tracking-widest block mb-6">
						SLIDE 03 {/* SOLUÇÃO */}
					</span>
					<h2 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] mb-8">
						<MetallicText progress={scrollYProgress} range={[0, 0.7]}>
							A Infraestrutura <br className="hidden md:block" />
							de Conexão
						</MetallicText>
					</h2>
					<p className="font-mono text-[#A3A3A3] text-base md:text-lg leading-relaxed mb-6 border-l border-[#393939] pl-6">
						O Street Hub Connect mapeia artistas, organiza dados, conecta
						oportunidades e estrutura contratações com governança associativa.
					</p>
				</motion.div>

				<motion.div
					style={{ y: y2, opacity: opacity2 }}
					className="bg-[#131313] border border-[#393939] p-10 md:p-12 relative overflow-hidden group hover:border-[#10B981] transition-colors duration-500 flex flex-col justify-between"
				>
					<div className="absolute top-0 right-0 w-40 h-40 bg-[#10B981]/5 blur-3xl rounded-full" />

					<div>
						<h3 className="font-mono text-[#10B981] text-xs uppercase tracking-widest mb-8">
							Modelo Institucional
						</h3>
						<ul className="space-y-8 relative z-10">
							<li className="border-l-2 border-[#393939] pl-6 group-hover:border-[#10B981] transition-colors duration-300">
								<strong className="block font-archivo text-xl md:text-2xl uppercase mb-2 text-white">
									Terceiro Setor (MROSC)
								</strong>
								<span className="font-mono text-xs text-[#A3A3A3] leading-relaxed block">
									Rail de governança e prestação de contas transparente para
									parcerias e patrocínios.
								</span>
							</li>
							<li className="border-l-2 border-[#393939] pl-6 group-hover:border-[#10B981] transition-colors duration-300 delay-100">
								<strong className="block font-archivo text-xl md:text-2xl uppercase mb-2 text-white">
									Estruturação Fiscal
								</strong>
								<span className="font-mono text-xs text-[#A3A3A3] leading-relaxed block">
									Tratamento como despesa, doação ou apoio institucional
									conforme enquadramento.
								</span>
							</li>
							<li className="border-l-2 border-[#393939] pl-6 group-hover:border-[#10B981] transition-colors duration-300 delay-200">
								<strong className="block font-archivo text-xl md:text-2xl uppercase mb-2 text-white">
									Trilha Incentivada
								</strong>
								<span className="font-mono text-xs text-[#A3A3A3] leading-relaxed block">
									Desenvolvimento e execução de projetos chancelados pela Lei
									Rouanet.
								</span>
							</li>
						</ul>
					</div>

					{/* Micro-dados / Metadados */}
					<div className="mt-12 pt-6 border-t border-[#393939] font-mono text-[10px] text-[#737373] flex flex-col gap-2 relative z-10">
						<span className="flex justify-between">
							<span>{"//"} ARCHITECTURE</span>
							<span className="text-white">MROSC + L.9249/95 + L.8313/91</span>
						</span>
						<span className="flex justify-between">
							<span>{"//"} COMPLIANCE_LEVEL</span>
							<span className="text-[#10B981]">AUDITÁVEL</span>
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function Slide4() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 80%", "start 20%"],
	});

	const width1 = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);
	const width2 = useTransform(scrollYProgress, [0.4, 0.9], ["0%", "81%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

	return (
		<section
			ref={ref}
			className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 border-b border-[#393939] bg-[#0A0A0A] py-32"
		>
			<motion.div style={{ opacity, y }} className="max-w-5xl relative">
				<motion.div
					className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none mix-blend-screen"
					style={{
						backgroundImage: "url('/images/artists/06.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "grayscale(100%) contrast(1.5)",
						maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, black 0%, transparent 100%)",
					}}
				/>
				<span className="font-mono text-[#393939] text-xs uppercase tracking-widest block mb-6 relative z-10">
					SLIDE 04 {/* MERCADO */}
				</span>
				<h2 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] mb-16 relative z-10">
					<MetallicText progress={scrollYProgress} range={[0, 0.5]}>
						Capital vs. <br />
						Roteamento
					</MetallicText>
				</h2>

				<div className="space-y-12 relative z-10">
					<div className="group">
						<div className="flex justify-between font-mono text-xs md:text-sm text-white mb-4 uppercase">
							<span>Mercado Total da Música</span>
							<ScrollCounter
								progress={scrollYProgress}
								targetValue={116}
								prefix="R$ "
								suffix=" Bi"
								range={[0.1, 0.6]}
							/>
						</div>
						<div className="w-full h-2 bg-[#1A1A1A] overflow-hidden">
							<motion.div
								style={{ width: width1 }}
								className="h-full bg-white"
							/>
						</div>
					</div>

					<div className="group">
						<div className="flex justify-between font-mono text-xs md:text-sm text-[#A3A3A3] mb-4 uppercase">
							<span>Shows, Eventos e Ativações</span>
							<ScrollCounter
								progress={scrollYProgress}
								targetValue={94}
								prefix="R$ "
								suffix=" Bi"
								range={[0.4, 0.9]}
							/>
						</div>
						<div className="w-full h-2 bg-[#1A1A1A] overflow-hidden">
							<motion.div
								style={{ width: width2 }}
								className="h-full bg-[#A3A3A3]"
							/>
						</div>
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ delay: 0.3 }}
						className="font-mono text-xs md:text-sm text-[#10B981] mt-12 pt-8 border-t border-[#393939] leading-relaxed max-w-4xl"
					>
						{">"} O mercado musical brasileiro tem escala relevante. Existe
						capital rodando, mas falta infraestrutura para canalizá-lo para a
						base independente de forma auditável.
					</motion.p>
				</div>
			</motion.div>
		</section>
	);
}

function Slide5() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	// Progress ranges for each number
	const num1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const num1Y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

	const num2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
	const num2Y = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

	const num3Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
	const num3Y = useTransform(scrollYProgress, [0.6, 0.8], [40, 0]);

	return (
		<section ref={ref} className="h-[200vh] relative bg-[#0E0E0E]">
			<div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-16 border-b border-[#393939] overflow-hidden">
				<div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 pt-16">
					<div className="max-w-lg">
						<span className="font-mono text-[#10B981] text-xs uppercase tracking-widest block mb-6">
							SLIDE 05 {/* LABORATÓRIO */}
						</span>
						<h2 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] mb-8">
							<MetallicText progress={scrollYProgress} range={[0, 0.5]}>
								A Cena <br />
								Verificável
							</MetallicText>
						</h2>
						<p className="font-mono text-[#A3A3A3] text-base md:text-lg border-l border-[#393939] pl-6 leading-relaxed">
							Começamos onde a cena é forte e o ambiente é testável. Curitiba já
							possui mercado ativo via Fundo Municipal e Mecenato Subsidiado.
						</p>
					</div>

					<div className="flex flex-col gap-10 w-full lg:w-auto">
						<motion.div
							style={{ opacity: num1Opacity, y: num1Y }}
							className="border-l-2 border-[#393939] pl-6 origin-left"
						>
							<span className="font-mono text-[#A3A3A3] text-xs uppercase tracking-widest block mb-2">
								Investimento Local (FMC/Mecenato)
							</span>
							<div className="font-mono text-5xl md:text-6xl text-white font-bold tracking-tighter">
								<span className="text-2xl md:text-3xl text-white/50 mr-2">
									R$
								</span>
								<ScrollCounter
									progress={scrollYProgress}
									targetValue={16}
									range={[0.05, 0.25]}
								/>
								<span className="text-[#10B981] text-3xl md:text-4xl"> Mi</span>
							</div>
						</motion.div>

						<motion.div
							style={{ opacity: num2Opacity, y: num2Y }}
							className="border-l-2 border-[#393939] pl-6 origin-left"
						>
							<span className="font-mono text-[#A3A3A3] text-xs uppercase tracking-widest block mb-2">
								Casas & Eventos Locais
							</span>
							<div className="font-mono text-5xl md:text-6xl text-white font-bold tracking-tighter">
								<ScrollCounter
									progress={scrollYProgress}
									targetValue={18}
									range={[0.35, 0.55]}
								/>
								<span className="text-[#10B981]">+</span>
							</div>
						</motion.div>

						<motion.div
							style={{ opacity: num3Opacity, y: num3Y }}
							className="border-l-2 border-[#10B981] pl-6 origin-left"
						>
							<span className="font-mono text-[#10B981] text-xs uppercase tracking-widest block mb-2">
								Potencial de Liquidez (MVP)
							</span>
							<div className="font-mono text-5xl md:text-6xl text-[#10B981] font-bold tracking-tighter flex items-center gap-3 mt-2">
								<span className="text-2xl md:text-3xl text-[#10B981]/50">
									R$
								</span>
								<ScrollCounter
									progress={scrollYProgress}
									targetValue={120000}
									range={[0.65, 0.85]}
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Slide6() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 85%", "start 10%"],
	});

	const y1 = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
	const op1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

	const y2 = useTransform(scrollYProgress, [0.25, 0.75], [100, 0]);
	const op2 = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);

	const y3 = useTransform(scrollYProgress, [0.5, 1], [100, 0]);
	const op3 = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

	return (
		<section
			ref={ref}
			className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 border-b border-[#393939] bg-[#0A0A0A] py-32"
		>
			<div className="max-w-6xl mx-auto w-full text-center relative">
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] opacity-10 pointer-events-none mix-blend-screen"
					style={{
						backgroundImage: "url('/images/artists/01.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center 20%",
						filter: "grayscale(100%) contrast(1.2)",
						maskImage:
							"radial-gradient(circle at center, black 0%, transparent 60%)",
						WebkitMaskImage:
							"radial-gradient(circle at center, black 0%, transparent 60%)",
					}}
				/>
				<span className="font-mono text-[#393939] text-xs uppercase tracking-widest block mb-6 relative z-10">
					SLIDE 06 {/* GTM & IMPACTO */}
				</span>
				<h2 className="font-archivo text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none mb-20 relative z-10">
					<MetallicText progress={scrollYProgress} range={[0, 0.4]}>
						Do Cachê <br />
						ao Legado.
					</MetallicText>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10">
					<motion.div
						style={{ y: y1, opacity: op1 }}
						className="border border-[#393939] p-10 bg-[#0E0E0E] relative group hover:border-white transition-colors flex flex-col justify-between"
					>
						<div>
							<span className="font-mono text-[#10B981] text-3xl mb-6 block font-bold">
								01
							</span>
							<h3 className="font-archivo font-bold text-xl uppercase mb-4 text-white">
								Pilotos Locais
							</h3>
							<p className="font-mono text-[#A3A3A3] text-xs leading-relaxed">
								Começamos por eventos locais, marcas regionais e artistas
								curados para provar conversão.
							</p>
						</div>
						<div className="mt-8 pt-4 border-t border-[#1A1A1A] font-mono text-[10px] text-[#737373]">
							[STATUS] {">"} EM EXECUÇÃO
						</div>
					</motion.div>
					<motion.div
						style={{ y: y2, opacity: op2 }}
						className="border border-[#393939] p-10 bg-[#0E0E0E] relative group hover:border-white transition-colors mt-0 md:mt-12 flex flex-col justify-between"
					>
						<div>
							<span className="font-mono text-[#10B981] text-3xl mb-6 block font-bold">
								02
							</span>
							<h3 className="font-archivo font-bold text-xl uppercase mb-4 text-white">
								Vitrine e Booking
							</h3>
							<p className="font-mono text-[#A3A3A3] text-xs leading-relaxed">
								Artistas verificados, faixas de cachê claras e formatos de show
								estruturados para as marcas.
							</p>
						</div>
						<div className="mt-8 pt-4 border-t border-[#1A1A1A] font-mono text-[10px] text-[#737373]">
							[DATA] {">"} CATALOG_V1 LIVE
						</div>
					</motion.div>
					<motion.div
						style={{ y: y3, opacity: op3 }}
						className="border border-[#393939] p-10 bg-[#0E0E0E] relative group hover:border-white transition-colors mt-0 md:mt-24 flex flex-col justify-between"
					>
						<div>
							<span className="font-mono text-[#10B981] text-3xl mb-6 block font-bold">
								03
							</span>
							<h3 className="font-archivo font-bold text-xl uppercase mb-4 text-white">
								Impacto Mensurável
							</h3>
							<p className="font-mono text-[#A3A3A3] text-xs leading-relaxed">
								Medimos renda gerada, público alcançado e desenvolvimento do
								território, entregando dados ao invés de promessas.
							</p>
						</div>
						<div className="mt-8 pt-4 border-t border-[#1A1A1A] font-mono text-[10px] text-[#10B981]">
							[OUTPUT] {">"} ESG REPORT
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function Slide7() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 90%", "center center"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<section
			ref={ref}
			className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 text-center relative overflow-hidden py-32"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_50%)]" />

			<motion.div style={{ y, opacity }} className="relative z-10">
				<span className="font-mono text-[#10B981] text-xs uppercase tracking-widest block mb-8">
					SLIDE 07 {/* CLOSING */}
				</span>
				<h2 className="font-archivo text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1] text-white mb-10">
					<MetallicText progress={scrollYProgress} range={[0, 1]}>
						Cultura.
						<br />
						Tecnologia.
						<br />
						Impacto Mensurável.
					</MetallicText>
				</h2>
				<p className="font-mono text-[#A3A3A3] text-base md:text-lg mb-16 max-w-lg mx-auto leading-relaxed">
					A ponte institucional entre a cena independente e o capital
					corporativo de Curitiba.
				</p>
				<Link
					href="/waitlist"
					className="inline-flex font-mono text-xs text-black bg-[#10B981] px-8 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					Acessar Waitlist
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
				</Link>
			</motion.div>
		</section>
	);
}

export default function PitchdeckPage() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<div
			ref={containerRef}
			className="bg-[#0E0E0E] text-white min-h-screen selection:bg-[#10B981] selection:text-black"
		>
			<DashboardNav />

			{/* Progress Bar do Deck */}
			<motion.div
				className="fixed top-14 left-0 h-[2px] bg-[#10B981] z-50 origin-left"
				style={{ scaleX: scrollYProgress }}
			/>

			<Slide1 />
			<Slide2 />
			<Slide3 />
			<Slide4 />
			<Slide5 />
			<Slide6 />
			<Slide7 />
		</div>
	);
}
