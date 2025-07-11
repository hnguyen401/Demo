/// <reference types="cypress" />
describe('Test10', function()

{

it('Test10', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
//4. Scroll down to footer
cy.get('#footer').scrollIntoView()
//5. Verify text 'SUBSCRIPTION'
cy.get('.single-widget > h2').should('have.text','Subscription')
//6. Enter email address in input and click arrow button
cy.get('#susbscribe_email').type('h.nguyen@globant.com')
cy.get('#subscribe').click()
//7. Verify success message 'You have been successfully subscribed!' is visible
cy.get('.alert-success').should('be.visible')
})
})
