let fixtures = {}

beforeEach(() => {
	// Set the viewport size for desktop
    cy.viewport(1024, 768)
    // Start tests from home page
    cy.visit('/')
    cy.fixture('registeredUser.json').then((user) => {
        // See what we get back from the fixture
        console.log('data from fixture:', user)
        fixtures.registeredUser = user
    })
})


describe('Test Sign in, Sign up and Sign out', () => {
	it('should go to /signin', () => {
		cy.get('[data-cy=signin]').click()
		cy.url().should('contains', '/sign-in')
	}),
	it('should go to /signup', () => {
		cy.get('[data-cy=signup]').click()
		cy.url().should('contains', '/sign-up')
	})

	it('can sign in', () => {
		cy.get("[data-cy=signin]").click()
		cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
		cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
		cy.get("[data-cy=signinButton]").click()
		cy.url().should('contains', '/dashboard')
	})

	it('can sign out', () => {
		cy.get("[data-cy=signin]").click()
		cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
		cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
		cy.get("[data-cy=signinButton]").click()
		cy.get('[data-cy=signout]').should('be.visible')
	})
})