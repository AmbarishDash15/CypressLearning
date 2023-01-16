/// <reference types="cypress" />

describe("Mouse over menu click",()=>{
    it("verify moueover menu click",()=>{
        cy.visit('https://www.way2automation.com/')
        cy.contains('Video Tutorial').trigger('mouseover')
        cy.contains('Selenium with Java').click({force:true})
        
        
    })
})