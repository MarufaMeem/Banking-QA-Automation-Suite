import TransferPage from '../../pages/TransferPage';

describe('Transfer Module', () => {

    const transferPage = new TransferPage();

    it('Invalid Destination Account', () => {

        cy.fixture('users').then((users) => {

            cy.login(
                users.admin.username,
                users.admin.password
            );

            transferPage.invalidAccountTransfer(
                'ACC1001',
                'INVALID999',
                '5000'
            );

            cy.contains('Invalid Account')
              .should('be.visible');

        });

    });

});