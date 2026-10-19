export default {
  meta: {
    title: 'Егор Токарев — SAP BTP разработчик',
    description:
      'Full-stack разработчик SAP BTP и консультант SAP Banking, более 15 лет опыта: CAP, SAP HANA, Fiori/UI5, Cloud Foundry.'
  },

  shell: {
    name: 'Егор Токарев',
    role: 'SAP BTP разработчик',
    location: 'Ереван, Армения',
    back: 'Назад',
    home: 'Главная',
    profileMenu: 'Профиль и настройки',
    appearance: 'Оформление',
    themes: { auto: 'Системная', light: 'Светлая', dark: 'Тёмная' },
    language: 'Язык',
    contact: 'Контакты',
    builtWith: 'Сделано на SvelteKit и UI5 Web Components',
    source: 'Исходный код'
  },

  home: {
    hello: 'Привет, я Егор',
    tagline:
      'SAP BTP разработчик, который говорит и на языке бизнеса, и на языке кода. Больше 15 лет превращаю банковские и корпоративные процессы в работающие SAP-решения — от первого воркшопа до go-live.',
    hint: 'Сайт устроен как SAP Fiori launchpad. Выберите плитку.',
    groups: { about: 'Обо мне', projects: 'Проекты', contact: 'Связаться' }
  },

  tiles: {
    profile: { title: 'Профиль', subtitle: 'Кто я' },
    experience: { title: 'Опыт', subtitle: 'Карьерный путь', unit: 'лет' },
    services: { title: 'Услуги', subtitle: 'Чем могу помочь' },
    cv: { title: 'Скачать CV', subtitle: 'PDF' },
    site: {
      title: 'Этот сайт',
      subtitle: 'SvelteKit · UI5 Web Components',
      description: 'Личный сайт в образе Fiori launchpad — сделан, пока я изучал Svelte 5.'
    },
    github: { title: 'GitHub', subtitle: 'Больше кода' },
    email: { title: 'Email', subtitle: 'egor@toegor.app' },
    linkedin: { title: 'LinkedIn', subtitle: '@toegor' },
    telegram: { title: 'Telegram', subtitle: '@toegor' }
  },

  me: {
    title: 'Full-stack разработчик и архитектор SAP Cloud · эксперт SAP Banking',
    contact: 'Написать мне',
    cv: 'Скачать CV',
    about: {
      title: 'Обо мне',
      paragraphs: [
        'Я SAP-разработчик и архитектор решений, больше 15 лет в проектировании и внедрении, из них девять — в SAP. Работаю по обе стороны проекта: могу провести воркшоп по требованиям с бизнесом, а потом сам спроектировать, разработать, развернуть и сопровождать решение.',
        'Сейчас делаю full-stack приложения на SAP BTP: сервисы на CAP (Node.js) и CDS, SAP HANA Cloud, интерфейсы на SAPUI5 и Fiori Elements в Cloud Foundry, с интеграцией с S/4HANA, SAP Business One или внешними API через OData.',
        'За этим стоит сильный опыт классического SAP — R/3, S/4HANA, ABAP — и глубокая экспертиза в платежах и core banking: SAP Payment Engine (SWIFT MT/MX, ISO 20022, SEPA, мгновенные платежи), управление картами, депозитами и кредитами.',
        'Веду проекты на всех этапах SDLC — от дизайна до поддержки после запуска, — и в Agile, и в Waterfall командах.'
      ]
    },
    tech: {
      title: 'Ключевые технологии',
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
      title: 'Банковский домен',
      items: [
        { icon: 'payment-approval', name: 'Централизация платежей', code: 'SAP PE' },
        { icon: 'credit-card', name: 'Управление картами', code: 'SAP CM' },
        { icon: 'money-bills', name: 'Управление депозитами', code: 'SAP DM' },
        { icon: 'home-share', name: 'Управление кредитами', code: 'SAP CML' }
      ]
    },
    devops: {
      title: 'DevOps и эксплуатация',
      text: 'Работаю и с инфраструктурной стороной SAP: администрирование Linux, настройка SAP Gateway, тюнинг систем, управление транспортами и развёртывание ландшафтов.',
      items: ['Linux', 'SAP Gateway', 'Тюнинг производительности', 'Управление транспортами']
    }
  },

  experience: {
    title: 'Опыт',
    subtitle: '15+ лет в SAP — от банковского бэк-офиса до облака',
    items: [
      {
        icon: 'developer-settings',
        company: 'Независимая практика',
        role: 'Full-stack разработчик / архитектор SAP',
        period: 'сен 2024 — н. в.',
        text: 'SAP BTP проекты под ключ: архитектура, UI/UX, модели данных на CDS, сервисы на CAP и деплой MTA в Cloud Foundry. Интеграция с S/4HANA, SAP Business One и сторонними API через OData, а также разработка с помощью ИИ — SAP Joule и Claude.',
        tags: ['CAP', 'CDS', 'SAPUI5', 'Cloud Foundry', 'OData']
      },
      {
        icon: 'cloud',
        company: 'actoVent GmbH',
        role: 'Senior Software Developer',
        period: 'ноя 2023 — н. в.',
        text: 'Full-stack разработка на SAP BTP в Cloud Foundry по best practices SAP: бэкенд на CAP, интерфейсы на Fiori Elements.',
        tags: ['SAP BTP', 'CAP', 'Fiori Elements']
      },
      {
        icon: 'payment-approval',
        company: 'SAP Fioneer',
        role: 'Senior Developer',
        period: 'май 2023 — окт 2023',
        text: 'Разработка SAP Payment Engine.',
        tags: ['SAP PE', 'ABAP']
      },
      {
        icon: 'payment-approval',
        company: 'alseda GmbH',
        role: 'Software Developer',
        period: 'июл 2022 — апр 2023',
        text: 'Разработка в SAP Payment Engine для платежей ISO 20022 (MX) и SWIFT MT.',
        tags: ['SAP PE', 'ISO 20022', 'SWIFT']
      },
      {
        icon: 'sap-logo-shape',
        company: 'SAP',
        role: 'Senior Business Process Consultant · технический консультант',
        period: 'июл 2013 — июн 2022',
        text: 'Девять лет на проектах трансформации core banking в роли эксперта SAP Payment Engine и Banking Services: платежи (SWIFT MT/MX, SEPA, VISA, RTGS, instant), счета, кредиты и депозиты — от сбора требований и gap-анализа до дизайна, разработки на ABAP и UI5, тестирования и go-live. Техническая часть: SAP Gateway и NetWeaver, облачная связность и транспорты для S/4HANA Model Company, микросервисы на Node.js/CAP для внутренней платформы SAP.',
        tags: ['SAP PE', 'SAP Banking', 'ABAP', 'UI5', 'S/4HANA', 'CAP']
      },
      {
        icon: 'lead',
        company: 'Accenture',
        role: 'Аналитик',
        period: 'июл 2010 — июл 2013',
        text: 'Интеграция финансовых ИТ-систем: внедрение core banking в двух крупных банках Киева, PMO на внедрении SAP, руководство тестированием при внедрении SAS для риск-менеджмента, бизнес-анализ для ведущей брокерской компании в Москве.',
        tags: ['Core banking', 'SAP', 'Бизнес-анализ']
      },
      {
        icon: 'money-bills',
        company: 'Citibank',
        role: 'Супервайзер операций банкоматной сети',
        period: '2007 — 2010',
        text: 'Инкассация и сверка банкоматов, автоматизация процессов отдела на VBA.',
        tags: ['Операции', 'VBA']
      }
    ],
    education: {
      title: 'Образование',
      school: 'Московский энергетический институт (технический университет)',
      degree: 'Магистр, автоматизация технологических процессов',
      period: '2002 — 2008'
    },
    certifications: {
      title: 'Сертификаты',
      items: [
        { name: 'SAP Certified Application Associate — Transactional Banking in SAP for Banking 8.0', code: 'C_FSTBAN_80' },
        { name: 'SAP Certified Development Associate — SAP Cloud Platform', code: '1.1' }
      ]
    },
    cv: 'Скачать CV'
  },

  services: {
    title: 'Услуги',
    subtitle: 'Чем я могу помочь вашему SAP-проекту',
    items: [
      {
        icon: 'cloud',
        title: 'Разработка на SAP BTP',
        points: [
          'Сервисы на CAP (Node.js) и модели данных на CDS',
          'Деплой MTA в Cloud Foundry',
          'Интеграция с S/4HANA, Business One и внешними API'
        ]
      },
      {
        icon: 'sap-ui5',
        title: 'Интерфейсы на Fiori и UI5',
        points: [
          'Приложения Fiori Elements на OData V4',
          'Freestyle SAPUI5 и UI5 Web Components',
          'Веб-приложения в стиле Fiori'
        ]
      },
      {
        icon: 'lead',
        title: 'Консалтинг SAP Banking',
        points: [
          'SAP Payment Engine: SWIFT MT/MX, ISO 20022, SEPA, instant',
          'Управление картами, депозитами и кредитами',
          'Требования, gap-анализ и дизайн решения',
          'Доработки и интеграция'
        ]
      },
      {
        icon: 'wrench',
        title: 'Техподдержка и DevOps',
        points: [
          'Настройка SAP Gateway',
          'Тюнинг производительности и поиск проблем',
          'Управление транспортами и ландшафтами'
        ]
      }
    ],
    cta: {
      title: 'Есть задача?',
      text: 'Расскажите, над чем работаете, — я отвечу.',
      button: 'Написать'
    }
  },

  notFound: {
    title: 'Страница не найдена',
    text: 'Такого приложения на launchpad нет.',
    home: 'На главную'
  }
};
