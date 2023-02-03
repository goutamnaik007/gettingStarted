describe('Checkboxes Test',function(){
    it('Checkboxes',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('select').select('Option2').should('have.value','option2');
    })
})