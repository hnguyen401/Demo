/// <reference types="cypress" />
describe('Test17', function()

{

it('Test17', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
//4. Add products to cart
cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
//5. Click 'Cart' button
cy.get('u').click()
//6. Verify that cart page is displayed
cy.get('#cart_items > :nth-child(1)').should('be.visible')
//7. Click 'X' button corresponding to particular product
cy.get('.cart_quantity_delete').click()
//8. Verify that product is removed from the cart
cy.get('#empty_cart').should('be.visible')
})
})

