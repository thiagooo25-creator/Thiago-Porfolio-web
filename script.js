// ================================
// Navegación AJAX
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // Cursor personalizado
  const cursor = document.querySelector(".custom-cursor")
  const cursorFollower = document.querySelector(".custom-cursor-follower")

  if (window.innerWidth > 768 && cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    })

    const interactiveElements = document.querySelectorAll("a, button")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"))
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"))
    })
  }

  // Preloader
  const pageLoader = document.getElementById("pageLoader")
  setTimeout(() => {
    pageLoader.classList.add("hidden")
  }, 1000)

  // Navegación AJAX
  const ajaxLinks = document.querySelectorAll('a[data-ajax="true"]')
  ajaxLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const href = this.getAttribute("href")

      // Mostrar loader
      pageLoader.classList.remove("hidden")

      // Cambiar página después de la animación
      setTimeout(() => {
        window.location.href = href
      }, 500)
    })
  })

  // Menú móvil
  const menuToggle = document.getElementById("menuToggle")
  const navMenu = document.getElementById("navMenu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    const menuLinks = navMenu.querySelectorAll("a")
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        navMenu.classList.remove("active")

        // Show loader before navigation
        pageLoader.classList.remove("hidden")
      })
    })
  }

  // Navegación con scroll
  const mainNav = document.querySelector(".main-nav")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      mainNav.classList.add("scrolled")
    } else {
      mainNav.classList.remove("scrolled")
    }
  })

  // Portfolio Slider
  const slidesContainer = document.getElementById("slidesContainer")
  if (slidesContainer) {
    const slides = document.querySelectorAll(".portfolio-slide")
    const prevBtn = document.getElementById("prevSlide")
    const nextBtn = document.getElementById("nextSlide")
    const currentSlideEl = document.getElementById("currentSlide")
    const totalSlidesEl = document.getElementById("totalSlides")
    let currentSlide = 0

    totalSlidesEl.textContent = String(slides.length).padStart(2, "0")

    function showSlide(index) {
      const offset = -index * 100
      slidesContainer.style.transform = `translateX(${offset}%)`
      currentSlideEl.textContent = String(index + 1).padStart(2, "0")
    }

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length
      showSlide(currentSlide)
    })

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
    })

    // Navegación con teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        prevBtn.click()
      } else if (e.key === "ArrowRight") {
        nextBtn.click()
      }
    })

    // Mouse wheel navigation
    let isScrolling = false
    slidesContainer.addEventListener("wheel", (e) => {
      if (isScrolling) return
      isScrolling = true

      if (e.deltaY > 0) {
        nextBtn.click()
      } else {
        prevBtn.click()
      }

      setTimeout(() => {
        isScrolling = false
      }, 800)
    })
  }

  // Formulario de contacto
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const formMessage = document.getElementById("formMessage")
      const formData = new FormData(this)

      // Simulación de envío (aquí deberías integrar con tu backend)
      setTimeout(() => {
        formMessage.textContent = "¡Mensaje enviado correctamente! Te contactaremos pronto."
        formMessage.className = "form-message success"
        contactForm.reset()

        setTimeout(() => {
          formMessage.style.display = "none"
        }, 5000)
      }, 1000)
const projectButtons = document.querySelectorAll(".btn-primary");
const projectInfo = document.getElementById("projectInfo");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectImage = document.getElementById("projectImage");

// INFO DE CADA SLIDE
const projectData = {
    ilustraciones: {
        title: "Ilustraciones",
        description: "Colección de ilustraciones realizadas en Illustrator y Procreate.",
        image: "img/portada.jpg"
    },
    packaging: {
        title: "Packaging",
        description: "Diseños de packaging enfocados en estética minimalista y funcional.",
        image: "img/packa1.jpg"
    },
    senaletica: {
        title: "Señalética",
        description: "Sistema de señalización aplicado a espacios interiores y exteriores.",
        image: "img/senaletica.jpg"
    },
    afiches: {
        title: "Afiches Publicitarios",
        description: "Diseño publicitario con enfoque visual fuerte y composición moderna.",
        image: "img/afiche-ejemplo.jpg"
    }
};

// CLICK
projectButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let key = btn.textContent.toLowerCase().replace("ver ", "");

        projectTitle.textContent = projectData[key].title;
        projectDescription.textContent = projectData[key].description;
        projectImage.src = projectData[key].image;

        projectInfo.classList.add("visible");

        // Scroll suave hacia abajo
        projectInfo.scrollIntoView({
            behavior: "smooth"

            
            
        });
        
    });
    
});

      // Para envío real, descomenta esto:
      /*
            fetch('tu-endpoint-de-email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formMessage.textContent = '¡Mensaje enviado correctamente!';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                } else {
                    formMessage.textContent = 'Error al enviar el mensaje. Intenta nuevamente.';
                    formMessage.className = 'form-message error';
                }
            })
            .catch(error => {
                formMessage.textContent = 'Error al enviar el mensaje.';
                formMessage.className = 'form-message error';
            });
            });
            */
    })
  }
})
