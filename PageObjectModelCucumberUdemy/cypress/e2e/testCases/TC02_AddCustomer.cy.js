/// <reference types = "cypress"  />

import HomePageActions from "../pageObjects/pageActions/HomePageActions"
import BankManagerPageActions from "../pageObjects/pageActions/BankManagerPageActions"
import AddCustomerPageActions from "../pageObjects/pageActions/AddCustomerPageActions"

describe('Add a new customer',() => {

    const homePage = new HomePageActions()
    const bankManagerPage = new BankManagerPageActions()
    const addCustomerPage = new AddCustomerPageActions()

    before(() => {
        cy.fixture('testdata').then((testdata) => {
            globalThis.data = testdata
        })
    })

    beforeEach(() => {
        homePage.navigateToURL()
    })


    it('Add a new customer as bank manager',() => {

        homePage.loginAsBankManager()
        bankManagerPage.clickAddCustomerBtn()
        addCustomerPage.enterCustomerDetails(data.CustomerFirstName,data.CustomerLastName,data.CustomerPostCode)
        bankManagerPage.validateAlert(data.AlertMessageonAddCust)
    })




})