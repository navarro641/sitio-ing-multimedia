// Datos que se muestran dentro del modal informativo reutilizable.
const modalData = {
      intro: {
        title: "Que es la ingenieria multimedia",
        text: "Es una disciplina que integra tecnologia, diseno, narrativa, sonido, imagen e interactividad para crear experiencias digitales.",
        color: "#2366d1"
      },
      perfil: {
        title: "Perfil del aspirante",
        text: "Curiosidad por la tecnologia, gusto por crear, interes por diseno, comunicacion, programacion y trabajo en equipo.",
        color: "#02a896"
      },
      habilidades: {
        title: "Habilidades y competencias",
        text: "Pensamiento creativo, solucion de problemas, manejo de herramientas digitales, logica de programacion y sensibilidad visual.",
        color: "#f0695f"
      },
      era80: {
        title: "Primeras interfaces",
        text: "La multimedia empieza a crecer con computadores personales, interfaces graficas, CD-ROM y contenidos interactivos.",
        color: "#f7bf3f"
      },
      era2000: {
        title: "Expansion web",
        text: "La web abre nuevas formas de distribuir imagen, sonido, video, animaciones y experiencias de aprendizaje.",
        color: "#2366d1"
      },
      era2020: {
        title: "Experiencias conectadas",
        text: "El usuario interactua con plataformas, apps, videojuegos, streaming, contenido social y productos digitales complejos.",
        color: "#02a896"
      },
      era2030: {
        title: "Innovacion y proyeccion",
        text: "La inteligencia artificial, la realidad mixta y los sistemas adaptativos amplian lo que puede crear un profesional multimedia.",
        color: "#f0695f"
      }
    };

// Textos que aparecen al seleccionar una rama de la ingenieria.
const branches = {
      software: "Software: crea aplicaciones, paginas web, sistemas interactivos y soluciones digitales.",
      audiovisual: "Audiovisual: produce video, sonido, guiones, contenido educativo y narrativas visuales.",
      ux: "UX/UI: disena experiencias claras, accesibles y faciles de usar para personas reales.",
      videojuegos: "Videojuegos: une programacion, arte, interaccion, sonido y reglas para crear experiencias jugables.",
      datos: "Datos: transforma informacion en visualizaciones, tableros, contenidos interactivos y decisiones."
    };

