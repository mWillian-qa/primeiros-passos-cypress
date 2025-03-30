import userData from '../fixtures/users/user-data.json'

class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails/empNumber/7']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            middleNameField: "[name='middleName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateButtonClose: ".--close",
            submitButton: "[type='submit']", 
            genericComboBox: ".oxd-select-text--active",
            selectFirstCombobox: ".oxd-select-dropdown > :nth-child(50)",
            selectSecondCombobox: ".oxd-select-dropdown > :nth-child(2)",
            selectThirdCombobox: ".oxd-select-dropdown > :nth-child(6)",
            birthDateField: "[placeholder='yyyy-dd-mm']",
    
        }

        return selectors
    }
             
    

    fillPersonalDetails(firstnamefield, middlenamefield, lastnamefield, nicknamefield) {
       
        cy.get(this.selectorsList().firstNameField).clear().type(firstnamefield)
        cy.get(this.selectorsList().middleNameField).clear().type(middlenamefield)
        cy.get(this.selectorsList().lastNameField).clear().type(lastnamefield)
        cy.get(this.selectorsList().genericField).eq(2).clear().type(nicknamefield)


    }
    fillEmployeeDetails(employeeidfield, otheridfield, driverslicensenumber, datefield, ssnnumber, sinnumber) {

        
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeidfield)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otheridfield)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverslicensenumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(datefield)
        cy.get(this.selectorsList().dateButtonClose).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(ssnnumber)
        cy.get(this.selectorsList().genericField).eq(8).clear().type(sinnumber)
    }
    fillStatusDetails(birthdatefield, testfield) {

        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true })
        cy.get(this.selectorsList().selectFirstCombobox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true })
        cy.get(this.selectorsList().selectSecondCombobox).click()
        cy.get(this.selectorsList().birthDateField).eq(1).clear().type(birthdatefield)
        cy.get(this.selectorsList().dateButtonClose).click()
        cy.get(this.selectorsList().genericComboBox).eq(2).click({force: true })
        cy.get(this.selectorsList().selectThirdCombobox).click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(testfield)
        
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage