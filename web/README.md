# SHC // CWB

Street Hub Connect: Infraestrutura digital para conectar a cena artística independente com o mercado corporativo de Curitiba.

## 🔗 Links Oficiais (Hackathon TRAE + AI Brasil)

- **Aplicação:** [https://shc-cwb.vercel.app](https://shc-cwb.vercel.app)
- **Repositório:** [https://github.com/seu-usuario/shc-cwb](https://github.com/seu-usuario/shc-cwb)
- **Vídeo de Apresentação (Pitch):** [Link do YouTube/Loom aqui]
- **Deploy:** Vercel (Produção)

---

## 🎯 O Problema
A cena artística independente possui muito talento e engajamento, mas sofre com **informalidade, falta de dados estruturados e dificuldade de acesso ao mercado corporativo**. Do outro lado, empresas que buscam impacto cultural têm dificuldade de curadoria e validação de artistas locais para campanhas e eventos.

## 💡 A Solução (SHC_NETWORK)
O Street Hub Connect é uma plataforma que atua como **agente de curadoria e matchmaking**:
1. **Para o Artista:** Um dossiê on-chain (mock) validando seu alcance, engajamento e métricas reais de mercado.
2. **Para a Empresa:** Um fluxo seguro de criação de oportunidades que, através de agentes curadores, faz o "match" automático com os artistas mais aderentes ao budget, região e estilo.
3. **Tripartite Handshake:** Garantia de segurança e transparência entre Contratante, Artista e a Street Hub na formação do deal.

## 🚀 Como Avaliar (Roteiro da Banca)
Para experimentar o fluxo completo do MVP, sugerimos o seguinte caminho:

### 1. Visão Empresa (Contratante)
1. Acesse o **[Portal de Login](/sign-in)** e escolha **Entrar como Contratante (Modo Demo)**.
2. Você será direcionado para o **Matchboard**.
3. Clique em **Criar Oportunidade**, preencha os dados (ex: "Festival de Verão 2026") e publique.
4. O *Agente Curador* processará o pedido e criará o Deal no painel, já cruzando com a base de artistas.
5. No Matchboard, clique em **Avaliar Dossiê** em algum artista com alta afinidade para abrir o *Tripartite Handshake*.

### 2. Visão Artista (Associado)
1. Saia da conta (Logout no menu superior direito).
2. Acesse o **[Portal de Login](/sign-in)** e escolha **Entrar como Artista (Modo Demo)**.
3. Você cairá no seu **Dossiê Digital** (SHC_ID), vendo suas métricas de mercado.
4. No menu lateral, acesse **Acordos** para ver os deals fechados ou em negociação.

### 3. Visão Pública
- **[Catálogo Editorial](/catalogo):** Vitrine pública de artistas já verificados pela Street Hub, consumindo dados do backend.
- **[Apresentação Institucional](/presentation):** Manifesto e decks da operação.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS, Framer Motion
- **Database / Auth:** Supabase (PostgreSQL)
- **Deploy:** Vercel

## 💻 Como Rodar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/shc-cwb.git
cd shc-cwb/web
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```
*(Para avaliar apenas o front-end em modo demo, as variáveis do Supabase não são obrigatórias).*

4. Inicie o servidor:
```bash
npm run dev
```
O app estará disponível em `http://localhost:3000`.

---

## 🚀 Próximos Passos (Evolução)
- Integração de Contratos Inteligentes (ZK) para registro imutável do *Tripartite Handshake*.
- Agente LLM real (via Vercel AI SDK) para gerar a justificativa de *Afinidade (Score)* do Matchmaking.
- Gateway de pagamento em escrow para segurar o budget até a execução do show.
