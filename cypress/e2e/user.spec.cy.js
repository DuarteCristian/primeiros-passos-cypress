import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPAge'
import MenuPage from '../pages/menuPage'
const dashboardpage = new dashboardPage()
const loginPage = new LoginPage()
const menuPage = new MenuPage()
describe('Orange HRM tests', () => {

  const selectorsList = {



    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    saveButton: '[type="submit"]',
    genericCombobox: '.oxd-select-text--arrow',
    secondItemCombobox: '.oxd-select-dropdown > :nth-child(27)',
    thirdItemCombobox: '.oxd-select-dropdown > :nth-child(2)',
    submitButton: '.orangehrm-left-space',
  }

  it.only('User Info Update-Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardpage.checkDashboardPage()

    menuPage.accessmyInfo()


    cy.get(selectorsList.firstNameField).clear().type("FirstNameTest")
    cy.get(selectorsList.lastNameField).clear().type("LastNameTest")
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdTest")
    cy.get(selectorsList.genericField).eq(5).clear().type("DriversLicenseNumberTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("2026-12-01")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
  })
  it('login-Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})