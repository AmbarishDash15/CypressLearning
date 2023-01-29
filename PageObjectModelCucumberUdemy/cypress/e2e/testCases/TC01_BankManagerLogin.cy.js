/// <reference types = "cypress"  />

import HomePageActions from "../pageObjects/pageActions/HomePageActions"

describe('Login As Bank Manager',() => {

    const homePage = new HomePageActions()

    beforeEach(() => {
        homePage.navigateToURL()
    })


    it('Verify page title',() => {

        homePage.validateTile().should('equal','Protractor practice website1 - Banking App')
    })


    it('Verify login as Bank Manager',() => {

        homePage.loginAsBankManager()
    })



})