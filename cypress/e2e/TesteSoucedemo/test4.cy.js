describe('Teste soucedemo', () => {

    it('Test de login cu user sau parola gresita', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standart_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        // verific daca exista mesaj de erroare
        cy.get('[data-test="error"]').contains('do not match');
        cy.get('[data-test="error"]').should('exist');
        cy.get('[data-test="error"]').should('be.visible');
    })
})
