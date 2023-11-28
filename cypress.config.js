const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8y3o33",
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  videoCompression: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 20000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
    openMode: 1
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
