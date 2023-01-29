/// <reference types = "cypress"  />

const objRep = require("../../locators.json")

export default class AddCustomerPageElements{
    firstNameField(){
        return cy.get(objRep.AddCustomerPage.txtfldFirstName)
    }

    lastNameField(){
        return cy.get(objRep.AddCustomerPage.txtfldLastName)
    }

    postCodeField(){
        return cy.get(objRep.AddCustomerPage.txtfldPostCode)
    }

    addCustomerButton(){
        return cy.get(objRep.AddCustomerPage.AddCustomerButton)
    }
}