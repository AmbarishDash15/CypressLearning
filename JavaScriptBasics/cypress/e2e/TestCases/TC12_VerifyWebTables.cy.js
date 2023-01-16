/// <reference types="cypress" />

describe("Webtable operations",()=>{
    var indexName = "NIFTY BANK"
    it("verify webtables",()=>{
        cy.visit('https://money.rediff.com/indices/nse')
        cy.get('#dataTable > tbody > tr').its('length').then((tablerows) => {
            cy.log("Total rows",tablerows)
        })
        cy.get('#dataTable > tbody > tr:first-child td').should('have.length','5')


        cy.get('#dataTable').contains(indexName).parent().parent().within(()=>{
            cy.get('td').eq(2).then((indexPrice) => {
                cy.log(indexName,' price is:',indexPrice.text())
            })

        })
        

        cy.get('#dataTable > tbody > tr').each((rows)=>{
            cy.get(rows).within(()=>{
                cy.get('td').each((celldata)=>{
                    cy.log(celldata.text())
                })
            })
        })


            
        
        
    })
})