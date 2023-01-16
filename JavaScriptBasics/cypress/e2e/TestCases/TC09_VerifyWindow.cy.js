/// <reference types="cypress" />

describe("Check windows",()=>{
    it("verify windows",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then((newwin) => {
            cy.stub(newwin,'open', () => {
                newwin.location.href = 'http://www.qaclickacademy.com/'
            }).as('popup')
        })

        cy.get('#openwindow').click()
        cy.get('@popup').should('be.calledWith','http://www.qaclickacademy.com/')
        cy.get('#homepage > header > div.navbar.navbar-default.navbar-static-top > div > nav > ul > li:nth-child(2) > a').click()
        
    })
})