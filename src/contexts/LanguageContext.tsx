import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt" | "pt-pt" | "en" | "es";

interface Translations {
  // Header
  header: {
    features: string;
    howItWorks: string;
    download: string;
    downloadApp: string;
  };
  // Hero
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    downloadButton: string;
    learnMore: string;
    users: string;
    rating: string;
    couples: string;
  };
  // Features
  features: {
    title: string;
    titleHighlight: string;
    description: string;
    smartMatches: string;
    smartMatchesDesc: string;
    secureChat: string;
    secureChatDesc: string;
    verifiedProfiles: string;
    verifiedProfilesDesc: string;
    superLikes: string;
    superLikesDesc: string;
  };
  // How it works
  howItWorks: {
    title: string;
    titleHighlight: string;
    description: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  // CTA
  cta: {
    badge: string;
    title: string;
    description: string;
    downloadButton: string;
  };
  // Footer
  footer: {
    about: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
  // Lives
  lives: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    livesCount: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    header: {
      features: "Funcionalidades",
      howItWorks: "Como Funciona",
      download: "Aceder",
      downloadApp: "Entrar Agora",
    },
    hero: {
      badge: "+1 milhão de utilizadores ativos",
      title: "Explora",
      titleHighlight: "fantasias sem limites",
      description: "Entra em lives adultas e chats privados com pessoas reais, ao vivo e com total discrição.",
      downloadButton: "Entrar",
      learnMore: "Descobrir Mais",
      users: "Utilizadores Online",
      rating: "Classificação",
      couples: "Conexões",
    },
    features: {
      title: "Porque escolher",
      titleHighlight: "a nossa plataforma?",
      description: "Experiências intensas, privadas e criadas para adultos",
      smartMatches: "Pesquisa Personalizada",
      smartMatchesDesc: "Encontra modelos e utilizadores de acordo com os teus gostos e preferências.",
      secureChat: "Chat Privado",
      secureChatDesc: "Conversas seguras, confidenciais e com total anonimato.",
      verifiedProfiles: "Perfis Verificados",
      verifiedProfilesDesc: "Todos os perfis são reais e verificados para garantir uma experiência autêntica.",
      superLikes: "Acesso VIP",
      superLikesDesc: "Destaca-te e desbloqueia interações exclusivas instantaneamente.",
    },
    howItWorks: {
      title: "Como",
      titleHighlight: "funciona?",
      description: "Entrar e desfrutar é simples e imediato",
      step1Title: "Cria a tua conta",
      step1Desc: "Regista-te rapidamente e confirma que és maior de 18 anos.",
      step2Title: "Explora as lives",
      step2Desc: "Assiste a transmissões ao vivo e escolhe com quem interagir.",
      step3Title: "Conversa em privado",
      step3Desc: "Envia mensagens e desfruta de atenção personalizada.",
      step4Title: "Vive a experiência",
      step4Desc: "Conteúdo adulto, ao vivo e sem restrições.",
    },
    cta: {
      badge: "Acesso imediato +18",
      title: "Pronto para uma experiência intensa?",
      description: "Entra agora e descobre lives adultas e chats privados em tempo real.",
      downloadButton: "Entrar Agora",
    },
    footer: {
      about: "Sobre Nós",
      privacy: "Privacidade",
      terms: "Termos",
      contact: "Contacto",
      copyright: "© 2025 LiveX Adult. Todos os direitos reservados.",
    },
    lives: {
      badge: "AO VIVO AGORA",
      title: "Lives",
      titleHighlight: "adultas",
      description: "Interage em transmissões adultas ao vivo. Comenta, conversa e desfruta sem censura.",
      livesCount: "+500 lives adultas ativas neste momento",
    },
  },
  en: {
    header: {
      features: "Features",
      howItWorks: "How It Works",
      download: "Access",
      downloadApp: "Enter Now",
    },
    hero: {
      badge: "+1 million active users",
      title: "Explore",
      titleHighlight: "your wildest desires",
      description: "Join adult live streams and private chats with real people, live and with total discretion.",
      downloadButton: "Enter",
      learnMore: "Discover More",
      users: "Users Online",
      rating: "Rating",
      couples: "Connections",
    },
    features: {
      title: "Why choose",
      titleHighlight: "our platform?",
      description: "Private, intense experiences designed exclusively for adults",
      smartMatches: "Personalized Search",
      smartMatchesDesc: "Find models and users based on your preferences and interests.",
      secureChat: "Private Chat",
      secureChatDesc: "Safe, discreet conversations with full privacy protection.",
      verifiedProfiles: "Verified Profiles",
      verifiedProfilesDesc: "All profiles are real and verified for an authentic experience.",
      superLikes: "VIP Access",
      superLikesDesc: "Stand out and unlock exclusive interactions instantly.",
    },
    howItWorks: {
      title: "How",
      titleHighlight: "does it work?",
      description: "Getting started and enjoying is fast and simple",
      step1Title: "Create your account",
      step1Desc: "Sign up in seconds and confirm you are 18+.",
      step2Title: "Explore live streams",
      step2Desc: "Watch live adult shows and choose who to interact with.",
      step3Title: "Chat privately",
      step3Desc: "Send messages and enjoy personalized attention.",
      step4Title: "Live the experience",
      step4Desc: "Adult content, live and without limits.",
    },
    cta: {
      badge: "Instant access 18+",
      title: "Ready for an intense experience?",
      description: "Enter now and enjoy adult live streams and private chats in real time.",
      downloadButton: "Enter Now",
    },
    footer: {
      about: "About Us",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      copyright: "© 2025 LiveX Adult. All rights reserved.",
    },
    lives: {
      badge: "LIVE NOW",
      title: "Adult",
      titleHighlight: "Lives",
      description: "Interact in live adult streams. Comment, chat and enjoy without censorship.",
      livesCount: "+500 adult live streams active right now",
    },
  },
  es: {
    header: {
      features: "Funciones",
      howItWorks: "Cómo Funciona",
      download: "Acceder",
      downloadApp: "Entrar Ahora",
    },
    hero: {
      badge: "+1 millón de usuarios activos",
      title: "Explora",
      titleHighlight: "deseos sin límites",
      description: "Disfruta de lives calientes y chats privados con personas reales, en tiempo real y sin censura.",
      downloadButton: "Entrar",
      learnMore: "Descubrir Más",
      users: "Usuarios Online",
      rating: "Valoración",
      couples: "Conexiones",
    },
    features: {
      title: "¿Por qué elegir",
      titleHighlight: "nuestra plataforma?",
      description: "Experiencias intensas, privadas y diseñadas para el placer",
      smartMatches: "Búsqueda Inteligente",
      smartMatchesDesc: "Encuentra performers y usuarios según tus preferencias y fetiches.",
      secureChat: "Chat Privado",
      secureChatDesc: "Conversaciones seguras y discretas. Total anonimato garantizado.",
      verifiedProfiles: "Perfiles Verificados",
      verifiedProfilesDesc: "Todos los perfiles son reales y verificados para una experiencia auténtica.",
      superLikes: "Acceso VIP",
      superLikesDesc: "Destácate y desbloquea interacciones exclusivas en segundos.",
    },
    howItWorks: {
      title: "¿Cómo",
      titleHighlight: "funciona?",
      description: "Entrar y disfrutar es rápido y sencillo",
      step1Title: "Crea tu cuenta",
      step1Desc: "Regístrate en segundos y accede al contenido adulto.",
      step2Title: "Explora los lives",
      step2Desc: "Mira transmisiones en vivo y elige con quién interactuar.",
      step3Title: "Chatea en privado",
      step3Desc: "Envía mensajes, solicitudes y disfruta atención personalizada.",
      step4Title: "Vive la experiencia",
      step4Desc: "Sin filtros, sin límites y totalmente en vivo.",
    },
    cta: {
      badge: "Acceso inmediato",
      title: "¿Listo para una experiencia intensa?",
      description: "Entra ahora y disfruta de lives adultos y chats privados sin restricciones.",
      downloadButton: "Entrar Ahora",
    },
    footer: {
      about: "Sobre Nosotros",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
      copyright: "© 2025 LiveX Adult. Todos los derechos reservados.",
    },
    lives: {
      badge: "EN VIVO AHORA",
      title: "Lives",
      titleHighlight: "calientes",
      description: "Interactúa en transmisiones adultas en tiempo real. Comenta, chatea y disfruta sin censura.",
      livesCount: "+500 lives adultos activos ahora mismo",
    },
  },
  "pt-pt": {
    header: {
      features: "Funcionalidades",
      howItWorks: "Como Funciona",
      download: "Aceder",
      downloadApp: "Entrar Agora",
    },
    hero: {
      badge: "+1 milhão de utilizadores ativos",
      title: "Explora",
      titleHighlight: "fantasias sem limites",
      description: "Entra em lives adultas e chats privados com pessoas reais, ao vivo e com total discrição.",
      downloadButton: "Entrar",
      learnMore: "Descobrir Mais",
      users: "Utilizadores Online",
      rating: "Classificação",
      couples: "Conexões",
    },
    features: {
      title: "Porque escolher",
      titleHighlight: "a nossa plataforma?",
      description: "Experiências privadas e intensas, criadas exclusivamente para adultos",
      smartMatches: "Pesquisa Personalizada",
      smartMatchesDesc: "Encontra modelos e utilizadores de acordo com os teus gostos e preferências.",
      secureChat: "Chat Privado",
      secureChatDesc: "Conversas seguras, confidenciais e com total anonimato.",
      verifiedProfiles: "Perfis Verificados",
      verifiedProfilesDesc: "Todos os perfis são reais e verificados para uma experiência autêntica.",
      superLikes: "Acesso VIP",
      superLikesDesc: "Destaca-te e desbloqueia interações exclusivas instantaneamente.",
    },
    howItWorks: {
      title: "Como",
      titleHighlight: "funciona?",
      description: "Entrar e desfrutar é simples e imediato",
      step1Title: "Cria a tua conta",
      step1Desc: "Regista-te em segundos e confirma que és maior de 18 anos.",
      step2Title: "Explora as lives",
      step2Desc: "Assiste a transmissões adultas em direto e escolhe com quem interagir.",
      step3Title: "Conversa em privado",
      step3Desc: "Envia mensagens e desfruta de atenção personalizada.",
      step4Title: "Vive a experiência",
      step4Desc: "Conteúdo adulto, ao vivo e sem restrições.",
    },
    cta: {
      badge: "Acesso imediato +18",
      title: "Pronto para uma experiência intensa?",
      description: "Entra agora e descobre lives adultas e chats privados em tempo real.",
      downloadButton: "Entrar Agora",
    },
    footer: {
      about: "Sobre Nós",
      privacy: "Privacidade",
      terms: "Termos",
      contact: "Contacto",
      copyright: "© 2025 LiveX Adult. Todos os direitos reservados.",
    },
    lives: {
      badge: "EM DIRETO AGORA",
      title: "Lives",
      titleHighlight: "adultas",
      description: "Interage em transmissões adultas ao vivo. Comenta, conversa e desfruta sem censura.",
      livesCount: "+500 lives adultas ativas neste momento",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("lovematch-language");
    return (saved as Language) || "pt";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lovematch-language", lang);
  };

  useEffect(() => {
    const saved = localStorage.getItem("lovematch-language");
    if (saved && ["pt", "pt-pt", "en", "es"].includes(saved)) {
      setLanguageState(saved as Language);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const languageNames: Record<Language, string> = {
  pt: "Português (BR)",
  "pt-pt": "Português (PT)",
  en: "English",
  es: "Español",
};
