# Informe detallado del sitio web

Proyecto: Sitio web sobre Fundamentos de Ingeniería Multimedia  
Ubicación local: `C:\Users\Asus\Documents\Codex\2026-04-26\sitio-ing-multimedia`  
Tipo de proyecto: página web estática hecha con HTML, CSS y JavaScript.  

Este informe describe la estructura completa del sitio, sus archivos, sus secciones, los recursos usados y las interacciones que ocurren cuando el usuario navega, hace clic, pasa el cursor o abre ventanas emergentes.

---

## Descripción breve del proyecto

Este proyecto busca presentar de forma clara, visual e interactiva los fundamentos de la Ingeniería Multimedia, relacionando tres ejes principales: ingeniería, multimedia e ingeniería multimedia. La intención es que el usuario no solo lea información, sino que explore secciones, videos, tarjetas, orbes, ventanas emergentes y pequeñas interacciones que ayudan a comprender el contenido de manera más dinámica.

## Sinopsis

El sitio web funciona como una experiencia educativa sencilla sobre la Ingeniería Multimedia y sus bases. A través de tres páginas conectadas, el usuario puede conocer qué es la ingeniería, cómo ha evolucionado, cuáles son sus ramas, qué elementos componen la multimedia y cómo estos campos se integran en la formación y desempeño del ingeniero multimedia. El proyecto combina texto, video, imágenes, animaciones, test vocacional, enlaces de apoyo y herramientas gratuitas para ofrecer una navegación organizada, visual y comprensible.

---

## 1. Estructura general del proyecto

El sitio está dividido en tres páginas principales:

- `index.html`: página principal de Ingeniería Multimedia.
- `ingenieria.html`: página dedicada solo al tema Ingeniería.
- `multimedia.html`: página dedicada solo al tema Multimedia.

Además, el proyecto tiene tres carpetas importantes:

- `css/`: contiene el archivo de estilos visuales.
- `js/`: contiene el archivo de comportamiento e interacciones.
- `assets/`: contiene imágenes, logos y videos.
- `content/`: contiene textos fuente separados por tema. Sirven como material de apoyo y organización del contenido.

La página funciona sin base de datos y sin servidor especial. Es un sitio estático: el navegador carga los archivos HTML, CSS, JS, imágenes y videos.

---

## 2. Archivos principales

### 2.1. `index.html`

Es la página principal del sitio y corresponde a Ingeniería Multimedia.

Contiene:

- Encabezado fijo con logo y menú.
- Portada de Ingeniería Multimedia.
- Sección de qué hace un ingeniero multimedia.
- Sección de áreas de desempeño.
- Sección de perfil del ingeniero multimedia.
- Sección de habilidades y competencias.
- Sección de innovación y proyección a futuro 2030.
- Pie de página global.
- Modal informativo reutilizable.
- Modal de video.
- Modal del test.
- Modal de dónde estudiar.
- Modal de herramientas gratuitas.
- Botones flotantes de test, estudiar, herramientas y anterior.
- Botón flotante de modo claro/oscuro.

### 2.2. `ingenieria.html`

Es la página dedicada al tema Ingeniería.

Contiene:

- Encabezado fijo con el enlace Ingeniería activo.
- Portada de Ingeniería con orbe interactivo.
- Sección Historia de la ingeniería.
- Sección Ramas de la ingeniería.
- Sección Qué es un ingeniero, características y funciones principales.
- Pie de página global.
- Modal de video.
- Botón flotante Anterior.
- Botón flotante de modo claro/oscuro.

En esta página no aparecen los botones flotantes de test, dónde estudiar ni herramientas gratuitas.

### 2.3. `multimedia.html`

Es la página dedicada al tema Multimedia.

Contiene:

- Encabezado fijo con el enlace Multimedia activo.
- Portada de Multimedia con orbe interactivo.
- Sección Elementos Multimedia.
- Sección Pilares de la multimedia y Tipos de multimedia.
- Pie de página global.
- Modal de video.
- Botón flotante Anterior.
- Botón flotante de modo claro/oscuro.

En esta página tampoco aparecen los botones flotantes de test, dónde estudiar ni herramientas gratuitas.

### 2.4. `css/styles.css`

Es el archivo que controla la apariencia visual del sitio.

Define:

- Paleta de colores.
- Tipografías.
- Fondos oscuros y texturas.
- Encabezado fijo.
- Menús.
- Botones.
- Orbes.
- Tarjetas.
- Modales.
- Footer.
- Diseño responsive para tableta y celular.
- Animaciones.
- Estados al pasar el cursor.
- Estados activos después de hacer clic.
- Modo oscuro y modo claro mediante la clase `light-mode`.
- Reglas de contraste específicas para textos, botones, tarjetas y modales en modo claro.

