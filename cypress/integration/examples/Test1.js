// cypress code - spec
/// <reference types="cypress" />
describe('My test suite', function(){
    it('My first test', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('to')
        cy.wait(2000);
        cy.get('.product-image:visible').should('have.length',2);

        // Declaring webelement
        cy.get('.products').as('allProducts')

        //parent chaining
        cy.get('@allProducts').find('.product').should('have.length',2);
        cy.get('@allProducts').find('.product').eq(1).contains('ADD TO CART').click();

        // Find element with name Tomato and click on it
        cy.get('@allProducts').find('.product').each(($element, index, $list) =>{
           const vegName = $element.find('h4.product-name').text();
           if(vegName.includes('Tomato')) {
            cy.wrap($element).find('button').click();
           }
        });

        // Click on ADD TO CART button based on veggie name
        cy.get('@allProducts').find('.product').each(($element, index, $list) =>{
            const vegName = $element.find('h4.product-name').text();
            if(vegName.includes('Tomato')) {
                cy.wrap($element).find('a.increment').click().then(function(){
                    cy.wrap($element).find('button').click();

                })
                
            }
         });

         // Print text from logo
         // text is a jquery function. so cypress cannot resolve promise here. For that , we have to use 'then' function over here.
         cy.get('.redLogo').then((logo)=>{
            cy.log(logo.text());
            cy.get('.redLogo').should('have.text','KART');
         });
    });
})