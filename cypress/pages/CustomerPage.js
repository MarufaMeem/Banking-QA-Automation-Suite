class CustomerPage {

    pimMenu = 'a[href*="pim"]';

    employeeNameInput =
        'input[placeholder="Type for hints..."]';

    searchButton =
        'button[type="submit"]';

    openPIM() {
        cy.get(this.pimMenu).first().click();
    }

    enterEmployeeName(name) {
        cy.get(this.employeeNameInput)
          .first()
          .type(name);
    }

    clickSearch() {
        cy.get(this.searchButton)
          .click();
    }

}

export default CustomerPage;