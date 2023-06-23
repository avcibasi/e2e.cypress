/// <reference types="cypress" />

// mocha
describe('my first case', () => {
    it('url test',() => {
       cy.visit('https://www.google.com/')
        cy.url().should('include','google')
    })
    
    
    it('Title test',() => {
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
    })
})