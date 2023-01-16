const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //this.chromeWebSecurity = false
      pageLoadTimeout = 120000
      on('task', {downloadFile});
    },
    "retries": {
      "runMode": 1,
      "openMode": 0
    }
  },
});
