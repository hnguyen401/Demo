/// <reference types="cypress" />
describe('Test22', function()

{

it('Test22', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Scroll to bottom of page
cy.get('.footer-bottom').scrollIntoView()
//4. Verify 'RECOMMENDED ITEMS' are visible
cy.get('.recommended_items > .title').should('be.visible')
//5. Click on 'Add To Cart' on Recommended product
cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
//6. Click on 'View Cart' button
cy.get('u').click()
//7. Verify that product is displayed in cart page
cy.get('h4 > a').should('have.text', 'Stylish Dress').and('be.visible')
})
})
