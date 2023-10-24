describe('check component with data-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/test/cardedit');
  });

  it('deve redirecionar para a página padrão ao clicar no link "Descubra outros trabalhos!"', () => {
    cy.get('[data-test=card-content-link] a').click();
  });

  it('deve redirecionar para a página de criação de tópico ao clicar no botão "criar novo tópico"', () => {
    cy.get('[data-test=btn-create-topic]').click();
  });
});
