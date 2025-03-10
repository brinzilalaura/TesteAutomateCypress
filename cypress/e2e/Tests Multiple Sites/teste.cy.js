describe('Teste pe diverse site-uri', () => {

    // //verificare segment din URL
    // it('Verific daca un URL contine ceva', () => {
    //     cy.visit('https://www.digi24.ro/stiri/externe/putin-vrea-sa-ne-testeze-avertizeaza-seful-serviciului-german-de-informatii-scenariul-care-sperie-berlinul-speram-ca-nu-e-adevarat-3149953')

    //     cy.url().should('include', '/stiri/') // verifica un segment

    // })

    // testul cu delay 
    // it('asteapta 10 secunde', () => {
    //     cy.visit('https://google.com');
    //     cy.get('#APjFqb').click();

    //     cy.wait(10000);

    //     cy.get('#APjFqb').type('Au  trecut 10 secunde');
    // })

    // it('selecteaza folosind un atribut',  () => {
    //     cy.visit('https://google.com');

    //     cy.get('#APjFqb').click();

    //     cy.get('[alt= "Google"]').should('be.visible'); // selector atribut alt + assertion cu visible
    // })

    it('Fac un screenshot la pagina', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();

    
        cy.screenshot();
    })

    // it('Fac o constanta si verificari de valoare', () => {
    //     cy.visit('https://google.com');
    //     cy.get('#L2AGLb').click();
    //     const googleSearch = cy.get('#APjFqb');

    //     googleSearch.type('123')
    //     googleSearch.should('have.value', '123') // asertion contine textul - merge doar la campurile de text/ textField
    // })

    // it('Fac o cautare de class pe un element: button', () => {
    //     cy.visit('https://libris.ro');
        
    //     cy.get('.consent-mode-modal-btn-accept-ct > a').click();
    //     cy.get('#autoCompleteButton').should('have.class', 'onSearchClick');

    //     cy.get('#autoComplete').type('Dostoievski');
    //     cy.get('#autoCompleteButton').click();

    // })
}) 