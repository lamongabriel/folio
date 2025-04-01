export type Language = 'en' | 'pt-BR' | 'it';

export interface Translations {
  // Navigation
  nav: {
    experience: string;
    skills: string;
    about: string;
    contact: string;
  };
  
  // Hero section
  hero: {
    greeting: string;
    available: string;
    description: string;
    contactMe: string;
    viewExperience: string;
  };
  
  // Experience section
  experience: {
    title: string;
    fullTime: string;
    intern: string;
    current: string;
    achievements: {
      automate: string[];
      inovaki_full: string[];
      inovaki_intern: string[];
    };
  };
  
  // Skills section
  skills: {
    title: string;
    frontend: string;
    backend: string;
    database: string;
    devops: string;
    other: string;
  };
  
  // About section
  about: {
    title: string;
    personalInfo: {
      title: string;
      description: string;
    };
    education: {
      title: string;
      highestGPA: string;
      highSchool: string;
    };
  };
  
  // Contact section
  contact: {
    title: string;
    subtitle: string;
    available: string;
    contactInfo: string;
    socialMedia: string;
    sendEmail: string;
    linkedinProfile: string;
    location: string;
  };
  
  // Footer
  footer: {
    rights: string;
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
}

export const translations: Record<Language, Translations> = {
  'en': {
    nav: {
      experience: 'Experience',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hey there, I'm",
      available: 'Available for freelance work',
      description: 'Fullstack engineer with 5+ years of experience creating seamless, efficient applications that solve real-world problems.',
      contactMe: 'Contact Me',
      viewExperience: 'View Experience',
    },
    experience: {
      title: 'Experience',
      fullTime: 'Full time',
      intern: 'Intern',
      current: 'Current',
      achievements: {
        automate: [
          "Completely overhauled an e-commerce customer's website to a brand new site",
          "Maintained and updated Retool applications for a client that runs electronic equipment warehouses in Utah",
          "Rebuilt inhouse SEO SaaS tools on Next.js, Retool, Node.js, Supabase",
          "Pinewood Pro Data Warehouse: Built a data collection and reporting system using AirByte, BigQuery, PostHog, Google CP, ShipNetwork, Miva Ecommerce and ShipNetwork"
        ],
        inovaki_full: [
          "Creation and maintenance of the Fashion Masks project, generating over R$1,000,000.00 in revenue for seamstresses during the pandemic",
          "Development of features in VTEX IO for all stores within the HOPE Group",
          "Creator of the website HOPE Labs, a full-stack platform that tracks real-time revenue, generates reports, and monitors social media for the entire HOPE Group",
          "Responsible for the record-breaking NodeJS migration of the HOPE Group's e-commerce to individual VTEX platforms, with over 20,000 SKUs and 6,000 products, migrating 2 different stores",
          "Responsible developer for the PatBO e-commerce on the VTEX platform, developing the entire e-commerce with different solutions, optimizations, pages, and integrations",
          "Integration and preparation of the PatBO e-commerce with VTEX Live-Shopping, resulting in a 300% increase in sales",
          "Creation of the new Agência Inovaki website, transitioning from PHP to NextJS"
        ],
        inovaki_intern: [
          "Training for web systems development",
          "Subscription creation system for the Forever Liss e-commerce",
          "Development of an image upload and management system for the entire Fashion Masks e-commerce"
        ]
      }
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      devops: 'DevOps',
      other: 'Other',
    },
    about: {
      title: 'About Me',
      personalInfo: {
        title: 'Personal Information',
        description: 'Born in 2002 in Brazil, currently based in Volta Redonda, RJ, Brazil. Experienced in developing full-stack applications and maintaining platforms and websites. Proficient in technologies such as ReactJS, NodeJS, and SQL. Passionate about creating innovative solutions and contributing to impactful projects.',
      },
      education: {
        title: 'Education',
        highestGPA: 'Outstanding student honored with the highest GPA in the course',
        highSchool: 'High school with a certificate in Industrial Automation focuses on PLC programming (lader)',
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's work together",
      available: "I'm currently available for freelance work only.",
      contactInfo: 'Contact Information',
      socialMedia: 'Social Media',
      sendEmail: 'Send Email',
      linkedinProfile: 'LinkedIn Profile',
      location: 'Location',
    },
    footer: {
      rights: 'All rights reserved.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      phone: 'Phone',
    },
  },
  'pt-BR': {
    nav: {
      experience: 'Experiência',
      skills: 'Habilidades',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      greeting: "Olá, eu sou",
      available: 'Disponível para trabalhos freelance',
      description: 'Engenheiro Fullstack com mais de 5 anos de experiência criando aplicações eficientes e integradas que resolvem problemas do mundo real.',
      contactMe: 'Entre em Contato',
      viewExperience: 'Ver Experiência',
    },
    experience: {
      title: 'Experiência',
      fullTime: 'Tempo integral',
      intern: 'Estágio',
      current: 'Atual',
      achievements: {
        automate: [
          "Reformulação completa do site de um cliente de e-commerce para um novo site",
          "Manutenção e atualização de aplicações Retool para um cliente que administra armazéns de equipamentos eletrônicos em Utah",
          "Reconstrução de ferramentas SaaS de SEO internas em Next.js, Retool, Node.js, Supabase",
          "Pinewood Pro Data Warehouse: Construção de um sistema de coleta e relatório de dados usando AirByte, BigQuery, PostHog, Google CP, ShipNetwork, Miva Ecommerce e ShipNetwork"
        ],
        inovaki_full: [
          "Criação e manutenção do projeto Fashion Masks, gerando mais de R$1.000.000,00 em receita para costureiras durante a pandemia",
          "Desenvolvimento de recursos em VTEX IO para todas as lojas do Grupo HOPE",
          "Criador do site HOPE Labs, uma plataforma full-stack que rastreia receita em tempo real, gera relatórios e monitora mídias sociais para todo o Grupo HOPE",
          "Responsável pela migração recorde em NodeJS do e-commerce do Grupo HOPE para plataformas VTEX individuais, com mais de 20.000 SKUs e 6.000 produtos, migrando 2 lojas diferentes",
          "Desenvolvedor responsável pelo e-commerce PatBO na plataforma VTEX, desenvolvendo todo o e-commerce com diferentes soluções, otimizações, páginas e integrações",
          "Integração e preparação do e-commerce PatBO com VTEX Live-Shopping, resultando em um aumento de 300% nas vendas",
          "Criação do novo site da Agência Inovaki, transitando de PHP para NextJS"
        ],
        inovaki_intern: [
          "Treinamento para desenvolvimento de sistemas web",
          "Sistema de criação de assinaturas para o e-commerce Forever Liss",
          "Desenvolvimento de um sistema de upload e gerenciamento de imagens para todo o e-commerce Fashion Masks"
        ]
      }
    },
    skills: {
      title: 'Habilidades',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Banco de Dados',
      devops: 'DevOps',
      other: 'Outros',
    },
    about: {
      title: 'Sobre Mim',
      personalInfo: {
        title: 'Informações Pessoais',
        description: 'Nascido em 2002 no Brasil, atualmente baseado em Volta Redonda, RJ, Brasil. Experiente no desenvolvimento de aplicações full-stack e manutenção de plataformas e websites. Proficiente em tecnologias como ReactJS, NodeJS e SQL. Apaixonado por criar soluções inovadoras e contribuir para projetos impactantes.',
      },
      education: {
        title: 'Educação',
        highestGPA: 'Aluno destaque honrado com o maior CR do curso',
        highSchool: 'Ensino médio com certificado em Automação Industrial com foco em programação PLC (lader)',
      },
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: "Vamos trabalhar juntos",
      available: "Estou atualmente disponível apenas para trabalhos freelance.",
      contactInfo: 'Informações de Contato',
      socialMedia: 'Redes Sociais',
      sendEmail: 'Enviar Email',
      linkedinProfile: 'Perfil do LinkedIn',
      location: 'Localização',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      phone: 'Telefone',
    },
  },
  'it': {
    nav: {
      experience: 'Esperienza',
      skills: 'Competenze',
      about: 'Chi Sono',
      contact: 'Contatti',
    },
    hero: {
      greeting: "Ciao, sono",
      available: 'Disponibile per lavori freelance',
      description: 'Ingegnere Fullstack con oltre 5 anni di esperienza nella creazione di applicazioni efficienti e integrate che risolvono problemi reali.',
      contactMe: 'Contattami',
      viewExperience: 'Vedi Esperienza',
    },
    experience: {
      title: 'Esperienza',
      fullTime: 'Tempo pieno',
      intern: 'Stage',
      current: 'Attuale',
      achievements: {
        automate: [
          "Completa ristrutturazione del sito web di un cliente e-commerce in un nuovo sito",
          "Manutenzione e aggiornamento delle applicazioni Retool per un cliente che gestisce magazzini di apparecchiature elettroniche nello Utah",
          "Ricostruzione di strumenti SEO SaaS interni su Next.js, Retool, Node.js, Supabase",
          "Pinewood Pro Data Warehouse: Costruzione di un sistema di raccolta e reportistica dati utilizzando AirByte, BigQuery, PostHog, Google CP, ShipNetwork, Miva Ecommerce e ShipNetwork"
        ],
        inovaki_full: [
          "Creazione e manutenzione del progetto Fashion Masks, generando oltre R$1.000.000,00 di entrate per le sarte durante la pandemia",
          "Sviluppo di funzionalità in VTEX IO per tutti i negozi del Gruppo HOPE",
          "Creatore del sito web HOPE Labs, una piattaforma full-stack che traccia le entrate in tempo reale, genera report e monitora i social media per l'intero Gruppo HOPE",
          "Responsabile della migrazione record in NodeJS dell'e-commerce del Gruppo HOPE su piattaforme VTEX individuali, con oltre 20.000 SKU e 6.000 prodotti, migrando 2 diversi negozi",
          "Sviluppatore responsabile dell'e-commerce PatBO sulla piattaforma VTEX, sviluppando l'intero e-commerce con diverse soluzioni, ottimizzazioni, pagine e integrazioni",
          "Integrazione e preparazione dell'e-commerce PatBO con VTEX Live-Shopping, con un aumento del 300% delle vendite",
          "Creazione del nuovo sito web dell'Agenzia Inovaki, passando da PHP a NextJS"
        ],
        inovaki_intern: [
          "Formazione per lo sviluppo di sistemi web",
          "Sistema di creazione di abbonamenti per l'e-commerce Forever Liss",
          "Sviluppo di un sistema di caricamento e gestione delle immagini per l'intero e-commerce Fashion Masks"
        ]
      }
    },
    skills: {
      title: 'Competenze',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      devops: 'DevOps',
      other: 'Altro',
    },
    about: {
      title: 'Chi Sono',
      personalInfo: {
        title: 'Informazioni Personali',
        description: 'Nato nel 2002 in Brasile, attualmente vivo a Volta Redonda, RJ, Brasile. Esperto nello sviluppo di applicazioni full-stack e nella manutenzione di piattaforme e siti web. Competente in tecnologie come ReactJS, NodeJS e SQL. Appassionato di creare soluzioni innovative e contribuire a progetti di impatto.',
      },
      education: {
        title: 'Formazione',
        highestGPA: 'Studente eccellente premiato con il GPA più alto del corso',
        highSchool: 'Scuola superiore con certificato in Automazione Industriale con focus sulla programmazione PLC (lader)',
      },
    },
    contact: {
      title: 'Contattami',
      subtitle: "Lavoriamo insieme",
      available: "Sono attualmente disponibile solo per lavori freelance.",
      contactInfo: 'Informazioni di Contatto',
      socialMedia: 'Social Media',
      sendEmail: 'Invia Email',
      linkedinProfile: 'Profilo LinkedIn',
      location: 'Posizione',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      phone: 'Telefono',
    },
  },
};
