/// <reference types="cypress" />
describe('Test21', function()

{

it('Test21', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//4. Click on 'Products' button
cy.get('a[href="/products"]').click()
//5. Verify user is navigated to ALL PRODUCTS page successfully
cy.get('.title').should('be.visible')
//Click on 'View Product' button
cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
//6. Verify 'Write Your Review' is visible
cy.get('.active > a').should('be.visible').and('have.text', 'Write Your Review')
//7. Enter name, email and review
cy.get('#name').type('John Doe')
cy.get('#email').type('john.doe@example.com')
cy.get('#review').type('This is a great product!')
//8. Click 'Submit' button
cy.get('#button-review').click()
//9. Verify success message 'Thank you for your review.'
cy.get('.alert-success > span').should('have.text', 'Thank you for your review.').and('be.visible')
})
})
