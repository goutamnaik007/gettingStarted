//get a property value for a given element
describe('Accessing atribute values',function(){
    it('Access HREF attribute of an webelement and print the ref URL',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

       // PROP() is used to access element attribute
       cy.get('#opentab').then(function(ele){
        const url = ele.prop('href')
        cy.log(url);
       })
    });
});