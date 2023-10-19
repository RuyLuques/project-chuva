describe('checa elementos básicos', () => {
  beforeEach(() => {

  });

  it('titulo do trabalho existe', () => {
    cy.visit('http://localhost:4200/topics');

    cy.get('h2').contains('Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP');
    cy.compareSnapshot('Trabalho - Base');
  });

  it('botão de expandir resumo existe', () => {
    cy.visit('http://localhost:4200/topics');

    cy.get('.btn-show-more').contains('ver mais');
    cy.compareSnapshot('Trabalho - Resumo expandido');
  });

  it('botão de criar tópico existe', () => {
    cy.visit('http://localhost:4200');

    cy.get('.btn-create-topic').contains('criar tópico');
  });

  it('expandir tópico funciona', () => {
    cy.visit('http://localhost:4200');

    cy.get('.answered-topic .ops-topic-subject').click();
    cy.get('.comments-container').should('exist');
    cy.compareSnapshot('Trabalho - Card de topico expandido');
  });

  it('clicar em `criar tópico` exibe o formulário', () => {
    cy.visit('http://localhost:4200/topics');

    cy.get('.btn-create-topic').click();
    cy.get('button').contains('Enviar')
    cy.get('form').contains('Assunto');
    cy.get('form').contains('Conteúdo');
    cy.get('input.subject').invoke('attr', 'placeholder').should('contain', 'Defina um tópico sucinto para notificar os autores...');
    cy.compareSnapshot('Trabalho - Criando novo topico');
  });

  it('enviar o formulário exibe mensagem de sucesso', () => {
    cy.visit('http://localhost:4200/topics');

    cy.get('.btn-create-topic').click();
    cy.get('#assunto').type('Assunto do tópico');
    cy.get('#conteudo').type('Conteúdo do tópico');
    cy.get('#enviar-formulario').click();
    cy.get('body').contains('Aguardando feedback dos autores');
    cy.compareSnapshot('Trabalho - Topico enviado');
});

/*
Para fazer o "TESTE 1" funcionar corretamente,
você deve preencher os campos de assunto e conteúdo antes
de clicar no botão de envio


Clique no botão "btn-create-topic".
Preencha os campos de assunto e conteúdo em um formulário na página.
Clique no botão de envio do formulário (identificado pelo elemento com id "enviar-formulario").
Verifique se uma mensagem de sucesso com o texto "Aguardando feedback dos autores" está presente na página.
Capture um snapshot da página com o nome "Trabalho - Tópico enviado" para fins de comparação futura.
*/

})
