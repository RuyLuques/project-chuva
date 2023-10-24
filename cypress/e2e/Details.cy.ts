describe('check basic elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/details');
  });

  it('should find the "Detalhes" heading', () => {
    cy.get('[data-test="container-content-card"] h2').should('contain', 'Detalhes');
  });

  it('should display "Tipo de Apresentação" and "Eixo temático"', () => {
    cy.get('[data-test="aside-content-card-section-text-1"]').should('be.visible');
    cy.get('[data-test="aside-content-card-section-text-1"] ul li:first-child').should(
      'contain',
      'Tipo de Apresentação: Pôster'
    );
    cy.get('[data-test="aside-content-card-section-text-1"] ul li:nth-child(2)').should(
      'contain',
      'Eixo temático: Alimentação e saúde (AS)'
    );
  });

  it('should list authors and their affiliations', () => {
    cy.get('[data-test="aside-content-card-section-text-2"]').should('be.visible');
    cy.get('[data-test="aside-content-card-section-text-2"] ul li:first-child').should(
      'contain',
      'Autores:'
    );
  });
});
