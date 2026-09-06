class AccountPage {

    createAccount(customerId, accountType, balance) {

        cy.log('Creating Account');

        cy.get('#customerId')
          .type(customerId);

        cy.get('#accountType')
          .select(accountType);

        cy.get('#openingBalance')
          .type(balance);

        cy.contains('Create Account')
          .click();

    }

    freezeAccount(accountNumber) {

        cy.log('Freezing Account');

        cy.get('#accountNumber')
          .type(accountNumber);

        cy.contains('Search')
          .click();

        cy.contains('Freeze Account')
          .click();

    }

}

export default AccountPage;