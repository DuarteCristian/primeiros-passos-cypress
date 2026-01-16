import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import myInfoPage from '../pages/myInfoPage'

const Chance = require('chance')
const chance = new Chance()

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const menuPage = new MenuPage()
const myinfoPage = new myInfoPage()
describe('Orange HRM tests', () => {

  const selectorsList = {



  }

  it('User Info Update-Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessmyInfo()

    myinfoPage.fillPersonalDetails(chance.first(), chance.last())
    myinfoPage.fillEmployeeDetails('employeeId', 'otherId', 'driversLicenseNumber', '2025-12-31')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()

  })
})