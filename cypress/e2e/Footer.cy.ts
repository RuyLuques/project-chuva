describe('check footer component with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/footer');
  });

  it('should find the footer with data-test="footer"', () => {
    cy.get('[data-test="footer"]').should('be.visible');
  });
});
