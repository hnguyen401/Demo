/// <reference types="cypress" />
describe('Test8', function()

{

it('Test8', function()

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
//6. The products list is visible
cy.get('.features_items').should('be.visible')
//7. Click on 'View Product' of first product
cy.get('.features_items').eq(0).contains('View Product').click();
//8. User is landed to product detail page
cy.get('.product-information').should('be.visible')
//9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
cy.get('.product-information > h2').should('be.visible')
cy.get('.product-information > :nth-child(3)').should('be.visible')
cy.get(':nth-child(5) > span').should('be.visible')
cy.get('.product-information > :nth-child(6)').should('be.visible')
cy.get('.product-information > :nth-child(7)').should('be.visible')
cy.get('.product-information > :nth-child(8)').should('be.visible')
})

})
