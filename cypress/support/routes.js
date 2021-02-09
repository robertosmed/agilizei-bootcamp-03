class Routes{

    nomeDasRotas = {
       postArticles: 'POSTArticles',
       getArticlesTitle: 'GETArticlesTitle',
       getArticlesComments: 'GETArticlesComments',
       postUserLogin: 'POSTUserLogin',
       postListUsers: 'POSTListerUsers',
       getTags: 'GETTags'

    }

    initArticles(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.nomeDasRotas.postArticles);
        cy.route('GET', '**/api/articles/artigo-agilizei-title-**').as(this.nomeDasRotas.getArticlesTitle);
        cy.route('GET', '**/api/articles/artigo-agilizei-title-**/comments').as(this.nomeDasRotas.getArticlesComments);
        
    }

    initCadastrar(){
        cy.server()
        cy.route('POST', '**/api/users/login').as(this.nomeDasRotas.postUserLogin);
        cy.route('GET', '**/api/tags').as(this.nomeDasRotas.getTags)

    }

    initLogin(){
        cy.server()
        cy.route('POST', '**/users').as(this.nomeDasRotas.postListUsers)
    }
    
}

export default new Routes();