// SoluxCode - Script de Animações e Interações Visuais
// Criado por Manus ✨
// Inspirado no design nostálgico e orgânico

document.addEventListener("DOMContentLoaded", () => {
  console.log("SoluxCode: Script carregado com sucesso! ✨");

  // Menu hamburger para mobile
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Rolagem suave para links de navegação
  const allNavLinks = document.querySelectorAll("nav ul li a");
  allNavLinks.forEach(link => {
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

  // Interatividade dos 5 Elementos
  const elementos = document.querySelectorAll('.elemento-item');
  elementos.forEach((elemento, index) => {
    elemento.addEventListener('mouseenter', () => {
      // Adiciona efeito de brilho suave
      elemento.style.filter = 'brightness(1.1) drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))';
      
      // Efeito sonoro virtual (visual feedback)
      elemento.style.transform = 'translateY(-10px) scale(1.1) rotate(5deg)';
    });

    elemento.addEventListener('mouseleave', () => {
      elemento.style.filter = '';
      elemento.style.transform = '';
    });

    elemento.addEventListener('click', () => {
      // Animação de ativação
      elemento.style.animation = 'gentleGlow 0.6s ease-in-out';
      setTimeout(() => {
        elemento.style.animation = '';
      }, 600);
      
      // Feedback visual com mensagem inspiradora
      const elementoNome = elemento.querySelector('h3').textContent;
      showElementMessage(elementoNome, elemento.dataset.elemento);
    });
  });

  // Função para mostrar mensagem dos elementos
  function showElementMessage(nome, tipo) {
    const mensagens = {
      'fogo': 'O fogo desperta a transformação em seu ser. Sinta a paixão da criação! 🔥',
      'agua': 'A água flui com a sabedoria da intuição. Permita-se fluir! 💧',
      'terra': 'A terra oferece estabilidade e crescimento. Enraíze-se! 🌱',
      'ar': 'O ar traz movimento e comunicação. Respire a liberdade! 🌀',
      'eter': 'O éter conecta você à consciência universal. Transcenda! ✨'
    };

    // Cria notificação suave
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #FFD700, #FF6B35);
      color: #121212;
      padding: 1rem 1.5rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      z-index: 10000;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 500;
      max-width: 300px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    notification.textContent = mensagens[tipo] || `Elemento ${nome} ativado!`;
    
    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remoção automática
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Animação de Fade In ao scrollar (melhorada)
  const fadeElements = document.querySelectorAll("section > *, .missao-item, .produto-item, .blog-post, .sweet-lux-text, .sweet-lux-image, .soluxq-placeholder, .form-placeholder, .elemento-item");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
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

  fadeElements.forEach((el, index) => {
    // Inicializa os elementos como invisíveis e deslocados
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s ease-out ${index * 0.1}s`;
    observer.observe(el);
  });

  // Animação da Espiral Dourada
  const espiralElement = document.querySelector(".espiral-animada");
  if (espiralElement) {
    console.log("Elemento da espiral encontrado, animação aplicada.");
  }

  // Animação sutil dos emojis no rodapé (melhorada)
  const footerEmojis = document.querySelectorAll(".footer-emoji");
  footerEmojis.forEach((emoji, index) => {
    emoji.addEventListener("mouseover", () => {
      emoji.style.transform = "scale(1.3) rotate(15deg)";
      emoji.style.transition = "transform 0.3s ease";
      emoji.style.filter = "brightness(1.2) drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))";
    });
    emoji.addEventListener("mouseout", () => {
      emoji.style.transform = "scale(1)";
      emoji.style.filter = "";
    });
  });

  // Lógica aprimorada para o botão "Ativar Código 333"
  const btnCodigo333 = document.querySelector(".btn-codigo-333");
  if (btnCodigo333) {
    btnCodigo333.addEventListener("click", () => {
      // Efeito visual mais elaborado
      btnCodigo333.style.transform = "scale(0.95)";
      btnCodigo333.style.boxShadow = "0 2px 10px rgba(106, 13, 173, 0.6)";
      
      setTimeout(() => {
        btnCodigo333.style.transform = "";
        btnCodigo333.style.boxShadow = "";
      }, 150);

      // Mensagem inspiradora
      showElementMessage("Código 333", "eter");
      
      // Adicionar aqui a lógica de tocar o som 333Hz se necessário
      console.log("Código 333 Ativado! Frequência de reconexão iniciada. ✨");
    });
  }

  // Efeito parallax sutil no Hero (otimizado)
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    let ticking = false;
    
    function updateParallax() {
      const scrollPosition = window.pageYOffset;
      heroSection.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      ticking = false;
    }
    
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }

  // Header transparente ao rolar
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(248, 248, 255, 0.98)';
      header.style.backdropFilter = 'blur(20px)';
    } else {
      header.style.background = 'rgba(248, 248, 255, 0.95)';
      header.style.backdropFilter = 'blur(15px)';
    }
  });

  console.log("SoluxCode: Todas as funcionalidades ativadas! 🌟");
});

console.log("SoluxCode: Script inicializado com elementos nostálgicos e orgânicos.");
