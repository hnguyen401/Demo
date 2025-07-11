/// <reference types="cypress" />
describe('Test18', function()

{

it('Test18', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that categories are visible on left side bar
cy.get('#accordian').should('be.visible')
//4. Click on 'Women' category
cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
//5. Click on any category link under 'Women' category, for example: Dress
cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
//6. Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'
cy.get('.title').should('be.visible').and('have.text','Women - Dress Products')
//7. On left side bar, click on any sub-category link of 'Men' category
cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
//8. Verify that user is navigated to that category page
cy.get('.title').should('be.visible').and('have.text','Men - Tshirts Products')
})
})

