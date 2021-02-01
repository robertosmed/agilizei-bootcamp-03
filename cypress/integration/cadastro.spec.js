/// <reference types = "cypress" />

import cadastrar from '../support/pages/cadastrar'

context('Cadastro', () => {
    it('Cadastrar um novo usuario', () => {
        //Ação
        cadastrar.acessarPaginaDoCadastroDeFormulario()
        cadastrar.preencherCadastroDeFormulario()
        cadastrar.submeterCadastroDeFormulario()
    
        //verificação
        cadastrar.verificarSeOCadastroFoiRealizadoComSucesso()
    });
});
