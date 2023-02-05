/// <reference types = "cypress"  />
import { faker } from '@faker-js/faker';



describe('Test Sample Banking Application',()=>{
    it('Create and Verify customer account',()=>{
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
        cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()
        cy.get('button[ng-click="showCust()"]').click()
        cy.get('.table.table-bordered.table-striped').contains('Dumbledore').parent().within(()=>{
            cy.get('td').eq(4).children().click()
        })

        cy.get('button[ng-click="deleteCust(cust)"]').each(($element)=>{
            $element.click()
            //cy.wait(2000)
        })
        
        cy.get('button[ng-click="addCust()"]').click()

        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const zipCode = faker.address.zipCode()

        cy.get('input[placeholder="First Name"]').type(firstName)
        cy.get('input[placeholder="Last Name"]').type(lastName)
        cy.get('input[placeholder="Post Code"]').type(zipCode)

        cy.get('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > button').click()

        cy.get('button[ng-click="openAccount()"]').click()

        const fullName = firstName + " " + lastName


        cy.get('#userSelect').select(fullName)

        cy.get('#currency').select('Rupee')

        cy.contains('Process').click()

        const acctNum = cy.on('window:alert',(alertText)=>{
            
            const accntNmbr = alertText.split(":")[1].trim()
            return accntNmbr
        })

        console.log(acctNum)

        
        
        cy.get('button[ng-click="showCust()"]').click()

      /*  
        cy.get('.table.table-bordered.table-striped > tbody > tr').within(($element)=>{
                cy.wrap($element).eq(0).should('contain',firstName)
            })
           // .its('text').should('eq',firstName)
        */

        
        cy.get('.table.table-bordered.table-striped > tbody > tr > td:nth-child(1)').should('have.text',firstName)
        cy.get('.table.table-bordered.table-striped > tbody > tr > td:nth-child(2)').should('have.text',lastName)
        cy.get('.table.table-bordered.table-striped > tbody > tr > td:nth-child(3)').should('have.text',zipCode)

    })

})


        

