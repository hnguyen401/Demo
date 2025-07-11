/// <reference types="cypress" />
describe('Test12', function()

{

it('Test12', function()

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
//5. Hover over first product and click 'Add to cart'
cy.get('.single-products').eq(0).trigger('mouseover')
cy.get('.single-products').eq(0)
  .find('.add-to-cart')
  .filter(':visible')
  .click();
//6. Click 'Continue Shopping' button
cy.get('.modal-footer > .btn').click()
//7. Hover over second product and click 'Add to cart'
cy.get('.single-products').eq(1).trigger('mouseover')
cy.get('.single-products').eq(1)
  .find('.add-to-cart')
  .filter(':visible')
  .click();
//8. Click 'View Cart' button
cy.get('u').click()
//9. Verify both products are added to Cart
cy.get('.cart_description').should('have.length.at.least',2)
//10. Verify their prices, quantity and total price
cy.get('#product-1').within(() => {
    cy.get('.cart_price').should('contain.text','Rs. 500')
    cy.get('.cart_quantity .disabled').should('have.text',1)
    cy.get('.cart_total_price').should('have.text','Rs. 500')
})
})

})
