import AccountPage from '../../pages/AccountPage';

describe('Account Module', () => {

    const accountPage = new AccountPage();

    it('Freeze Account', () => {

        cy.fixture('users').then((users) => {

            cy.login(
                users.admin.username,
                users.admin.password
            );

            accountPage.freezeAccount(
                'ACC1001'
            );

        });

    });

});