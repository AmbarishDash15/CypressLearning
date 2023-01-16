/// <reference types="cypress" />

describe("Check dropdown",()=>{
    it("verify dropdown",()=>{
        cy.visit('https://testpages.herokuapp.com/basic_html_form.html')
        cy.get(':nth-child(8) > td > select').select('dd4').should('include.text','Drop Down Item 4')
        cy.get(':nth-child(8) > td > select').select('dd3').should('include.text','Drop Down Item 3')
        cy.get('select[name=dropdown]').select('dd2')
    })
})