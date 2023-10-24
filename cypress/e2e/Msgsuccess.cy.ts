describe('check components with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/mgsuccess');
  });

  it('should find the sidenav component with data-test="sidenav"', () => {
    cy.get('[data-test="sidenav"]').should('exist');
  });

  it('should find the header component with data-test="header"', () => {
    cy.get('[data-test="header"]').should('exist');
  });

  it('should find the columns component with data-test="columns"', () => {
    cy.get('[data-test="columns"]').should('exist');
  });

  it('should find the resume component with data-test="resume"', () => {
    cy.get('[data-test="resume"]').should('exist');
  });

  it('should find the discussions component with data-test="topico-duvida-enviado"', () => {
    cy.get('[data-test="topico-duvida-enviado"]').should('exist');
  });

  it('should find the card content link with data-test="card-content-link"', () => {
    cy.get('[data-test="card-content-link"]').should('exist');
  });

  it('should find the button with data-test="btn-create-topic"', () => {
    cy.get('[data-test="btn-create-topic"]').should('exist');
  });

  it('should find the divider with data-test="divider"', () => {
    cy.get('[data-test="divider"]').should('exist');
  });

  it('should find the carddark component with data-test="carddark"', () => {
    cy.get('[data-test="carddark"]').should('exist');
  });

  it('should find the card component with data-test="card"', () => {
    cy.get('[data-test="card"]').should('exist');
  });
});

