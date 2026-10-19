export default {
  meta: {
    title: 'Egor Tokarev — SAP BTP Developer',
    description:
      'SAP BTP full-stack developer and SAP Banking consultant with 15+ years of experience: CAP, SAP HANA, Fiori/UI5, Cloud Foundry.'
  },

  shell: {
    name: 'Egor Tokarev',
    role: 'SAP BTP Developer',
    location: 'Yerevan, Armenia',
    back: 'Back',
    home: 'Home',
    profileMenu: 'Profile and settings',
    appearance: 'Appearance',
    themes: { auto: 'System', light: 'Light', dark: 'Dark' },
    language: 'Language',
    contact: 'Contact',
    builtWith: 'Built with SvelteKit and UI5 Web Components',
    source: 'Source code'
  },

  home: {
    hello: "Hi, I'm Egor",
    tagline:
      "SAP BTP developer who speaks both business and code. For 15+ years I've been turning banking and enterprise processes into working SAP solutions — from the first workshop to go-live.",
    hint: 'This site is built like an SAP Fiori launchpad. Pick a tile to start.',
    groups: { about: 'About me', projects: 'Projects', contact: 'Get in touch' }
  },

  tiles: {
    profile: { title: 'Profile', subtitle: 'Who I am' },
    experience: { title: 'Experience', subtitle: 'Career path', unit: 'years' },
    services: { title: 'Services', subtitle: 'How I can help' },
    cv: { title: 'Download CV', subtitle: 'PDF' },
    site: {
      title: 'This website',
      subtitle: 'SvelteKit · UI5 Web Components',
      description: 'A personal site dressed up as a Fiori launchpad, built while learning Svelte 5.'
    },
    github: { title: 'GitHub', subtitle: 'More code' },
    email: { title: 'Email', subtitle: 'egor@toegor.app' },
    linkedin: { title: 'LinkedIn', subtitle: '@toegor' },
    telegram: { title: 'Telegram', subtitle: '@toegor' }
  },

  me: {
    title: 'SAP Cloud Full-Stack Developer & Architect · SAP Banking expert',
    contact: 'Contact me',
    cv: 'Download CV',
    about: {
      title: 'About',
      paragraphs: [
        "I'm an SAP developer and solution architect with 15+ years in solution design and implementation, nine of them at SAP. I work on both sides of a project: I can run a requirements workshop with business users, then design, build, deploy and support the solution myself.",
        'Today I build full-stack apps on SAP BTP: CAP (Node.js) and CDS services, SAP HANA Cloud, and SAPUI5 / Fiori Elements front ends on Cloud Foundry, integrated with S/4HANA, SAP Business One or third-party APIs over OData.',
        'Behind that is a strong classic SAP background — R/3, S/4HANA and ABAP — and deep payments and core banking expertise: SAP Payment Engine (SWIFT MT/MX, ISO 20022, SEPA, instant payments), Cards, Deposits and Loans Management.',
        "I've delivered across the full SDLC, from design to post-go-live support, in both Agile and Waterfall teams."
      ]
    },
    tech: {
      title: 'Core technologies',
      items: [
        'SAP CAP (Node.js) · CDS',
        'SAP BTP · Cloud Foundry',
        'SAP HANA / HANA Cloud',
        'SAPUI5 · Fiori Elements (OData V4)',
        'UI5 Web Components',
        'S/4HANA · ABAP',
        'OData',
        'Svelte / SvelteKit'
      ]
    },
    domain: {
      title: 'Banking domain',
      items: [
        { icon: 'payment-approval', name: 'Payments centralization', code: 'SAP PE' },
        { icon: 'credit-card', name: 'Cards Management', code: 'SAP CM' },
        { icon: 'money-bills', name: 'Deposits Management', code: 'SAP DM' },
        { icon: 'home-share', name: 'Loans Management', code: 'SAP CML' }
      ]
    },
    devops: {
      title: 'DevOps & operations',
      text: 'Hands-on with the infrastructure side of SAP: Linux administration, SAP Gateway configuration, system tuning, transport management and landscape setup.',
      items: ['Linux', 'SAP Gateway', 'Performance tuning', 'Transport management']
    }
  },

  experience: {
    title: 'Experience',
    subtitle: '15+ years in SAP — from the banking back office to the cloud',
    items: [
      {
        icon: 'developer-settings',
        company: 'Independent',
        role: 'SAP Full-Stack Developer / Architect',
        period: 'Sep 2024 — present',
        text: 'End-to-end SAP BTP projects: architecture, UI/UX, CDS data models, CAP services and MTA deployment on Cloud Foundry. Integration with S/4HANA, SAP Business One and third-party APIs over OData, plus AI-assisted development with SAP Joule and Claude.',
        tags: ['CAP', 'CDS', 'SAPUI5', 'Cloud Foundry', 'OData']
      },
      {
        icon: 'cloud',
        company: 'actoVent GmbH',
        role: 'Senior Software Developer',
        period: 'Nov 2023 — present',
        text: 'Full-stack SAP BTP development on Cloud Foundry following SAP best practices: CAP back ends and Fiori Elements front ends.',
        tags: ['SAP BTP', 'CAP', 'Fiori Elements']
      },
      {
        icon: 'payment-approval',
        company: 'SAP Fioneer',
        role: 'Senior Developer',
        period: 'May 2023 — Oct 2023',
        text: 'Development of SAP Payment Engine.',
        tags: ['SAP PE', 'ABAP']
      },
      {
        icon: 'payment-approval',
        company: 'alseda GmbH',
        role: 'Software Developer',
        period: 'Jul 2022 — Apr 2023',
        text: 'SAP Payment Engine development for ISO 20022 (MX) and SWIFT MT payments.',
        tags: ['SAP PE', 'ISO 20022', 'SWIFT']
      },
      {
        icon: 'sap-logo-shape',
        company: 'SAP',
        role: 'Senior Business Process Consultant · Technical Consultant',
        period: 'Jul 2013 — Jun 2022',
        text: 'Nine years on core banking transformation projects as an SAP Payment Engine and Banking Services expert: payments (SWIFT MT/MX, SEPA, VISA, RTGS, instant) and accounts, loans and deposits — from requirements and gap analysis to design, ABAP and UI5 development, testing and go-live. Technical side: SAP Gateway and NetWeaver, cloud connectivity and transports for the S/4HANA Model Company, and Node.js/CAP microservices for an in-house SAP platform.',
        tags: ['SAP PE', 'SAP Banking', 'ABAP', 'UI5', 'S/4HANA', 'CAP']
      },
      {
        icon: 'lead',
        company: 'Accenture',
        role: 'Analyst',
        period: 'Jul 2010 — Jul 2013',
        text: 'Financial IT systems integration: core banking implementations for two major banks in Kyiv, PMO on an SAP implementation, test lead for a SAS risk management rollout, and business analysis for a leading brokerage in Moscow.',
        tags: ['Core banking', 'SAP', 'Business analysis']
      },
      {
        icon: 'money-bills',
        company: 'Citibank',
        role: 'ATM Operations Supervisor',
        period: '2007 — 2010',
        text: 'ATM replenishment and reconciliation, plus VBA automation of the operations team’s processes.',
        tags: ['Operations', 'VBA']
      }
    ],
    education: {
      title: 'Education',
      school: 'Moscow Power Engineering Institute (Technical University)',
      degree: 'Master’s degree, Industrial automation',
      period: '2002 — 2008'
    },
    certifications: {
      title: 'Certifications',
      items: [
        { name: 'SAP Certified Application Associate — Transactional Banking in SAP for Banking 8.0', code: 'C_FSTBAN_80' },
        { name: 'SAP Certified Development Associate — SAP Cloud Platform', code: '1.1' }
      ]
    },
    cv: 'Download CV'
  },

  services: {
    title: 'Services',
    subtitle: 'Where I can help your SAP project',
    items: [
      {
        icon: 'cloud',
        title: 'SAP BTP development',
        points: [
          'CAP (Node.js) services and CDS data models',
          'MTA deployment on Cloud Foundry',
          'Integration with S/4HANA, Business One and third-party APIs'
        ]
      },
      {
        icon: 'sap-ui5',
        title: 'Fiori & UI5 front ends',
        points: [
          'Fiori Elements apps on OData V4',
          'Freestyle SAPUI5 and UI5 Web Components',
          'Web apps that look and feel like Fiori'
        ]
      },
      {
        icon: 'lead',
        title: 'SAP Banking consulting',
        points: [
          'SAP Payment Engine: SWIFT MT/MX, ISO 20022, SEPA, instant',
          'Cards, Deposits and Loans Management',
          'Requirements, gap analysis and solution design',
          'Custom development and integration'
        ]
      },
      {
        icon: 'wrench',
        title: 'Technical support & DevOps',
        points: [
          'SAP Gateway configuration',
          'Performance tuning and troubleshooting',
          'Transport management and landscape setup'
        ]
      }
    ],
    cta: {
      title: 'Have a project in mind?',
      text: "Tell me what you're working on and I'll get back to you.",
      button: 'Write to me'
    }
  },

  notFound: {
    title: 'Page not found',
    text: "This app isn't on the launchpad.",
    home: 'Back to home'
  }
};
