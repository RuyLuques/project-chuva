describe('check sidenav component with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/sidenav');
  });

  it('should find the section with data-test="container-content-sidenav"', () => {
    cy.get('[data-test="container-content-sidenav"]').should('be.visible');
  });

  it('should have the correct logo in the sidenav', () => {
    cy.get('[data-test="container-content-sidenav"] img').should('have.attr', 'alt', 'Logotipo SLACA 2019');
  });

  it('should find the content-sidenav container with data-test="content-sidenav"', () => {
    cy.get('[data-test="content-sidenav"]').should('be.visible');
  });

  it('should find a list of links in the sidenav', () => {
    cy.get('[data-test="content-sidenav"] ul').should('be.visible');
    cy.get('[data-test="content-sidenav"] ul li').should('have.length', 6);
  });

  it('should have the correct text for the links', () => {
    cy.get('[data-test="content-sidenav"] ul li').eq(0).should('contain', 'Apresentação');
    cy.get('[data-test="content-sidenav"] ul li').eq(1).should('contain', 'Comitês');
    cy.get('[data-test="content-sidenav"] ul li').eq(2).should('contain', 'Autores');
    cy.get('[data-test="content-sidenav"] ul li').eq(3).should('contain', 'Eixos temáticos');
    cy.get('[data-test="content-sidenav"] ul li').eq(4).should('contain', 'Trabalhos');
    cy.get('[data-test="content-sidenav"] ul li').eq(5).should('contain', 'Contato');
  });
});
