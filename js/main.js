// Datos que se muestran dentro del modal informativo reutilizable.
const modalData = {
      intro: {
        title: "Qué es la ingeniería multimedia",
        text: "Es una disciplina que integra tecnología, diseño, narrativa, sonido, imagen e interactividad para crear experiencias digitales.",
        color: "#2366d1"
      },
      perfil: {
        title: "Perfil del aspirante",
        text: "Curiosidad por la tecnología, gusto por crear, interés por diseño, comunicación, programación y trabajo en equipo.",
        color: "#02a896"
      },
      habilidades: {
        title: "Habilidades y competencias",
        text: "Pensamiento creativo, solución de problemas, manejo de herramientas digitales, lógica de programación y sensibilidad visual.",
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
        text: "El usuario interactúa con plataformas, apps, videojuegos, streaming, contenido social y productos digitales complejos.",
        color: "#02a896"
      },
      era2030: {
        title: "Innovación y proyección",
        text: "La inteligencia artificial, la realidad mixta y los sistemas adaptativos amplían lo que puede crear un profesional multimedia.",
        color: "#f0695f"
      }
    };

// Textos de cada imagen en las tarjetas tipo cortina.
// Cada arreglo interno corresponde a una tarjeta y cada objeto corresponde a una imagen.
const curtainCardData = [
      [
        {
          title: "Diseño y producción multimedia",
          text: "Crear gráficos, animaciones, videos y audio para proyectos digitales."
        },
        {
          title: "Contenido visual",
          text: "Organizar imagen, sonido, movimiento y texto para comunicar una idea con claridad."
        },
        {
          title: "Integración de tecnologías",
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
          text: "Integrar medios con tecnologías como realidad aumentada y realidad virtual."
        }
      ]
    ];

// Crea un sonido corto tipo "pop" sin depender de un archivo externo.
// Web Audio solo puede activarse después de una acción del usuario, por eso se llama dentro del click.
function playBubblePopSound() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const audioContext = new AudioContext();
      const now = audioContext.currentTime;
      const output = audioContext.createGain();
      output.gain.setValueAtTime(0.0001, now);
      output.gain.exponentialRampToValueAtTime(0.25, now + 0.01);
      output.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      output.connect(audioContext.destination);

      const popTone = audioContext.createOscillator();
      popTone.type = "sine";
      popTone.frequency.setValueAtTime(420, now);
      popTone.frequency.exponentialRampToValueAtTime(120, now + 0.12);
      popTone.connect(output);
      popTone.start(now);
      popTone.stop(now + 0.16);

      const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.08, audioContext.sampleRate);
      const samples = noiseBuffer.getChannelData(0);
      for (let i = 0; i < samples.length; i += 1) {
        samples[i] = (Math.random() * 2 - 1) * (1 - i / samples.length);
      }

      const noise = audioContext.createBufferSource();
      const filter = audioContext.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 900;
      noise.buffer = noiseBuffer;
      noise.connect(filter);
      filter.connect(output);
      noise.start(now);
      noise.stop(now + 0.08);

      window.setTimeout(() => audioContext.close(), 260);
    }

