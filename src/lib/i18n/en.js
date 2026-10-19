export default {
  meta: {
    title: 'Egor Tokarev — SAP BTP Developer',
    description:
      'SAP BTP full-stack developer and architect with 15+ years in SAP: CAP, SAP HANA, Fiori/UI5, Cloud Foundry, SAP Banking — and AI-assisted development with Claude Code, GitHub Copilot and SAP Joule.'
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
    ai: 'AI-assisted development is part of my daily workflow: Claude Code, GitHub Copilot, opencode, MCP and skills.',
    hint: 'This site is built like an SAP Fiori launchpad. Pick a tile to start.',
    groups: { about: 'About me', projects: 'Projects', contact: 'Get in touch' }
  },

  tiles: {
    profile: { title: 'Profile', subtitle: 'Who I am' },
    experience: { title: 'Experience', subtitle: 'Career path', unit: 'years' },
    services: { title: 'Services', subtitle: 'How I can help' },
    ai: {
      title: 'AI-assisted development',
      subtitle: 'Claude Code · Copilot · opencode',
      description: 'AI coding agents are part of my daily SAP workflow — with expert review of every change.'
    },
    cv: { title: 'Download CV', subtitle: 'PDF' },
    site: {
      title: 'This website',
      subtitle: 'SvelteKit · UI5 Web Components',
      description: 'A personal site dressed up as a Fiori launchpad, built while learning Svelte 5.'
    },
    frischluftmanager: {
      title: 'Frischluftmanager',
      subtitle: 'actoVent · since 2024',
      description: 'Fresh air as a service: a digital platform for ventilation operations on SAP BTP.'
    },
    penka: {
      title: 'penka',
      subtitle: 'Clean core · since 2024',
      description: 'SAP BTP extensions for SAP Business One — now focused on GAEB tenders.'
    },
    github: { title: 'GitHub' },
    email: { title: 'Email' },
    linkedin: { title: 'LinkedIn', subtitle: '@toegor' },
    telegram: { title: 'Telegram' }
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
        'SAP Business One',
        'Claude Code · GitHub Copilot · SAP Joule',
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
    ai: {
      title: 'AI-assisted development',
      paragraphs: [
        'AI is part of my everyday engineering workflow, not an experiment. I use AI coding agents and SAP Joule to generate CDS data models, CAP services and Fiori Elements UI annotations, and I review every change as an SAP expert before it ships.',
        'My toolkit: Claude Code, GitHub Copilot and opencode with ChatGPT, Big Pickle and other models — extended with MCP servers and agent skills for documentation lookup, code checks and project-specific workflows.',
        'This website is an example: it was redesigned with Claude Code, using the official Svelte MCP server and skills for documentation lookup and code checks.'
      ],
      items: [
        'Generative AI',
        'LLM',
        'AI coding agents',
        'Claude Code',
        'GitHub Copilot',
        'opencode',
        'ChatGPT',
        'Big Pickle',
        'SAP Joule',
        'MCP (Model Context Protocol)',
        'Agent skills',
        'Prompt engineering'
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
        tags: ['CAP', 'CDS', 'SAPUI5', 'Cloud Foundry', 'OData', 'AI-assisted development']
      },
      {
        icon: 'cloud',
        company: 'actoVent GmbH',
        role: 'Senior Software Developer',
        period: 'Nov 2023 — present',
        text: 'Full-stack SAP BTP development on Cloud Foundry following SAP best practices: CAP back ends and Fiori Elements front ends. Since 2024 I have been actively developing and supporting two projects of the same group: the Frischluftmanager platform, including its warehouse module, and clean-core SAP BTP extensions for penka, now focused on GAEB tenders. Both run on SAP HANA Cloud, integrated with on-premise SAP Business One.',
        tags: ['SAP BTP', 'SAP HANA Cloud', 'CAP', 'Fiori Elements', 'SAP Business One', 'GAEB'],
        projects: ['frischluftmanager', 'penka']
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
        icon: 'ai',
        wide: true,
        title: 'AI-assisted SAP development',
        points: [
          'CDS models, CAP services and Fiori annotations generated with AI agents',
          'Expert review of every AI-generated change',
          'Faster delivery of SAP BTP extensions'
        ]
      },
      {
        icon: 'cloud',
        title: 'SAP BTP development',
        points: [
          'CAP (Node.js) services and CDS data models',
          'MTA deployment on Cloud Foundry',
          'Integration with S/4HANA, Business One and third-party APIs',
          'Clean-core extensions for SAP Business One'
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

  projects: {
    website: 'Visit website',
    youtube: 'YouTube channel',
    role: 'My role',
    videos: 'Videos',
    videosNote: 'Videos are in German.',
    play: 'Play video',

    frischluftmanager: {
      title: 'Frischluftmanager',
      subtitle: 'Fresh air as a service · actoVent · since 2024',
      about: {
        title: 'About the product',
        paragraphs: [
          'Frischluftmanager by actoVent turns the operation of ventilation systems into a service: "Clean air. Zero effort." It brings everyone involved — building operators, facility managers, maintenance companies and suppliers — onto one digital platform.',
          "Measured values such as air quality and filter pressure differences are shown in dashboards, and filter change intervals are optimised on real data. Maintenance packages are prepared and delivered per unit, so the right filter is on site at the right time — no second trip to the customer. Over 80% of a filter's lifecycle cost is energy, so this saves both money and energy.",
          'It is used wherever clean air matters: offices, hospitals, gyms, climbing halls and more.'
        ]
      },
      sections: [
        {
          title: 'Key features',
          items: [
            { icon: 'group', text: 'One platform for operators, facility managers, maintenance companies and suppliers' },
            { icon: 'sys-monitor', text: 'Dashboards for air quality and filter differential pressure' },
            { icon: 'filter', text: 'Data-driven filter change intervals and automatic reminders' },
            { icon: 'shipping-status', text: 'Maintenance packages prepared and delivered per unit (AirSys+)' },
            { icon: 'energy-saving-lightbulb', text: 'Vendor-neutral choice of the most energy-efficient filters' },
            { icon: 'measure', text: 'Measurement without network access or cabling' }
          ]
        },
        {
          title: 'Warehouse module (built by me)',
          items: [
            { icon: 'shelf', text: 'Storage and stock management' },
            { icon: 'bar-code', text: 'Goods scanning with SAPUI5 mobile apps' },
            { icon: 'connected', text: 'Integration with on-premise SAP Business One' },
            { icon: 'synchronize', text: 'Data replication between SAP Business One and SAP HANA Cloud' },
            { icon: 'bar-chart', text: 'Warehouse analytics' },
            { icon: 'shipping-status', text: 'Shipping' },
            { icon: 'print', text: 'Label printing' }
          ]
        }
      ],
      role: [
        'Active development and support of the platform since 2024',
        'Full-stack development on SAP BTP, Cloud Foundry, with SAP HANA Cloud',
        'CAP (Node.js) services and CDS data models',
        'Fiori Elements and SAPUI5 apps in the SAP BTP launchpad',
        'Integration with the on-premise SAP Business One system',
        'Warehouse module end to end: storage, scanning, replication, analytics, shipping and labels'
      ]
    },

    penka: {
      title: 'penka',
      subtitle: 'Clean-core SAP BTP extensions for SAP Business One · since 2024',
      about: {
        title: 'About the project',
        paragraphs: [
          'penka GmbH Luft- und Klimatechnik is an independent ventilation wholesaler near Stuttgart and in the Rhein-Neckar region. It supports ventilation projects from planning through installation to commissioning — with a broad, highly available range, its own special manufacturing and logistics.',
          'I build several SAP BTP extensions for penka following the clean-core approach: SAP Business One stays standard, and all in-house enhancements live in SAP BTP on SAP HANA Cloud, integrated with the on-premise SAP Business One system.'
        ]
      },
      sections: [
        {
          title: 'Clean core',
          items: [
            { icon: 'product', text: 'SAP Business One stays standard — no in-system modifications' },
            { icon: 'cloud', text: 'In-house enhancements as SAP BTP extensions on Cloud Foundry' },
            { icon: 'database', text: 'SAP HANA Cloud persistence with CAP (Node.js) services' },
            { icon: 'connected', text: 'Integration with the on-premise SAP Business One system' },
            { icon: 'sap-ui5', text: 'Fiori / SAPUI5 apps for daily work' }
          ]
        },
        {
          title: 'Current focus: GAEB tenders',
          text: 'Today my main work is the tender process in Germany based on GAEB — the German standard for exchanging construction tender data such as bills of quantities (Leistungsverzeichnisse).',
          items: [
            { icon: 'documents', text: 'GAEB tender process on SAP BTP' },
            { icon: 'connected', text: 'Connected to SAP Business One' }
          ]
        }
      ],
      role: [
        'Design and development of SAP BTP extensions for SAP Business One since 2024',
        'Clean-core architecture: in-house logic on SAP BTP, standard SAP Business One',
        'SAP HANA Cloud, CAP and Fiori / SAPUI5',
        'GAEB tender process — the current main focus'
      ]
    }
  },

  notFound: {
    title: 'Page not found',
    text: "This app isn't on the launchpad.",
    home: 'Back to home'
  }
};