### 2.5. `js/main.js`

Es el archivo que controla las interacciones del sitio.

Controla:

- Apertura y cierre de modales.
- Reproducción y pausa de videos.
- Efectos de los orbes.
- Explosión visual en el orbe de Ingeniería Multimedia.
- Cambio de textos en orbes de Ingeniería y Multimedia.
- Tarjetas tipo cortina.
- Sonido y animación de áreas de desempeño.
- Test vocacional.
- Modal de universidades.
- Modal de herramientas.
- Leyendas flotantes de ayuda.
- Línea del tiempo de historia.
- Ramas de la ingeniería.
- Botón Anterior.
- Cambio entre modo oscuro y modo claro.
- Guardado de la preferencia visual en `localStorage`.

---

## 3. Encabezado general

El encabezado aparece en las tres páginas.

Está compuesto por:

- Logo textual: `IM`.
- Nombre del sitio: `Ing. Multimedia`.
- Menú principal:
  - Ingeniería.
  - Multimedia.
  - Ingeniería Multimedia.

Cada página marca como activo el enlace correspondiente:

- En `index.html`, está activo `Ingeniería Multimedia`.
- En `ingenieria.html`, está activo `Ingeniería`.
- En `multimedia.html`, está activo `Multimedia`.

El encabezado es fijo, es decir, permanece visible en la parte superior mientras el usuario baja por la página.

---

## 4. Página Ingeniería Multimedia (`index.html`)

### 4.1. Portada: Ingeniería Multimedia

Identificador: `#ing-multimedia`

Esta es la primera sección de la página principal.

Contiene:

- Título grande: `Ingeniería Multimedia`.
- Definición breve del área.
- Botón `Ver video`.
- Orbe visual con cuatro elementos:
  - Botón de reproducción.
  - Orbe `AV`.
  - Orbe `UX`.
  - Orbe `{ }`.
- Texto central del orbe: `Crear experiencias digitales`.

Funcionamiento:

- Al hacer clic en `Ver video`, se abre el modal de video.
- Al hacer clic en el botón de reproducción del orbe, también se abre el mismo modal de video.
- Al hacer clic en `AV`, aparece una explosión visual/lluvia con el símbolo `AV`.
- Al hacer clic en `UX`, aparece una explosión visual/lluvia con el símbolo `UX`.
- Al hacer clic en `{ }`, aparece una explosión visual/lluvia con el símbolo `{ }`.
- La explosión visual es creada por JavaScript y cada partícula desaparece al terminar su animación.

Recursos usados:

- Video: `assets/video/ingenieria-multimedia/intro.mp4`.

### 4.2. Sección: Qué hace un ingeniero multimedia

Identificador: `#que-hace-ing-multimedia`

Contiene:

- Etiqueta: `Rol profesional`.
- Título: `Qué hace un ingeniero multimedia`.
- Texto introductorio.
- Leyenda flotante: `Haz clic en una tarjeta para ver el contenido de cada actividad.`
- Dos tarjetas tipo cortina.

Primera tarjeta:

- Tema inicial: Diseño y producción multimedia.
- Imágenes:
  - `que-hace-un-ing-multimedia-1.jpg`
  - `que-hace-un-ing-multimedia-2.jpg`
  - `que-hace-un-ing-multimedia-3.jpg`
- Textos asociados:
  - Crear gráficos, animaciones, videos y audio para proyectos digitales.
  - Organizar imagen, sonido, movimiento y texto.
  - Combinar texto, audio, video y recursos interactivos.

Segunda tarjeta:

- Tema inicial: Desarrollo multimedia.
- Imágenes:
  - `que-hace-un-ing-multimedia-4.jpg`
  - `que-hace-un-ing-multimedia-5.jpg`
  - `que-hace-un-ing-multimedia-6.jpg`
- Textos asociados:
  - Programar aplicaciones multimedia interactivas.
  - Crear productos donde el usuario pueda explorar, responder, navegar o decidir.
  - Integrar medios con realidad aumentada y realidad virtual.

Funcionamiento:

- En estado normal, cada tarjeta muestra tres imágenes en franjas verticales.
- Al pasar el cursor, la tarjeta gana presencia visual.
- Al hacer clic en una tarjeta, cambia la imagen activa y también cambia el título y texto de la tarjeta.
- Cada clic avanza a la siguiente imagen/texto.
- Cuando llega a la tercera imagen, vuelve a la primera.
- La leyenda de ayuda aparece brevemente cuando el usuario entra a la sección con el cursor.

