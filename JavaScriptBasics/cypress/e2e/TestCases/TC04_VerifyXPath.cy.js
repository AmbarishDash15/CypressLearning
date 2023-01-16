/// <reference types="cypress" />

describe("Check Links",()=>{
    it("verify links",()=>{
        cy.visit('https://google.com/')
        cy.xpath("//input[@name='q']").type('anything')
                
    })
})