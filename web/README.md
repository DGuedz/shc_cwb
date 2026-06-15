# Street Hub Connect

Aplicacao `Next.js 16 + TypeScript + Tailwind CSS v4 + Zustand + Supabase` criada para consolidar os prototipos do repositório em uma plataforma B2B navegável.

## Escopo entregue

- Rotas publicas:
  - `/`
  - `/catalogo`
  - `/sign-in`
- Rotas protegidas:
  - `/onboarding/artista`
  - `/onboarding/contratante`
  - `/dashboard/matchboard`
  - `/dashboard/acordos`
  - `/dashboard/dossie`
- Redirecionamentos:
  - `ArtistOnboarding -> /dashboard/dossie`
  - `OpportunityCreation -> /dashboard/matchboard`
- Seguranca:
  - `src/proxy.ts` para gate otimista
  - `requireSession()` para validacao efetiva no servidor
  - migration SQL com RLS para `artists`, `opportunities` e `matches`
- Performance:
  - `LazyMotion` + `domAnimation`
  - headers de seguranca em `next.config.ts`
  - `not-found.tsx`, `error.tsx` e `dashboard/error.tsx`

## Estrutura

```text
src/
├── app/
│   ├── catalogo/
│   ├── dashboard/
│   ├── onboarding/
│   ├── sign-in/
│   └── actions.ts
├── components/
├── lib/
├── store/
├── types/
└── proxy.ts

supabase/
├── migrations/
└── tests/
```

## Setup local

1. Copie `.env.example` para `.env.local`
2. Preencha:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

3. Instale dependencias:

```bash
npm install
```

4. Rode o app:

```bash
npm run dev
```

## Preview publico local

Use URLs distintas para QA em modo dev e para o preview de handoff final:

```text
dev:qa        -> http://127.0.0.1:3200
preview:start -> http://127.0.0.1:3201
```

Para subir a instancia de preview:

```bash
npm run preview
```

Esse fluxo recompila o app com `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3201` e sobe a instancia em:

```text
http://127.0.0.1:3201
```

Validacoes minimas recomendadas nessa URL:

- `/`
- `/catalogo`
- `/dashboard` para confirmar redirecionamento anonimo e `X-Robots-Tag`

## Fluxo sem credenciais

Se as variaveis do Supabase nao estiverem definidas, o projeto entra em modo demo:

- login controlado por cookie
- rotas protegidas continuam operando
- dashboards usam fallback mockado
- onboarding continua validando UX e redirecionamentos

## Deploy

Deploy principal pensado para Vercel:

- `vercel.json` configurado para `nextjs`
- regiao `gru1`
- headers de seguranca no `next.config.ts`

## Banco e RLS

Arquivo principal:

- `supabase/migrations/202606150001_street_hub_connect_core.sql`

Smoke test manual:

- `supabase/tests/rls_smoke.sql`

## Comandos

```bash
npm run dev
npm run dev:qa
npm run lint
npm run build
npm run preview
```

Referencia rapida:

- `npm run dev`: ambiente local padrao do Next.js
- `npm run dev:qa`: servidor de QA em `http://127.0.0.1:3200`
- `npm run preview`: build de preview + servidor em `http://127.0.0.1:3201`
