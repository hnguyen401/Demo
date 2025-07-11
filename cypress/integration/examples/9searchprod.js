/// <reference types="cypress" />
describe('Test9', function()

{

it('Test9', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
//4. Click on 'Products' button
cy.get('a[href="/products"]').click()
//5. Verify user is navigated to ALL PRODUCTS page successfully
cy.get('.title').should('be.visible')
//6. Enter product name in search input and click search button
cy.get('#search_product').type('Sleeve')
cy.get('#submit_search > .fa').click()
//7. Verify 'SEARCHED PRODUCTS' is visible
cy.get('.title').should('be.visible')
//8. Verify all the products related to search are visible
cy.get('.features_items .productinfo.text-center p').should('have.length.greaterThan',0).each(($el) => {
const name = $el.text().toLowerCase()
expect(name).to.include('sleeve')
cy.wrap($el).should('be.visible')   
})
})
})
