/// <reference types="cypress" />

describe("My first test suite", () => {
    it("first test", () => {
        cy.visit("https://magento.softwaretestingboard.com")
        cy.get("#search").type("Radiant Tee")
        cy.get("#search_autocomplete li").should("have.length", 3)
        cy.get("strong.product-item-name").as("productsSelector")
        cy.get("@productsSelector").find("a").should("have.length", 6)
    })

    it("failed test", () => {
        cy.visit("https://magento.softwaretestingboard.com")
        cy.get("#search").type("Radiant Tee")
        cy.get("#search_autocomplete li").should("have.length", 3)
        cy.get("strong.product-item-name").as("productsSelector")
        cy.get("@productsSelector").find("a").should("have.length", 2)
    })
})