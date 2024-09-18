
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  e2e: {
    baseUrl: 'https://blazedemo.com/',
    supportFile : false,
    specPattern : 'cypress/integration/**/*.js'
    }
});
