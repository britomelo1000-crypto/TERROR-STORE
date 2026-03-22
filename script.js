/* ===================================
   TERROR STORE - JAVASCRIPT
   Interactividad y efectos
   =================================== */

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 100
  });

  // Inicializar Particles.js
  initParticles();

  // Navbar scroll effect
  handleNavbarScroll();

  // Mobile menu toggle
  setupMobileMenu();

  // Smooth scroll para los enlaces de navegación
  setupSmoothScroll();

  // Contact form handler
  setupContactForm();

  // Service cards hover effects
  setupServiceCardEffects();

  // Stats counter animation
  setupStatsCounter();
});

// ===================================
// PARTICLES.JS CONFIGURATION
// ===================================
function initParticles() {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#FF0000"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#FF0000",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================
function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle menu on hamburger click
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");

      // Animate hamburger
      const spans = hamburger.querySelectorAll("span");
      if (hamburger.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translateY(10px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translateY(-10px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Close menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");

      const spans = hamburger.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignorar si es solo "#"
      if (href === "#") {
        e.preventDefault();
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        const offsetTop = targetElement.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
}

// ===================================
// CONTACT FORM HANDLER
// ===================================
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Obtener valores del formulario
      const name = document.getElementById("name").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      // Obtener el texto del servicio seleccionado
      const serviceSelect = document.getElementById("service");
      const serviceText =
        serviceSelect.options[serviceSelect.selectedIndex].text;

      // Crear mensaje para WhatsApp
      const whatsappMessage =
        `¡Hola Terror Store! 👋\n\n` +
        `*Nombre:* ${name}\n` +
        `*Servicio de Interés:* ${serviceText}\n` +
        `*Mensaje:* ${message}\n\n` +
        `Espero su respuesta. ¡Gracias!`;

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Abrir WhatsApp con el mensaje
      const whatsappURL = `https://wa.me/18298190304?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

      // Opcional: Resetear el formulario
      contactForm.reset();
    });
  }
}

// ===================================
// SERVICE CARDS EFFECTS
// ===================================
function setupServiceCardEffects() {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Efecto de elevación extra
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Portfolio items hover effect
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".portfolio-placeholder i");
      if (icon) {
        icon.style.transform = "scale(1.3) rotate(10deg)";
      }
    });

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".portfolio-placeholder i");
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)";
      }
    });
  });
}

// ===================================
// STATS COUNTER ANIMATION
// ===================================
function setupStatsCounter() {
  const statsSection = document.querySelector(".hero-stats");
  let hasAnimated = false;

  if (!statsSection) return;

  // Observar cuando la sección de stats es visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateStats();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(statsSection);
}

function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat, index) => {
    const text = stat.textContent;
    const hasPlus = text.includes("+");
    const hasPercent = text.includes("%");
    const number = parseInt(text.replace(/\D/g, ""));

    if (isNaN(number)) return;

    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= number) {
        current = number;
        clearInterval(timer);
      }

      let displayText = Math.floor(current).toString();

      if (hasPlus) displayText += "+";
      if (hasPercent) displayText += "%";

      stat.textContent = displayText;
    }, duration / steps);
  });
}

// ===================================
// GLITCH EFFECT ENHANCEMENT
// ===================================
function enhanceGlitchEffect() {
  const glitchElement = document.querySelector(".glitch");

  if (glitchElement) {
    setInterval(() => {
      glitchElement.style.textShadow = `
                ${Math.random() * 10 - 5}px ${
        Math.random() * 10 - 5
      }px 0 #FF0000,
                ${Math.random() * 10 - 5}px ${
        Math.random() * 10 - 5
      }px 0 #00FF00,
                ${Math.random() * 10 - 5}px ${
        Math.random() * 10 - 5
      }px 0 #0000FF
            `;

      setTimeout(() => {
        glitchElement.style.textShadow = "";
      }, 50);
    }, 3000);
  }
}

// Llamar al efecto glitch mejorado
setTimeout(enhanceGlitchEffect, 1000);

// ===================================
// CURSOR EFFECT (OPCIONAL)
// ===================================
function setupCursorEffect() {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Agregar estilos para el cursor personalizado
  const style = document.createElement("style");
  style.textContent = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #FF0000;
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: 0.1s;
            z-index: 9999;
            mix-blend-mode: difference;
        }
    `;
  document.head.appendChild(style);
}

// Opcional: Descomentar para activar el cursor personalizado
// setupCursorEffect();

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================
function setupScrollReveal() {
  const reveals = document.querySelectorAll(
    ".service-card, .why-card, .portfolio-item, .pricing-card"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    revealObserver.observe(element);
  });
}

// Activar scroll reveal después de un pequeño delay
setTimeout(setupScrollReveal, 500);

// ===================================
// WHATSAPP FLOAT BUTTON PULSE
// ===================================
function setupWhatsAppPulse() {
  const whatsappFloat = document.querySelector(".whatsapp-float");

  if (whatsappFloat) {
    setInterval(() => {
      whatsappFloat.style.animation = "none";
      setTimeout(() => {
        whatsappFloat.style.animation = "float 3s ease-in-out infinite";
      }, 10);
    }, 5000);
  }
}

setupWhatsAppPulse();

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE
// ===================================
function setupTypingEffect() {
  const subtitle = document.querySelector(".hero-subtitle");

  if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = "";
    subtitle.style.opacity = "1";

    let index = 0;
    const typingSpeed = 100;

    function type() {
      if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      }
    }

    setTimeout(type, 1000);
  }
}

// Activar efecto de escritura
setTimeout(setupTypingEffect, 500);

