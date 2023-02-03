describe('Checkboxes Test',function(){
    it('Checkboxes',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // auto-accept browser alert and print alert window text
        cy.get('#alertbtn').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.equal('Hello , share this practice page and share your knowledge');
        });

        // auto-confirm browser alert and print confirm alert window text
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('Hello , Are you sure you want to confirm?');
        });

    });
});