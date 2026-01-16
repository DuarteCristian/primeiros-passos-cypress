class myInfoPage {
    selectorsList() {
        const selectors = {

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

        return selectors

    }
    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(employeeId, otherIdTest, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherIdTest)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast')
    }
    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()
    }
}





export default myInfoPage