// Textos de cada imagen en las tarjetas tipo cortina.
// Cada arreglo interno corresponde a una tarjeta y cada objeto corresponde a una imagen.
const curtainCardData = [
      [
        {
          title: "Diseno y produccion multimedia",
          text: "Crear graficos, animaciones, videos y audio para proyectos digitales."
        },
        {
          title: "Contenido visual",
          text: "Organizar imagen, sonido, movimiento y texto para comunicar una idea con claridad."
        },
        {
          title: "Integracion de tecnologias",
          text: "Combinar texto, audio, video y recursos interactivos en una misma experiencia."
        }
      ],
      [
        {
          title: "Desarrollo multimedia",
          text: "Programar aplicaciones multimedia interactivas utilizando lenguajes como HTML, CSS y JavaScript."
        },
        {
          title: "Aplicaciones interactivas",
          text: "Crear productos donde el usuario pueda explorar, responder, navegar o tomar decisiones."
        },
        {
          title: "Experiencias inmersivas",
          text: "Integrar medios con tecnologias como realidad aumentada y realidad virtual."
        }
      ]
    ];

    // Detecta las opciones del menu y las secciones a las que apuntan.
    const sectionLinks = Array.from(document.querySelectorAll("nav a[href^='#']"));
    const mainSections = sectionLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    // Actualiza el resaltado del menu segun la seccion visible en pantalla.
    function updateActiveNav() {
      const current = mainSections
        .filter((section) => section.getBoundingClientRect().top <= 120)
        .at(-1) || mainSections[0];

      sectionLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
      });
    }

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav);

    // Referencias al modal general de informacion y al modal de video.
    const modal = document.querySelector("#modal");
    const modalTitle = document.querySelector("#modalTitle");
    const modalText = document.querySelector("#modalText");
    const modalArt = document.querySelector("#modalArt");
    const videoModal = document.querySelector("#videoModal");
    const introVideo = document.querySelector("#introVideo");

    // Abre el modal del video introductorio.
    function openVideoModal() {
      videoModal.classList.add("open");
      videoModal.setAttribute("aria-hidden", "false");
    }

    // Cierra el modal del video y pausa la reproduccion.
    function closeVideoModal() {
      videoModal.classList.remove("open");
      videoModal.setAttribute("aria-hidden", "true");
      introVideo.pause();
    }

    // Carga los datos del tema seleccionado dentro del modal general.
    function openModal(key) {
      const item = modalData[key];
      if (!item) return;
      modalTitle.textContent = item.title;
      modalText.textContent = item.text;
      modalArt.innerHTML = `<svg viewBox="0 0 620 210" width="100%" height="210" role="img" aria-label="${item.title}">
        <rect width="620" height="210" fill="${item.color}"/>
        <circle cx="110" cy="110" r="62" fill="rgba(255,255,255,.26)"/>
        <rect x="240" y="48" width="260" height="22" rx="8" fill="rgba(255,255,255,.76)"/>
        <rect x="240" y="88" width="310" height="16" rx="8" fill="rgba(255,255,255,.48)"/>
        <rect x="240" y="122" width="230" height="16" rx="8" fill="rgba(255,255,255,.48)"/>
        <path d="M70 150 C145 30, 220 250, 300 96 S460 50, 550 150" fill="none" stroke="white" stroke-width="8" stroke-linecap="round"/>
      </svg>`;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }

    // Conecta todos los elementos con data-open al modal informativo.
    document.querySelectorAll("[data-open]").forEach((element) => {
      element.addEventListener("click", () => openModal(element.dataset.open));
    });

    document.querySelector("#closeModal").addEventListener("click", () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }
    });

    // Conecta los botones de video con su modal.
    document.querySelector("#openVideo").addEventListener("click", openVideoModal);
    document.querySelector("#openVideoOrbit").addEventListener("click", openVideoModal);
    document.querySelector("#closeVideo").addEventListener("click", closeVideoModal);
    videoModal.addEventListener("click", (event) => {
      if (event.target === videoModal) {
        closeVideoModal();
      }
    });

    // Prepara las tarjetas tipo cortina.
    // Estado normal: CSS muestra las tres imagenes como franjas iguales.
    // Hover/focus: CSS expande la imagen activa segun active-0, active-1 o active-2.
    // Click: JavaScript cambia la imagen activa y actualiza el titulo/texto correspondiente.
    document.querySelectorAll(".curtain-card").forEach((card, cardIndex) => {
      const images = Array.from(card.querySelectorAll(".curtain-images img"));
      const title = card.querySelector(".curtain-copy h3");
      const text = card.querySelector(".curtain-copy p");
      const slides = curtainCardData[cardIndex];
      let activeIndex = 0;

      function setActiveImage(nextIndex) {
        activeIndex = nextIndex % images.length;
        card.classList.remove("active-0", "active-1", "active-2");
        card.classList.add(`active-${activeIndex}`);

        images.forEach((image, imageIndex) => {
          image.classList.toggle("active", imageIndex === activeIndex);
        });

        title.textContent = slides[activeIndex].title;
        text.textContent = slides[activeIndex].text;
      }

      setActiveImage(0);
      card.addEventListener("click", () => setActiveImage(activeIndex + 1));
    });

    // Activa el efecto de "globo que explota" en las areas de desempeno.
    // Al hacer clic, la clase popping dispara la animacion CSS bubblePop.
    // Cuando la animacion termina, se quita la clase para permitir repetir el efecto.
    document.querySelectorAll(".area-bubble").forEach((bubble) => {
      bubble.addEventListener("click", () => {
        bubble.classList.remove("popping");
        void bubble.offsetWidth;
        bubble.classList.add("popping");
      });

      bubble.addEventListener("animationend", () => {
        bubble.classList.remove("popping");
      });
    });

    // Cambia la descripcion de ramas al pulsar cada boton del mapa.
    document.querySelectorAll("[data-branch]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-branch]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        document.querySelector("#branchInfo").textContent = branches[button.dataset.branch];
      });
    });

    // Procesa el test y muestra el perfil con mayor cantidad de respuestas.
    document.querySelector("#quiz").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const score = { visual: 0, codigo: 0, audio: 0 };
      for (const value of data.values()) score[value] += 1;
      const winner = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
      const result = {
        visual: ["Perfil creativo visual", "Tu ruta se acerca al diseno de interfaces, animacion, modelado, identidad visual y experiencias graficas."],
        codigo: ["Perfil desarrollador interactivo", "Tu ruta se acerca a programacion, aplicaciones, videojuegos, web, interaccion y solucion tecnica de problemas."],
        audio: ["Perfil audiovisual narrativo", "Tu ruta se acerca a video, sonido, guion, edicion, comunicacion y contenidos digitales."]
      };
      document.querySelector("#resultTitle").textContent = result[winner][0];
      document.querySelector("#resultText").textContent = result[winner][1];
    });

    // Muestra el boton de volver arriba cuando el usuario baja por la pagina.
    const backTop = document.querySelector("#backTop");
    window.addEventListener("scroll", () => {
      backTop.classList.toggle("show", window.scrollY > 500);
    });
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

