/// <reference types = "cypress"  />

import HomePageElements from "../pageElements/HomePageElements"

export default class HomePageActions{

    constructor(){
        globalThis.homepageelement = new HomePageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }

    validateTile(){
        return cy.title()
    }

    loginAsBankManager(){
        homepageelement.bankManagerLoginBtn().click()
    }

    loginAsCustomer(){
        homepageelement.customerLoginBtn().click()
    }


}