/// <reference types="cypress" />

import { isTypedArray } from "cypress/types/lodash";

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Top 3 dogs leaderboard', () => {
  it("loads images of top 3 dogs", () => {
    cy.visit("https://saj-zeri-patelman-dogvotes.netlify.app/");
    cy.contains("Top 10 Dog Breeds")

  });
  it("displays top 3 dogs with images", () => {
    cy.intercept('GET', 'https://dog.ceo/api/breed/**').as('getNewImage')
    cy.get(".top3Image").should("be.visible").click({ multiple: true })
    cy.wait('@getNewImage')
    .its('response.body.message').should('contain', 'https://images.dog.ceo/breeds/')
    cy.get(".top3Image").should("be.visible")
  })


  })
  