const url = 'http://localhost:3000/'

describe('Pizza Form', () => {

    it('Can navigate to order form', () => {
        cy.visit(url)
        cy.contains('Order Pizza')
            .click()
    })

    it('Can type into Name field', () => {
        cy.get('input[name="name"]')
            .type('a')
            .should('have.value', 'a')
        cy.get('input[name="name"]')
            .type('a')
            .should('have.value', 'aa')
    })

    it('Can select multiple checkboxes', () => {
        cy.get('input[name="pepperoni"]')
            .check()
            .should('have.checked')
        cy.get('input[name="bacon"]')
            .check()
            .should('have.checked')
        cy.get('input[name="olives"]')
            .check()
            .should('have.checked')
    })

    it('Can submit', () => {
        cy.contains('Submit')
            .click()
    })

})