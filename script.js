// SoluxCode - Script de Animações e Interações Visuais
// Criado por Manus ✨
// Inspirado no design do site Celestia

document.addEventListener("DOMContentLoaded", () => {
  console.log("SoluxCode: Script carregado com sucesso! ✨");

  // Rolagem suave para links de navegação
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerOffset = document.querySelector("header").offsetHeight;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Animação de Fade In ao scrollar
  const fadeElements = document.querySelectorAll("section > *, .missao-item, .produto-item, .blog-post, .sweet-lux-text, .sweet-lux-image, .soluxq-placeholder, .form-placeholder");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  fadeElements.forEach(el => {
    // Inicializa os elementos como invisíveis e deslocados
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(el);
  });

  // Animação da Espiral Dourada (Placeholder - precisa de um elemento com ID ou classe específica)
  const espiralElement = document.querySelector(".espiral-animada"); // Substituir por seletor real
  if (espiralElement) {
    // Adicionar lógica de animação CSS ou JS aqui
    console.log("Elemento da espiral encontrado, animação pode ser aplicada.");
    // Exemplo: espiralElement.style.animation = "rotateSpiral 10s linear infinite";
  }

  // Animação sutil dos emojis no rodapé (já feita com CSS, mas pode ser incrementada)
  const footerEmojis = document.querySelectorAll(".footer-emoji");
  footerEmojis.forEach(emoji => {
    emoji.addEventListener("mouseover", () => {
      emoji.style.transform = "scale(1.2)";
      emoji.style.transition = "transform 0.3s ease";
    });
    emoji.addEventListener("mouseout", () => {
      emoji.style.transform = "scale(1)";
    });
  });

  // Lógica para o botão "Ativar Código 333" (Exemplo: exibir mensagem)
  const btnCodigo333 = document.querySelector(".btn-codigo-333");
  if (btnCodigo333) {
    btnCodigo333.addEventListener("click", () => {
      alert("Código 333 Ativado! Sinta a frequência da reconexão. ✨");
      // Adicionar aqui a lógica de tocar o som 333Hz se necessário
    });
  }

  // Efeito parallax sutil no Hero (opcional)
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"; // Ajustar multiplicador
    });
  }

});

console.log("SoluxCode: Script inicializado.");