### 4.3. Sección: Áreas de desempeño

Identificador: `#areas-desempeno`

Contiene:

- Etiqueta: `Campo laboral`.
- Título: `Áreas de desempeño`.
- Texto introductorio.
- Nube de burbujas con imágenes y nombres de áreas.

Áreas incluidas:

- Diseño y producción de contenido multimedia.
- Desarrollo de software y aplicaciones.
- Industria de videojuegos.
- Realidad virtual y aumentada.
- Marketing digital y publicidad.
- Educación y e-learning.
- Telecomunicaciones.
- Sector gobierno.

Funcionamiento:

- Las áreas se muestran como burbujas flotantes.
- Cada burbuja contiene una imagen circular y el nombre del área.
- Al hacer clic en una burbuja, se activa una animación de globo que explota.
- Al hacer clic también se reproduce un sonido corto tipo `pop`, generado con Web Audio desde JavaScript.
- La burbuja vuelve a su estado normal después de terminar la animación.

Recursos usados:

- Imágenes dentro de `assets/img/ingenieria-multimedia/`.

### 4.4. Sección: Perfil del ingeniero multimedia

Identificador: `#perfil-ing-multimedia`

Contiene:

- Etiqueta: `Perfil profesional`.
- Título: `Perfil del ingeniero multimedia`.
- Texto introductorio.
- Dos paneles:
  - Perfil del aspirante.
  - Perfil del egresado.

Perfil del aspirante:

- Imagen: `perfil_interesado.png`.
- Rasgos:
  - Curiosidad por la tecnología.
  - Interés en el diseño y la comunicación visual.
  - Gusto por videojuegos, producción audiovisual y contenido digital.

Perfil del egresado:

- Imagen: `perfil_egresado.png`.
- Rasgos:
  - Lidera y desarrolla proyectos multimedia.
  - Crea soluciones innovadoras que integran diseño, tecnología y comunicación.
  - Trabaja con diseño, animación, edición audiovisual y programación.

Funcionamiento:

- Es una sección principalmente visual e informativa.
- Los iconos decorativos acompañan cada rasgo.
- Los estilos dan sensación de tarjeta con profundidad, textura y separación.

### 4.5. Sección: Habilidades y competencias

Identificador: `#habilidades-competencias`

Contiene:

- Etiqueta: `Competencias clave`.
- Título: `Habilidades y competencias`.
- Texto introductorio.
- Dos paneles principales:
  - Habilidades técnicas.
  - Habilidades creativas y blandas.

Habilidades técnicas:

- Programación: HTML, CSS, JavaScript, Python.
- Diseño gráfico: Photoshop, Illustrator, Figma.
- Animación 2D/3D: After Effects, Blender, Autodesk Maya.
- Edición de video y audio: Premiere Pro, Final Cut Pro, Audacity.
- Gestión de proyectos con metodologías ágiles.

Habilidades creativas y blandas:

- Creatividad para diseñar contenidos atractivos.
- Comunicación para transmitir ideas a equipos y clientes.
- Trabajo en equipo con diseñadores, programadores y comunicadores.
- Resolución de problemas técnicos y creativos.

Funcionamiento:

- Es una sección comparativa en dos columnas.
- Cada habilidad tiene un icono.
- Las técnicas usan engranaje.
- Las creativas/blandas usan icono de dibujo.
- El fondo de cada panel usa imagen y capa visual para mantener contraste.

### 4.6. Sección: Innovación y proyección a futuro 2030

Identificador: `#innovacion-2030`

Contiene:

- Etiqueta: `Futuro multimedia`.
- Sistema visual de engranajes.
- Engranaje central con el título `Innovación y proyección a futuro`.
- Número `2030` orbitando alrededor del centro.
- Cuatro engranajes pequeños con imágenes.
- Cuatro tarjetas de texto asociadas.

Elementos:

- Inteligencia artificial.
- IA generativa.
- Tendencias en Colombia.
- Realidad extendida.

Funcionamiento:

- Los engranajes tienen animación circular.
- El número `2030` orbita alrededor del engranaje central.
- Los textos se ubican cerca de la imagen correspondiente.
- La sección usa un fondo oscuro con textura tecnológica.
- Al pasar el cursor sobre el área, la intención visual es que el usuario pueda leer con más calma los textos.

### 4.7. Modales de la página principal

#### Modal informativo reutilizable

Identificador: `#modal`

Uso:

