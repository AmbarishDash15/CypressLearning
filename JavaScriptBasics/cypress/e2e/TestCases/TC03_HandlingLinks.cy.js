/// <reference types="cypress" />

describe("Check Links",()=>{
    it("verify links",()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('a').contains('Commons').click()
        cy.origin('https://commons.wikimedia.org', () => {
            cy.get('.mainpage-welcome-sitename').should('contain.text','Commons')
            cy.get('a').its('length').then((linknum) => {
                cy.log(linknum)
            })
            cy.get('.vector-menu-content').eq(5).find('a').its('length').then((linknum) => {
                cy.log(linknum)
            })

            cy.get('.vector-menu-content').eq(5).find('a').then((linktext) => {
                cy.log(linktext.text())
            })
        })
        
        
    })
})