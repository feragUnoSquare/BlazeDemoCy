class FlightPage {
    selectFlight() {
        cy.get('input[type="submit"]').first().click();
    }
}

export default FlightPage