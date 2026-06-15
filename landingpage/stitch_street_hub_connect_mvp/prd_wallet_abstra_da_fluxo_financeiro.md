# PRD: Arquitetura de Wallet Abstraída e Fluxo Financeiro (B2B)

## 1. OBJETIVO DO MÓDULO
Construir o Motor de Liquidação do Street Hub Connect. Uma arquitetura de "Wallet Abstraída" (espelhamento de banco de dados) que gerencia o fluxo de Grana entre Outsider (Artista), Padrinho (Empresa/Contratante) e a Associação ICT (Street Hub Connect).

## 2. FASE 1: INGESTÃO DE RECURSOS (Compliance Lei 9.249/95)
Para garantir a dedutibilidade tributária (até 2% do Lucro Operacional Bruto), a entrada do dinheiro segue ritos estritos:
- **Mecânica:** Transferência direta para a conta bancária da Associação.
- **Flow:** Aprovação do Match gera cobrança (PIX/TED) vinculada ao CNPJ da OSC.
- **Visualização:** Saldo atualizado no Supabase como `PROVISIONADO`.

## 3. FASE 2: CUSTÓDIA INSTITUCIONAL (Escrow)
A Associação atua como interveniente garantidora:
- **Abstração:** O Outsider visualiza [ VALOR RETIDO EM GARANTIA ], eliminando o risco de inadimplência.
- **Segurança:** Valor imobilizado no caixa da Associação para fins de auditoria.

## 4. FASE 3: LIQUIDAÇÃO E SPLIT
Execução após Double Opt-in (confirmação bilateral da realização do show):
- **Fatia 1 (Associação):** Retenção de % para manutenção sistêmica (Hustle), reinvestido conforme estatuto.
- **Fatia 2 (Artista):** Repasse do cachê líquido via integração bancária.
- **Status:** Transição de `PROVISIONADO` para `LIQUIDADO`.

## 5. FASE 4: DOSSIÊ CONTÁBIL E ACCOUNTABILITY
Emissão automática de provas para o Padrinho:
- Relatório de Execução.
- Comprovante de transferência.
- **Declaração IN SRF nº 87/96:** Recibo oficial assinado digitalmente para evitar glosa fiscal.