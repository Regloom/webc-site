import { CONTACTS, SITE_URL } from './config.js';

/**
 * schema.org JSON-LD for the site and its owner, so search engines know who the site is about.
 *
 * @param {Record<string, any>} t dictionary of the current language
 * @param {string} lang
 */
export function structuredData(t, lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'toegor.app',
        description: t.meta.description,
        inLanguage: lang,
        publisher: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Egor Tokarev',
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/og-image.png`,
        jobTitle: t.seo.jobTitle,
        description: t.meta.description,
        email: `mailto:${CONTACTS.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Yerevan', addressCountry: 'AM' },
        worksFor: { '@type': 'Organization', name: 'actoVent GmbH' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Moscow Power Engineering Institute' },
        hasCredential: t.experience.certifications.items.map((/** @type {{ name: string }} */ cert) => ({
          '@type': 'EducationalOccupationalCredential',
          name: cert.name,
          credentialCategory: 'certification',
          recognizedBy: { '@type': 'Organization', name: 'SAP' }
        })),
        knowsAbout: [
          'SAP Business Technology Platform',
          'SAP Cloud Application Programming Model',
          'SAP HANA Cloud',
          'SAP Fiori',
          'SAPUI5',
          'SAP Business One',
          'Clean core',
          'SAP Banking',
          'SAP Payment Engine',
          'ABAP',
          'AI-assisted software development'
        ],
        sameAs: [CONTACTS.linkedin, CONTACTS.github, CONTACTS.telegram]
      }
    ]
  };
}

/** JSON-LD as a <script> tag, with `<` escaped so content can never close the tag early. */
export function jsonLdScript(/** @type {object} */ data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}
