class LoginPage {

    selecorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            wrongCredentialAlert: '[role="alert"]',
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithAnyUser(username, password) {
        cy.get(this.selecorsList().usernameField).type(username)
        cy.get(this.selecorsList().passwordField).type(password)
        cy.get(this.selecorsList().loginButton).click()
    }
}
export default LoginPage