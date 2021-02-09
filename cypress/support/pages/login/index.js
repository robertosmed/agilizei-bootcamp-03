/// <reference types = "cypress" />

const element = require('./elements').ELEMENTS

import Routes from '../../routes'

class Login{
    acessarLogin(){
    //acessar a pagina do login
     cy.visit('login')
    }
    
    preencherFormulario(){
    //preencher o formulario
     cy.get(element.inputEmail).type(Cypress.config().user.email);
     cy.get(element.inputPassword).type('12345678');
    }

    submeterFormulario(){
    //submeter formulario de login
     cy.get(element.buttonSubmit).click();
    }

    verifcarSeOLoginTeveAcessoComSucesso(){
        // templates string
        cy.wait(`@${Routes.nomeDasRotas.postUserLogin}`).then((postLoginResponse) => {
            expect(postLoginResponse.status).to.eq(200)
        })

    }

}

export default new Login();