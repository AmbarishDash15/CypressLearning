/// <reference types = "cypress"  />

beforeEach(()=>{
  cy.visit('https://www.saucedemo.com/')
})

describe('Sauce Demo Automation', () => {
  it('Valid User Login', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.title().should('eq','Swag Labs')
  })

  it('Locked out user',()=>{
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain',' Sorry, this user has been locked')
    cy.get('#login_button_container > div > form > div.error-message-container.error > h3').then((errortext)=>{
      cy.log('The error text is :'+errortext.text())
      const lockedText = errortext.text()
      cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('equal',lockedText)
    })
    
  })
})