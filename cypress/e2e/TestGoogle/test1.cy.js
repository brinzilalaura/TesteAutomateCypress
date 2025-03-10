describe('Site google.com', () => {

    //test1 
    it('Functionalizare cu o cautare basic', () => {
        cy.visit('http://google.com');
        cy.get("#L2AGLb");
        cy.get(".gLFyf").type("vlog de it").type("{enter}");
    })
})