- Está preparado para mostrar información ampliada con título, texto y un arte SVG generado desde JavaScript.
- Se abre con elementos que tengan atributo `data-open`.
- Actualmente el sitio conserva esta estructura como componente reutilizable.

Cierre:

- Se cierra con el botón `X`.
- También se cierra haciendo clic sobre el fondo oscuro del modal.

#### Modal de video

Identificador: `#videoModal`

Uso:

- Muestra el video introductorio de Ingeniería Multimedia.

Funcionamiento:

- Se abre desde el botón `Ver video`.
- También se abre desde el botón de reproducción del orbe.
- Se cierra con `X`.
- También se cierra tocando el fondo del modal.
- Al cerrarse, el video se pausa.

#### Modal del test

Identificador: `#testModal`

Contiene:

- Botón `X` para cerrar.
- Título: `Descubre tu perfil multimedia`.
- Introducción breve.
- Formulario con tres preguntas.
- Botón `Ver resultado`.
- Área de advertencia.
- Área de resultado.
- Botón `Volver a realizar el test`.

Importante:

- Este modal no se cierra al tocar el fondo.
- La razón es evitar que el usuario pierda respuestas por accidente.

Preguntas:

1. Actividad que llama más la atención.
2. Herramienta que gustaría dominar.
3. Objetivo profesional ideal.

Resultados posibles:

- A: `El Creador de Mundos`, relacionado con videojuegos.
- B: `El Estratega Digital`, relacionado con diseño y marketing digital.
- C: `El Productor Audiovisual`, relacionado con animación y postproducción.
- D: `El Innovador Tecnológico`, relacionado con desarrollo y aplicaciones.

Funcionamiento:

- Ninguna opción aparece marcada por defecto.
- Al abrir el test, JavaScript reinicia el formulario.
- Si el usuario intenta ver resultado sin responder las tres preguntas, aparece una advertencia.
- Si responde todo, JavaScript calcula la letra ganadora.
- En caso de empate, gana la primera letra que alcance el puntaje más alto según el orden A, B, C, D.
- Se muestra el resultado con título, subtítulo, texto y video.
- El video del resultado intenta reproducirse automáticamente en silencio.
- Si el navegador bloquea la reproducción automática, el video queda visible con controles.
- Al hacer clic en `Volver a realizar el test`, se limpia el formulario y se oculta el resultado.

#### Modal Dónde estudiar

Identificador: `#studyModal`

Contiene:

- Universidades en Colombia.
- Logo de cada universidad.
- Enlace externo.

Universidades:

- UNINPAHU.
- Universidad Simón Bolívar.
- Universidad Militar Nueva Granada.
- Universidad Autónoma de Occidente.
- UNAD.
- Colegio Mayor del Cauca.

Funcionamiento:

- Se abre desde el botón flotante `Estudiar`.
- Se cierra con `X`.
- También se cierra tocando el fondo.
- Al hacer clic en una universidad, se abre su enlace en una nueva pestaña del navegador.

#### Modal Herramientas gratuitas

Identificador: `#toolsModal`

Contiene herramientas organizadas por categorías.

Categorías:

- Diseño gráfico e ilustración:
  - Canva.
  - GIMP.
  - Krita.
- Animación y modelado 3D:
  - Blender.
- Edición de audio:
  - Audacity.
- Edición de video:
  - DaVinci Resolve.
  - CapCut.
- Desarrollo y programación:
  - Visual Studio Code.
  - Scratch.

Funcionamiento:

- Se abre desde el botón flotante `Gratis`.
- Se cierra con `X`.
- También se cierra tocando el fondo.
- Cada herramienta abre su sitio oficial en una nueva pestaña.

### 4.8. Botones flotantes de la página principal

En `index.html` aparecen cuatro accesos flotantes:

- `Test`: abre el modal del test.
- `Estudiar`: abre el modal de universidades.
- `Gratis`: abre el modal de herramientas gratuitas.
- `Anterior`: lleva a la sección anterior.

Funcionamiento del botón `Anterior`:

- No aparece en la primera sección.
- Empieza a mostrarse desde la segunda sección.
- Cuando se pulsa, calcula la sección actual y hace scroll suave a la sección anterior.
- Si el usuario está en Innovación 2030, vuelve a Habilidades y competencias.
- Si está en Habilidades, vuelve a Perfil.
- Y así sucesivamente.

---

### 4.9. Modo claro y modo oscuro

El sitio cuenta con un botón flotante para cambiar entre modo oscuro y modo claro. Este control aparece en las tres páginas y permite adaptar la lectura según el gusto del usuario o las condiciones de presentación.

