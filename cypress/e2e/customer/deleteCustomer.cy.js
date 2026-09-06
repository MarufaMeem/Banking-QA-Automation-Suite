import CustomerPage from '../../pages/CustomerPage';

describe('Customer Module', () => {

    const customerPage = new CustomerPage();

    it('Delete Customer', () => {

        cy.fixture('users').then((users) => {

            cy.login(
                users.admin.username,
                users.admin.password
            );

            customerPage.openPIM();

            customerPage.deleteCustomer();

        });

    });

});