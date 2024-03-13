/// <reference types="cypress" />

describe("Page object scenarios", () => {
    it("Add item to wish list", () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login")
        cy.get("#email").type("test2@test.test")
        cy.get("#pass").type("Testtest123")
        cy.get("button.action.login.primary").click()
        cy.get('a#ui-id-3', { timeout: 2000 }).click()
        cy.get(".product-item-name a").each(($element, index, $list) => {
            var productName = $element.text()
            if (productName.includes("Stellar Solar Jacket")) {
                cy.get(".product-item-name a").eq(index).click()
            }
        })
        cy.wait(3000)
        cy.get("div.product-addto-links a[data-action='add-to-wishlist'] span").click()
        cy.get("[data-ui-id='message-success'] div").should("be.visible")
        cy.get("[data-ui-id='message-success'] div").should("contain", "Stellar Solar Jacket")
    })

    it("Add item to cart", () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login")
        cy.get("#email").type("test2@test.test")
        cy.get("#pass").type("Testtest123")
        cy.get("button.action.login.primary").click()
        cy.get('a#ui-id-3', { timeout: 2000 }).click()
        cy.get(".product-item-name a").each(($element, index, $list) => {
            var productName = $element.text()
            if (productName.includes("Zoltan Gym Tee")) {
                cy.get(".product-item-name a").eq(index).click()
            }
        })
        cy.wait(3000)
        cy.get("div[option-label='M']").click()
        cy.get("div[option-label='Green']").click()
        cy.get("button#product-addtocart-button").click()
        cy.get("div[data-ui-id='message-success']", { timeout: 3000 }).should("be.visible")
        cy.get("a.action.showcart").click()
        cy.get("button#top-cart-btn-checkout").should("exist")
    })
})