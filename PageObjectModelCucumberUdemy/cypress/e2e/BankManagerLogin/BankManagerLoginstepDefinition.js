const {Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

Given('I navigate to the website',()=>{
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
})

When('I click on Bank Manager Login Button',()=>{
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()
})

Then('Bank Manager home page should Open',()=>{
    cy.title().should('eq','Protractor practice website - Banking App')
})