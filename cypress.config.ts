import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mocha',
    ignoreVideos: true,
    overwrite: false,
    html: true,
    inlineAssets: true, // Enable inline assets
    timestamp: 'mmddyyyy_HHMMss', // Customize timestamp format if needed
  },
  e2e: {
    baseUrl: 'http://localhost:3000',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
