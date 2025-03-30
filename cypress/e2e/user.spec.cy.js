import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
    it.only('User - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(userData.myInfoData.firstnamefield, userData.myInfoData.middlenamefield, userData.myInfoData.lastnamefield, userData.myInfoData.nicknamefield)
    myInfoPage.fillEmployeeDetails(userData.myInfoData.employeeidfield, userData.myInfoData.otheridfield, userData.myInfoData.driverslicensenumber, userData.myInfoData.datefield, userData.myInfoData.ssnnumber, userData.myInfoData.sinnumber)
    myInfoPage.fillStatusDetails(userData.myInfoData.birthdatefield, userData.myInfoData.testfield)
    myInfoPage.saveForm()

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }) 
})