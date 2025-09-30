import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'fr-FR',
  title: 'Apprendre PHP',
  description: 'Decouvre et apprend le PHP simplement.',
  base: '/learning-php-site',

  themeConfig: {
    nav: [
      { 
        text: 'Modules PHP', 
        items: [
          { text: 'Programme complet', link: '/programme'},
          { text: 'Module 1: PHP fondamentaux', link: '/module-1/introduction' },
          { text: 'Module 2: PHP Web et formulaires', link: '/module-2/introduction' },
          { text: 'Module 3: PHP fondamentaux', link: '/module-1/introduction' },
        ]
      },
    ],

    sidebar: {
      '/module-1/': [
        {
          text: 'Programme',
          link: '/programme'
        },
        {
          text: 'Module 1: PHP fondamentaux',
          collapsed: false,
          items: [
            {
              text: 'Introduction.',
              link: '/module-1/introduction'
            },
            {
              text: 'Premiers pas avec php.',
              link: '/module-1/chapitres/chapitre-1-premiers-pas-avec-php'
            },
            {
              text: 'Les variables et types de données.',
              link: '/module-1/chapitres/chapitre-2-les-variables-et-types-de-donnees'
            },
            {
              text: 'Opérateurs et expressions.',
              link: '/module-1/chapitres/chapitre-3-operateurs-et-expressions'
            },
            {
              text: 'Structures de contrôle.',
              link: '/module-1/chapitres/chapitre-4-structures-de-controle'
            },
            {
              text: 'Les tableaux.',
              link: '/module-1/chapitres/chapitre-5-les-tableaux'
            },
            {
              text: 'Les fonctions.',
              link: '/module-1/chapitres/chapitre-6-les-fonctions'
            },
            {
              text: 'Chaines de caractères.',
              link: '/module-1/chapitres/chapitre-7-chaines-de-caracteres'
            },
            {
              text: 'Gestion des fichiers.',
              link: '/module-1/chapitres/chapitre-8-gestion-des-fichiers'
            },
            {
              text: 'Conclusion.',
              link: '/module-1/conclusion'
            },
            {
              text: 'exercices',
              collapsed: true,
              items: [
                {
                  text: 'Premiers pas avec php.',
                  link: '/module-1/exercices/chapitre-1-premiers-pas-avec-php'
                },
                {
                  text: 'Les variables et types de données.',
                  link: '/module-1/exercices/chapitre-2-les-variables-et-types-de-donnees'
                },
                {
                  text: 'Opérateurs et expressions.',
                  link: '/module-1/exercices/chapitre-3-operateurs-et-expressions'
                },
                {
                  text: 'Structures de contrôle.',
                  link: '/module-1/exercices/chapitre-4-structures-de-controle'
                },
                {
                  text: 'Les tableaux.',
                  link: '/module-1/exercices/chapitre-5-les-tableaux'
                },
                {
                  text: 'Les fonctions.',
                  link: '/module-1/exercices/chapitre-6-les-fonctions'
                },
                {
                  text: 'Chaines de caractères.',
                  link: '/module-1/exercices/chapitre-7-chaines-de-caracteres'
                },
              ]
            },
          ],
        },
        {
          text: 'Module 2: PHP Web et formulaires',
          link: 'module-2/introduction'
        },
        {
          text: 'Module 3: Base de données SQL',
          link: 'module-3/introduction'
        },

        
      ],
      '/module-2': [
        {
          text: 'Programme',
          link: '/programme'
        },
        {
          text: 'Module 1: PHP fondamentaux',
          link: 'module-1/introduction'
        },
        {
          text: 'Module 2: PHP Web et formulaires',
          collapsed: false,
          items: [
            {
              text: 'Introduction.',
              link: '/module-2/introduction'
            },
            {
              text: 'Le protocole HTTP.',
              link: '/module-2/chapitres/chapitre-9-le-protocole-http'
            },
            {
              text: 'Formulaires HTML et PHP.',
              link: '/module-2/chapitres/chapitre-10-formulaires-html-et-php'
            },
            {
              text: 'Sessions et cookies.',
              link: '/module-2/chapitres/chapitre-11-sessions-et-cookie'
            },
            {
              text: 'Inclusions et organisation.',
              link: '/module-2/chapitres/chapitre-11-inclusions et organisation'
            },
            {
              text: 'Gestion des erreurs.',
              link: '/module-2/chapitres/chapitre-12-getsion-des-erreurs'
            },
            {
              text: 'Conclusion.',
              link: '/module-2/conclusion'
            },
            {
              text: 'exercices',
              collapsed: true,
              items: [
                {
                  text: 'Le protocole HTTP.',
                  link: '/module-2/exercices/chapitre-9-le-protocole-http'
                },
                {
                  text: 'Formulaires HTML et PHP.',
                  link: '/module-2/exercices/chapitre-10-formulaires-html-et-php'
                },
                {
                  text: 'Sessions et cookies.',
                  link: '/module-2/exercices/chapitre-11-sessions-et-cookie'
                },
                {
                  text: 'Inclusions et organisation.',
                  link: '/module-2/exercices/chapitre-11-inclusions et organisation'
                },
                {
                  text: 'Gestion des erreurs.',
                  link: '/module-2/exercices/chapitre-12-getsion-des-erreurs'
                },
              ]
            },
          ],
        },
        {
          text: 'Module 3: Base de données SQL',
          link: 'module-3/introduction'
        },
      ],
      '/module-3': [
        {
          text: 'Programme',
          link: '/programme'
        },
        {
          text: 'Module 1: PHP fondamentaux',
          link: 'module-1/introduction'
        },
        {
          text: 'Module 2: PHP Web et formulaires',
          link: 'module-1/introduction'
        },
        {
          text: 'Module 3: Bases de données et SQL',
          collapsed: false,
          items: [
            {
              text: 'Introduction.',
              link: '/module-2/introduction'
            },
            {
              text: 'Le protocole HTTP.',
              link: '/module-2/chapitres/chapitre-9-le-protocole-http'
            },
            {
              text: 'Formulaires HTML et PHP.',
              link: '/module-2/chapitres/chapitre-10-formulaires-html-et-php'
            },
            {
              text: 'Opérateurs et expressions.',
              link: '/module-2/chapitres/chapitre-3-operateurs-et-expressions'
            },
            {
              text: 'Structures de contrôle.',
              link: '/module-2/chapitres/chapitre-4-structures-de-controle'
            },
            {
              text: 'Les tableaux.',
              link: '/module-2/chapitres/chapitre-5-les-tableaux'
            },
            {
              text: 'Les fonctions.',
              link: '/module-2/chapitres/chapitre-6-les-fonctions'
            },
            {
              text: 'Chaines de caractères.',
              link: '/module-2/chapitres/chapitre-7-chaines-de-caracteres'
            },
            {
              text: 'Gestion des fichiers.',
              link: '/module-2/chapitres/chapitre-8-gestion-des-fichiers'
            },
            {
              text: 'Conclusion.',
              link: '/module-2/conclusion'
            },
            {
              text: 'exercices',
              collapsed: true,
              items: [
                {
                  text: 'Premiers pas avec php.',
                  link: '/module-2/exercices/chapitre-1-premiers-pas-avec-php'
                },
                {
                  text: 'Les variables et types de données.',
                  link: '/module-2/exercices/chapitre-2-les-variables-et-types-de-donnees'
                },
                {
                  text: 'Opérateurs et expressions.',
                  link: '/module-2/exercices/chapitre-3-operateurs-et-expressions'
                },
                {
                  text: 'Structures de contrôle.',
                  link: '/module-2/exercices/chapitre-4-structures-de-controle'
                },
                {
                  text: 'Les tableaux.',
                  link: '/module-2/exercices/chapitre-5-les-tableaux'
                },
                {
                  text: 'Les fonctions.',
                  link: '/module-2/exercices/chapitre-6-les-fonctions'
                },
                {
                  text: 'Chaines de caractères.',
                  link: '/module-2/exercices/chapitre-7-chaines-de-caracteres'
                },
              ]
            },
          ],
        },
        {
          text: 'Module 3: Base de données SQL',
          link: 'module-3/introduction'
        },
      ],
    },
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    }
  },
});
