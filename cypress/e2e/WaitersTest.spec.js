/// <reference types="cypress" />

describe("Waiters test suite", () => {
    it("Waiters test", () => {
        cy.visit("https://magento.softwaretestingboard.com")
        // cy.wait(3000)
        cy.get("div[class*='panel'] span.not-logged-in").should("be.visible")
        cy.get("div[class*='panel'] span.not-logged-in").then(($element) => {
            var elementText = $element.text()
            expect(elementText).to.contain("Click “Write for us” link in the footer to submit a guest post")
        })
        cy.get("span.action.more.button", { timeout: 5000 }).click()
    })

    it("The internet wait test", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.get("div#start button").click()
        cy.get("div#finish h4", { timeout: 5000 }).should("be.visible")

    })
})