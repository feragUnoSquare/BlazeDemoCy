class PurchasePage {
    flillPassangerDetails(name, address, city, state, zipCode, cardNumber){
        cy.get('#inputName').type(name)
        cy.get('#address').type(address)
        cy.get('#city').type(city)
        cy.get('#state').type(state)
        cy.get('#zipCode').type(zipCode)
        cy.get('#creditCardNumber').type(cardNumber)
    }

    purchaseFlight() {
        cy.get('input[type="submit"]')
    }
}

export default PurchasePage