// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    baseURL: '/my-diary/',
    head: {
      title: 'My Diary',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/my-diary/favicon.ico' }],
    },
  },

  css: ['~/assets/styles/index.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devServer: {
    host: '0.0.0.0',
  },

  srcDir: './src',

  modules: ['@vite-pwa/nuxt'],
});
