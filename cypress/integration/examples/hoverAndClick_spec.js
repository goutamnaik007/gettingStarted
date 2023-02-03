describe('Handle child Window',function(){
    it('child window',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

       //CLICK ON HIDDEN ELEMENT AFTER HOVER.
       cy.get(".mouse-hover-content").invoke('show');
       cy.contains('Top').click();

       cy.url().should('include','top')

       // CLICK ON HIDDEN ELEMENT WITH FORCE CLICK
       cy.contains('Reload').click({force: true});
       cy.url().should('not.include','top')
    });
});