describe('checa elementos básicos', () => {
  beforeEach(() => {});

  it('titulo do trabalho existe', () => {
    cy.visit('http://localhost:4200/topics');

    cy.get('h2').contains(
      'Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP'
    );
    cy.compareSnapshot('Trabalho - Base');
  });

  it('botão de expandir resumo existe', () => {
    cy.visit('http://localhost:4200/test/resume');

    cy.get('.btn-show-more').contains('ver mais');
    cy.compareSnapshot('Trabalho - Resumo expandido');
  });

  it('botão de criar tópico existe', () => {
    cy.visit('http://localhost:4200');

    cy.get('.btn-create-topic').contains('criar tópico');
  });

  it('expandir tópico funciona', () => {
    cy.visit('http://localhost:4200/test/resume');

    cy.get('.ops-topic-subject').click();
    cy.get('.comments-container').should('exist');
    cy.compareSnapshot('Trabalho - Card de topico expandido');
  });

  it('expandir tópico funciona 2', () => {
    cy.visit('http://localhost:4200/test/columns');

    cy.get('.answered-topic').click();
  });

  it('clicar em `criar tópico` exibe o formulário', () => {
    cy.visit('http://localhost:4200/topics');

    cy.get('.btn-create-topic').click();
    cy.get('button').contains('Enviar');
    cy.get('form').contains('Assunto');
    cy.get('form').contains('Conteúdo');
    cy.get('input.subject')
      .invoke('attr', 'placeholder')
      .should(
        'contain',
        'Defina um tópico sucinto para notificar os autores...'
      );
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

  describe('NEW TEST: card.component', () => {
    it('deve expandir o novo card', () => {
      cy.visit('http://localhost:4200/test/card');
      cy.get('[data-test="card-component"]').click();
      cy.get('[data-test="card-component-none"]').should('be.visible');
    });

    it('deve contrair o novo card', () => {
      cy.visit('http://localhost:4200/test/card');
      cy.get('[data-test="card-component"]').click();
      cy.get('[data-test="card-component"]').click();
      cy.get('[data-test="card-component-none"]').should('not.be.visible');
    });
  });

  describe('NEW TEST: cardform.component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/test/cardform');
    });

    it('deve exibir o formulário inicialmente', () => {
      cy.get('[data-test="form-discussion"]').should('be.visible');
    });

    it('deve preencher e enviar o formulário', () => {
      cy.get('[data-test="form-discussion"]').should('be.visible');

      cy.get('[data-test="field-assunto"]').type('Minha dúvida');
      cy.get('[data-test="field-conteudo"]').type('Esta é a minha pergunta.');
      cy.get('[data-test="btn-submit"]').click();
    });
  });

  describe('NEW TEST: discussions.component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/test/discussions');
    });

    it('deve exibir a mensagem inicial', () => {
      cy.get('[data-test="container-content-discussions"]').should(
        'be.visible'
      );
      cy.get('[data-test="content-text"]').should(
        'contain',
        'Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade?'
      );
    });
  });
});
