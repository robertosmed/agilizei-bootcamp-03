const element = require('./elements').ELEMENTS

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
     
}

export default new Login();