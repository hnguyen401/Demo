/// <reference types="cypress" />
describe('Test19', function()

{

it('Test19', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Click on 'Products' button
cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
//4. Verify that Brands are visible on left side bar
cy.get('.brands-name').should('be.visible')
//5. Click on any brand name
cy.get('.brands-name > .nav > :nth-child(1) > a').click()
//6. Verify that user is navigated to brand page and brand products are displayed
cy.get('.title').should('be.visible').and('have.text','Brand - Polo Products')
//7. On left side bar, click on any other brand link
cy.get('.brands-name > .nav > :nth-child(2) > a').click()
//8. Verify that user is navigated to that brand page and can see products
cy.get('.title').should('be.visible').and('have.text','Brand - H&M Products')
})
})

