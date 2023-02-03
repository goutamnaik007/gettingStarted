describe('Checkboxes Test',function(){
    it('Checkboxes',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#autocomplete').type("Ind");
        cy.get('.ui-menu-item div').each(($option, index, $list) =>{
            if($option.text()==='India'){
                cy.wrap($option).click();
            }
        });
        cy.get('#autocomplete').should('have.value','India');
    });
});