// ============================================================
// PERFIL — Toda la información personal del CV
// ============================================================
// Para actualizar la web en el futuro, solo modifica este archivo.
// Los componentes leen los datos desde aquí.
// ============================================================

export const profile = {
  // Datos personales y contacto
  personal: {
    name: "Fernando J. Camacho Rizquez",
    shortName: "Fernando Camacho",
    title: "Estudiante de Ingeniería Informática",
    subtitle: "Desarrollo de Software · Dirección Musical · Fotografía",
    location: "Martos (Jaén), España",
    email: "fernandojosecamachorizquez@gmail.com",
    phone: "+34 664 52 40 45",
    github: "https://github.com/Fercr2000",
    linkedin: "https://www.linkedin.com/in/fernando-j-camacho-rizquez-00978440a/",
    cvPdf: "/CV_Fernando_Camacho_Rizquez.pdf",
  },

  // Contenido específico del Hero (cabecera)
  hero: {
    badge: "Cursando último año de Ingeniería Informática en la Universidad de Jaén",
    greeting: "Hola, soy",
    firstName: "Fernando J.",
    lastName: "Camacho Rizquez",
    headline: "Construyendo puentes entre el software y el arte.",
    subheadline: "Ingeniero Informático en formación, director musical, siempre con un nuevo objetivo en el horizonte.",
    description: "Apasionado por crear: ya sea entre líneas de código para resolver problemas reales o con la batuta en la mano. Compagino mi último año de Ingeniería Informática con la dirección del Coro y Orquesta de la Diócesis de Jaén, una doble vertiente que me ha enseñado que la disciplina técnica y la sensibilidad artística no se contradicen: se complementan.",
  },

  // Texto de "Sobre mí"
  // Texto de "Sobre mí" — narrativa personal
  about: {
    quote: "Crear es mi forma de pensar; aprender, mi forma de vivir.",
    paragraphs: [
      "Soy Fernando, estudiante del último curso de Ingeniería Informática en la Universidad de Jaén, con mención en Tecnologías de la Información. Desde pequeño he crecido entre dos pasiones que para muchos parecen opuestas: la tecnología y la música. Hoy, lejos de elegir una, las he convertido en las dos columnas sobre las que construyo mi camino.",
      "Lo que de verdad me apasiona es crear: ya sea desarrollando software que resuelva problemas reales o llevando ideas musicales a la vida frente a un coro. Y para crear, hay que aprender sin parar. Por eso me defino como un curioso permanente: cualquier disciplina que se cruce en mi camino es una oportunidad para crecer y descubrir algo nuevo.",
      "Esta web es mi forma de presentarme. Si te interesa algo de lo que cuento aquí, ya sabes dónde encontrarme.",
    ],
    highlights: [
      {
        id: 1,
        icon: "code",
        title: "Desarrollador",
        subtitle: "Último año de Ingeniería Informática",
      },
      {
        id: 2,
        icon: "settings",
        title: "Especialista en TI",
        subtitle: "Sistemas, redes e infraestructura",
      },
      {
        id: 3,
        icon: "music",
        title: "Pianista y director musical",
        subtitle: "Coro y Orquesta · Diócesis de Jaén",
      },
      {
        id: 4,
        icon: "camera",
        title: "Fotógrafo y videógrafo",
        subtitle: "Captura de eventos y momentos",
      },
    ],
  },

  // Formación académica
  education: [
    {
      id: 1,
      icon: "code",
      degree: "Grado en Ingeniería Informática",
      specialty: "Mención en Tecnologías de la Información",
      institution: "Universidad de Jaén",
      location: "Jaén, España",
      status: "active",
      statusLabel: "En curso",
      chips: ["Desarrollo web", "Redes", "Bases de datos", "Sistemas", "IA", "PLN"],
    },
    {
      id: 2,
      icon: "piano",
      degree: "Título Profesional de Música",
      specialty: "Especialidad de Piano",
      institution: "C.P.M. Ramón Garay",
      location: "Jaén, España",
      status: "completed",
      statusLabel: "Finalizado",
      chips: ["Piano", "Armonía", "Análisis musical", "Música de cámara", "Composición"],
    },
    {
      id: 3,
      icon: "piano",
      degree: "Grado Superior en Interpretación",
      specialty: "Especialidad de Piano",
      institution: "C.S.M. Andrés de Vandelvira",
      location: "Jaén, España",
      status: "active",
      statusLabel: "En curso",
      chips: ["Interpretación", "Armonía Avanzada", "Dirección", "Big Band", "Tecnicas de Grabación y Producción"],
    },
  ],

  // Experiencia profesional
  experience: [
    {
      id: 1,
      role: "Técnico en prácticas",
      company: "Obispado de Jaén",
      program: "Programa Ícaro · Universidad de Jaén",
      period: "Septiembre 2025 – Abril 2026",
      duration: "6 meses",
      tasks: [
        "Desarrollo integral de una intranet corporativa actualmente en producción, empleada para el control de empleados y la gestión interna de la organización.",
        "Desarrollo de soluciones software a medida para la gestión personalizada de eventos.",
        "Implementación y despliegue de nuevo hardware de red, así como mantenimiento de equipos e infraestructura informática.",
        "Atención al usuario interno y resolución de incidencias técnicas.",
      ],
      technologies: ["Desarrollo web", "Bases de datos", "Redes", "Soporte técnico"],
    },
  ],

// Habilidades técnicas — agrupadas con tamaño visual (big/med según dominio)
  skills: {
    categories: [
      {
        id: "languages",
        title: "Lenguajes",
        items: [
          { name: "Python", icon: "SiPython", size: "big" },
          { name: "C++", icon: "SiCplusplus", size: "big" },
          { name: "SQL", icon: "SiPostgresql", size: "big" },
          { name: "C", icon: "SiC", size: "big" },
          { name: "Java", icon: "FaJava", size: "med" },
          { name: "JavaScript", icon: "SiJavascript", size: "med" },
           { name: "HTML5", icon: "SiHtml5", size: "med" },
          { name: "CSS3", icon: "SiCss", size: "med" },
        ],
      },
      {
        id: "frameworks",
        title: "Frameworks",
        items: [
          { name: "React", icon: "SiReact", size: "big" },
          { name: "Flutter", icon: "SiFlutter", size: "med" },
          { name: "Bootstrap", icon: "SiBootstrap", size: "med" },
        ],
      },
      {
        id: "databases",
        title: "Bases de datos",
        items: [
          { name: "MySQL", icon: "SiMysql", size: "med" },
        ],
      },
      {
        id: "tools",
        title: "Herramientas",
        items: [
          { name: "Git", icon: "SiGit", size: "med" },
          { name: "Docker", icon: "SiDocker", size: "med" },
          { name: "Linux", icon: "SiLinux", size: "med" },
          { name: "VS Code", icon: "SiVisualstudiocode", size: "med" },
        ],
      },
    ],
  },
  // Trabajo Fin de Grado (lo integramos como destacado)
  tfg: {
    title: "Sistema avanzado de recuperación de información musical",
    description: "Motor de recomendación que extrae automáticamente parámetros de las partituras suministradas (nivel de dificultad, tesitura, idioma, entre otros criterios) para ofrecer resultados personalizados al usuario.",
    technologies: ["Flutter", "Recuperación de información", "Sistemas de recomendación"],
    status: "En desarrollo",
  },

  // Música
  music: {
    headline: "Mi otra pasión: la música",
    paragraphs: [
      "Desde los 8 años la música forma parte central de mi vida. Tras finalizar el Título Profesional de Piano en el Conservatorio Ramón Garay, continúo formándome en dirección orquestal y órgano.",
      "Actualmente dirijo el Coro y Orquesta de la Diócesis de Jaén, una responsabilidad que me ha enseñado a coordinar equipos diversos, gestionar eventos complejos y mantener la calma bajo presión.",
    ],
    role: "Director del Coro y Orquesta de la Diócesis de Jaén",
    achievements: [
      "Dirección artística y musical del conjunto",
      "Coordinación de músicos y cantantes",
      "Planificación de ensayos y conciertos",
      "Gestión de eventos litúrgicos y conciertos",
    ],
  },

  // Galería de fotografía (las añadiremos cuando tengas imágenes)
  gallery: {
    headline: "Fotografía y videografía",
    description: "Apasionado de la fotografía y la videografía profesional, donde combino sensibilidad artística con dominio técnico del equipo y la postproducción.",
    photos: [
      // Cuando tengas fotos, las pondremos así:
      // { id: 1, src: "/images/foto1.jpg", alt: "Concierto en la Catedral", caption: "Concierto Navidad 2024" },
    ],
  },
};