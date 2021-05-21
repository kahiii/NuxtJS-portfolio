export default {
  head() {
    return {
      title: 'Kenan DUFRENE - Portfolio',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Passionné par la programmation depuis mon enfance, je me suis orienté dans le domaine du web et plus particulièrement sur les technologies Javascript." },
        // twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Kenan DUFRENE - Développeur web Front-End' },
        { hid: 'twitter:description', name: 'twitter:description', content: "Passionné par la programmation depuis mon enfance, je me suis orienté dans le domaine du web et plus particulièrement sur les technologies Javascript." },
        { hid: 'twitter:image', name: 'twitter:image', content: require('~/assets/uploads/og-image.png') },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Kenan DUFRENE - Développeur web Front-End' },
        /// open-graph
        { hid: 'og:title', property: 'og:title', content: 'Kenan DUFRENE - Développeur web Front-End' },
        { hid: 'og:description', property: 'og:description', content: "Passionné par la programmation depuis mon enfance, je me suis orienté dans le domaine du web et plus particulièrement sur les technologies Javascript." },
        { hid: 'og:image', property: 'og:image', content: require('~/assets/uploads/og-image.png') },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: require('~/assets/uploads/og-image.png') },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'Kenan DUFRENE - Développeur web Front-End' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CDomine%3Aregular%2C700#038;subset=latin,latin-ext' }
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/global.scss'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  generate: {
    dir: 'public'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
