/// <reference types="cypress" />
describe('Test5', function()

{

it('Test5', function()

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
//5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should('be.visible')
//6. Enter name and email address
cy.get('[data-qa="signup-name"]').type('Aus')
cy.get('[data-qa="signup-email"]').type('h.nguyen@globant.com')
//7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
//Verify error 'Email Address already exist!' is visible
cy.get('.signup-form > form > p').should('be.visible')
})

})
