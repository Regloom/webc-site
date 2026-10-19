// Language-independent project data. Texts live under `projects.<slug>` in src/lib/i18n/*.js.
export const PROJECTS = {
  frischluftmanager: {
    icon: 'weather-proofing',
    url: { en: 'https://frischluftmanager.com/en/', ru: 'https://frischluftmanager.com/' },
    youtube: 'https://www.youtube.com/@actoventgmbh2495/videos',
    tags: ['SAP BTP', 'Cloud Foundry', 'SAP HANA Cloud', 'CAP', 'CDS', 'Fiori Elements', 'SAPUI5', 'SAP Business One'],
    featuredVideo: { id: 'IEjNpYO0JuU', date: '2021-12', title: 'Frischluft as a Service mit actovent - we act for ventilation' },
    // Selected videos from the actoVent channel (titles as published)
    videos: [
      { id: 'xNUyrR1wO94', date: '2024-04', title: 'Energieeffizienz in Lüftungsanlagen: Optimierung mit dem Frischluftmanager' },
      { id: 'YUhPUsL3t_0', date: '2024-03', title: 'Wartungsfirmen aufgepasst - Revolutioniere Deine Filterwartung mit dem Frischluftmanager' },
      { id: 'ypU1w-ruYxo', date: '2024-03', title: 'Der Frischluftmanager: Wir optimieren deine Prozesse rund um saubere Luft in Krankenhäuser' }
    ]
  },
  penka: {
    icon: 'factory',
    url: { en: 'https://penka.de/', ru: 'https://penka.de/' },
    tags: ['SAP BTP', 'Clean core', 'SAP Business One', 'SAP HANA Cloud', 'CAP', 'Fiori / SAPUI5', 'GAEB']
  }
};
