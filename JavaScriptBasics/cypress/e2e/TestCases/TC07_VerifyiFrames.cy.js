/// <reference types="cypress" />

describe("Check iFrames",()=>{
    it("verify iFrames",()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe')
        cy.get('iframe').its('length').then((count) => {
            cy.log(count)
        })
        cy.get('#mce_0_ifr').then(($iframe) => {
            let element = $iframe.contents().find('#tinymce')
            cy.wrap(element).clear().type('Ambarish')

        })
        
    })
})