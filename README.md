# Poupapp — UI com Tailwind (🎨✨)

> Poupapp é uma interface moderna, leve e responsiva construída com Tailwind CSS e JavaScript. Ideal para prototipagem rápida e como base para dashboards ou apps financeiros pessoais.

[![Status](https://img.shields.io/badge/status-Em%20desenvolvimento-yellow)](https://github.com/mrsMatheusRocha/Poupapp-Tailwind)
[![Linguagem](https://img.shields.io/badge/linguagem-JavaScript-brightgreen)]()
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4)]()

---

Sumário
- Sobre
- Visual
- Funcionalidades
- Tecnologias
- Como rodar
- Customização rápida
- Boas práticas e acessibilidade
- Contribuição
- Contato

---

Sobre
-----
Poupapp é um projeto front-end focado em velocidade e clareza visual, usando Tailwind CSS para estilização utilitária e JavaScript para interações. Foi pensado para ser facilmente adaptado a aplicações de finanças pessoais, registro de economia e dashboards simples.

Visual (Preview)
----------------
> Observação: substitua as imagens/gifs abaixo pelos assets reais do projeto.

- Tela inicial / Dashboard
  ![preview](./assets/preview-dashboard.png)

Funcionalidades principais
--------------------------
- Layout responsivo pronto para mobile e desktop
- Componentes estilizados com Tailwind: botões, cards, inputs, modais
- Padrões de espaçamento e tipografia centralizados para fácil manutenção
- Interações básicas via JavaScript (abertura/fechamento de modais, validação simples)
- Estrutura pensada para ser integrada com APIs ou state management posteriormente

Tecnologias
-----------
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- (Sugestão) Vite / Parcel / Webpack para bundling — escolha conforme preferência

Como rodar (exemplo com npm)
----------------------------
1. Clone o repositório
   ```bash
   git clone https://github.com/mrsMatheusRocha/Poupapp-Tailwind.git
   cd Poupapp-Tailwind
   ```

2. Instale dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Rodando em desenvolvimento
   ```bash
   npm run dev
   # ou (se usar outra ferramenta)
   npm run start
   ```

4. Gerando build para produção
   ```bash
   npm run build
   ```

Se você usa Vite, adicione/ajuste scripts no package.json:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Estrutura sugerida
------------------
- src/
  - index.html
  - main.js
  - styles/
    - index.css (Tailwind directives)
  - components/
    - Header.js
    - Card.js
    - Modal.js
- assets/ (imagens e ícones)
- tailwind.config.js
- postcss.config.js
- package.json

Dicas de customização rápida
-----------------------------
- Paleta: Altere cores no tailwind.config.js em theme.extend.colors.
- Tipografia: Configure fonts via @import no index.css e atualize theme.fontFamily.
- Componentes: Extraia classes repetidas para @apply em arquivos CSS ou crie componentes JS/HTML reutilizáveis.
- Dark mode: Ative em tailwind.config.js (class ou media) e crie variações com dark:...

Acessibilidade & Boas práticas
------------------------------
- Use roles e aria-* em componentes interativos (modais, menus).
- Garanta contraste adequado nas cores (AA ou AAA conforme necessidade).
- Torne o foco visível com outlines personalizados em Tailwind (focus:ring, focus:outline-none cuidado).

Testes e Qualidade
------------------
- Linter: ESLint + Prettier para JavaScript
- Style checks: use stylelint se desejar checar CSS
- Testes unitários: Jest + Testing Library para componentes JS puros

Contribuição
------------
Se quiser contribuir:
1. Fork o repositório
2. Crie uma branch para sua feature: git checkout -b feat/nova-coisa
3. Faça commits claros e pequenos
4. Abra um Pull Request descrevendo a mudança e o porquê

Sugestões de labels a usar em issues:
- enhancement
- bug
- docs
- help wanted

Modelos de issue (exemplo resumido)
- Título: "Melhorar acessibilidade do modal de transação"
- Checklist:
  - [ ] Adicionar foco no primeiro input
  - [ ] Fechar com Esc
  - [ ] Marcar aria-hidden quando oculto
  
Contato
-------
Mantainer: mrsMatheusRocha  
GitHub: https://github.com/mrsMatheusRocha
