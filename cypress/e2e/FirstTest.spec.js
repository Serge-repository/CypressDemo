/// <reference types="cypress" />

describe("My first test suite", () => {
    it("first test", () => {
        cy.visit("https://magento.softwaretestingboard.com")
        cy.get("#search").type("Radiant Tee")
        cy.get("#search_autocomplete li").should("have.length", 3)
    })
})