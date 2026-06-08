export interface PortfolioProject {
  id: string;
  category: 'branding' | 'creativos' | 'fotografias' | 'metrics';
  title: string;
  client: string;
  result?: string;
  subCategory?: string;
  imageUrl: string;
  highlightText?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface MythReality {
  id: string;
  myth: string;
  reality: string;
  explanation: string;
}

export const BRANDS: string[] = [
  "Neumáticos Py Automaq",
  "The New Black",
  "Universo Electrodomésticos",
  "Gondwana",
  "Pérez Ramírez",
  "Studio Única",
  "Pani",
  "Silvia Romero"
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // Marca & Feed (Branding)
  {
    id: "brand-1",
    category: "branding",
    title: "Estructura Visual Premium",
    client: "Nuñez Studio",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e4c568ae9a1181746a6bc.webp"
  },
  {
    id: "brand-2",
    category: "branding",
    title: "Dirección de Arte & Grilla",
    client: "Nuñez Studio",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e4c56456975f9ab317823.webp"
  },
  {
    id: "brand-3",
    category: "branding",
    title: "Identidad Corporativa Minimalista",
    client: "Nuñez Studio",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e4c56590acb0d9331f910.webp"
  },
  {
    id: "brand-4",
    category: "branding",
    title: "Curaturía de Contenido Premium",
    client: "Nuñez Studio",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f086295735c79c9b08a4e.webp"
  },
  
  // Anuncios (Creativos)
  {
    id: "ads-1",
    category: "creativos",
    title: "Estrategia de Conversión",
    client: "Zeta Crew",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f9312c4ebfe80351213dc.webp"
  },
  {
    id: "ads-2",
    category: "creativos",
    title: "Creativo Editorial de Alto Impacto",
    client: "Zeta Crew",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f9713e3be1479e39bdc15.webp"
  },
  {
    id: "ads-3",
    category: "creativos",
    title: "Hook & Copy Comercial Directo",
    client: "Zeta Crew",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f93120867dd8704b79c16.webp"
  },

  // Fotografías
  {
    id: "photo-1",
    category: "fotografias",
    title: "Retrato de Producto Curado",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e40634569756c832d89c8.webp"
  },
  {
    id: "photo-2",
    category: "fotografias",
    title: "Estética de Editorial",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e407a1001a5d5794d28d3.webp"
  },
  {
    id: "photo-3",
    category: "fotografias",
    title: "Bodegón de Alta Gama",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e408b1001a57d3f4d2ac8.webp"
  },
  {
    id: "photo-4",
    category: "fotografias",
    title: "Captura de Detalle y Textura",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e41f83730802a6dea8bdd.webp"
  },
  {
    id: "photo-5",
    category: "fotografias",
    title: "Enfoque en Esencias Orgánicas",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f805af074ea1082e21ade.webp"
  },
  {
    id: "photo-6",
    category: "fotografias",
    title: "Dirección Lumínica Natural",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e42ef590acb33a82ecd8f.webp"
  },
  {
    id: "photo-7",
    category: "fotografias",
    title: "Minimalismo en Texturas",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e43032837e85374500857.webp"
  },
  {
    id: "photo-8",
    category: "fotografias",
    title: "Fotografía de Producto Estética",
    client: "Diego Núñez",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f7ae69a0c1807cfa29f6f.webp"
  },

  // Métricas
  {
    id: "metric-1",
    category: "metrics",
    title: "Haverland - Electrodomésticos",
    client: "Haverland",
    subCategory: "Electrodomésticos",
    result: "Invirtió ₲ 5.850.000 y facturó ₲ 143.000.000",
    highlightText: "x24 RETORNO DE INVERSIÓN (ROAS)",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f99f59a0c187565ad6ed5.webp"
  },
  {
    id: "metric-2",
    category: "metrics",
    title: "Viruta - Joyas & Accesorios",
    client: "Viruta",
    subCategory: "Joyas & Accesorios",
    result: "Invirtió ₲ 2.000.000 y facturó ₲ 33.000.000",
    highlightText: "x16 RETORNO DE INVERSIÓN (ROAS)",
    imageUrl: "https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f99f3e3be14967d9d8d5d.webp"
  }
];

export const MYTHS_REALITIES: MythReality[] = [
  {
    id: "myth-1",
    myth: "Más seguidores = más ventas.",
    reality: "Vender es llegar al comprador correcto, no a miles de curiosos.",
    explanation: "Los seguidores son una métrica de vanidad. Filtramos tu audiencia en Meta para que tus anuncios le aparezcan exclusivamente a personas con capacidad y deseo real de compra activa."
  },
  {
    id: "myth-2",
    myth: "Con un feed lindo alcanza.",
    reality: "El feed lindo no factura. El anuncio con embudo detrás, sí.",
    explanation: "La estética genera confianza, pero no cierra la venta por sí sola. Necesitás un embudo de ventas que capture a los interesados, automatice el seguimiento y los guíe hacia WhatsApp."
  },
  {
    id: "myth-3",
    myth: "La pauta es un gasto.",
    reality: "Bien medida, es la inversión que más te devuelve por guaraní.",
    explanation: "Cada gasto publicitario debe medirse en el retorno directo de caja. Te mostramos exactamente cuánto vendiste por cada guaraní invertido con reportes claros de resultados."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cuánto tengo que invertir en publicidad aparte del fee mensual?",
    answer: "Para empezar, recomendamos una inversión en pauta en Meta de entre ₲ 1.000.000 a ₲ 2.000.000 mensuales. Ese presupuesto va directo a pauta en Meta y vos lo manejás con tu propia tarjeta desde tu cuenta publicitaria. Nosotros te ayudamos a configurarlo para que rinda al máximo."
  },
  {
    id: "faq-2",
    question: "¿Y si el plan preliminar de la Fase 1 no me convence?",
    answer: "Por eso la Fase 1 es 100% gratis. Si te presentamos el diagnóstico y el plan de anuncios y embudo pero decidís no avanzar, cancelamos el flujo sin compromisos ni letra chica. Tu único riesgo es una charla creativa de 30 minutos."
  },
  {
    id: "faq-3",
    question: "Ya contraté agencias en el pasado y no funcionó. ¿Por qué esto es diferente?",
    answer: "La mayoría de las agencias tradicionales operan en masa: se limitan a subir posteos lindos para mantener vivo el feed sin armar un embudo de ventas detrás. Yo armo tus anuncios, estructuro tu embudo y medimos todo en ventas reales y clientes que pagan, no en likes."
  },
  {
    id: "faq-4",
    question: "¿En cuánto tiempo se empiezan a recibir interesados?",
    answer: "El plan estratégico se entrega en 7 días hábiles. En cuanto activamos las campañas en Meta Ads, los nuevos leads o interesados empiezan a escribir a tu WhatsApp desde los primeros días. El sistema se optimiza de forma constante entre el segundo y tercer mes."
  },
  {
    id: "faq-5",
    question: "¿Hay contratos de permanencia obligatoria a largo plazo?",
    answer: "No. En la Fase 2, trabajamos con un modelo mes a mes. No tenemos plazos forzados de permanencia legal. Mi objetivo real es que te quedes por la excelencia de los retornos comerciales y los nuevos clientes que entran a tu negocio."
  }
];
