/// <reference types = "cypress" />

import cadastrar from '../support/pages/cadastrar'

context('Cadastro', () => {
    it('Cadastrar um novo usuario', () => {
        //Preparaçao
        cadastrar.acessarPaginaDoCadastroDeFormulario()

        //Ação
        cadastrar.preencherCadastroDeFormulario()
        cadastrar.submeterCadastroDeFormulario()
    
        //verificação
        cadastrar.verificarSeOCadastroFoiRealizadoComSucesso()
    });
});
