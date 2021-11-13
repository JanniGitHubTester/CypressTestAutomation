import Functions from '../../support/functions'
import file from '../../fixtures/example.json'
/// <reference types="Cypress" />

describe('Regressionstest', function() {
    const f = new Functions()   
    const timeout = 1000
    f.loadTestdata()
    /**
    describe('Testfall_001', function() {
       

        it('Testschritt_001 - Seitenaufruf', function() {
           
           cy.log(this.data.UrlGreenKart)
           cy.log(this.data.Produktsuche)
           f.visitWebsite(this.data.UrlGreenKart)
           //cy.visitWebsite(this.data.UrlGreenKart)
           
        })    
    
        it('Testschritt_002 - Produktsuche', () => {
            //cy.log(cy.fixture(this.data.Produktsuche))
            //cy.testdatenAuslesen('example')
            //cy.log(cy.fixture('example.json').as('Produktsuche'))
            //cy.get(".search-keyword").type(this.data.Produktsuche)
            //cy.get(".search-keyword").type(cy.fixture('example.json').as('Produktsuche'))
            //cy.get(".search-keyword").type('ca')
            
            cy.fixture('example.json').then((testdata) => {
                cy.get(".search-keyword").type(testdata.Produktsuche)
            })
            
            f.sleep(timeout)
        })

        it('Testschritt_003 - Produktauswahl', () =>{
            cy.get('.products').as('productLocator')
            cy.get('.product:visible').should('have.length', 4)
            cy.get('@productLocator').find('.product').should('have.length', 4)
           
           // cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
           //     console.log("console testing")
           // })
           // cy.get(':nth-child(2) > .product-action > button').click()
            cy.get('.products').find('.product').each(($el, index, $list) => {
    
                const textSearch = $el.find('h4.product-name').text()
                if(textSearch.includes("Cashews"))
                    $el.find('button').trigger("click")
                })
        })

        it('Testschritt_004 - Pruefe ob Logo vorhanden ', () =>{
            
            cy.get('.brand').should('have.text','GREENKART')
        })
    

        it('Testschritt_005 - Logoausgabe', () =>{
            cy.get('.brand').then(function(logoelement) {
                cy.log(logoelement.text())
            })
            //cy.get('.brand').text()
        })

        it('Testschritt_006 - Warenkorb auswählen, bestätigen und Bestellung aufgeben', () =>{
            f.clickByElement('.cart-icon > img')
            f.clickByText('PROCEED TO CHECKOUT')
            f.clickByText('Place Order')
        })

        it('Testschritt_007 - Land auswählen', () =>{
            f.selectByElement('select', 'Germany')
           
        })  

        it('Testschritt_008 - Bedingungen & Konditionen bestätigen', () =>{
            f.checkByElement('.chkAgree')
            f.sleep(timeout)
            f.uncheckedByElement('.chkAgree')
            f.sleep(timeout)
            f.checkByElement('.chkAgree')
           
        })  
        
    })

    describe('Testfall_002 - Dynamisches Dropdown-Menü ausfüllen', function() {
    
        it('Testschritt_001 - Seitenaufruf', function() {
           
            f.visitWebsite(this.data.UrlPractice)
         })

         it('Testschritt_002 - Suchtext ins Dropdown-Menü eingeben ', function() {
           
            cy.get('#autocomplete').type('Ind')
         })
         
         it('Testschritt_003 - Ergebnis auswählen ', function() {
           
            //cy.get('#autocomplete').type('Ind')

            cy.get('.ui-menu-item div').each(($el, index, $list) => {
                if($el.text()==="India"){
                    $el.click()
                }
            })
         })
    })

    describe('Testfall_003 - Eingabefeld auf Sichtbarkeit prüfen', function() {
    
        it('Testschritt_001 - Seitenaufruf', function() {
           
            f.visitWebsite(this.data.UrlPractice)
         })
         it('Testschritt_002 - Prüfe ob Eingabefeld sichtbar', function() {
           f.isVisblebyElement('#displayed-text').then(function(){
                f.clickByElement('#hide-textbox')
           })
           f.sleep(3000)
           f.isNotVisblebyElement('#displayed-text').then(function(){
                f.clickByElement('#show-textbox')
           })
        })
    })

    describe('Testfall_004 - Popup - Alert', function() {
    
        it('Testschritt_001 - Seitenaufruf', function() {
            f.visitWebsite(this.data.UrlPractice)
         })
         
         it('Testschritt_002 - klicke Alert Button', function() {
            //Cypress will auto accept alerts
            f.clickByElement('#alertbtn')
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Hello , share this practice page and share your knowledge')
            })
        })

        it('Testschritt_003 - Prüfe Popup Text', function() {
            
        })
    })
*/
describe('Test Suite', function() {
   /* 
    it('Testfall_005 - Entfernen des Tags target', function() {
        f.visitWebsite(this.data.UrlPractice)
        cy.get('#opentab').invoke('removeAttr', 'target').click()
     })

     it('Testfall_006 - Springe zurück zur Hauptseite', function() {
        f.visitWebsite(this.data.UrlPractice)
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        f.goBack()
     })
     */
     it('Testfall_005 - Entfernen des Tags onclick', function() {
        f.visitWebsite(this.data.UrlPractice)
        //cy.get('#autocomplete').type()
        //cy.contains('Practice Page')
        //cy.get('#autocomplete').type('hallo')
        //cy.wait(3000)
        //cy.get('#autocomplete').clear()
        //cy.get('#openwindow').invoke('removeAttr', 'onclick').click()
       // cy.get('#checkBoxOption1').contains('Option1').uncheck()
        cy.get('#checkBoxOption1').uncheck()
     })
     
})

})