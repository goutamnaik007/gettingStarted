// cypress code - spec
/// <reference types="cypress" />
describe('My test suite', function(){
    it('My first test', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('to')
        cy.wait(2000);
       
         // Declaring webelement
         cy.get('.products').as('allProducts');

        // Click on ADD TO CART button based on veggie name
        cy.get('@allProducts').find('.product').each(($element, index, $list) =>{
            const vegName = $element.find('h4.product-name').text();
            if(vegName.includes('Tomato')) {
                cy.wrap($element).find('a.increment').click().then(function(){
                    cy.wrap($element).find('button').click();

                })
                
            }
         }); 
         cy.get("[alt='Cart']").click();
         cy.contains('PROCEED TO CHECKOUT').click();
         cy.get('button').contains('Place Order').click();
    });
})