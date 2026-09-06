import AccountPage from '../../pages/AccountPage';

describe('Account Module', () => {

    const accountPage = new AccountPage();

    it('Create Account', () => {

        cy.fixture('users').then((users) => {

            cy.login(
                users.admin.username,
                users.admin.password
            );

            accountPage.createAccount(
                '1001',
                'SAVINGS',
                '50000'
            );

        });

    });

});