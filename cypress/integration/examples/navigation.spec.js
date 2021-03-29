context('Navigation', () => {
	it('Home', () => {
		cy.visit('/');
		cy.get('h1').contains('Netlify Minimal');
	});
});
