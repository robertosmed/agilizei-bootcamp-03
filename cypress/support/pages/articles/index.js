/// <reference types = "cypress" />

const faker = require('faker')

const element = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles{

    acessarFormularioDeNovaPublicacao(){
         cy.get(element.linkNovaPublicacao).click();
    }

    preencherFormulario(){
        //Execução/Ação - preencher uma publicação de artigo
        cy.get(element.inputTitle).type('Artigo Agilizei Title');
        cy.get(element.inputDescription).type('Cypress');
        cy.get(element.textAreaContent).type(faker.lorem.paragraph());
        cy.get(element.inputTags).type('cypress');
    }

    submeterPublicacao(){

         //button - submeter o artigo
        cy.get(element.buttonSubmit).click();
    }
    
    verificarSeAPublicacaoFoiCriadoComSucesso(){
        
        //templates string
        cy.wait(`@${Routes.nomeDasRotas.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.nomeDasRotas.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        })

        cy.wait(`@${Routes.nomeDasRotas.getArticlesComments}`).then((getArticlesComments) => {
            expect(getArticlesComments.status).to.eq(200)
        })
    }
}

export default new Articles();