class LoginPage {

    usernameInput = 'input[name="username"]';

    passwordInput = 'input[name="password"]';

    loginButton = 'button[type="submit"]';

    enterUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    login(username, password) {

        this.enterUsername(username);

        this.enterPassword(password);

        this.clickLogin();

    }

}

export default LoginPage;