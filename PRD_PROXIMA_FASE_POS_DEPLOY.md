# PRD — Próxima Fase Pós-Deploy

## 1. Contexto

O Street Hub Connect está no ar em produção. A inspeção mais recente validou o fluxo público e os principais fluxos demo, além de corrigir uma issue de segurança em JSON-LD e ajustes de responsividade em telas críticas.

Esta próxima fase deve transformar o MVP publicado em uma versão mais confiável, consistente e pronta para avaliação externa contínua: com UI institucional coesa, hardening de segurança, testes de regressão, captura real de interesse e base operacional para artistas e contratantes.

## 2. Estado Atual

### Produção

- Aplicação publicada via Vercel.
- Deploy automático esperado a partir das mudanças versionadas.
- TypeScript sem erros.
- Header unificado com `DashboardNav`.
- Rodapé minimalista profissional iniciado para páginas públicas.

### Inspeção Concluída

#### Segurança

| Arquivo | Problema | Fix |
| --- | --- | --- |
| `catalogo/[slug]/page.tsx` | `JSON.stringify` não escapava `<`, `>` e `&`, permitindo XSS via JSON-LD com dados do artista | Escapar `\u003c`, `\u003e`, `\u0026` antes de injetar |

Sem issues encontrados em:

- SQL injection: queries via Supabase.
- Open redirect: URLs externas hardcoded.
- Links `_blank`: com `rel="noopener noreferrer"`.
- Auth bypass: role check nas actions e rotas protegidas principais.

#### Responsividade

| Arquivo | Problema | Fix |
| --- | --- | --- |
| `repositorios` | `text-6xl` vazava em mobile | `clamp(2rem,5vw,3.75rem)` |
| `waitlist` | `text-5xl` vazava em mobile | `clamp(1.75rem,4.5vw,3rem)` |
| `not-found` | `text-6xl` fixo | `clamp` |
| `error` | `text-6xl` fixo | `clamp` |

## 3. Objetivo da Próxima Fase

Elevar o produto de MVP demonstrável para beta confiável, com consistência visual, validações automatizadas e fluxos mínimos persistentes para captação de artistas, contratantes e oportunidades.

## 4. Métricas de Sucesso

- `npm run build` passa com TypeScript ativo em todas as entregas.
- `npm run lint` sem erros; warnings documentados ou reduzidos.
- 100% das rotas públicas principais respondem `200` em produção.
- Header único em todas as páginas, sem shells antigos.
- Footer público presente em rotas institucionais e de descoberta.
- Nenhum texto crítico vazando horizontalmente em mobile.
- Waitlist persistida em backend ou storage seguro.
- Fluxos demo artista e contratante executáveis do início ao fim.

## 5. Escopo

### P0 — Estabilidade e Confiança

1. Criar suíte de smoke tests para produção e local.
2. Garantir header único em todas as rotas.
3. Finalizar rodapé minimalista nas páginas públicas.
4. Adicionar teste/regressão para escape seguro de JSON-LD.
5. Validar middleware e actions de role para artista/contratante.
6. Remover ou resolver warnings de lint de maior impacto.

### P1 — Produto Público

1. Persistir formulário de waitlist.
2. Criar estado de sucesso/erro para envio da waitlist.
3. Adicionar páginas legais mínimas:
   - Privacidade.
   - Termos.
   - Contato institucional.
4. Revisar SEO por rota:
   - Titles.
   - Descriptions.
   - Open Graph.
   - JSON-LD seguro.

### P1 — Fluxo Contratante

1. Tornar criação de oportunidade mais objetiva.
2. Exibir oportunidade recém-criada no Matchboard de forma clara.
3. Mostrar estado vazio com CTA correto quando não há oportunidade.
4. Validar orçamento, data e briefing com mensagens amigáveis.

### P1 — Fluxo Artista

1. Melhorar onboarding de artista com dados mínimos reais.
2. Validar press kit, cidade, gênero e faixa de cachê.
3. Exibir dossiê com status de completude.
4. Criar CTA claro para atualizar perfil.

### P2 — Operação e Observabilidade

1. Adicionar logs estruturados para actions críticas.
2. Criar painel simples de eventos:
   - Signup demo.
   - Waitlist submit.
   - Oportunidade criada.
   - Match avaliado.
3. Preparar integração com analytics privacy-friendly.
4. Documentar runbook de deploy e rollback.

## 6. Requisitos Funcionais

### Header

- Deve usar apenas `DashboardNav` como navegação principal.
- Visitante deve ver:
  - Quem Somos.
  - Pitchdeck.
  - Artistas.
  - News.
  - Waitlist.
  - Entrar.
- Artista deve ver:
  - Quem Somos.
  - Pitchdeck.
  - Meu Dossiê.
  - Acordos.
  - Artistas.
  - News.
  - Badge de papel.
  - Avatar/iniciais.
  - Sair.
