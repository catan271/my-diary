export const baseURL = '/my-diary';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  srcDir: './src',

  app: {
    baseURL,
    buildAssetsDir: 'assets',
    head: {
      title: 'My Diary',
      link: [{ rel: 'icon', type: 'image/x-icon', href: `${baseURL}/favicon.ico` }],
    },
    pageTransition: { name: 'page', mode: 'in-out' },
  },
  nitro: {
    baseURL,
  },
  image: {
    provider: 'netlify',
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
  modules: ['@vite-pwa/nuxt', '@invictus.codes/nuxt-vuetify', '@nuxt/image'],
});
