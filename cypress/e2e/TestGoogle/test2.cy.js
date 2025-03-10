describe("Suita teste LinkedIn", () => {

    //test 2 
    it('Logare', () => {
        cy.visit('https://www.linkedin.com/');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('brinzilalaura@gmail.com');
        cy.get('#password').type('BumbleBee11!!');
        cy.get('.btn__primary--large').click();
    })
})