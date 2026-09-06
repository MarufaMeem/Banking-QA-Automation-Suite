class TransferPage {

    successfulTransfer(fromAccount, toAccount, amount) {

        cy.log('Performing Transfer');

        cy.get('#fromAccount')
          .type(fromAccount);

        cy.get('#toAccount')
          .type(toAccount);

        cy.get('#amount')
          .type(amount);

        cy.contains('Transfer')
          .click();

    }

    insufficientBalanceTransfer(fromAccount, toAccount, amount) {

        cy.get('#fromAccount')
          .type(fromAccount);

        cy.get('#toAccount')
          .type(toAccount);

        cy.get('#amount')
          .type(amount);

        cy.contains('Transfer')
          .click();

    }

    invalidAccountTransfer(fromAccount, toAccount, amount) {

        cy.get('#fromAccount')
          .type(fromAccount);

        cy.get('#toAccount')
          .type(toAccount);

        cy.get('#amount')
          .type(amount);

        cy.contains('Transfer')
          .click();

    }

}

export default TransferPage;