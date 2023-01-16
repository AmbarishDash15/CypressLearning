/// <reference types = "cypress"  />

import BankManagerPageElements from "../pageElements/BankManagerPageElements";

export default class BankManagerPageActions{
    constructor(){
        globalThis.bnkmngrelement = new BankManagerPageElements
    }

    clickHomeButtonBtn(){
        bnkmngrelement.bankManagerPageHomeButton().click()
    }

    clickAddCustomerBtn(){
        bnkmngrelement.addCustomerButton().click()
    }

    clickOpenAccountBtn(){
        bnkmngrelement.openAccountButton().click()
    }

    clickCustomersBtn(){
        bnkmngrelement.customersButton().click()
    }

    validateAlert(alertMsg){
        cy.on('window:alert',(alertText) => {
            expect(alertText).contain(alertMsg)
        })
    }

}