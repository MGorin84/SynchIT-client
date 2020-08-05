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
        //login user
        cy.get("[data-cy=signin]").click()
        cy.get("[data-cy=username]").type(fixtures.registeredUser.username)
        cy.get("[data-cy=password]").type(fixtures.registeredUser.password)
        cy.get("[data-cy=signinButton]").click()
    })
})

describe('Test calender visible', () => {
	it('calender is visible', () => {
		cy.viewport(1024, 768)
        cy.get("[data-cy=calender]").should("be.visible")
	})
})