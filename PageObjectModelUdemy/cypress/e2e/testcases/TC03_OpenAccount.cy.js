/// <reference types = "cypress"  />

import HomePageActions from "../pageObjects/pageActions/HomePageActions"
import BankManagerPageActions from "../pageObjects/pageActions/BankManagerPageActions"
import AddCustomerPageActions from "../pageObjects/pageActions/AddCustomerPageActions"
import OpenAccountPageAction from "../pageObjects/pageActions/OpenAccountPageAction"

describe('Open Account for the customer',() => {

    const homePage = new HomePageActions()
    const bankManagerPage = new BankManagerPageActions()
    const addCustomerPage = new AddCustomerPageActions()
    const openAccountPage = new OpenAccountPageAction()

    before(() => {
        cy.fixture('testdata').then((testdata) => {
            globalThis.data = testdata
        })
    })

    beforeEach(() => {
        homePage.navigateToURL()
    })



    it('Open account for the added user',() => {
        homePage.loginAsBankManager()
        bankManagerPage.clickAddCustomerBtn()
        addCustomerPage.enterCustomerDetails(data.CustomerFirstName,data.CustomerLastName,data.CustomerPostCode)
        bankManagerPage.validateAlert(data.AlertMessageonAddCust)
        bankManagerPage.clickOpenAccountBtn()
        openAccountPage.enterAccountDetails(data.CustomerFirstName + ' ' + data.CustomerLastName,data.AccountCurrency)
        bankManagerPage.validateAlert(data.AlertMessageOnOpenAccount)
    })



})