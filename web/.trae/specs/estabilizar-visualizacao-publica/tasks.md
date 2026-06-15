# Tasks
- [x] Task 1: Revisar a superficie publica atual e mapear o ponto exato da falha de visualizacao.
  - [x] Confirmar se o problema ocorre na home, no catalogo ou no preview dedicado
  - [x] Diferenciar conflito de porta, erro de runtime e falha visual de layout
  - [x] Registrar o comportamento observado com evidencia objetiva

- [x] Task 2: Estabilizar o fluxo de renderizacao publica.
  - [x] Garantir que a home publica renderize sem depender de logica de autenticacao
  - [x] Garantir que a navegacao publica continue funcional em desktop e mobile
  - [x] Eliminar ambiguidade entre servidores locais usados para QA e preview

- [x] Task 3: Consolidar o preview publico para handoff.
  - [x] Definir uma URL unica de preview local para validacao final
  - [x] Verificar a home e uma rota publica secundaria nessa URL
  - [x] Confirmar que a URL pode ser compartilhada para revisao

- [x] Task 4: Verificar isolamento de rotas protegidas e indexacao.
  - [x] Confirmar redirecionamento anonimo nas rotas protegidas
  - [x] Confirmar `noindex` e/ou `X-Robots-Tag` nas areas protegidas
  - [x] Confirmar que rotas publicas continuam indexaveis

- [x] Task 5: Executar QA final de frontend publico.
  - [x] Rodar `lint`
  - [x] Rodar `build`
  - [x] Validar navegacao publica com browser automation
  - [x] Emitir relatorio final com URL de preview

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 2
- Task 4 can run in parallel with Task 3 after Task 2
- Task 5 depends on Task 3 and Task 4
