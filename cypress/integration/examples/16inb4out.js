/// <reference types="cypress" />
describe('Test16', function()

{

it('Test16', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
    //4. Click 'Signup / Login' button //Enter correct email address and password //7. Click 'login' button 
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()  
cy.get('[data-qa="login-email"]').type('h.nguyen@globant.com')
cy.get('[data-qa="login-password"]').type('0004Sm@rt')
cy.get('[data-qa="login-button"]').click()
//7. Verify ' Logged in as username' at top
cy.get(':nth-child(10) > a').should('be.visible')
//Add products to cart
cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
//9. Click 'Cart' button
cy.get('u').click()
//10. Verify that cart page is displayed
cy.get('#cart_items > :nth-child(1)').should('be.visible')
//11. Click Proceed To Checkout
cy.get('.col-sm-6 > .btn').click()
//14. Verify Address Details and Review Your Order
cy.get('#address_delivery > .address_firstname').should('have.text','. x x')
cy.get('#address_invoice > .address_firstname').should('have.text','. x x')
cy.get('#address_delivery > :nth-child(4)').should('have.text','Qatar')
cy.get('#address_invoice > :nth-child(4)').should('have.text','Qatar')
cy.get('#address_delivery > .address_city').should('have.text','qatar Q\n\t\t\t\t\t\t\t\t10000')
cy.get('#address_invoice > .address_city').should('have.text','qatar Q\n\t\t\t\t\t\t\t\t10000')
cy.get('#address_delivery > .address_country_name').should('have.text','India')
cy.get('#address_invoice > .address_country_name').should('have.text','India')
cy.get('#address_delivery > .address_phone').should('have.text','51234475')
cy.get('#address_invoice > .address_phone').should('have.text','51234475')
cy.get('h4 > a').should('have.text','Blue Top')
cy.get('.cart_price > p').should('have.text','Rs. 500')
cy.get('.disabled').should('have.text','1')
cy.get('.cart_total > .cart_total_price').should('have.text','Rs. 500')
cy.get(':nth-child(4) > .cart_total_price').should('have.text','Rs. 500')
//15. Enter description in comment text area and click 'Place Order'
cy.get('.form-control').type('This is a test order')
cy.get(':nth-child(7) > .btn').click()
//16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
cy.get('[data-qa="name-on-card"]').type('LUONG THANH HA')
cy.get('[data-qa="card-number"]').type('1234123412341234')
cy.get('[data-qa="cvc"]').type('123')
cy.get('[data-qa="expiry-month"]').type('01')
cy.get('[data-qa="expiry-year"]').type('2030')
//17. Click 'Pay and Confirm Order' button
cy.get('[data-qa="pay-button"]').click()
//18. Verify success message 'Your order has been placed successfully!'
cy.get('.col-sm-9 > p').should('have.text','Congratulations! Your order has been confirmed!').and('be.visible')
})
})

