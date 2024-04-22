// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  runtimeConfig: {
    public: {
      urlImages: process.env.URL_IMAGE,
      urlApi: process.env.URL_API,
      hashScopeProduct: process.env.HASH_SCOPE_PRODUCT,
      hashScopeAccessories: process.env.HASH_SCOPE_ACCESSORIES,
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
