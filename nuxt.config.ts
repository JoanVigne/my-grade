// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: '',
  },
  css: [
    '@/static/global.css'
  ]
})
