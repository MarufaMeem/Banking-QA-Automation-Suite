import TransferPage from '../../pages/TransferPage';

describe('Transfer Module', () => {

    const transferPage = new TransferPage();

    it('Insufficient Balance Transfer', () => {

        cy.fixture('users').then((users) => {

            cy.login(
                users.admin.username,
                users.admin.password
            );

            transferPage.insufficientBalanceTransfer(
                'ACC1001',
                'ACC1002',
                '50000'
            );

            cy.contains('Insufficient Balance')
              .should('be.visible');

        });

    });

});