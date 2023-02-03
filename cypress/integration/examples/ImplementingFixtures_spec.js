/// <reference types="cypress" /> 
/// <reference types="cypress-iframe" />
describe('Handle child Window', function () {
    before(function () {
        cy.fixture('input').then(function(data){
            this.data=data
        });

    })

    it('child window', function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("input[name='name']:nth-child(2)").type(this.data.name);
        cy.get("select").select(this.data.gender);
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2');
        cy.get("input[name='name']:nth-child(2)").should('have.value',this.data.name);
        cy.get("#inlineRadio3").should('be.disabled');

        cy.get(':nth-child(2) > .nav-link').click();

        
        this.data.products.forEach(function(item){
            cy.selectProduct(item)

        })

    });
});