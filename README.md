# Street Hub Connect

<div align="center">

![Street Hub Connect](https://img.shields.io/badge/Street%20Hub%20Connect-Plataforma%20Criativa-10B981?style=for-the-badge&labelColor=0A0A0A)

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20DB-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-BB4FFF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Zustand](https://img.shields.io/badge/Zustand-5-FF6B35?style=flat-square)](https://zustand-demo.pmnd.rs/)
[![Zod](https://img.shields.io/badge/Zod-4-3068B7?style=flat-square)](https://zod.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-1.61-45BA4B?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

[![Aplicação](https://img.shields.io/badge/🌐%20Aplicação%20ao%20Vivo-shc--cwb.vercel.app-10B981?style=for-the-badge)](https://shc-cwb.vercel.app)
[![Repositório](https://img.shields.io/badge/📦%20Repositório-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/DGuedz/shc_cwb)

[![Hackathon](https://img.shields.io/badge/🏆%20TRAE%20+%20AI%20Brasil-Hackathon%202025-FF6B35?style=for-the-badge)](https://trae.aibrasil.ai)
[![Status](https://img.shields.io/badge/Status-MVP%20em%20Produção-10B981?style=flat-square)]()
[![License](https://img.shields.io/badge/Licença-MIT-blue?style=flat-square)]()

</div>

---

## O Problema

No Brasil, o mercado da música independente movimenta bilhões de reais por ano — mas permanece **fragmentado, informal e inacessível** para a maioria dos artistas sem acesso a grandes gravadoras ou redes de relacionamento consolidadas.

**Artistas independentes** não têm onde apresentar credenciais de forma organizada, não têm acesso a contratos acessíveis e não têm visibilidade frente a contratantes sérios.

**Contratantes** — empresas, produtoras, agências de eventos, marcas — perdem tempo e dinheiro buscando talentos sem curadoria, sem garantias e sem histórico verificável.

---

## A Solução

**Street Hub Connect** é uma plataforma de tecnologia que conecta artistas independentes a contratantes, marcas e produtores com curadoria, booking e governança digital.

Catálogo público indexável · Dossiê profissional · Matchboard inteligente · Gestão de acordos · Governança fonográfica — tudo em um ambiente seguro e construído para a economia criativa brasileira.

```
Artista  ──►  Dossiê + Catálogo público ──►  Contratante
                        │
                   Matchboard
                        │
                    Acordo / Deal
```

---

## Demonstração Rápida

Acesse a aplicação e explore os dois fluxos sem criar conta:

| Papel | Link de Demo | Destino |
|---|---|---|
| 🎤 Artista | [/demo?role=artist](https://shc-cwb.vercel.app/demo?role=artist) | Dashboard · Dossiê · Acordos |
| 🏢 Contratante | [/demo?role=contractor](https://shc-cwb.vercel.app/demo?role=contractor) | Dashboard · Matchboard · Oportunidades |

> Os links de demo setam uma sessão segura com 1 clique e redirecionam direto para o painel do papel escolhido.

---

## Funcionalidades

### Público (sem login)
- **Home** — landing page institucional com hero, proposta de valor e CTA
- **Catálogo** — listagem pública de artistas com filtros por gênero, cidade e tier
- **Perfil do Artista** — dossiê individual indexável com SEO e JSON-LD
- **Quem Somos** — missão e posicionamento da associação
- **Pitchdeck** — apresentação institucional interativa
- **News** — novidades e lançamentos
- **Waitlist** — captura de interesse de artistas e contratantes

### Artista (autenticado)
- **Meu Dossiê** — perfil completo com press kit, gênero, cidade e faixa de cachê
- **Acordos** — histórico e gestão de acordos firmados
- Navegação adaptativa com links exclusivos do papel

### Contratante (autenticado)
- **Oportunidades** — criação e gestão de briefings com orçamento e data
- **Matchboard** — visualização e avaliação de artistas compatíveis com a oportunidade
- Navegação adaptativa com links exclusivos do papel

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| **Framework** | Next.js 16 (App Router, Server Actions, Route Handlers) |
| **Linguagem** | TypeScript 5 — strict mode |
| **UI** | React 19 + Tailwind CSS 4 |
| **Animações** | Framer Motion 12 |
| **Backend / Auth** | Supabase (Auth + PostgreSQL) |
| **Estado global** | Zustand 5 |
| **Validação** | Zod 4 |
| **Testes E2E** | Playwright 1.61 |
| **Deploy** | Vercel (CI/CD automático via GitHub) |
| **Qualidade** | ESLint 9 + TypeScript strict |

---

## Arquitetura

```
shc_cwb/
└── web/                          # Aplicação Next.js
    ├── src/
    │   ├── app/
    │   │   ├── (rotas públicas)  # /, /catalogo, /quem-somos, /news...
    │   │   ├── dashboard/        # Rotas protegidas (artista + contratante)
    │   │   ├── onboarding/       # Fluxo de cadastro por papel
    │   │   ├── demo/             # Route handler de demo com 1 clique
    │   │   └── actions.ts        # Server Actions (auth, onboarding, oportunidades)
    │   ├── components/
    │   │   ├── ui/DashboardNav   # Header unificado adaptativo por papel
    │   │   ├── layout/Footer     # Footer institucional
    │   │   └── forms/            # Formulários com validação Zod
    │   ├── lib/
    │   │   ├── auth.ts           # Sessão via Supabase + cookies demo
    │   │   ├── data.ts           # Queries ao Supabase
    │   │   └── supabase/         # Client e server clients
    │   └── types/domain.ts       # Tipos centrais (Artist, SessionUser, Deal...)
    └── e2e/smoke.spec.ts         # Smoke tests Playwright
```

---

## Segurança

- **XSS via JSON-LD**: dados de usuário escapados (`<`, `>`, `&`) antes de injetar em `<script>` tags
- **Proteção de rotas**: `requireSession()` nas Server Actions e layouts protegidos
- **Links externos**: todos com `rel="noopener noreferrer"`
- **Redirecionamentos**: apenas para rotas internas whitelisted
- **TypeScript strict**: sem `any`, sem escape de tipos

---

## Como Executar Localmente

### Pré-requisitos
- Node.js 20+
- npm ou pnpm

### Instalação

```bash
git clone https://github.com/DGuedz/shc_cwb.git
cd shc_cwb/web
npm install
```

### Modo Demo (sem Supabase)

```bash
npm run dev
```

Acesse `http://localhost:3000`. O sistema detecta automaticamente a ausência de variáveis de ambiente e opera em **modo demo seguro** com dados mockados.

### Com Supabase (produção)

Crie um arquivo `.env.local` em `web/`:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key
```

### Scripts disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção (TypeScript strict)
npm run lint         # Lint (0 erros, 0 warnings)
npm run test:smoke   # Smoke tests Playwright (requer servidor rodando)
```

---

## Como Usar

### Como Visitante
1. Acesse [shc-cwb.vercel.app](https://shc-cwb.vercel.app)
2. Navegue pelo catálogo público em `/catalogo`
3. Clique em um artista para ver o dossiê completo
4. Inscreva-se na waitlist em `/waitlist`

### Como Artista (demo)
1. Acesse [shc-cwb.vercel.app/demo?role=artist](https://shc-cwb.vercel.app/demo?role=artist)
2. Explore o Dossiê em `/dashboard/dossie`
3. Veja os Acordos em `/dashboard/acordos`

### Como Contratante (demo)
1. Acesse [shc-cwb.vercel.app/demo?role=contractor](https://shc-cwb.vercel.app/demo?role=contractor)
2. Crie uma oportunidade em `/oportunidades/criar`
3. Acesse o Matchboard em `/dashboard/matchboard`

---

## Sobre o Fundador

**DGuedz** é rapper, compositor, empreendedor e atleta com mais de 25 anos de carreira na música brasileira, iniciando sua trajetória em 1998.

**Discografia:** *A minha cara é esse parceiro* (2005) · *In The Air* (2010) · *Insólito* EP (2017) · *Started From The Bottom 2 The Top* (2022)

Compositor para **Lucas Lucco** e ex-integrante do **All Star Brazil**. Lançamentos como *"Vejo seu Olhar"* e *"Maresia"* foram destaque em universalmusic.com.br e estiloblack.com.br.

O Street Hub Connect nasceu da experiência direta de 25 anos navegando o mercado musical independente brasileiro — construído por quem viveu o problema, para quem vive da arte.

**DGuedz nas redes:**

[![Instagram](https://img.shields.io/badge/@dguedz-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/dguedz)
[![Facebook](https://img.shields.io/badge/Dguedz-1877F2?style=flat-square&logo=facebook&logoColor=white)](https://facebook.com/dguedz)
[![X](https://img.shields.io/badge/@dguedz__-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/dguedz_)
[![YouTube](https://img.shields.io/badge/Canal%20DGuedz-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://youtube.com/@dguedz)
[![Spotify](https://img.shields.io/badge/DGuedz-1DB954?style=flat-square&logo=spotify&logoColor=white)](https://open.spotify.com/artist/dguedz)
[![Palco MP3](https://img.shields.io/badge/Palco%20MP3-DGuedz-FF6B00?style=flat-square)](https://www.palcomp3.com.br/dguedz)

---

## Melhorias Futuras

- [ ] Persistência de waitlist no Supabase com confirmação por email
- [ ] Páginas legais: Privacidade, Termos, Contato
- [ ] SEO individual por rota (Open Graph + JSON-LD por artista)
- [ ] Logs estruturados e painel de eventos (signups, matches, acordos)
- [ ] Analytics privacy-friendly (Plausible ou Umami)
- [ ] Assinatura digital de acordos
- [ ] Registro de ISRC integrado à plataforma
- [ ] Marketplace aberto com curadoria por score de completude

---

## Hackathon TRAE + AI Brasil 2025

Este projeto foi desenvolvido como parte do **Desafio TRAE + AI Brasil**, realizado entre 17 e 20 de junho de 2025.

[![Hackathon](https://img.shields.io/badge/🏆%20Submissão-TRAE%20+%20AI%20Brasil-FF6B35?style=for-the-badge)](https://trae.papodesysadmin.org/)

| Entregável | Link |
|---|---|
| 🌐 Aplicação | [shc-cwb.vercel.app](https://shc-cwb.vercel.app) |
| 📦 Repositório | [github.com/DGuedz/shc_cwb](https://github.com/DGuedz/shc_cwb) |
| 🎬 Vídeo | Em breve |

---

<div align="center">

**Street Hub Connect**
*Curadoria, booking e governança para a economia criativa brasileira.*

Construído com ♪ por [DGuedz](https://instagram.com/dguedz) · Powered by [TRAE IDE](https://trae.ai) + Claude

</div>
