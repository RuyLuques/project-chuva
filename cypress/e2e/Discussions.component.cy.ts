describe('check basic elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/discussions');
  });

  it('should display the initial message', () => {
    cy.get('[data-test="container-content-discussions"]').should(
      'be.visible'
    );
    cy.get('[data-test="content-text"]').should(
      'contain',
      'Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade?'
    );
  });
});
