/// <reference types="cypress" />
describe('Test4', function()

{

it('Test4', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')


//4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should('be.visible')
//6.  Enter correct email address and password
cy.get('[data-qa="login-email"]').type('h.nguyen@globant.com')
cy.get('[data-qa="login-password"]').type('0004Sm@rt')
//7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
//8. Verify that 'Logged in as username' is visible
cy.get(':nth-child(10) > a').should('be.visible')
//Click 'Logout' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//Verify that user is navigated to login page
cy.get('.login-form > h2').should('be.visible')
})

})
