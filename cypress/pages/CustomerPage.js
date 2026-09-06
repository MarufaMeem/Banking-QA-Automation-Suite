class CustomerPage {

    pimMenu = 'a[href*="pim"]';

    addButton = 'button:contains("Add")';

    firstNameInput = 'input[name="firstName"]';

    lastNameInput = 'input[name="lastName"]';

    employeeIdInput = '.oxd-input';

    saveButton = 'button[type="submit"]';

    searchInput = '.oxd-input';

    searchButton = 'button[type="submit"]';

    deleteButton = '.bi-trash';

    editButton = '.bi-pencil';

    openPIM() {

        cy.get(this.pimMenu)
          .first()
          .click();

    }

    createCustomer(firstName, lastName) {

        cy.contains('Add')
          .click();

        cy.get('input[name="firstName"]')
          .type(firstName);

        cy.get('input[name="lastName"]')
          .type(lastName);

        cy.contains('Save')
          .click();

    }

    searchCustomer(customerName) {

        cy.get('input')
          .first()
          .type(customerName);

        cy.contains('Search')
          .click();

    }

    updateCustomer(firstName) {

        cy.get('.bi-pencil')
          .first()
          .click();

        cy.get('input[name="firstName"]')
          .clear()
          .type(firstName);

        cy.contains('Save')
          .click();

    }

    deleteCustomer() {

        cy.get('.bi-trash')
          .first()
          .click();

        cy.contains('Yes, Delete')
          .click();

    }

}

export default CustomerPage;