const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:description', property: 'og:description', content: pkg.desc},
      { name: 'yandex-verification', content: '' },
      { name: 'google-site-verification', content: '' },
      { property: 'og:url', content: 'https://heavenweb.me' },
      { property: 'og:title', content: 'Heavenweb - команда разработки сайтов и рекламного продвижения.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,500,900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik&display=swap' }
    ],

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7DADB7' },

  /*
  ** Global CSS
  */
 css: [
   '~/assets/css/queries.scss',
   '~/assets/css/fonts.scss',
   '~/assets/css/transitions.scss',
   '~/assets/css/buttons.scss',
 ], // update this

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  env: {
    environment: process.env.NODE_ENV || 'development',
    baseURL: process.env.API_URL || 'http://localhost:8000/api',
  },
  axios: {
    timeout: 30000,
    baseURL: process.env.API_URL || 'http://localhost:8000/api',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    xsrfCookieName: 'csrf-token',
    xsrfHeaderName: 'X-CSRFToken'
  },
  auth: {
    redirect: {
      login: '/login',
      callback: '/callback',
      home: '/profile'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'token-auth/', method: 'post', propertyName: 'token' },
          user: { url: 'rest-auth/user/', method: 'get', propertyName: false },
          logout: { url: 'rest-auth/logout/' }
        },
        tokenRequired: true,
        tokenType: 'JWT'
      },
    }
  },
  sentry: {
    dsn: process.env.FRONTEND_SENTRY_DSN,
    release: process.env.GIT_REV || null,
    environment: process.env.NODE_ENV || 'development',
  },
  markdownit: {
    injected: true
  },
  serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    optimizeCSS: true,
    extend(config, ctx) {
    }
  }
}
