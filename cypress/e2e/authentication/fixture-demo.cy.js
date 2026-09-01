describe('Fixture Demo', () => {

    it('Read User Data', () => {

        cy.fixture('users').then((users) => {

            expect(users.admin.username)
                .to.equal('admin');

        });

    });

});