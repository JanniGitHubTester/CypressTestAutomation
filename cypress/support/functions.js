class Functions
{
    visitWebsite(url) {
        cy.visit(url);
    }

    loadTestdata() {
        beforeEach(function () {
            cy.fixture('example').then(function (data) {
              this.data = data;
            })
          })
    }

    loadTestdataNew(file) {
        cy.fixture(file).then((testdata) => {
            typeData(komponentname,item)
        })
    }

    typeData(komponentname,item) {
        cy.get(komponentname).type(testdata.item)
    }

    clickByElement(element){
        cy.get(element).click()
    }

    clickByText(text){
        cy.contains(text).click()
    }

    checkByElement(element){
        cy.get(element).check().should('be.checked')
    }

    uncheckedByElement(element){
        cy.get(element).uncheck().should('not.be.checked')
    }

    selectByElement(element, value){
        cy.get(element).select(value).should('have.value', value)
    }

    sleep(milisec){
        cy.wait(milisec)
    }

    isVisblebyElement(element){
        return cy.get(element).should('be.visible')
    }

    isNotVisblebyElement(element){
        return cy.get(element).should('not.be.visible')
    }

    goBack(){
        cy.go('back')
    }

    goForward(){
        cy.go('forward')
    }
}
export default Functions