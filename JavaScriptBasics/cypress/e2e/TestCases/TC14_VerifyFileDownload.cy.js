/// <reference types="cypress" />

describe("File download test",()=>{
    const downLoadFolder = 'myCypressdownloads'
    it("verify file download",()=>{
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',downLoadFolder,'example.jpg')

        cy.readFile('./'+downLoadFolder+'/example.jpg').should('exist')
        
    })
})