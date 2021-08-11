export default {
  components: true,

  publicRuntimeConfig: {
    rollupTypeHash: process.env.ROLLUP_TYPE_HASH,
    web3ProviderUrl: process.env.GODWOKEN_RPC_URL,
    ethAccountLockCodeHash: process.env.ETH_ACCOUNT_LOCK_CODE_HASH,
    sudtProxyContractAddress: process.env.SUDT_PROXY_CONTRACT_ADDRESS,
    fancyContractAddress: process.env.FANCY_CONTRACT_ADDRESS,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NervosDAPP',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/web3.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build:  {     extend (config, { isDev, isClient }) {
 
    config.node = {
         fs: 'empty'
     }

    // ....
 }, transpile: ['nervos-godwoken-integration'] }
}
