describe('SLACA 2019 Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/columns'); 
  });

  it('should display the main title', () => {
    cy.get('#titulo-trabalho').should('be.visible');
  });

  it('should allow downloading the content', () => {
    cy.get('.custom-card-btn-img-1').click();
  });

  it('should allow favoriting the content', () => {
    cy.get('.custom-card-btn-img-2').click();
  });

  it('should show details on "COMO CITAR ESSE TRABALHO?" click', () => {
    cy.get('.custom-card-btn-text h3').click();
  });

  it('should display a video icon', () => {
    cy.get('.content-content-video-1 img').should('be.visible');
  });

  it('should display details in the right column', () => {
    cy.get('.container-content-aside-right app-details').should('be.visible');
  });
});
