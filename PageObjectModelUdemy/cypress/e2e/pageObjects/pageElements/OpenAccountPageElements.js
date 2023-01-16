/// <reference types = "cypress"  />

const objRep = require("../../locators.json")

export default class OpenAccountPageElement{

    customerNameSelectField(){
       return cy.get(objRep.OpenAccountPage.drpdnCustomerName)
    }

    currencySelectField(){
        return cy.get(objRep.OpenAccountPage.drpdnCurrency)
    }

    processButton(){
        return cy.get(objRep.OpenAccountPage.processButton)
    }
}