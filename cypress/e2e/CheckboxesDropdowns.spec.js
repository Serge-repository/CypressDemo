/// <reference types="cypress" />

describe("Checkboxes & dropdowns test suite", () => {
    it("Checkboxes test", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_controls")
        cy.get("input[type='checkbox']").should("not.be.checked")
        cy.get("input[type='checkbox']").check()
        cy.get("input[type='checkbox']").should("be.checked")
        cy.get("input[type='checkbox']").uncheck()
    })

    it("Dropdowns test", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get("select#dropdown").select(1)
        cy.get("select#dropdown" + " option:selected").should("have.text", "Option 1")
    })

})