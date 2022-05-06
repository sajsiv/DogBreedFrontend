/// <reference types="cypress" />

describe("general progression for refreshing leaderboard", () => {
    it("visit the site", () => {
        cy.visit("https://saj-zeri-patelman-dogvotes.netlify.app");
        // cy.visit("http://localhost:3000")
        cy.contains("Who let the dogs app?");
        cy.contains("Top 10 Dog Breeds");
    });
    it ("clicks on the refresh button", () => {
        cy.intercept("https://dog-breed-voting-backend-c4b3.herokuapp.com/topten").as("updateLeaderboard");
        cy.contains("REFRESH");
        cy.get("#leaderboard-refresh-button").click();
        cy.wait("@updateLeaderboard")
    });
})