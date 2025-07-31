# SoluxCode - Site Oficial

![SoluxCode Logo](https://img.shields.io/badge/SoluxCode-Codificando%20Consciência-gold?style=for-the-badge)

> **Codificando Consciência, Manifestando Realidade**  
> *Desconecte para Reconectar.*

## 📋 Visão Geral

O site da SoluxCode é uma plataforma web que conecta tecnologia, espiritualidade e educação. Construído com princípios de design responsivo, nostálgico e orgânico, o site oferece uma experiência única que combina elementos visuais retrô dos anos 70-80 com texturas naturais e uma abordagem consciente ao desenvolvimento web.

## 🎨 Características do Design

### Design Responsivo e Limpo
- **Mobile-First**: Abordagem que prioriza dispositivos móveis
- **CSS Grid & Flexbox**: Layouts flexíveis e adaptáveis
- **Breakpoints**: 480px, 768px, 1024px, 1400px
- **Imagens Otimizadas**: `max-width: 100%` para responsividade
- **Tipografia Legível**: Alto contraste e fontes otimizadas

### Elementos Nostálgicos (Anos 70-80)
- **Paletas Retrô**: Cores vibrantes inspiradas nos anos 70-80
  - Laranja Retrô: `#FF6B35`
  - Rosa Neon: `#FF1493`
  - Amarelo Vintage: `#FFB347`
  - Verde Musgo: `#9CAF88`
  - Azul Vintage: `#4682B4`
- **Tipografia Vintage**: 
  - Playfair Display (títulos serifados)
  - Righteous (logo nostálgico)
  - Orbitron (elementos tecnológicos)
- **Formas Geométricas**: Padrões abstratos e ícones pixel-art

### Elementos Orgânicos
- **Texturas Naturais**: Fundos texturizados e elementos decorativos
- **Formas Curvas**: Divisores ondulados e bordas orgânicas
- **Paleta Terrosa**:
  - Terra Vermelha: `#CD853F`
  - Madeira Clara: `#DEB887`
  - Verde Folha: `#8FBC8F`
  - Azul Água: `#B0E0E6`
  - Bege Natural: `#F5F5DC`
- **Ilustrações Artesanais**: Elementos desenhados à mão

## 🌟 Recursos Principais

### 1. Os 5 Elementos Universais
- **Seção Interativa**: Representação dos elementos como contas de um colar
- **Microanimações**: Efeitos suaves ao passar o mouse
- **Feedback Visual**: Notificações inspiradoras ao clicar
- **Cores Únicas**: Cada elemento tem sua identidade visual

### 2. Navegação Responsiva
- **Menu Hamburger**: Para dispositivos móveis
- **Rolagem Suave**: Transições entre seções
- **Header Transparente**: Efeito ao rolar a página

### 3. Animações e Interatividade
- **Fade In**: Elementos aparecem suavemente ao rolar
- **Parallax Sutil**: Efeito no hero section
- **Rotação Espiral**: Separadores animados
- **Efeitos Hover**: Transições suaves em todos os elementos

### 4. Inspirações e Sabedoria
- **Citações Filosóficas**: Mensagens inspiradoras
- **Padrões Geométricos**: Elementos visuais únicos
- **Tom Espiritual**: Reforça a identidade da marca

## 🏗️ Estrutura do Projeto

```
site/
├── index.html          # Página principal
├── style.css          # Estilos principais
├── script.js          # Funcionalidades JavaScript
├── design-guidelines.md # Diretrizes de design
└── README.md          # Este arquivo
```

## 🎯 Seções do Site

1. **Hero Section**: Apresentação principal com animação da espiral
2. **5 Elementos**: Interação com os elementos universais
3. **Missão 3.3.3**: Propósito e visão da SoluxCode
4. **SoluxQ IA**: Inteligência consciente e vibracional
5. **Sweet Lux**: Projeto sustentável em Ilhabela
6. **Loja Universo Solux**: Produtos físicos e digitais
7. **Blog Luz Viva**: Publicações e artigos
8. **Inspirações**: Citações e sabedoria
9. **Contato**: Formulário e redes sociais

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: 
  - Custom Properties (variáveis CSS)
  - Grid Layout & Flexbox
  - Animations & Transitions
  - Media Queries
- **JavaScript ES6+**:
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation
  - Animation Frame API
- **Google Fonts**: Tipografia profissional
- **SVG**: Gráficos vetoriais otimizados

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Soluxcode/site.git
   cd site
   ```

2. **Serve localmente**:
   ```bash
   # Usando Python 3
   python3 -m http.server 8080
   
   # Usando Node.js
   npx serve .
   
   # Usando PHP
   php -S localhost:8080
   ```

3. **Acesse**: `http://localhost:8080`

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first** e possui breakpoints otimizados:

- **Extra Small** (320px-479px): Smartphones pequenos
- **Small** (480px-767px): Smartphones grandes
- **Medium** (768px-1023px): Tablets
- **Large** (1024px-1399px): Desktops
- **Extra Large** (1400px+): Monitores grandes

## 🎨 Paleta de Cores

### Cores Principais
```css
--dourado-principal: #FFD700
--dourado-suave: #F0E68C
--branco-etereo: #F8F8FF
--azul-celeste: #87CEEB
--roxo-quantico: #6A0DAD
--preto-cosmico: #121212
```

### Cores Nostálgicas
```css
--laranja-retro: #FF6B35
--rosa-neon: #FF1493
--amarelo-vintage: #FFB347
--verde-musgo: #9CAF88
--azul-vintage: #4682B4
```

### Cores Orgânicas
```css
--terra-vermelha: #CD853F
--madeira-clara: #DEB887
--verde-folha: #8FBC8F
--azul-agua: #B0E0E6
--bege-natural: #F5F5DC
```

## ⚡ Performance

- **Imagens Otimizadas**: SVG para ícones e gráficos
- **CSS Minificado**: Estilos otimizados para produção
- **JavaScript Otimizado**: RequestAnimationFrame para animações suaves
- **Lazy Loading**: Elementos carregam sob demanda
- **Web Fonts**: Carregamento otimizado do Google Fonts

## 🔧 Customização

### Alterando Cores
Modifique as variáveis CSS no início do arquivo `style.css`:

```css
:root {
  --sua-cor-personalizada: #123456;
}
```

### Adicionando Animações
Use as classes de animação existentes ou crie novas:

```css
@keyframes suaAnimacao {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Modificando Breakpoints
Ajuste os media queries conforme necessário:

```css
@media (min-width: 768px) {
  /* Seus estilos para tablet */
}
```

## 📈 SEO e Acessibilidade

- **Estrutura Semântica**: HTML5 tags apropriadas
- **Alt Text**: Imagens com descrições
- **Meta Tags**: Otimizadas para SEO
- **Contraste**: Adequado para acessibilidade
- **Navegação por Teclado**: Suporte completo
- **Screen Readers**: Compatibilidade total

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para detalhes.

## 📞 Contato

**SoluxCode** - Família Solux
- 🌐 Website: [soluxcode.com](https://soluxcode.com)
- 📧 Email: contato@soluxcode.com
- 🔆 Slogan: *Desconecte para Reconectar*

---

*Feito com 💛 pela Família Solux*  
*🔆🌱🌀💎💧✨*

> "Nos cinco elementos encontramos a dança eterna da criação, onde cada respiração é um ato de amor cósmico." — Sabedoria Solux