Ubicación y comportamiento:

- El botón se muestra como control flotante en la parte superior derecha, separado del menú principal.
- En pantallas pequeñas se conserva como botón compacto para no ocupar demasiado espacio.
- Al hacer clic, el sitio alterna entre la apariencia oscura y la apariencia clara.
- JavaScript agrega o quita la clase `light-mode` en el `body`.
- La preferencia se guarda en `localStorage` con la clave `site-theme`.
- Si el usuario recarga la página, el sitio recuerda el último modo seleccionado.

Elementos que cambian en modo claro:

- Fondo general del sitio.
- Texturas y patrones de las secciones.
- Encabezado y navegación.
- Botones, tarjetas, modales y formularios.
- Textos de apoyo, títulos y subtítulos.
- Footer y elementos flotantes.

Se realizaron ajustes de contraste para que los textos sigan siendo legibles en modo claro, especialmente en:

- Habilidades y competencias.
- Modal del test.
- Botón `Volver a realizar el test`.
- Recuadros de historia.
- Categorías de herramientas gratuitas.
- Tarjetas y paneles informativos.

---

## 5. Página Ingeniería (`ingenieria.html`)

### 5.1. Portada: Ingeniería

Identificador: `#ingenieria`

Contiene:

- Título: `Ingeniería`.
- Definición breve.
- Botón `Ver video`.
- Orbe visual de ingeniería.
- Texto central: `Ideas que se vuelven soluciones`.

Orbes:

- Reproducir video.
- `Σ`: cálculo y ciencia.
- `⚙`: mecanismos y sistemas.
- `⌂`: estructuras e infraestructura.

Funcionamiento:

- El botón `Ver video` abre el modal de video.
- El botón de reproducción del orbe también abre el modal.
- Al hacer clic en `Σ`, el texto central cambia a `Ciencia y matemática para resolver.`
- Al hacer clic en `⚙`, el texto central cambia a `Sistemas que transforman ideas.`
- Al hacer clic en `⌂`, el texto central cambia a `Diseñar es anticipar soluciones.`
- Después de unos segundos, el texto central vuelve a `Ideas que se vuelven soluciones`.

Video:

- `assets/video/ingenieria/Que-es-la-ingenieria.mp4`.

### 5.2. Sección: Historia de la ingeniería

Identificador: `#historia-ingenieria`

Contiene:

- Etiqueta: `Línea del tiempo`.
- Título: `Historia de la ingeniería`.
- Texto introductorio.
- Leyenda flotante con instrucción.
- Campo visual con puntos cronológicos.
- Recuadro de detalle.

Funcionamiento:

- Los puntos están dispersos de izquierda a derecha.
- El orden va desde el periodo más antiguo hasta el más reciente.
- Al pasar el cursor sobre un punto, aparece el año.
- Al hacer clic en un punto:
  - Se reproduce un sonido tipo goteo.
  - Se actualiza el recuadro de detalle.
  - Se muestra imagen, año, título y texto del suceso.
  - El punto seleccionado queda marcado como activo.
- El recuadro tiene botón `X` para cerrarse.

Momentos incluidos:

- Paleolítico.
- Revolución neolítica.
- Mesopotamia.
- Egipto.
- Grecia.
- Imperio romano.
- Edad Media.
- Renacimiento.
- Ingeniero civil.
- Primera revolución industrial.
- Fundación del MIT.
- Segunda revolución industrial.
- Ingeniería moderna.
- Ingeniería científica y de sistemas.
- Energía nuclear.
- Cibernética.
- Era de la computación.
- Carrera espacial.
- Robótica e informática.
- Globalización y telecomunicaciones.
- Internet.
- Ingeniería digital.

### 5.3. Sección: Ramas de la ingeniería

Identificador: `#ramas-ingenieria`

Contiene:

- Etiqueta: `Especialidades`.
- Botones laterales de ramas.
- Círculo central.

Ramas incluidas:

- Ingeniería Civil.
- Ingeniería Mecánica.
- Ingeniería Industrial.
- Ingeniería de Sistemas.
- Ingeniería Multimedia.
- Ingeniería Química.
- Ingeniería Forense.
- Ingeniería de Tejidos.

Funcionamiento:

- El círculo central muestra inicialmente `Ramas de la ingeniería`.
- Al hacer clic en una rama:
  - El botón queda activo.
  - El círculo central muestra el nombre completo de la rama.
  - El círculo central muestra la definición correspondiente.
- Después de 9 segundos, el círculo vuelve a su estado inicial.

