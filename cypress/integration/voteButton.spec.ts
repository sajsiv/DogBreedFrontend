/// <reference types="cypress" />

describe('On click button test', () => {
  beforeEach(() => {
    cy.visit('https://saj-zeri-patelman-dogvotes.netlify.app/').wait(500);
  })

  it('updates vote count on click of vote bussongs', () => {
    cy.get('p').contains("You've cast 0 votes")
    cy.get('button').eq(1).click()
    cy.get('p').contains("You've cast 1 vote")
    cy.get('button').eq(0).click()
    cy.get('p').contains("You've cast 2 votes")
  })

  it('makes put and post request on click', () => {
    cy.get('button').eq(1).click()
    cy.request("PUT","https://dog-breed-voting-backend-c4b3.herokuapp.com/")
    cy.request("POST","https://dog-breed-voting-backend-c4b3.herokuapp.com/")
  })
  
  it('changes the images', () => {
    cy.get('button').eq(1).click()
    cy.request("GET","https://dog.ceo/api/breeds/image/random/2")
  })  
})
