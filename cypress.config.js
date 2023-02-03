const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    embeddedScreenshots: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    defaultCommandTimeout:6000,
    projectId: "5rfrac",
    retries: {
      runMode: 1,
    },
    env:{
      url : "https://rahulshettyacademy.com"
    },
    specPattern: 'cypress/integration/examples/*.js'
  }
});