### 5.4. Sección: El ingeniero en acción

Identificador: `#que-es-un-ingeniero`

Contiene:

- Etiqueta: `Perfil general`.
- Título: `El ingeniero en acción`.
- Texto introductorio.
- Tres tarjetas que giran.

Tarjetas:

1. Concepto:
   - Frente: imagen y título `Qué es un ingeniero`.
   - Reverso: definición de ingeniero.

2. Perfil:
   - Frente: imagen y título `Características`.
   - Reverso: mentalidad analítica, ingenio, pensamiento crítico, resiliencia, ética y responsabilidad.

3. Acción:
   - Frente: imagen y título `Funciones principales`.
   - Reverso: resolver problemas, optimizar procesos, modelar, simular, gestionar proyectos, investigar y mejorar sistemas.

Funcionamiento:

- Al pasar el cursor sobre una tarjeta, gira y revela el texto del reverso.
- También se puede enfocar con teclado porque cada tarjeta tiene `tabindex="0"`.

### 5.5. Botón flotante en Ingeniería

En esta página solo aparece el botón `Anterior`.

Funcionamiento:

- No aparece en la primera sección.
- Aparece desde la segunda sección.
- Al hacer clic, sube a la sección anterior.
- Si está en la primera sección y se usa una lógica de respaldo, vuelve a `index.html`.

---

## 6. Página Multimedia (`multimedia.html`)

### 6.1. Portada: Multimedia

Identificador: `#multimedia`

Contiene:

- Título: `Multimedia`.
- Definición breve.
- Botón `Ver video`.
- Orbe visual.
- Texto central: `Comunicar con medios conectados`.

Orbes:

- Reproducir video.
- Texto.
- Imagen.
- Audio.

Funcionamiento:

- El botón `Ver video` abre el modal de video.
- El botón de reproducción del orbe también abre el modal de video.
- Al hacer clic en el orbe de texto:
  - El centro cambia a `mensaje + lectura`.
  - Se activa una microanimación relacionada con texto.
- Al hacer clic en el orbe de imagen:
  - El centro cambia a `forma visual`.
  - Se activa una microanimación visual.
- Al hacer clic en el orbe de audio:
  - El centro cambia a `ritmo + emoción`.
  - Se activa una microanimación sonora/visual.
- Después de unos segundos vuelve al texto inicial.

Video:

- `assets/video/multimedia/Que-es-la-multimedia.mp4`.

### 6.2. Sección: Elementos Multimedia

Identificador: `#elementos-multimedia`

Contiene:

- Etiqueta: `Componentes`.
- Título: `Elementos Multimedia`.
- Texto introductorio.
- Campo con tarjetas flotantes.

Elementos:

- Texto.
- Imagen.
- Video.
- Audio.
- Animación.

Funcionamiento:

- Es una sección visual con elementos flotantes.
- Cada elemento tiene un icono y un nombre.
- Refuerza la idea de que la multimedia une varios medios.
- El botón `Anterior` empieza a mostrarse al llegar a esta sección.

### 6.3. Sección: Pilares y tipos de multimedia

Identificador: `#pilares-tipos`

Contiene dos columnas:

Primera columna:

- Etiqueta: `Bases`.
- Título: `Pilares de la multimedia`.
- Lista de pilares.

Pilares:

- Uso simultáneo de varios medios.
- Interactividad.
- Enfoque comunicativo.
- Adaptabilidad.
- Accesibilidad digital.

Segunda columna:

- Etiqueta: `Clasificación`.
- Título: `Tipos de multimedia`.
- Tarjetas con imagen y texto.

Tipos:

- Lineal.
- No lineal.
- Hipermedia.

Funcionamiento:

- Es principalmente una sección informativa.
- Los pilares se presentan con viñetas visuales.
- Los tipos se presentan con imagen, título y descripción.
- La distribución está pensada para equilibrar una columna con lista y otra con más texto e imágenes.

### 6.4. Botón flotante en Multimedia

En esta página solo aparece el botón `Anterior`.

Funcionamiento:

- No aparece en la primera sección.
- Aparece desde la segunda sección.
- Al hacer clic, sube a la sección anterior.
- Si está en la primera sección y se usa una lógica de respaldo, vuelve a `index.html`.

---

## 7. Pie de página global

El pie de página aparece en las tres páginas.

Contiene:

- Nombre general: `Fundamentos de Ingeniería Multimedia`.
- Tres grupos de navegación:
  - Ingeniería Multimedia.
  - Ingeniería.
  - Multimedia.

Ingeniería Multimedia incluye enlaces a:

