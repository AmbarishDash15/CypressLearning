/// <reference types="cypress" />

describe("Check dropdown",()=>{
    it("verify dropdown",()=>{
        cy.visit('https://testpages.herokuapp.com/basic_html_form.html')
        cy.get('input[type=checkbox]').check().should('be.checked')
        cy.wait(2000)
        cy.get('input[type=checkbox]').uncheck().should('not.be.checked')
        cy.get('input[type=checkbox]').check(['cb1','cb3'])
        cy.get('input[value=cb3]').should('be.checked')
        cy.get('input[value=cb2]').should('not.be.checked')
        
    })
})