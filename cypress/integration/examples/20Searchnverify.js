/// <reference types="cypress" />
describe('Test20', function()

{

it('Test20', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//4. Click on 'Products' button
cy.get('a[href="/products"]').click()
//5. Verify user is navigated to ALL PRODUCTS page successfully
cy.get('.title').should('be.visible')
//6. Enter product name in search input and click search button
cy.get('#search_product').type('Sleeve')
cy.get('#submit_search > .fa').click()
//7. Verify 'SEARCHED PRODUCTS' is visible
cy.get('.title').should('be.visible')
//8. Verify all the products related to search are visible
cy.get('.features_items .productinfo.text-center p').should('have.length.greaterThan',0).each(($el) => {
const name = $el.text().toLowerCase()
expect(name).to.include('sleeve')
cy.wrap($el).should('be.visible')
})
//8. Add those products to cart
cy.get('.features_items .productinfo.text-center p').each(($el) => {
  const name = $el.text().toLowerCase();

  if (name.includes('sleeve')) {
    // Make sure it's visible
    cy.wrap($el).should('be.visible');

    // Move up to product box, then find and click "Add to cart" button
    cy.wrap($el)
      .parents('.productinfo.text-center')  // Go up to product container
      .contains('Add to cart')              // Find the button with this text
      .click({ force: true });              // Click the button even if it's hidden

    // Click "Continue Shopping" if a popup shows
    cy.contains('Continue Shopping').click({ force: true });
    cy.wait(500)
  }
})
//9. Click 'Cart' button and verify that products are visible in cart
cy.get('u').click()
cy.get('.cart_description') // or adjust to the selector that contains product names
  .should('have.length.at.least', 7)
  .then(($items) => {
    // Step 3: Count how many have "sleeve" in the name
    const sleeveCount = Cypress._.filter($items, (el) => {
      return el.innerText.toLowerCase().includes('sleeve');
    }).length;

    // Step 4: Assert that there are 7 sleeve products in cart
    expect(sleeveCount).to.eq(7);
  })
//10. Click 'Signup / Login' button and submit login details
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()  
cy.get('[data-qa="login-email"]').type('h.nguyen@globant.com')
cy.get('[data-qa="login-password"]').type('0004Sm@rt')
cy.get('[data-qa="login-button"]').click()
//11. Again, go to Cart page
cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
//12. Verify that those products are visible in cart after login as well
cy.get('.cart_description') // or adjust to the selector that contains product names
  .should('have.length.at.least', 7)
  .then(($items) => {
    // Step 3: Count how many have "sleeve" in the name
    const sleeveCount = Cypress._.filter($items, (el) => {
      return el.innerText.toLowerCase().includes('sleeve');
    }).length;

    // Step 4: Assert that there are 7 sleeve products in cart
    expect(sleeveCount).to.eq(7);
  })
})
})
