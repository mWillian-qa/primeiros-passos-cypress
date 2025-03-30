import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Tests', () => {
  
    it('User - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    loginPage.loginWithWrongUser(userData.userFail.username, userData.userFail.password)
        
  }) 
})