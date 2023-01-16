/// <reference types="cypress" />

describe("First Test Suit",()=>{
    it("verify page titile",()=>{
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').type('Ambarish')
        cy.title().should('include','Welcome')
        cy.get('#load_form > :nth-child(5) > label').last().then((label) => {

            cy.log(label.text());

        })
        cy.get('#load_form > :nth-child(5) > label').eq(0).then((label) => {

            cy.log(label.text());

        })
        cy.get('#load_form > :nth-child(5) > label').eq(1).should('have.text','Name1:')
    })
})