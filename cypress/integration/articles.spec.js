/// <reference types = "cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Artigos', () => {

    beforeEach(() => {

        //preparação
        cy.backgroundLogin();
        articles.acessarFormularioDeNovaPublicacao();

    });
    it('Criar um novo artigo', () => {
        //Ação
        articles.preencherFormulario();
        articles.submeterPublicacao();
        
        //Verificação
        articles.verificarSeAPublicacaoFoiCriadoComSucesso();
        
    });
});

