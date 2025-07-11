/// <reference types="cypress" />
describe('Test One', function()

{

it('Test Case One', function()

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
//6. Enter name and email address //7. Click 'Signup' button //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
//9. Fill details: Title, Name, Email, Password, Date of birth //10. Select checkbox 'Sign up for our newsletter!'
//11. Select checkbox 'Receive special offers from our partners!'
//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
//13. Click 'Create Account button'
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
//14. Verify that 'ACCOUNT CREATED!' is visible //15. Click 'Continue' button //16. Verify that 'Logged in as username' is visible
cy.get('b').should('be.visible')
cy.get('[data-qa="continue-button"]').click()

cy.get(':nth-child(10) > a').should('be.visible')
//17. Click 'Delete Account' button //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
cy.get('b').should('be.visible')
cy.get('[data-qa="continue-button"]').click()
})

})
