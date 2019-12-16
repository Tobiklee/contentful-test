const path = require('path');
require('dotenv').config();

export default {
  modules: ['nuxt-purgecss'],
  purgeCSS: {},
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  css: ['~/assets/styles/tailwind.scss'],
  modules: ['nuxt-purgecss'],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
  },
  purgeCSS: {
    mode: 'postcss'
  }
};
