/// <reference types="cypress" />

describe("First Test Suit",()=>{
    it("verify element visibilty and attributes",()=>{
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible')
        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr','name').should('contain','name')
        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr','type').should('contain','text')
        
    })

    it.only("verify parent, child and within element",()=>{
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','index.php')
        cy.get('#load_box').find('input').invoke('attr','type').should('not.have','hidden').its('length').then((elelen) => {

            cy.log(elelen)
        })
        
        cy.get('#load_box > form > fieldset').children('input').should('not.have','hidden').its('length').then((elelen) => {

            cy.log(elelen)
        })

        cy.get('#load_box > form ').within((section) => {

            cy.get('input').invoke('attr','type').should('not.have','hidden').its('length').should('eq',6)
            cy.get('input').eq(1).type('Ambarish')
            cy.get('input').eq(1).prev().then((label) => {
                cy.log(label.text())
            })
            cy.get('input').eq(1).parent().next().then((parent) => {
                cy.log(parent.text())
            })
        })
        
    })
})