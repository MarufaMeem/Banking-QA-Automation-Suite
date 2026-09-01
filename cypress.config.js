const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1366,
  viewportHeight: 768,

  video: true,

  screenshotOnRunFailure: true,

  e2e: {

    baseUrl: "https://example.cypress.io",

    setupNodeEvents(on, config) {

    }

  }

});