class HomePage {
    visit(){
        cy.visit('https://blazedemo.com/')
    }

    selectDepartureCity(city){
        cy.get('select[name="fromPort"').select(city);
    }

    selectDestinationCity(city){
        cy.get('select[name="toPort"').select(city);
    }

    clickFindFlight(){
        cy.get('input[type="submit"');
    }
}

export default HomePage;