/// <reference types="cypress" />

// describe('go to deployed app', () => {
//     beforeEach(()=>{
//         cy.visit('https://saj-zeri-patelman-dogvotes.netlify.app')
//     })
// })

it('there should be two dog images in the voting-box div', ()=>{
    cy.visit('https://saj-zeri-patelman-dogvotes.netlify.app')
    cy.get('.image').eq(0)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)
    })
    cy.get('.image').eq(1)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)
    })
  
})

it('should  send a get request to dog api, with a response body that constains the key:value - status: success when the left image is clicked', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breed/**').as('getNewImage')
    cy.visit('https://saj-zeri-patelman-dogvotes.netlify.app')
    cy.get('.image').eq(0)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)})
    .click()
    cy.wait('@getNewImage')
    .its('response.body').should('have.property', 'status', 'success')
    cy.get('.image').eq(0)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)
    })
    
})
it('should  send a get request to dog api, with a response body that constains the key message when left image is clicked', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breed/**').as('getNewImage')
    cy.visit('https://saj-zeri-patelman-dogvotes.netlify.app')
    cy.get('.image').eq(0)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)})
    .click()
    cy.wait('@getNewImage')
    .its('response.body').should('have.property', 'message')
    cy.get('.image').eq(0)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)
    })
    
    
})
it('should  send a get request to dog api, with a response body that constains the key:value - status: success when the right image is clicked', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breed/**').as('getNewImage')
    cy.visit('https://saj-zeri-patelman-dogvotes.netlify.app')
    cy.get('.image').eq(1)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)})
    .click()
    cy.wait('@getNewImage')
    .its('response.body').should('have.property', 'status', 'success')
    cy.get('.image').eq(1)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)
    })
    
    
})

it('should  send a get request to dog api, with a response body that constains the key message when right image is clicked', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breed/**').as('getNewImage')
    cy.visit('https://saj-zeri-patelman-dogvotes.netlify.app')
    cy.get('.image').eq(1)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)})
    .click()
    cy.wait('@getNewImage')
    .its('response.body').should('have.property', 'message')
    cy.get('.image').eq(1)
    .should('be.visible')
    .should(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0)
        expect(img.naturalHeight).to.be.greaterThan(0)
    })

})
