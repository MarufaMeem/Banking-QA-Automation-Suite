import LoginPage from '../../pages/LoginPage';

describe('Authentication Module', () => {

    const loginPage = new LoginPage();

    it('Valid Login', () => {

        cy.fixture('users').then((users) => {

            cy.visit('/web/index.php/auth/login');

            loginPage.login(
                users.admin.username,
                users.admin.password
            );

            cy.url()
                .should('include', '/dashboard');

        });

    });

    it('Invalid Login', () => {

    cy.fixture('users').then((users) => {

        cy.visit('/web/index.php/auth/login');

        loginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );

        cy.contains('Invalid credentials')
          .should('be.visible');

    });

});

});