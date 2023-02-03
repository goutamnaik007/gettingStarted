describe('Handle child Window',function(){
    it('child window',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

       //OPEN CHILD WINDOW IN SAME WINDOW AND VERIFY URL.
       cy.get('#opentab').invoke('removeAttr','target').click();
       cy.url().should('include','rahulshettyacademy')
       cy.go('back')

    });
});