// ===================================
// PARALLAX SCROLL EFFECT
// ===================================
function setupParallaxScroll() {
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".hero-content");

    parallaxElements.forEach((element) => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Activar parallax
setupParallaxScroll();

// ===================================
// CONSOLE MESSAGE (Easter Egg)
// ===================================
console.log(
  "%c🔥 TERROR STORE 🔥",
  "color: #FF0000; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 4px #000;"
);
console.log(
  "%c¿Buscas algo especial? Contáctanos: +1 829 819 0304",
  "color: #fff; font-size: 14px; font-weight: bold;"
);
console.log(
  "%cDesarrollado con 💀 para creadores de contenido",
  "color: #FF0000; font-size: 12px;"
);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load de imágenes si las hay en el futuro
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  const images = document.querySelectorAll("img[data-src]");
  images.forEach((img) => imageObserver.observe(img));
}

// ===================================
// WINDOW LOAD EVENT
// ===================================
window.addEventListener("load", function () {
  // Ocultar cualquier loader si existe
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  }

  // Agregar clase loaded al body
  document.body.classList.add("loaded");
});

// ===================================
// RESIZE HANDLER
// ===================================
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    // Reinicializar elementos que dependen del tamaño de ventana
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, 250);
});

// ===================================
// SHOPPING CART FUNCTIONALITY
// ===================================

// Cart state
let cart = [];

// Load cart from localStorage on page load
function loadCart() {
  const savedCart = localStorage.getItem("terrorStoreCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("terrorStoreCart", JSON.stringify(cart));
}

// Update cart count in navbar
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart.length;

    // Animate count
    if (cart.length > 0) {
      cartCount.style.transform = "scale(1.3)";
      setTimeout(() => {
        cartCount.style.transform = "scale(1)";
      }, 300);
    }
  }
}

// Add item to cart
function addToCart(service, price, icon) {
  // Check if service already in cart
  const existingItem = cart.find((item) => item.service === service);

  if (existingItem) {
    // Show message that item is already in cart
    showCartNotification("Este servicio ya está en tu carrito", "warning");
    return;
  }

  // Add to cart
  cart.push({
    id: Date.now(),
    service: service,
    price: price,
    icon: icon
  });

  saveCart();
  updateCartUI();
  showCartNotification("¡Servicio agregado al carrito!", "success");
}

// Remove item from cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCartUI();
  showCartNotification("Servicio eliminado del carrito", "info");
}

// Show cart notification
function showCartNotification(message, type = "success") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `cart-notification ${type}`;
  notification.innerHTML = `
        <i class="fas fa-${
          type === "success"
            ? "check-circle"
            : type === "warning"
            ? "exclamation-circle"
            : "info-circle"
        }"></i>
        <span>${message}</span>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${
          type === "success"
            ? "#00cc00"
            : type === "warning"
            ? "#ff9900"
            : "#0099ff"
        };
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        z-index: 99999;
        animation: slideInRight 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Update cart UI
function updateCartUI() {
  updateCartCount();
  renderCartItems();
}

// Render cart items in modal
function renderCartItems() {
  const cartModalBody = document.getElementById("cartModalBody");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const cartTotalCount = document.getElementById("cartTotalCount");

  if (!cartModalBody) return;

  if (cart.length === 0) {
    cartModalBody.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Tu carrito está vacío</p>
                <p class="empty-cart-text">Agrega servicios desde nuestra sección de servicios</p>
            </div>
        `;
    checkoutBtn.style.display = "none";
    cartTotalCount.textContent = "0";
  } else {
    const cartItemsHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-icon">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.service}</div>
                    <div class="cart-item-price">${item.price}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
      )
      .join("");

    cartModalBody.innerHTML = `<div class="cart-items">${cartItemsHTML}</div>`;
    checkoutBtn.style.display = "block";
    cartTotalCount.textContent = cart.length;
  }
}

// Open cart modal
function openCartModal() {
  const cartModal = document.getElementById("cartModal");
  if (cartModal) {
    cartModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Close cart modal
function closeCartModal() {
  const cartModal = document.getElementById("cartModal");
  if (cartModal) {
    cartModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Checkout (send to WhatsApp)
function checkout() {
  if (cart.length === 0) {
    showCartNotification("Tu carrito está vacío", "warning");
    return;
  }

  let message = "🔥 *SOLICITUD DE COTIZACIÓN - TERROR STORE* 🔥\n\n";
  message +=
    "¡Hola! Me gustaría solicitar una cotización para los siguientes servicios:\n\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.service}*\n   Precio: ${item.price}\n\n`;
  });

  message += `📊 *Total de servicios:* ${cart.length}\n\n`;
  message += "¿Podrían enviarme más información y precios?\n\n";
  message += "¡Gracias! 🎮💀";

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/18298190304?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  // Optional: Clear cart after checkout
  // cart = [];
  // saveCart();
  // updateCartUI();
  // closeCartModal();
}

// Setup cart event listeners
function setupCart() {
  // Load cart from localStorage
  loadCart();

  // Cart link click
  const cartLink = document.getElementById("cartLink");
  if (cartLink) {
    cartLink.addEventListener("click", function (e) {
      e.preventDefault();
      openCartModal();
    });
  }

  // Cart close button
  const cartClose = document.getElementById("cartClose");
  if (cartClose) {
    cartClose.addEventListener("click", closeCartModal);
  }

  // Cart overlay click
  const cartModalOverlay = document.getElementById("cartModalOverlay");
  if (cartModalOverlay) {
    cartModalOverlay.addEventListener("click", closeCartModal);
  }

  // Checkout button
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", checkout);
  }

  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const service = this.getAttribute("data-service");
      const price = this.getAttribute("data-price");
      const icon = this.getAttribute("data-icon");

      addToCart(service, price, icon);
    });
  });

  // ESC key to close modal
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeCartModal();
    }
  });
}

// Initialize cart on page load
setTimeout(setupCart, 500);