/// <reference types="cypress" />
describe('Test6', function()

{

it('Test6', function()

{
//Navigate to url 'http://automationexercise.com'
cy.visit("https://automationexercise.com/")
//3. Verify that home page is visible successfully
 // Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
//4. Click on 'Contact Us' button
cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
//5. Verify 'GET IN TOUCH' is visible
cy.get('div.contact-form > .title').should('be.visible')
//6. Enter name, email, subject and message
cy.get('[data-qa="name"]').type('Dung')
cy.get('[data-qa="email"]').type('dung@gmail.com')
cy.get('[data-qa="subject"]').type('Contact Dung please')
cy.get('[data-qa="message"]').type('Contact me please')

//7. Upload file
cy.get('input[name="upload_file"]').attachFile('IMG_3379 (1).jpeg');

//8. Click 'Submit' button
cy.get('[data-qa="submit-button"]').click()
//9. Click OK button
//10. Verify success message 'Success! Your details have been submitted successfully.' is visible
cy.get('.status').should('be.visible')
//11. Click 'Home' button and verify that landed to home page successfully
cy.get('#form-section > .btn').click()
// Verify that the URL is correct
    cy.url().should('eq', 'https://automationexercise.com/')
    //verify the homepage slider/banner is visible
    cy.get('#slider-carousel > .carousel-inner').should('be.visible')
})

})
