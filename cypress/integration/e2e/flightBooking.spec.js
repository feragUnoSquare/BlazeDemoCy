import HomePage from "../../page_object/HomePage";
import FlightPage from "../../page_object/FlightPage";
import PurchasePage from "../../page_object/PurchasePage";

describe('Compra de vuelo en BlazeDemo', () => {
    const homePage = new HomePage();
    const flightPage = new FlightPage();
    const purchasePage = new PurchasePage();

    it('Deberia completar el proceso de compra de vuelo', () => {
        homePage.visit();
        homePage.clickFindFlight();

        flightPage.selectFlight();

        purchasePage.flillPassangerDetails(
            'Fernando AG',
            '123 Calle test',
            'New york',
            'NY',
            '10001',
            '1234567812345678'
        );
        purchasePage.purchaseFlight();

        cy.contains('Thank you for your purchase').should('be.visible');
    });
});