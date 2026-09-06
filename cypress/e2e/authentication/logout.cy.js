describe('Logout Test', () => {

    it('Logout Successfully', () => {

        cy.fixture('users').then((users) => {

            cy.login(
                users.admin.username,
                users.admin.password
            );

            cy.logout();

            cy.url()
              .should('include', '/auth/login');

        });

    });

});