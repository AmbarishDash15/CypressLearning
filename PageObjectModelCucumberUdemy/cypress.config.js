const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  projectId: 'xyei79',
  e2e: {
    baseUrl : 'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    pageLoadTimeout : 120000,
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
