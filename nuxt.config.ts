// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'
  ],
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },
  typescript: {
    shim: false
  },
  auth: {
    globalAppMiddleware: true
  },
  runtimeConfig: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID
    }
  }
})
