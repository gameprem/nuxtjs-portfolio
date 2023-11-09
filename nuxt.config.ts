// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode','@nuxtjs/google-fonts','@nuxtjs/i18n'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    // Options
    families:{
      Kanit: true
    }
  },
  i18n: {
    /* module options */
    locales: ["th","en"], // 👈
    defaultLocale: "th",      // 👈
    strategy: "prefix",
    detectBrowserLanguage: false,
    vueI18n: './locales/locales.ts'
  },
  
})
