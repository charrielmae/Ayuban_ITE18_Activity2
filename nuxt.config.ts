// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false
      }
    }
  },
  app: {
    head: {
      title: 'Harvard University — Student Information Portal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'ITE 18 Activity 2: Component-based Student Information Website demonstrating reusable Vue/Nuxt components and props.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bookman+Old+Style:ital,wght@1,700&family=Fraunces:ital,opsz,wght@1,9..144,700;1,9..144,800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/open-sauce-one'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/bookmania'
        }
      ]
    }
  }
})
