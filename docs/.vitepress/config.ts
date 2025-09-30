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
          { text: 'Module 1: PHP fondamentaux', link: '/module-1/introduction' },
          { text: 'Module 2: PHP Web et formulaires', link: '/module-2/introduction' },
          { text: 'Module 3: PHP fondamentaux', link: '/module-1/introduction' },
        ]
      },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
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
            {
              text: 'Conclusion.',
              link: '/module-1/conclusion'
            },
          ],
        },
      ]
    },
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    }
  },
});
