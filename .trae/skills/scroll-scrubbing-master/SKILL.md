---
name: "scroll-scrubbing-master"
description: "Implementa Scroll-Scrubbing 3D fluído atrelando o tempo do vídeo ao scroll. Invoque quando precisar construir ou refatorar a Hero Section com vídeo interativo de alta retenção."
---

# Scroll-Scrubbing & Fluidity Mechanics

ID: scroll-scrubbing-master  
Versão: 1.0.0  
Contexto: Orquestração técnica para controle de reprodução de vídeo 3D via rolagem do mouse (Scroll-Scrubbing) na Hero Section. Esta skill define a arquitetura React/Framer Motion, a segurança de performance do arquivo de vídeo e as regras de sumiço da tipografia para garantir fluidez extrema e imersão.

## 1. O Mecanismo de Desenvolvimento (Como a Engenharia Funciona)

Para transformar o vídeo em um ambiente 3D interativo, o agente deve abandonar o comportamento de autoplay e transferir o controle do tempo do vídeo para a barra de rolagem:

*   **O Hook de Sincronia:** O agente deve utilizar o Framer Motion (especificamente o hook `useScroll`) em um container de grande altura (ex: `h-[400vh]`). O valor `scrollYProgress` (que varia de 0 a 1) deve ser mapeado diretamente para o atributo `currentTime` da tag `<video>`.
*   **Obrigações da Tag:** A tag de vídeo deve conter rigorosamente os atributos `muted`, `playsInline` e `preload="auto"`, sem nenhum controle visível para o usuário. O scroll será o único "motor" de avanço.
*   **A Regra do "Hero Early Fade-Out":** Para não obstruir o protagonismo do vídeo, a copy (título e subtítulo) que inicia na Hero Section DEVE evaporar rapidamente. O agente deve mapear a opacidade do texto para ir de 100% a 0% estritamente no range de scroll `[0, 0.25]`. Os 75% restantes da descida pertencem inteiramente à animação limpa do produto em 3D.

## 2. O Segredo da Fluidez (Segurança de Performance com FFmpeg)

A causa número um de travamentos e engasgos (stuttering) em animações controladas por scroll é a compressão nativa do vídeo. Formatos `.mp4` comuns usam quadros preditivos (P-frames e B-frames) que exigem processamento pesado da GPU para serem "adivinhados" quando o usuário rola para trás ou para frente agressivamente.

*   **A Vacina (Keyframes Absolutos):** Antes de subir o vídeo para o código, o agente DEVE orientar ou aplicar o reencode da mídia via terminal usando o FFmpeg com o comando `ffmpeg -i input.mp4 -g 1 output.mp4`. Isso destrói a compressão preditiva e força cada quadro do vídeo a se tornar um keyframe absoluto (I-frame).

## 3. Como essa Skill Traz Fluidez e Retenção para o User (O UX)

Ao processar o vídeo com FFmpeg e atrelá-lo matematicamente ao `scrollYProgress`, criamos um efeito psicológico profundo no usuário:

*   **O Fim da Passividade:** O usuário deixa de ser um "espectador" assistindo a um vídeo e torna-se o "operador" de uma máquina. A imagem só avança quando ele rola para baixo, e rebobina fisicamente quando ele rola para cima. Isso prende a atenção e aumenta o tempo de tela.
*   **Sensação de Infraestrutura Pesada:** Ao garantir que a rolagem responda instantaneamente e de forma suave (sem engasgos), o cérebro do usuário interpreta a interface não como uma página da web frágil, mas como um software de missão crítica e alto valor percebido.

## 🚀 Gatilho de Execução

Para injetar esse comportamento na sua arquitetura, envie o seguinte comando ao seu agente construtor:

> "Atue sob a skill 'scroll-scrubbing-master'. Implemente a Hero Section atrelando a reprodução do background em vídeo ao 'useScroll'. Garanta que o texto evapore usando o mapeamento de opacidade no range [0, 0.25] e prepare o container para receber o vídeo pré-renderizado com FFmpeg -g 1. O resultado deve ter a fluidez de um produto premium."
