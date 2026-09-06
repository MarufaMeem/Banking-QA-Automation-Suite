Cypress.Commands.add('login', (username, password) => {

    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]')
      .type(username);

    cy.get('input[name="password"]')
      .type(password);

    cy.get('button[type="submit"]')
      .click();

});

Cypress.Commands.add('logout', () => {

    cy.get('.oxd-userdropdown-tab')
      .click();

    cy.contains('Logout')
      .click();

});