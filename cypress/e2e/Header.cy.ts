describe('check header component with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/header'); 
  });

  it('should find the header with data-test="nav"', () => {
    cy.get('[data-test="nav"]').should('be.visible');
  });

  it('should have the correct title in the header', () => {
    cy.get('[data-test="nav"] .nav-title').should('contain', 'Anais do Simpósio Latino Americano de Ciências de Alimentos');
  });

  it('should have the correct subtitle in the header', () => {
    cy.get('[data-test="nav"] .nav-subtitle').should('contain', 'Anais do 13º Simpósio Latino Americano de Ciência de Alimentos');
  });

  it('should have the correct ISSN in the header', () => {
    cy.get('[data-test="nav"] .nav-text').should('contain', 'ISSN: 1234-5678');
  });

  it('should find the language container with data-test="nav-item"', () => {
    cy.get('[data-test="nav-item"]').should('be.visible');
  });

  it('should find the user info container with data-test="user-info"', () => {
    cy.get('[data-test="user-info"]').should('be.visible');
  });

  it('should find the notification icon with data-test="notification-icon"', () => {
    cy.get('[data-test="notification-icon"]').should('be.visible');
  });
});
