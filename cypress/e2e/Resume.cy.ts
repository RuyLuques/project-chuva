describe('check resume component with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/resume');
  });

  it('should find the section with data-test="container-content-resume"', () => {
    cy.get('[data-test="container-content-resume"]').should('be.visible');
  });

  it('should have the correct heading "Resumo"', () => {
    cy.get('[data-test="container-content-resume"] .ops-topic-subject').should('contain', 'Resumo');
  });

  it('should find the comments container with data-test="comments-container"', () => {
    cy.get('[data-test="comments-container"]').should('be.visible');
  });

  it('should have a "ver mais" button', () => {
    cy.get('[data-test="comments-container"] .btn-show-more').should('be.visible');
  });
});
