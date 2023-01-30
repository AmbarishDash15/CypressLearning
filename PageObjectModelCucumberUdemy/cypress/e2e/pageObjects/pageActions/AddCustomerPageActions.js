/// <reference types = "cypress"  />

import AddCustomerPageElements from "../pageElements/AddCustomerPageElements";

export default class AddCustomerPageActions{

    constructor(){
        globalThis.addctmrelement = new AddCustomerPageElements()
    }

    enterCustomerDetails(firstName, lastName, postCode){
        addctmrelement.firstNameField().type(firstName)
        addctmrelement.lastNameField().type(lastName)
        addctmrelement.postCodeField().type(postCode)
        
    }

    clickAddCustomer(){
        addctmrelement.addCustomerButton().click()
    }



}