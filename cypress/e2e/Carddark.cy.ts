describe('check component with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/carddark');
  });

  it('should find the container with data-test="container-content-card"', () => {
    cy.get('[data-test="container-content-card"]').should('be.visible');
  });

  it('should find the "Aguardando feedback dos autores" text', () => {
    cy.get('.text-msg').should('contain', 'Aguardando feedback dos autores');
  });

  it('should find the "Editar tópico" link', () => {
    cy.get('.text-edit').should('contain', 'Editar tópico');
  });

  it('should find the container with data-test="container-content-dark"', () => {
    cy.get('[data-test="container-content-dark"]').should('be.visible');
  });

  it('should find the "Assunto da pergunta aparece aqui" heading', () => {
    cy.get('[data-test="container-content-dark"] h3').should('contain', 'Assunto da pergunta aparece aqui');
  });

  it('should find the author name "Carlos Henrique Santos"', () => {
    cy.get('[data-test="container-content-dark"] p').should('contain', 'Carlos Henrique Santos');
  });

  it('should find the "Comecinho da pergunta aparece aqui..." text', () => {
    cy.get('[data-test="container-content-dark"] p').should('contain', 'Comecinho da pergunta aparece aqui...');
  });

  it('should find the container with data-test="container-group-icons"', () => {
    cy.get('[data-test="container-group-icons"]').should('be.visible');
  });

  it('should find icons within "container-group-icons"', () => {
    cy.get('[data-test="container-group-icons"] img').should('have.length', 2);
  });

  it('should find like and response counts', () => {
    cy.get('[data-test="container-group-icons"] p').should('have.length', 2); 
  });
});
