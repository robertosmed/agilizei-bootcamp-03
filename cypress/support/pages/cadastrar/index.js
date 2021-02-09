/// <reference types = "cypress" />

import routes from '../../routes';

const elements = require('./elements').ELEMENTS

const faker = require('faker');

class Cadastrar{
    acessarPaginaDoCadastroDeFormulario(){
    //Acessar a pagina de cadastro
    cy.visit('register');
    }

    preencherCadastroDeFormulario(){
    //Preencher o cadastro de formulario
    cy.get(elements.inputUserName).type(faker.name.firstName() + faker.name.lastName());
    cy.get(elements.inputEmail).type(faker.internet.email());
    cy.get(elements.inputPassword).type('12345678');
    }

    submeterCadastroDeFormulario(){
        //Submeter o formulario de cadastro
        cy.get(elements.buttonSubmit).click();
    } 

    verificarSeOCadastroFoiRealizadoComSucesso(){
        //templetes string
        cy.wait(`@${routes.nomeDasRotas.postListUsers}`).then((postListUsersResponse) => {
            expect(postListUsersResponse.status).to.eq(200)
        })

        cy.wait(`@${routes.nomeDasRotas.getTags}`).then((getTags) => {
            expect(getTags.status).to.eq(200)
        })
    }
}

export default new Cadastrar()