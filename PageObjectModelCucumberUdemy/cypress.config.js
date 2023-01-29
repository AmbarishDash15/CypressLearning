const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  projectId: 'xyei79',
  e2e: {
    baseUrl : 'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    pageLoadTimeout : 120000,
    specPattern: "**/*.feature",
    setupNodeEvents,
    /*
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //this.chromeWebSecurity = false
      
      on('task', {downloadFile});
      allureWriter(on, config);
      //return config;
      
    },
    "retries": {
      "runMode": 0,
      "openMode": 0
    },
    /*
    reporter : 'mochawesome',
    reporterOptions : {
      reportDir: 'cypress/results',
      reportFilename : "testresults",
      overwrite: false,
      html: true,
      json: true,
      charts : true
    }*/

    
  },

  
});
