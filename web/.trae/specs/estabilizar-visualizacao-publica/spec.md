# Estabilizacao de Visualizacao Publica Spec

## Why
Ha um sintoma recorrente de "pagina nao visualiza" que compromete a confianca no front e no fluxo de preview. O projeto precisa de uma base clara para garantir renderizacao publica previsivel, diagnostico objetivo e preview abrivel sem ambiguidade de runtime.

## What Changes
- Definir um fluxo padrao para validar se a pagina publica esta realmente renderizando no navegador e no preview.
- Formalizar requisitos para separar indisponibilidade HTTP, erro de hidratação, conflito de portas e falha visual de CSS/layout.
- Consolidar a estrategia de preview publico local para QA e handoff.
- Definir verificacoes obrigatorias para rotas publicas e protegidas antes de considerar o deploy valido.

## Impact
- Affected specs: landing publica, preview local, diagnostico de renderizacao, QA de rotas
- Affected code: `src/app/page.tsx`, `src/components/ui.tsx`, `src/app/catalogo/page.tsx`, `next.config.ts`, configuracao de preview local

## ADDED Requirements
### Requirement: Renderizacao Publica Verificavel
O sistema SHALL oferecer um fluxo verificavel para confirmar se a pagina publica foi renderizada com sucesso, distinguindo erro visual de falha real de runtime.

#### Scenario: Home publica renderiza corretamente
- **WHEN** a aplicacao for aberta na rota `/`
- **THEN** a home publica deve exibir conteudo visivel, navegacao funcional e resposta HTTP valida
- **AND** a validacao deve incluir evidencia automatizada de navegador

#### Scenario: Sintoma de tela branca
- **WHEN** o usuario relatar que a pagina esta branca ou nao visualiza
- **THEN** o fluxo de diagnostico deve separar se o problema esta em HTTP, hidratação, conflito de porta, erro de navegador ou CSS/layout
- **AND** a investigacao deve produzir um resultado objetivo e reproduzivel

### Requirement: Preview Publico Deterministico
O sistema SHALL expor uma URL de preview local dedicada e validada, sem depender de instancias concorrentes ou ambiguas do servidor de desenvolvimento.

#### Scenario: Preview disponivel para QA
- **WHEN** a validacao final for concluida
- **THEN** deve existir uma URL unica de preview para abrir a aplicacao
- **AND** a URL deve responder com a pagina publica e pelo menos uma rota publica secundaria

### Requirement: Isolamento de Rotas e Indexacao
O sistema SHALL preservar a separacao entre rotas publicas e protegidas, garantindo que a validacao do front nao reintroduza mistura de fluxo institucional com area autenticada.

#### Scenario: Areas protegidas permanecem isoladas
- **WHEN** indexadores ou usuarios anonimos acessarem rotas protegidas
- **THEN** o sistema deve continuar redirecionando e marcando essas rotas como nao indexaveis
- **AND** a home publica nao deve depender de logica de autenticacao para renderizar

### Requirement: Protocolo Minimo de QA Frontend
O sistema SHALL definir um protocolo minimo de QA para cada entrega visual publica.

#### Scenario: Entrega pronta para handoff
- **WHEN** uma mudanca de frontend publico for finalizada
- **THEN** devem ser executadas validacoes de build, lint, navegacao publica e preview
- **AND** os resultados devem indicar com clareza se o deploy esta apto ou bloqueado

## MODIFIED Requirements
### Requirement: Catalogo Publico Indexavel
O catalogo publico SHALL permanecer acessivel e indexavel sem depender de runtime totalmente dinamico, usando uma estrategia compativel com SEO e estabilidade operacional.

#### Scenario: Catalogo publico validado
- **WHEN** a rota `/catalogo` e suas rotas publicas derivadas forem acessadas
- **THEN** elas devem responder com conteudo renderizado, metadata publica e navegacao funcional

## REMOVED Requirements
### Requirement: Preview baseado em instancia ambigua de desenvolvimento
**Reason**: A existencia de servidores concorrentes em portas diferentes torna o diagnostico confuso e prejudica o handoff.
**Migration**: Adotar uma URL dedicada de preview validada ao final do fluxo e registrar o resultado de QA dessa instancia.
