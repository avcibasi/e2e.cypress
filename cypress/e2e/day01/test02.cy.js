/// <reference types="cypress" />
context('My second test', () => {                                 // contex,, we can use it instead of describe......... 
   beforeEach( 'Go to url bfore each test',() =>{                 //  beforeEach,, it is gonna work before each test......
        cy.visit('/')
   })                                       
    it('Url test',() => {
        cy.url().should('include','google')
        cy.url().should('eq','https://www.google.com/')
        
    })
    it('Search',() => {
    
    cy.get('#APjFqb').type('fevzi avcibasi{enter}')
    })
    it('TimeOut',() => {
    
    cy.get('#APjFqb',{timeout:500}).type('fevzi avcibasi{enter}')
    })
})