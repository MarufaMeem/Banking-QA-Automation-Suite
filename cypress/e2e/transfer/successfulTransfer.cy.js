import TransferPage from '../../pages/TransferPage';

describe('Transfer Module', () => {

    const transferPage = new TransferPage();

    it('Successful Transfer', () => {

        cy.fixture('users').then((users) => {

            cy.login(
                users.admin.username,
                users.admin.password
            );

            transferPage.successfulTransfer(
                'ACC1001',
                'ACC1002',
                '5000'
            );

        });

    });

});