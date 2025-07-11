/// <reference types="cypress" />
describe('Test7', function()

{

it('Test7', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
//4. Clic.click on 'Test Cases' button
cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
//5. Verify user is navigated to test cases page successfully
cy.url().should('eq', 'https://automationexercise.com/test_cases')
cy.get('b').should('be.visible')
})

})
