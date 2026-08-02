export const SITE = {
  name: "Reelize",
  email: "reelize.contacto@gmail.com",
  instagram: "reelize.uy",
  instagramUrl: "https://instagram.com/reelize.uy",
  domain: "reelize.com",
  owner: "Ángel",
  tagline: "Estudio de publicidad para redes sociales",
  footerOrigin: "Hecho con cariño en Uruguay",
} as const;

export const VIDEO_REELS = [
  "https://www.instagram.com/reel/Da00D3cuSmk/",
  "https://www.instagram.com/reel/DbJj-1zhYhW/",
  "https://www.instagram.com/reel/DbayBMDRoKT/",
  "https://www.instagram.com/reel/DY8kN6bOq-Z/",
  "https://www.instagram.com/reel/DTFGraQExXK/",
  "https://www.instagram.com/reel/DY6DFiXumDE/",
] as const;

export const PLANES = [
  {
    id: "catalogo",
    nombre: "Catalogo",
    precio: "$10.000",
    precioPeriodo: "/mes",
    features: [
      "4 videos cortos al mes",
      "Edición profesional",
      "Música en tendencia",
      "Copy para cada pieza",
    ],
    destacado: false,
  },
  {
    id: "brillo",
    nombre: "Brillo",
    precio: "$25.000",
    precioPeriodo: "/mes",
    features: [
      "8 videos cortos al mes",
      "Planificación estratégica",
      "Edición profesional",
      "Copies optimizados",
      "Calendario mensual de contenido",
    ],
    destacado: true,
    badge: "Más elegido",
  },
  {
    id: "trending",
    nombre: "Trending",
    precio: "$45.000",
    precioPeriodo: "/mes",
    features: [
      "12 videos cortos al mes",
      "Planificación estratégica",
      "Contenido adicional para stories",
      "Cobertura de eventos",
      "Reporte mensual de métricas",
    ],
    destacado: false,
  },
] as const;

export const PROCESO = [
  {
    numero: "01",
    titulo: "Brief",
    descripcion: "Nos contás qué necesitás y qué querés lograr.",
    icono: "MessageCircle" as const,
  },
  {
    numero: "02",
    titulo: "Investigación",
    descripcion: "Estudiamos a tu público y analizamos qué funciona.",
    icono: "Search" as const,
  },
  {
    numero: "03",
    titulo: "Producción",
    descripcion: "Grabamos, editamos y le damos tu onda a cada pieza.",
    icono: "Video" as const,
  },
  {
    numero: "04",
    titulo: "Publicación",
    descripcion: "Subimos el contenido y medimos cómo responde la gente.",
    icono: "Send" as const,
  },
] as const;

export const FAQ = [
  {
    pregunta: "¿Cuánto tarda la entrega?",
    respuesta:
      "Depende del plan, pero generalmente los videos se entregan dentro de los 5 días hábiles después del brief. Para planes mensuales tenemos un calendario claro desde el primer día.",
  },
  {
    pregunta: "¿Qué pasa si no me gusta el resultado?",
    respuesta:
      "Cada video incluye una ronda de revisión incluida. Si después de la revisión querés cambios, los charlamos y vemos qué se puede ajustar. Preferimos que te quede como te lo imaginás.",
  },
  {
    pregunta: "¿En qué formatos entregan?",
    respuesta:
      "Todos los videos se entregan en formato vertical 9:16, listos para subir a Instagram Reels, TikTok y YouTube Shorts. Si necesitás otro formato (cuadrado para feed, horizontal para YouTube), lo charlamos.",
  },
  {
    pregunta: "¿Cómo se paga?",
    respuesta:
      "Los planes mensuales se pagan por mes adelantado, mediante transferencia bancaria o MercadoPago. Para proyectos puntuales armamos un presupuesto a medida.",
  },
  {
    pregunta: "¿Trabajan con clientes de todo Uruguay?",
    respuesta:
      "Sí. Trabajamos de forma remota con clientes de todo el país. Para coberturas de eventos o grabación en persona, charlamos la logística según la ubicación.",
  },
  {
    pregunta: "¿Puedo cancelar cuando quiera?",
    respuesta:
      "Sí, no hay contrato de permanencia. Si querés pausar o cancelar, avisás con 15 días de anticipación y listo.",
  },
] as const;
