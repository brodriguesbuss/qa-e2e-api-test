const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    specPattern: [
      "cypress/api/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
    baseUrl: "https://front.serverest.dev/",
    setupNodeEvents(on, config) {},
  },
  env: {
    API_BASE_URL: "https://serverest.dev/",
  },
});
