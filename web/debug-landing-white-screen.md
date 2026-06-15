# Debug Session: landing-white-screen

Status: OPEN

## Sintoma
- Landing page abre em branco.
- Navegacao publica nao abre as paginas como esperado.

## Hipoteses
1. Um erro de runtime em componente cliente do shell/header interrompe a montagem da home.
2. Ha excecao de hidratacao relacionada a hooks de navegacao ou a `framer-motion`.
3. O header publico com anchors/links esta produzindo estrutura invalida ou conflito de renderizacao.
4. O CSS global esta ocultando o conteudo ou produzindo canvas branco por sobreposicao.
5. O erro ocorre somente no browser e precisa de evidencias de console/network para isolar a origem.

## Plano
1. Reproduzir a tela branca e coletar evidencias de runtime.
2. Instrumentar pontos minimos de montagem no shell e na landing.
3. Comparar logs antes/depois da correcao.
4. Aplicar a menor correcao possivel.

## Evidencias
- `curl http://localhost:3000` respondeu `200 OK`, descartando indisponibilidade HTTP.
- Screenshot headless em `/tmp/shc-home.png` mostrou a landing renderizada normalmente.
- Navegacao direta para `/catalogo` abriu com conteudo valido.
- Clique headless em `/catalogo` tambem navegou corretamente em reproducao isolada.
- O sintoma de "site branco" nao foi reproduzido de forma deterministica no ambiente atual.

## Correcao
- Nenhuma correcao funcional aplicada para a tela branca ate aqui.
- Instrumentacao minima de browser mantida no shell para capturar erro/rejeicao caso o sintoma reapareca.

## Verificacao
- Camada SEO tecnica implementada em paralelo: metadata base, canonical, robots, sitemap, manifest e OG image.
