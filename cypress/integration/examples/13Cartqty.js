/// <reference types="cypress" />
describe('Test13', function()

{

it('Test13', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
//4. 4. Click 'View Product' for any product on home page
cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
//5. Verify product detail is opened
cy.get('.product-information').should('be.visible')
//6. Increase quantity to 4
cy.get('#quantity').clear().type('4')
//7. Click 'Add to cart' button
cy.get(':nth-child(5) > .btn').click()
//8. Click 'View Cart' button
cy.get('u').click()
//9. Verify that product added to cart is displayed in cart page with exact quantity = 4
cy.get('#product-1').should('exist')
cy.get('.cart_quantity .disabled').should('have.text',4)
})
})

