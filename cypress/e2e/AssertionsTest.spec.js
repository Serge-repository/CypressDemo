/// <reference types="cypress" />

describe("Assertions test suite", () => {
    it("Contains keyword test", () => {
        cy.visit("https://magento.softwaretestingboard.com")
        cy.contains("Shop New Yoga").click()
        cy.get("div.breadcrumbs strong").should("contain", "New Luma Yoga Collection")
        cy.get("div.breadcrumbs strong").then(($element) => {
            expect($element.text()).to.contain("New Luma Yoga Collection")
        })
        cy.get("div[data-container='product-grid']").eq(0).within(() => {
            cy.get("strong a").should("contain", "Echo Fit Compression Short ")
        })
    })

    it("Assertions test", () => {
        cy.visit("https://magento.softwaretestingboard.com")
        cy.get("strong.subtitle.empty").should("exist")
        cy.get("div.something").should("not.exist")
        cy.contains("Shop New Yoga").click()

        cy.url().should("include", "yoga-new")

        cy.get("input#search").type("abc123")
        cy.get("input#search").should("have.value", "abc123")

        cy.get("li.item.product.product-item").its("length").should("be.gte", 10)
        cy.get("div.minicart-wrapper").invoke("attr", "data-block").should("eq", "minicart")
        cy.get("div.minicart-wrapper").invoke("attr", "data-block").should("include", "cart")
    })

    it("Disabled element test", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_controls")
        cy.get("input[type='text']").should("be.disabled")
    })

})