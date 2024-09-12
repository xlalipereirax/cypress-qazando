const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5jjjp5',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
