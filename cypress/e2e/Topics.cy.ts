describe('Check components with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/topics');
  });

  it('should find the logo component with data-test="logo"', () => {
    cy.get('[data-test="logo"]').should('be.visible');
  });

  it('should find the sidenav component with data-test="sidenav"', () => {
    cy.get('[data-test="sidenav"]').should('be.visible');
  });

  it('should find the header component with data-test="header"', () => {
    cy.get('[data-test="header"]').should('be.visible');
  });

  it('should find the columns component with data-test="columns"', () => {
    cy.get('[data-test="columns"]').should('be.visible');
  });

  it('should find the resume component with data-test="resume"', () => {
    cy.get('[data-test="resume"]').should('be.visible');
  });

  it('should find the discussions component with data-test="discussions"', () => {
    cy.get('[data-test="discussions"]').should('be.visible');
  });

  it('should find the footer component with data-test="footer"', () => {
    cy.get('[data-test="footer"]').should('be.visible');
  });
});
