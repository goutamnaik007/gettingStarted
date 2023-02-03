describe('Handle web table', function () {
    it('retrieving price based on course name', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('tr td:nth-child(2)').each(($element, index, $list) => {
            var text = $element.text();
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    cy.log(price.text());
                    expect(price.text()).to.equal('25');
                })
            }
        })
    });
});