// Crea un sonido breve tipo goteo para los puntos de la historia.
// Se genera con Web Audio para no depender de archivos externos.
function playHistoryDropSound() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const audioContext = new AudioContext();
      const now = audioContext.currentTime;
      const output = audioContext.createGain();
      output.gain.setValueAtTime(0.0001, now);
      output.gain.exponentialRampToValueAtTime(0.18, now + 0.012);
      output.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
      output.connect(audioContext.destination);

      const dropTone = audioContext.createOscillator();
      dropTone.type = "sine";
      dropTone.frequency.setValueAtTime(820, now);
      dropTone.frequency.exponentialRampToValueAtTime(260, now + 0.18);
      dropTone.connect(output);
      dropTone.start(now);
      dropTone.stop(now + 0.22);

      const echo = audioContext.createOscillator();
      const echoGain = audioContext.createGain();
      echo.type = "triangle";
      echo.frequency.setValueAtTime(520, now + 0.06);
      echoGain.gain.setValueAtTime(0.0001, now);
      echoGain.gain.exponentialRampToValueAtTime(0.05, now + 0.07);
      echoGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.23);
      echo.connect(echoGain);
      echoGain.connect(output);
      echo.start(now + 0.04);
      echo.stop(now + 0.24);

      window.setTimeout(() => audioContext.close(), 320);
    }

    const currentPage = document.body.dataset.page || "ingenieria-multimedia";

    // Detecta las opciones del menú que apuntan a secciones internas.
    // En las páginas separadas el menú apunta a archivos HTML, por eso este
    // arreglo puede quedar vacio y el codigo debe seguir funcionando.
    const sectionLinks = Array.from(document.querySelectorAll("nav a[href^='#']"));
    const mainSections = sectionLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    // Devuelve la sección principal más cercana a la parte superior de la pantalla.
    // Se reutiliza para resaltar el menú y para decidir qué botones flotantes se ven.
    function getCurrentMainSection() {
      const current = mainSections
        .filter((section) => section.getBoundingClientRect().top <= 120)
        .at(-1) || mainSections[0];

      return current;
    }

    // Actualiza el resaltado del menú según la sección visible en pantalla.
    function updateActiveNav() {
      if (!sectionLinks.length) return;
      const current = getCurrentMainSection();
      if (!current) return;

      sectionLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
      });
    }

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav);

    // Referencias al modal general de información y al modal de video.
    const modal = document.querySelector("#modal");
    const modalTitle = document.querySelector("#modalTitle");
    const modalText = document.querySelector("#modalText");
    const modalArt = document.querySelector("#modalArt");
    const videoModal = document.querySelector("#videoModal");
    const introVideo = document.querySelector("#introVideo");

    // Abre el modal del video introductorio.
    function openVideoModal() {
      if (!videoModal) return;
      videoModal.classList.add("open");
      videoModal.setAttribute("aria-hidden", "false");
    }

    // Cierra el modal del video y pausa la reproducción.
    function closeVideoModal() {
      if (!videoModal) return;
      videoModal.classList.remove("open");
      videoModal.setAttribute("aria-hidden", "true");
      introVideo?.pause();
    }

    // Carga los datos del tema seleccionado dentro del modal general.
    function openModal(key) {
      const item = modalData[key];
      if (!item || !modal || !modalTitle || !modalText || !modalArt) return;
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

    document.querySelector("#closeModal")?.addEventListener("click", () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    });

    modal?.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }
    });

    // Conecta los botones de video con su modal.
    document.querySelector("#openVideo")?.addEventListener("click", openVideoModal);
    document.querySelector("#openVideoOrbit")?.addEventListener("click", openVideoModal);
    document.querySelector("#closeVideo")?.addEventListener("click", closeVideoModal);
    videoModal?.addEventListener("click", (event) => {
      if (event.target === videoModal) {
        closeVideoModal();
      }
    });

    // Orbes interactivos de Ingeniería: los iconos no abren ventanas, cambian
    // temporalmente el mensaje central para explicar el concepto que representan.
    const engineeringCenter = document.querySelector(".engineering-center-chip");
    const engineeringCenterText = engineeringCenter?.querySelector("span");
    const engineeringOrbs = Array.from(document.querySelectorAll(".eng-orb[data-orbit-text]"));
    let engineeringOrbitTimer;

    function resetEngineeringOrbit() {
      if (!engineeringCenter || !engineeringCenterText) return;
      engineeringCenterText.textContent = engineeringCenter.dataset.defaultText || "Ideas que se vuelven soluciones";
      engineeringCenter.classList.remove("revealing");
      engineeringOrbs.forEach((orb) => orb.classList.remove("active"));
    }

    engineeringOrbs.forEach((orb) => {
      orb.addEventListener("click", () => {
        if (!engineeringCenter || !engineeringCenterText) return;
        window.clearTimeout(engineeringOrbitTimer);
        engineeringCenterText.textContent = orb.dataset.orbitText;
        engineeringCenter.classList.add("revealing");
        engineeringOrbs.forEach((item) => item.classList.toggle("active", item === orb));
        engineeringOrbitTimer = window.setTimeout(resetEngineeringOrbit, 5200);
      });
    });

    // Microanimaciones de Multimedia: cada medio activa un gesto breve e independiente.
    const multimediaCenter = document.querySelector(".multimedia-center-chip");
    const multimediaCenterText = multimediaCenter?.querySelector("span");
    const multimediaOrbs = Array.from(document.querySelectorAll(".multi-orb[data-media-effect]"));
    let multimediaEffectTimer;

    function resetMultimediaEffect() {
      if (!multimediaCenter || !multimediaCenterText) return;
      multimediaCenterText.textContent = multimediaCenter.dataset.defaultText || "Comunicar con medios conectados";
      multimediaCenter.classList.remove("media-effect", "effect-text", "effect-image", "effect-audio");
      multimediaOrbs.forEach((orb) => orb.classList.remove("active"));
    }

    multimediaOrbs.forEach((orb) => {
      orb.addEventListener("click", () => {
        if (!multimediaCenter || !multimediaCenterText) return;
        window.clearTimeout(multimediaEffectTimer);
        resetMultimediaEffect();
        multimediaCenterText.textContent = orb.dataset.mediaText;
        multimediaCenter.classList.add("media-effect", `effect-${orb.dataset.mediaEffect}`);
        orb.classList.add("active");
        multimediaEffectTimer = window.setTimeout(resetMultimediaEffect, 2800);
      });
    });

    // Prepara las tarjetas tipo cortina.
    // Estado normal: CSS muestra las tres imágenes como franjas iguales.
    // Hover/focus: CSS expande la imagen activa según active-0, active-1 o active-2.
    // Click: JavaScript cambia la imagen activa y actualiza el título/texto correspondiente.
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

    // Activa el efecto de "globo que explota" en las áreas de desempeño.
    // Al hacer clic, la clase popping dispara la animación CSS bubblePop.
    // Cuando la animación termina, se quita la clase para permitir repetir el efecto.
    document.querySelectorAll(".area-bubble").forEach((bubble) => {
      bubble.addEventListener("click", () => {
        playBubblePopSound();
        bubble.classList.remove("popping");
        void bubble.offsetWidth;
        bubble.classList.add("popping");
      });

      bubble.addEventListener("animationend", () => {
        bubble.classList.remove("popping");
      });
    });

    // Datos de resultados del test.
    // La clave A, B, C o D coincide con el valor de cada radio del formulario.
    const testProfiles = {
      A: {
        title: "El Creador de Mundos",
        subtitle: "Ingeniería de videojuegos",
        text: "Te enfocas en desarrollo de videojuegos, simulación y entretenimiento interactivo.",
        video: "assets/video/ingenieria-multimedia/creador-de-mundos.mp4"
      },
      B: {
        title: "El Estratega Digital",
        subtitle: "Diseño y marketing digital",
        text: "Tu fuerte es la creación de contenido visual, diseño de interfaces y publicidad interactiva.",
        video: "assets/video/ingenieria-multimedia/estratega-digital.mp4"
      },
      C: {
        title: "El Productor Audiovisual",
        subtitle: "Animación y postproducción",
        text: "Te apasiona la producción de cine, animación 2D/3D, efectos visuales y contenido audiovisual.",
        video: "assets/video/ingenieria-multimedia/productor-audiovisual.mp4"
      },
      D: {
        title: "El Innovador Tecnologico",
        subtitle: "Desarrollo y aplicaciones",
        text: "Te mueve la programación, la inteligencia artificial, el análisis de datos y la creación de software multimedia.",
        video: "assets/video/ingenieria-multimedia/innovador-tec.mp4"
      }
    };

    // Abre un modal por id. Tambien marca aria-hidden para accesibilidad.
    function openActionModal(modalId) {
      const actionModal = document.querySelector(`#${modalId}`);
      if (!actionModal) return;

      if (modalId === "testModal") {
        resetTest();
      }

      actionModal.classList.add("open");
      actionModal.setAttribute("aria-hidden", "false");
    }

    // Cierra un modal por id y pausa cualquier video que haya dentro.
    function closeActionModal(modalId) {
      const actionModal = document.querySelector(`#${modalId}`);
      if (!actionModal) return;

      actionModal.querySelectorAll("video").forEach((video) => video.pause());
      actionModal.classList.remove("open");
      actionModal.setAttribute("aria-hidden", "true");
    }

    // Reinicia el test cada vez que se abre la ventana.
    function resetTest() {
      const testForm = document.querySelector("#profileTest");
      const testResult = document.querySelector("#testResult");
      const testWarning = document.querySelector("#testWarning");
      const retakeButton = document.querySelector("#retakeTest");
      if (!testForm || !testResult || !testWarning) return;

      testForm.reset();
      testWarning.textContent = "";
      testResult.classList.remove("show");
      testResult.innerHTML = "";
      retakeButton?.classList.remove("show");
    }

    // Calcula el perfil ganador. En caso de empate, toma la primera letra
    // que alcance la puntuación más alta siguiendo el orden A, B, C, D.
    function getWinningProfile(formData) {
      const scores = { A: 0, B: 0, C: 0, D: 0 };
      ["q1", "q2", "q3"].forEach((questionName) => {
        scores[formData.get(questionName)] += 1;
      });

      return Object.keys(scores).reduce((winner, key) => (
        scores[key] > scores[winner] ? key : winner
      ), "A");
    }

    // Conecta los botones flotantes con su modal correspondiente.
    document.querySelectorAll("[data-action-modal]").forEach((button) => {
      button.addEventListener("click", () => openActionModal(button.dataset.actionModal));
    });

    // Botones X o cerrar dentro de modales nuevos.
    document.querySelectorAll("[data-close-modal]").forEach((button) => {
      button.addEventListener("click", () => closeActionModal(button.dataset.closeModal));
    });

    // Los modales marcados como dismissible se cierran al tocar el fondo.
    // El modal del test no tiene esta clase para no perder respuestas por accidente.
    document.querySelectorAll(".action-modal.dismissible").forEach((actionModal) => {
      actionModal.addEventListener("click", (event) => {
        if (event.target === actionModal) {
          closeActionModal(actionModal.id);
        }
      });
    });

    // Procesa el test solo cuando las tres preguntas tienen respuesta.
    document.querySelector("#profileTest")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);
      const testWarning = document.querySelector("#testWarning");
      const testResult = document.querySelector("#testResult");
      const retakeButton = document.querySelector("#retakeTest");

      if (!formData.get("q1") || !formData.get("q2") || !formData.get("q3")) {
        testWarning.textContent = "Responde las tres preguntas antes de ver el resultado.";
        testResult.classList.remove("show");
        retakeButton?.classList.remove("show");
        return;
      }

      const profile = testProfiles[getWinningProfile(formData)];
      testWarning.textContent = "";
      testResult.innerHTML = `
        <video controls autoplay muted playsinline>
          <source src="${profile.video}" type="video/mp4">
          Tu navegador no puede reproducir este video.
        </video>
        <div>
          <span class="section-kicker">Resultado</span>
          <h3>${profile.title}</h3>
          <strong>${profile.subtitle}</strong>
          <p>${profile.text}</p>
        </div>
      `;
      testResult.classList.add("show");
      retakeButton?.classList.add("show");
      testResult.scrollIntoView({ behavior: "smooth", block: "nearest" });

      const resultVideo = testResult.querySelector("video");
      resultVideo?.play().catch(() => {
        // Algunos navegadores bloquean el autoplay. El video queda visible
        // con controles para que el usuario lo pueda iniciar manualmente.
      });
    });

    // Permite repetir el test sin cerrar la ventana emergente.
    document.querySelector("#retakeTest")?.addEventListener("click", () => {
      resetTest();
      document.querySelector("#profileTest")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Leyendas flotantes: aparecen brevemente al entrar a una sección interactiva.
    document.querySelectorAll(".section-hint").forEach((hint) => {
      const area = hint.closest("section") || hint.parentElement;
      let hintTimer;

      function showSectionHint() {
        window.clearTimeout(hintTimer);
        hint.classList.add("show");
        hintTimer = window.setTimeout(() => {
          hint.classList.remove("show");
        }, 3400);
      }

      area?.addEventListener("mouseenter", showSectionHint);
      area?.addEventListener("focusin", showSectionHint);
    });

    // Historia de la ingeniería: cada punto trae sus datos en atributos data-*.
    // Al hacer clic, se actualiza el recuadro central con imagen, periodo y contexto.
    const historyDetail = document.querySelector("#historyDetail");
    const historyPoints = Array.from(document.querySelectorAll(".history-point"));

    function closeHistoryDetail() {
      historyDetail?.classList.remove("open");
      historyPoints.forEach((point) => point.classList.remove("active"));
    }

    historyPoints.forEach((point) => {
      point.addEventListener("click", () => {
        if (!historyDetail) return;
        playHistoryDropSound();

        const image = historyDetail.querySelector("img");
        const year = historyDetail.querySelector(".mini-label");
        const title = historyDetail.querySelector("h3");
        const text = historyDetail.querySelector("p");

        image.src = point.dataset.image;
        image.alt = point.dataset.title;
        year.textContent = point.dataset.year;
        title.textContent = point.dataset.title;
        text.textContent = point.dataset.text;

        historyPoints.forEach((item) => item.classList.remove("active"));
        point.classList.add("active");
        historyDetail.classList.add("open");
      });
    });

    document.querySelector(".history-close")?.addEventListener("click", closeHistoryDetail);

    // Ramas de la ingeniería: al seleccionar una rama, el círculo central
    // muestra su definición unos segundos y luego vuelve al título de la sección.
    const branchCenter = document.querySelector("#branchCenter");
    const branchButtons = Array.from(document.querySelectorAll(".branch-button"));
    let branchResetTimer;

    function resetBranchCenter() {
      if (!branchCenter) return;
      branchCenter.classList.remove("showing-definition");
      branchCenter.querySelector("h3").textContent = "";
      branchCenter.querySelector("p").textContent = "Ramas de la ingeniería";
      branchButtons.forEach((button) => button.classList.remove("active"));
    }

    branchButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (!branchCenter) return;
        window.clearTimeout(branchResetTimer);

        branchButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        branchCenter.classList.add("showing-definition");
        branchCenter.querySelector("h3").textContent = button.dataset.title;
        branchCenter.querySelector("p").textContent = button.dataset.text;

        branchResetTimer = window.setTimeout(resetBranchCenter, 9000);
      });
    });

    // El antiguo botón de "volver arriba" ahora funciona como "sección anterior".
    // Se calcula con todas las secciones directas del main, no solo con el menú.
    const backTop = document.querySelector("#backTop");
    const floatingActions = document.querySelector(".floating-actions");
    const pageSections = Array.from(document.querySelectorAll("main > section"));

    function getCurrentSectionIndex() {
      const marker = window.innerHeight * 0.42;
      const current = pageSections
        .filter((section) => section.getBoundingClientRect().top <= marker)
        .at(-1) || pageSections[0];

      return Math.max(0, pageSections.indexOf(current));
    }

    function updatePreviousButton() {
      if (!backTop) return;
      const currentIndex = getCurrentSectionIndex();
      if (currentPage !== "ingenieria-multimedia") {
        backTop.classList.toggle("show", currentIndex > 0);
        floatingActions?.classList.add("hide");
        return;
      }

      backTop.classList.toggle("show", currentIndex > 0);
      floatingActions?.classList.remove("hide");
    }

    window.addEventListener("scroll", updatePreviousButton);
    window.addEventListener("resize", updatePreviousButton);
    updatePreviousButton();

    backTop?.addEventListener("click", () => {
      if (currentPage !== "ingenieria-multimedia") {
        const currentIndex = getCurrentSectionIndex();
        if (currentIndex > 0) {
          pageSections[currentIndex - 1].scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          const fallback = backTop.dataset.fallback || "index.html";
          window.location.href = fallback;
        }
        return;
      }

      const previousSection = pageSections[Math.max(0, getCurrentSectionIndex() - 1)];
      previousSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

