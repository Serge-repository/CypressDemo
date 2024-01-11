/// <reference types="cypress" />

describe("Handling tables and lists", () => {
    it("Alerts test", () => {
        var expectedJacketNames = ["Proteus Fitness Jackshirt", "Montana Wind Jacket", "Jupiter All-Weather Trainer",
            "Typhon Performance Fleece-lined Jacket", "Mars HeatTech™ Pullover", "Taurus Elements Shell", "Lando Gym Jacket",
            "Orion Two-Tone Fitted Jacket", "Kenobi Trail Jacket", "Hyperion Elements Jacket", "Beaumont Summit Kit"]

        cy.visit("https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html")
    })

})