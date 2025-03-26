import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    middleNameField: "[name='middleName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateButtonClose: ".--close",
    submitButton: "[type='submit']", 
    genericKomboField: ".oxd-select-text--active",
    birthDateField: "[placeholder='yyyy-dd-mm']",
    
  }

  
  it.only('User - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type(userData.myInfoData.firtnamefield)
    cy.get(selectorsList.middleNameField).clear().type(userData.myInfoData.middlenamefield)
    cy.get(selectorsList.lastNameField).clear().type(userData.myInfoData.lastnamefield)
    cy.get(selectorsList.genericField).eq(3).clear().type(userData.myInfoData.employeeidfield)
    cy.get(selectorsList.genericField).eq(4).clear().type(userData.myInfoData.otheridfield)
    cy.get(selectorsList.genericField).eq(5).clear().type(userData.myInfoData.driverslicensenumber)
    cy.get(selectorsList.dateField).eq(0).clear().type(userData.myInfoData.datefield)
    cy.get(selectorsList.dateButtonClose).click()
    cy.get(selectorsList.genericKomboField).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(50)').click()
    cy.get(selectorsList.genericKomboField).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(selectorsList.birthDateField).eq(1).clear().type(userData.myInfoData.birthdatefield)
    cy.get(selectorsList.dateButtonClose).click()

    // espaço pra colocar a escolha do gênero

    cy.get(selectorsList.genericKomboField).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(6)').click()
    cy.get(selectorsList.genericField).eq(9).clear().type(userData.myInfoData.testfield)
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }) 
})