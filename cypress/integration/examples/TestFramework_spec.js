/// <reference types="cypress" /> 
/// <reference types="cypress-iframe" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects//ProductPage'
import LocationPage from '../pageObjects/DeliveryLocation'

describe('Ent to End flow', function () {
    before(function () {
        cy.fixture('input').then(function(data){
            this.data=data
        });

    })

    it('Add product to cart and check out', function () {
        const homepage = new HomePage();
        const productpage = new ProductPage();
        const locationpage = new LocationPage()
        const baseURI = Cypress.env('url')
        cy.visit(baseURI+"/angularpractice/");
        homepage.getEditNameBoc().type(this.data.name);
        //cy.get("input[name='name']:nth-child(2)").type(this.data.name);
        homepage.getGender().select(this.data.gender);
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2');
        cy.get("input[name='name']:nth-child(2)").should('have.value',this.data.name);
        homepage.getEnterpreneurRadioButton().should('be.disabled');
        homepage.getShopButton().click();
        this.data.products.forEach(function(item){
            cy.selectProduct(item)

        })
        Cypress.config('defaultCommandTimeout',10000);
        productpage.getCheckoutButton().click();




        var sum = 0;
        var finalPrice= 0;
        cy.get("tr td:nth-child(4) strong").each(($element, index, $list) => {
            const price = $element.text();
            var res = price.split(" ");
            res = res[1].trim()
            sum = sum+Number(res)
        }).then(function(){
            cy.log(sum)
        })

        cy.get("h3 strong").then(function(amount){
            var result = amount.text();
            var finalPrice = result.split(" ");
            finalPrice = finalPrice[1].trim()
            finalPrice=Number(finalPrice);
            cy.log("Final Price "+finalPrice)
            expect(sum).to.equal(finalPrice)
        })


        cy.get("button[class='btn btn-success']").click()
        locationpage.getDeliveryLocation().type("India");
        
        cy.get('.suggestions > ul > li > a').click()
        locationpage.getAgreeTermsAndConditions().click({force: true})
        cy.get('.ng-untouched > .btn').click() // click on Purchase

        cy.get('.alert').then(function(element){
            const actualText = element.text();
            expect(actualText.includes('Success')).to.be.true;

        })

    });
});