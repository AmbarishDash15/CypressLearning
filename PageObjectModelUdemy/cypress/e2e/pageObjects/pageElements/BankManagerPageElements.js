/// <reference types = "cypress"  />

const objRep = require("../../locators.json")

export default class BankManagerPageElements{

    addCustomerButton(){
        return cy.get(objRep.bankManagerPage.addCustomerButton)
    }

    openAccountButton(){
        return cy.get(objRep.bankManagerPage.openAccountButton)
    }

    customersButton(){
        return cy.get(objRep.bankManagerPage.customerButton)
    }

    bankManagerPageHomeButton(){
        return cy.get(objRep.bankManagerPage.homeButton)
    }
}