/// <reference types = "cypress" />

import login from '../support/pages/login'
import Routes from '../support/routes'

context('Login', () => {

    it('Realizar login com sucesso', () => {
        //Preparação
        login.acessarLogin();

        //Ação
        login.preencherFormulario();
        login.submeterFormulario();

        //verificacao
        login.verifcarSeOLoginTeveAcessoComSucesso()

    });
});

//input[ng-model*=email]
//input[ng-model*=password]
//button.btn-primary