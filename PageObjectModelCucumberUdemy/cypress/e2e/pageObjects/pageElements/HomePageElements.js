/// <reference types = "cypress"  />

const objRep = require("../../locators.json")

export default class HomePageElements{

    customerLoginBtn(){
        return cy.get(objRep.homePage.customerLoginButton)
    }

    bankManagerLoginBtn(){
        return cy.get(objRep.homePage.bankManagerLoginButton)
    }
}