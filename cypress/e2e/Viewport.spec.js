/// <reference types="cypress" />

describe("Mobile view suite", () => {

    it("Viewport test iPhone SE", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.viewport("iphone-se2")
        cy.wait(2000)
        cy.get("span[data-action='toggle-nav']").trigger("click")
        cy.get("#ui-id-7").trigger("click")
        cy.get("a[href*='training'][class='ui-state-focus']").trigger("click")
        cy.url().should("include", "/training")
    })

    it("Viewport test iPhone 12 pro - mouse hover", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.viewport(390, 844)
        cy.wait(2000)
        cy.get("span.action.more.button").trigger('touchstart', { force: true })
    })

})
