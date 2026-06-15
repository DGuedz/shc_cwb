---
name: "hook-via-intencao"
description: "Captura intenções vagas de design/arquitetura e as traduz em propostas visuais concretas ou roteamento de dados. Invoque quando o usuário pedir design/UI sem especificações claras."
---

# Hook via Intenção (Intent Hook)

Skill inspirada na mecânica de "Design Direcional" (Fallback) do Huashu Design, adaptada para o ecossistema ASTEPAM / Street Hub Connect. Atua como um interceptador de intenções vagas, impedindo que o agente gere código genérico ("AI slop") sem contexto.

## Quando Invocar
- O usuário solicita uma página, componente ou interface sem fornecer referências claras, assets ou wireframes.
- O usuário pede "um design para X" mas não tem os requisitos técnicos fechados.
- É necessário conectar a intenção de UI com os guidelines de marca (Brutalismo Institucional) ou com a ingestão de dados via `hermes-memory-ingest`.

## Regras de Operação (O Pipeline do Hook)

### 1. Interceptação & Clarificação (Stop & Think)
Não comece a codar imediatamente. 
- Extraia a intenção real: É uma interface B2B? É uma vitrine de diretório? É um dashboard financeiro?
- **Verifique a Marca:** Aplique a regra do "Brutalismo Institucional" (Surface `#131313`, Emerald `#10B981`, tipografia Archivo Narrow e Mono).

### 2. O Roteamento de Skills
Dependendo da intenção detectada, o agente deve se apoiar nas seguintes capacidades:
- **Intenção de Layout / UI:** Invoque mentalmente as diretrizes do `web-design-guidelines` e `frontend-design`. Sem bordas arredondadas orgânicas, sem sombras suaves. Use bordas de 1px (`#393939`).
- **Intenção de Dados Institucionais / Dossiê:** Se a UI precisar lidar com CNPJs, metadados ou relatórios, estruture os dados pensando no contrato do `hermes-memory-ingest` (separando meta, eventos, proofs e pdfs_offchain).

### 3. A Mecânica de Fallback (As 3 Propostas)
Se a intenção for muito vaga, não faça perguntas abertas. Ofereça **3 caminhos visuais concretos** para o usuário escolher:
1. **Abordagem Analítica (Terminal-like):** Focada puramente na tabela de dados, FONT-MONO e alta densidade de informação (ideal para `/wallet` e `/deals`).
2. **Abordagem de Conversão (Hero/Impact):** Contraste cirúrgico, tipografia gigante e botões de outline pulsantes (ideal para `/home` e onboarding).
3. **Abordagem de Governança (Dossiê Técnico):** Leitura confortável, grids rígidos em blocos de texto e badges de status verde esmeralda para validação (ideal para `/diretorio` e `/governanca`).

## Exemplo de Resposta do Hook
Quando acionado, o agente deve responder:
> "Sua intenção foi capturada. Para não gerarmos um design genérico, aqui estão 3 caminhos estruturados sob o Brutalismo Institucional do SHC. Qual reflete melhor o que você quer construir? [Apresentar opções]"
