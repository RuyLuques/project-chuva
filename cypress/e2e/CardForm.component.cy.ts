describe('check basic elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/cardform');
  });

  it('should initially display the form', () => {
    cy.get('[data-test="form-discussion"]').should('be.visible');
  });

  it('fill in and send the form', () => {
    cy.get('[data-test="form-discussion"]').should('be.visible');
    cy.get('[data-test="field-assunto"]').type('Minha dúvida');
    cy.get('[data-test="field-conteudo"]').type('Esta é a minha pergunta.');
    cy.get('[data-test="btn-submit"]').click();
  });
});
