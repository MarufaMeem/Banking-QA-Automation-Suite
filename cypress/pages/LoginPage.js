class LoginPage {

    usernameField = "#username";

    passwordField = "#password";

    loginButton = "#loginBtn";

    enterUsername(username) {
        cy.get(this.usernameField).type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordField).type(password);
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