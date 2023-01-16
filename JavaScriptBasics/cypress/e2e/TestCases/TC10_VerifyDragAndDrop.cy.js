/// <reference types="cypress" />

describe("Drag And Drop",()=>{
    it("verify drag and drop",()=>{
        cy.visit('https://demo.guru99.com/test/drag_drop.html')
        cy.get('#credit2 > a').drag('#bank li',{force: true})
        
        
    })
})