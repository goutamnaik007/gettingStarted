class HomePage{
    getEditNameBoc(){
        return  cy.get("input[name='name']:nth-child(2)")
    }

    getEnterpreneurRadioButton(){
        return cy.get("#inlineRadio3")
    }

    getShopButton(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    getGender(){
        return cy.get("select")
    }

}

export default HomePage;