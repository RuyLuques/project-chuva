describe('check basic elements', () => {
  it('should expand the new card', () => {
    cy.visit('http://localhost:4200/test/card');
    cy.get('[data-test="card-component"]').click();
    cy.get('[data-test="card-component-none"]').should('be.visible');
  });

  it('should contract the new card', () => {
    cy.visit('http://localhost:4200/test/card');
    cy.get('[data-test="card-component"]').click();
    cy.get('[data-test="card-component"]').click();
    cy.get('[data-test="card-component-none"]').should('not.be.visible');
  });
});
