import LoginPage from '../../pages/LoginPage';
import CustomerPage from '../../pages/CustomerPage';

describe('Customer Module', () => {

    const loginPage = new LoginPage();

    const customerPage = new CustomerPage();

    it('Search Employee', () => {

        cy.visit('/web/index.php/auth/login');

        loginPage.login(
            'Admin',
            'admin123'
        );

        cy.url()
          .should('include', '/dashboard');

        customerPage.openPIM();

        customerPage.enterEmployeeName('Linda');

        customerPage.clickSearch();

    });

});