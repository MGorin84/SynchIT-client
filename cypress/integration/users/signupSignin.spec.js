describe('Test Signin and Signup', () => {
	it('should go to /signin', () => {
		cy.viewport(1024, 768)
		cy.visit('/')
		cy.get('[data-cy=signin]').click()
		cy.url().should('contains', '/sign-in')
	}),
	it('should go to /signup', () => {
		cy.viewport(1024, 768)
		cy.visit('/')
		cy.get('[data-cy=signup').click()
		cy.url().should('contains', '/sign-up')
	})
})