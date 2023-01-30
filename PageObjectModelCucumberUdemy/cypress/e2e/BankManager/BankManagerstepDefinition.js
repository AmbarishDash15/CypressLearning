const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import HomePageActions from "../pageObjects/pageActions/HomePageActions"
import BankManagerPageActions from "../pageObjects/pageActions/BankManagerPageActions"
import AddCustomerPageActions from "../pageObjects/pageActions/AddCustomerPageActions"
import OpenAccountPageAction from "../pageObjects/pageActions/OpenAccountPageAction"
const homePage = new HomePageActions()
const bankManagerPage = new BankManagerPageActions()
const addCustomerPage = new AddCustomerPageActions()
const openAccountPage = new OpenAccountPageAction()

Given('I navigate to the website',()=>{
    //cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
    homePage.navigateToURL()
})

When('I click on Bank Manager Login Button',()=>{
    //cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()
    homePage.loginAsBankManager()
})

Then('Verify Bank Manager home page title',()=>{
    homePage.validateTile().should('eq','Protractor practice website - Banking App')
})

When('I click on Add Customer Button',()=>{
    bankManagerPage.clickAddCustomerBtn()
})

When('I enter customer details',(datatable)=>{
    var data = datatable.hashes()[0]
    addCustomerPage.enterCustomerDetails(data["firstName"],data["lastName"],data["postCode"])
    
    
})

When('I click Add Customer Button',()=>{
    addCustomerPage.clickAddCustomer()
})

Then('I validate alert text',(datatable)=>{
    var data = datatable.hashes()[0]
    bankManagerPage.validateAlert(data["alertMessage"])
})

When('I click on Open Account Button',()=>{
    bankManagerPage.clickOpenAccountBtn()
})

When('I select customer details',(datatable)=>{
    var data = datatable.hashes()[0]
    openAccountPage.enterAccountDetails(data["custToSelect"], data["currency"])
})

When('I click on Process Button',()=>{
    openAccountPage.clickProcessButton()
})