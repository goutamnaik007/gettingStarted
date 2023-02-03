class DeliveryLocation {
    getDeliveryLocation(){
        return cy.get("#country")
    }

    getAgreeTermsAndConditions(){
        return cy.get('.checkbox')
    }

}
export default DeliveryLocation