- Contratante deve ver:
  - Quem Somos.
  - Pitchdeck.
  - Artistas.
  - Oportunidades.
  - Matchboard.
  - News.
  - Badge de papel.
  - Avatar/iniciais.
  - Sair.

### Rodapé

- Deve ser minimalista, institucional e discreto.
- Deve aparecer nas páginas públicas principais.
- Deve conter:
  - Marca.
  - Frase curta de posicionamento.
  - Links essenciais.
  - Copyright.
  - Status operacional discreto.
- Não deve aparecer em telas operacionais quando atrapalhar foco, como dashboards protegidos.

### Segurança

- Todo JSON injetado em HTML deve escapar caracteres perigosos.
- Toda action protegida deve verificar sessão e role no servidor.
- Links externos devem usar `rel="noopener noreferrer"`.
- URLs de redirect devem ser locais ou whitelisted.
- Dados vindos do Supabase não devem ser confiados como HTML.

### Responsividade

- Nenhum título deve depender de tamanho fixo grande sem `clamp`.
- Header deve ser completo em desktop e deliberadamente compacto em tablet/mobile.
- Mobile deve mostrar `Menu`, não uma navegação aparentemente incompleta.
- Textos longos devem quebrar sem overflow horizontal.

## 7. Requisitos Não Funcionais

- Build de produção não pode ignorar TypeScript.
- Deploy não pode depender de estado local não versionado.
- Componentes institucionais devem ser reutilizáveis.
- Performance inicial deve evitar imagens pesadas não otimizadas quando possível.
- Páginas públicas devem manter boa indexação.

## 8. Critérios de Aceite

### Build e Qualidade

- `npm run build` passa localmente.
- `npm run lint` não tem erros.
- Smoke local cobre pelo menos:
  - `/`
  - `/sign-in`
  - `/waitlist`
  - `/quem-somos`
  - `/news`
  - `/pitchdeck`
  - `/catalogo`
  - `/catalogo/vnxx-artist-1`
  - `/dashboard/dossie`
  - `/dashboard/matchboard`

### Produção

- As rotas públicas principais retornam `200`.
- Header novo aparece em todas as rotas públicas.
- Não há header legado em `AppShell`, onboarding ou páginas de perfil.
- Footer aparece nas páginas públicas.
- Fluxo demo artista funciona:
  - Login como artista.
  - Dossiê.
  - Acordos.
  - Logout.
- Fluxo demo contratante funciona:
  - Login como contratante.
  - Criar oportunidade.
  - Matchboard.
  - Logout.

## 9. Backlog Priorizado

| Prioridade | Item | Resultado Esperado |
| --- | --- | --- |
| P0 | Smoke tests automatizados | Regressões de header, rotas e auth detectadas antes do deploy |
| P0 | Segurança JSON-LD com teste | XSS por metadados não retorna |
| P0 | Header único | Zero inconsistência visual entre rotas |
| P0 | Footer público final | Base institucional consistente |
| P1 | Waitlist persistida | Leads reais capturados |
| P1 | Páginas legais | Produto mais confiável para avaliação externa |
| P1 | SEO por rota | Melhor preview e indexação |
| P1 | Estados vazios | Fluxos mais claros para demo e beta |
| P2 | Analytics e eventos | Dados de uso para priorização |
| P2 | Runbook | Deploy/rollback mais seguro |

## 10. Riscos

- Headers duplicados podem voltar se novas páginas usarem shells antigos.
- Dados vindos do banco podem introduzir XSS se renderizados como HTML.
- Demo mode pode mascarar problemas reais de Supabase/Auth.
- Páginas estáticas podem parecer desatualizadas se deploy e alias forem confundidos.
- Formulários sem persistência podem gerar perda de leads reais.

## 11. Plano de Entrega

### Semana 1 — Hardening

- Automatizar smoke tests.
- Consolidar header/footer.
- Adicionar teste para JSON-LD seguro.
- Revisar rotas protegidas e actions.

### Semana 2 — Captura e Institucional

- Persistir waitlist.
- Criar páginas legais.
- Revisar SEO/OG por rota.
- Melhorar estados vazios.

### Semana 3 — Fluxos Beta

- Refinar onboarding de artista.
- Refinar criação de oportunidade.
- Melhorar Matchboard e Dossiê.
- Preparar demo script externo.

### Semana 4 — Observabilidade

- Eventos básicos.
- Logs estruturados.
- Runbook de deploy.
- Checklist de release.

## 12. Fora de Escopo Por Enquanto

- Pagamentos reais.
- Assinatura digital juridicamente vinculante.
- Smart contracts reais.
- ZK proofs reais.
- Marketplace aberto sem curadoria.
- Chat em tempo real.

## 13. Definição de Pronto

A próxima fase estará pronta quando o produto puder ser apresentado a artistas, marcas e parceiros sem intervenção técnica, com navegação consistente, cadastro de interesse persistido, fluxos demo estáveis, segurança básica validada e checklist de produção reexecutável.
