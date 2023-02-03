/// <reference types="cypress" /> 
/// <reference types="cypress-iframe" />
describe('Handle child Window',function(){
    it('child window',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").click();
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


    });
});