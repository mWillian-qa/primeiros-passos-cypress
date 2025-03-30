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
    
    // myInfoPage.myInfoEdit(
      
    //   userData.myInfoData.firtnamefield,
    //   userData.myInfoData.middlenamefield,

    // )

  
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type(userData.myInfoData.firtnamefield)
    // cy.get(selectorsList.middleNameField).clear().type(userData.myInfoData.middlenamefield)
    // cy.get(selectorsList.lastNameField).clear().type(userData.myInfoData.lastnamefield)
    // cy.get(selectorsList.genericField).eq(3).clear().type(userData.myInfoData.employeeidfield)
    // cy.get(selectorsList.genericField).eq(4).clear().type(userData.myInfoData.otheridfield)
    // cy.get(selectorsList.genericField).eq(5).clear().type(userData.myInfoData.driverslicensenumber)
    // cy.get(selectorsList.dateField).eq(0).clear().type(userData.myInfoData.datefield)
    // cy.get(selectorsList.dateButtonClose).click()
    // cy.get(selectorsList.genericComboBox).eq(0).click({force: true })
    // cy.get(selectorsList.selectFirstCombobox).click()
    // cy.get(selectorsList.genericComboBox).eq(1).click({force: true })
    // cy.get(selectorsList.selectSecondCombobox).click()
    // cy.get(selectorsList.birthDateField).eq(1).clear().type(userData.myInfoData.birthdatefield)
    // cy.get(selectorsList.dateButtonClose).click()
    // cy.get(selectorsList.genericComboBox).eq(2).click({force: true })
    // cy.get(selectorsList.selectThirdCombobox).click()
    // cy.get(selectorsList.genericField).eq(9).clear().type(userData.myInfoData.testfield)
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }) 
})