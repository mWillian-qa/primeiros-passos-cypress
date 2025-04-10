import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
    it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), 'Middle Name', chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails('qaTester', '649731', '12345', '1985-10-18', chance.ssn(), '0123456789')
    myInfoPage.fillStatusDetails('1990-04-15', '321')
    myInfoPage.saveForm()

  }) 
})