- Inicio.
- Qué hace.
- Áreas de desempeño.
- Perfil.
- Habilidades.
- Innovación 2030.

Ingeniería incluye enlaces a:

- Inicio.
- Historia.
- Ramas.
- Ingeniero.

Multimedia incluye enlaces a:

- Inicio.
- Elementos.
- Pilares y tipos.

Funcionamiento:

- Los enlaces llevan a archivos o secciones específicas.
- Si el usuario está en otra página, el enlace carga la página correcta y salta a la sección indicada.
- El footer tiene un tratamiento visual diferente para que se perciba como cierre del sitio y no como otra sección de contenido.

---

## 8. Interacciones programadas en JavaScript

### 8.1. Modales

JavaScript abre y cierra modales agregando o quitando la clase `open`.

Cuando un modal está abierto:

- Se cambia `aria-hidden` a `false`.
- El modal aparece visualmente.

Cuando se cierra:

- Se quita la clase `open`.
- Se cambia `aria-hidden` a `true`.
- Si contiene video, el video se pausa.

### 8.2. Videos

Los botones `#openVideo` y `#openVideoOrbit` abren el modal de video.

El botón `#closeVideo` cierra el modal y pausa el video.

También se puede cerrar haciendo clic en el fondo del modal de video.

### 8.3. Orbe de Ingeniería Multimedia

Los orbes `AV`, `UX` y `{ }` tienen clase `burst-orb`.

Al hacer clic:

- JavaScript detecta el símbolo desde `data-burst-symbol`.
- Calcula el centro del botón.
- Crea 18 partículas.
- Cada partícula sale disparada en una dirección.
- Cada partícula usa el color del orbe.
- Al terminar la animación, la partícula se elimina del documento.

### 8.4. Orbe de Ingeniería

Los orbes no-video tienen `data-orbit-text`.

Al hacer clic:

- Cambian el texto del centro.
- Marcan el orbe como activo.
- Activan una clase visual.
- Después de 5.2 segundos, vuelven al texto inicial.

### 8.5. Orbe de Multimedia

Los orbes no-video tienen:

- `data-media-effect`.
- `data-media-text`.

Al hacer clic:

- Cambian el texto central.
- Agregan una clase de efecto.
- Marcan el orbe como activo.
- Después de 2.8 segundos, vuelven al estado inicial.

### 8.6. Tarjetas tipo cortina

Cada tarjeta tiene tres imágenes y un texto asociado.

JavaScript usa `curtainCardData` para saber qué título y texto corresponde a cada imagen.

Al hacer clic:

- Avanza al siguiente índice.
- Cambia la clase activa.
- Cambia la imagen activa.
- Cambia el título.
- Cambia el texto.

### 8.7. Burbujas de áreas de desempeño

Al hacer clic:

- Se reproduce un sonido tipo pop.
- Se aplica la clase `popping`.
- CSS ejecuta la animación de explosión.
- Al terminar, se quita la clase para poder repetir la animación.

### 8.8. Test vocacional

Al abrir:

- Se reinicia el formulario.
- Se borra advertencia.
- Se borra resultado.
- Se oculta el botón de repetir.

Al enviar:

- Se revisa que las tres preguntas estén respondidas.
- Si falta una respuesta, se muestra advertencia.
- Si todo está respondido, se calculan puntajes.
- Se obtiene el perfil ganador.
- Se muestra video, título, subtítulo y explicación.
- El video intenta iniciar automáticamente.

### 8.9. Leyendas flotantes

Las leyendas tienen clase `section-hint`.

Funcionamiento:

- Al entrar con el cursor a una sección interactiva, aparece una ayuda breve.
- También aparece si el usuario enfoca la sección con teclado.
- Después de 3.4 segundos desaparece.

### 8.10. Historia de la ingeniería

Cada punto tiene:

- `data-year`.
- `data-title`.
- `data-image`.
- `data-text`.

Al hacer clic:

- Se reproduce el sonido de goteo.
- Se actualiza la imagen.
- Se actualiza el año.
- Se actualiza el título.
- Se actualiza el texto.
- Se abre el recuadro.
- El punto queda activo.

### 8.11. Ramas de la ingeniería

Cada botón tiene:

- `data-title`.
- `data-text`.

Al hacer clic:

- Se limpia el estado activo de los demás botones.
- El botón seleccionado queda activo.
- El círculo central muestra el título y texto.
- Después de 9 segundos, se reinicia el círculo.

### 8.12. Botón Anterior

JavaScript revisa las secciones directas dentro de `main`.

Funcionamiento:

