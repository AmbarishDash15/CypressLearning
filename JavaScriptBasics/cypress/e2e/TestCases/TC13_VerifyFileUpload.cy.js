/// <reference types="cypress" />

describe("File upload test",()=>{
    
    it("verify file upload",()=>{
        cy.visit('https://demo.guru99.com/test/upload/')
        const filePath = 'testupload.txt'
        cy.get('[type="file"]').attachFile(filePath)
        cy.get('#terms').check()
        cy.get('#submitbutton').click()

        
        
    })
})