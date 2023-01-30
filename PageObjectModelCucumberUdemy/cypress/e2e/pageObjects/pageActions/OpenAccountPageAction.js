/// <reference types = "cypress"  />

import OpenAccountPageElement from "../pageElements/OpenAccountPageElements";

export default class OpenAccountPageAction{

    constructor(){
        globalThis.openacctelement = new OpenAccountPageElement()
    }

    enterAccountDetails(custName,currency){
        openacctelement.customerNameSelectField().select(custName)
        openacctelement.currencySelectField().select(currency)
        
    }

    clickProcessButton(){
        openacctelement.processButton().click()
    }

}