- Calcula cuál sección está actualmente visible.
- Si está en la primera sección, el botón no se muestra.
- Si está desde la segunda sección, el botón aparece.
- Al hacer clic, hace scroll suave a la sección anterior.
- En las páginas Ingeniería y Multimedia, los botones flotantes extra se ocultan.

---

## 9. Recursos multimedia

### 9.1. Videos

Ingeniería Multimedia:

- `assets/video/ingenieria-multimedia/intro.mp4`
- `assets/video/ingenieria-multimedia/creador-de-mundos.mp4`
- `assets/video/ingenieria-multimedia/estratega-digital.mp4`
- `assets/video/ingenieria-multimedia/innovador-tec.mp4`
- `assets/video/ingenieria-multimedia/productor-audiovisual.mp4`

Ingeniería:

- `assets/video/ingenieria/Que-es-la-ingenieria.mp4`

Multimedia:

- `assets/video/multimedia/Que-es-la-multimedia.mp4`

### 9.2. Imágenes

Las imágenes están separadas por carpetas:

- `assets/img/ingenieria/`: historia, perfil y tarjetas de ingeniería.
- `assets/img/ingenieria-multimedia/`: áreas de desempeño, perfiles, habilidades, innovación y tarjetas.
- `assets/img/multimedia/`: pilares y tipos de multimedia.
- `assets/img/logos/`: universidades y herramientas.

### 9.3. Logos

Se usan en:

- Modal de universidades.
- Modal de herramientas gratuitas.

Cada logo está acompañado por un enlace externo.

---

## 10. Diseño visual

El diseño actual usa:

- Fondos oscuros con textura tecnológica.
- Tarjetas con profundidad.
- Orbes circulares.
- Engranajes.
- Burbujas flotantes.
- Secciones con etiquetas pequeñas.
- Contraste claro para textos.
- Botones con color destacado.
- Efectos sutiles al pasar el cursor.

La tipografía se carga desde Google Fonts:

- `Poppins`: títulos y textos fuertes.
- `Inter`: lectura general.

La estructura visual busca que las tres áreas tengan identidad propia:

- Ingeniería Multimedia: mezcla de creatividad, tecnología, áreas profesionales e innovación.
- Ingeniería: ciencia, historia, ramas y perfil profesional.
- Multimedia: medios, componentes, pilares y tipos.

---

## 11. Responsive

El sitio está preparado para ajustarse en:

- Pantallas de escritorio.
- Tabletas.
- Celulares.

El CSS incluye reglas responsive para:

- Reducir columnas.
- Reorganizar grids.
- Ajustar tamaños de orbes.
- Evitar que los textos se salgan de sus contenedores.
- Adaptar modales.
- Reacomodar botones flotantes.
- Hacer más manejables las tarjetas en pantallas pequeñas.
- Mantener visible y usable el botón de modo claro/oscuro sin cubrir el menú, el footer ni otros accesos flotantes.

---

## 12. Accesibilidad básica

El sitio incluye varias prácticas de accesibilidad:

- `aria-label` en botones visuales.
- `aria-hidden` en modales cerrados.
- `role="dialog"` en ventanas emergentes.
- `aria-modal="true"` en modales.
- `aria-live="polite"` en áreas que cambian contenido.
- `alt` en imágenes principales.
- Botones reales para elementos clicables.
- Algunas tarjetas tienen `tabindex="0"` para permitir enfoque con teclado.
- El botón de modo claro/oscuro tiene `aria-label`, `aria-pressed` y texto interno actualizado según el estado visual.

---

## 13. Publicación y GitHub

El proyecto está conectado a GitHub con el remoto:

`https://github.com/navarro641/sitio-ing-multimedia.git`

La rama principal es:

`main`

Los cambios fueron subidos a GitHub hasta el commit:

`6a5237a Ajustar cierre del test`

---

## 14. Resumen funcional final

El sitio no es solo una página con texto. Tiene:

- Navegación entre tres páginas.
- Secciones internas con enlaces.
- Videos en modales.
- Test interactivo con resultado.
- Enlaces externos a universidades.
- Enlaces externos a herramientas gratuitas.
- Burbujas animadas con sonido.
- Línea del tiempo interactiva.
- Tarjetas que giran.
- Tarjetas tipo cortina.
- Orbes con microinteracciones.
- Botón Anterior por secciones.
- Botón flotante de modo claro/oscuro con preferencia guardada.
- Footer con mapa general del sitio.
- Diseño responsive.
- Organización de contenido y recursos por carpetas.

Este informe describe la versión actual del proyecto al momento de su creación.
