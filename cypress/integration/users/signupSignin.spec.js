describe('Test Signin', () => {
	it('should go to /signin', () => {
		cy.visit('localhost:3000')
		cy.get('Button').contains('Sign In').click()
		cy.url().should('contains', '/signin')
	}),
	it('should go to /signup', () => {
		cy.visit('localhost:3000')
		cy.get('Button').contains('Sign Up').click()
		cy.url().should('contains', '/signup')
	})
})