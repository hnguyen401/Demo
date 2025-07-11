/// <reference types="cypress" />
describe('Test25', function()

{

it('Test25', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
//4. Scroll down page to bottom
cy.get('#footer').scrollIntoView()
//5. Verify 'SUBSCRIPTION' is visible
cy.get('.single-widget > h2').should('have.text','Subscription').and('be.visible')
//6. Scroll up page to top
cy.get('.header-middle').scrollIntoView() 
//7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
cy.get('.active > :nth-child(1) > h2').should('have.text','Full-Fledged practice website for Automation Engineers').and('be.visible')
})
})

