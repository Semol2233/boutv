
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'png', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'video.js/dist/video-js.css',
    'vue-video-player/src/custom-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/index.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || `http://cdn.boutv.live/sdvcsdcdcsdfder43543wrfwefcsfsdvcsdcdcsdfder43543wrfwefcsf`,
    homeCn: 'http://cdn.boutv.live/sdvcsdcdcsdfder43543wrfwefcsf',
    search: 'http://cdn.boutv.live/sdvcsdcdcsdfder43543wrfwefcsfsdvcsdcdcsdfder43543wrfwefcsf/serach?search=',
    coverImg: 'http://cdn.boutv.live/sdvcsdcdcsdfder43543wrfwefcsfsdvcsdcdcsdfder43543wrfwefcsf/coverimg'
  }
}
