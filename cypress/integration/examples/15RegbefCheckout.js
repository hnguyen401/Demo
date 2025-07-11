/// <reference types="cypress" />
describe('Test15', function()

{

it('Test15', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
    //4. Click 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //5.Fill all details in Signup and create account
cy.get('[data-qa="signup-name"]').type('Aus')
cy.get('[data-qa="signup-email"]').type('aus1@yopmail.com')

cy.get('[data-qa="signup-button"]').click()

cy.get(':nth-child(1) > b').should('be.visible')

cy.get('#id_gender1').check()
cy.get('[data-qa="password"]').type('0004Sm@rt')
cy.get('[data-qa="days"]').select('1')
cy.get('[data-qa="months"]').select('January')
cy.get('[data-qa="years"]').select('2021')

cy.get('#newsletter').check()

cy.get('#optin').check()

cy.get('[data-qa="first_name"]').type('Aussie')
cy.get('[data-qa="last_name"]').type('Miller')
cy.get('[data-qa="company"]').type('Globant')
cy.get('[data-qa="address"]').type('Cau Giay')
cy.get('[data-qa="address2"]').type('Tu Liem')
cy.get('[data-qa="country"]').select('United States')
cy.get('[data-qa="state"]').type('Texas')
cy.get('[data-qa="city"]').type('Austin')
cy.get('[data-qa="zipcode"]').type('10000')
cy.get('[data-qa="mobile_number"]').type('0987654321')

cy.get('[data-qa="create-account"]').click()
//6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
cy.get('b').should('be.visible')
cy.get('[data-qa="continue-button"]').click()
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
cy.get('#address_delivery > .address_firstname').should('have.text','Mr. Aussie Miller')
cy.get('#address_invoice > .address_firstname').should('have.text','Mr. Aussie Miller')
cy.get('#address_delivery > :nth-child(3)').should('have.text','Globant')
cy.get('#address_invoice > :nth-child(3)').should('have.text','Globant')
cy.get('#address_delivery > :nth-child(4)').should('have.text','Cau Giay')
cy.get('#address_invoice > :nth-child(4)').should('have.text','Cau Giay')
cy.get('#address_delivery > :nth-child(5)').should('have.text','Tu Liem')
cy.get('#address_invoice > :nth-child(5)').should('have.text','Tu Liem')
cy.get('#address_delivery > .address_city').should('have.text','Austin Texas\n\t\t\t\t\t\t\t\t10000')
cy.get('#address_invoice > .address_city').should('have.text','Austin Texas\n\t\t\t\t\t\t\t\t10000')
cy.get('#address_delivery > .address_country_name').should('have.text','United States')
cy.get('#address_invoice > .address_country_name').should('have.text','United States')
cy.get('#address_delivery > .address_phone').should('have.text','0987654321')
cy.get('#address_invoice > .address_phone').should('have.text','0987654321')
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
//19. Click 'Delete Account' button
//20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
cy.get('b').should('be.visible')
cy.get('[data-qa="continue-button"]').click()
})
})

