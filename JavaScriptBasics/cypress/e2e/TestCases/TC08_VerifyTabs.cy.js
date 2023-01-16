/// <reference types="cypress" />

describe("Check tabs",()=>{
    it("verify tabs",()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('#content a').invoke('removeAttr','target').click()
        cy.get('.example').then((content) => {
            cy.log(content.text())
        })
        
    })
})