class Routes{

    nomeDasRotas = {
       postArticles: 'POSTArticles',
       getArticlesTitle: 'GETArticlesTitle',
       getArticlesComments: 'GETArticlesComments',
       postLogin: 'POSTLogin',
       getTags: 'GETTags',
       getArticles: 'GETFeed',
       postUsers: 'POSTUsers',
       getTags: 'GETTags',
       getFeed: 'GETFeed'

    }

    initArticles(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.nomeDasRotas.postArticles);
        cy.route('GET', '**/api/articles/artigo-agilizei-title-**').as(this.nomeDasRotas.getArticlesTitle);
        cy.route('GET', '**/api/articles/artigo-agilizei-title-**/comments').as(this.nomeDasRotas.getArticlesComments);
    }

    initLogin(){
        cy.server()
        cy.route('POST', '**/api/users/login').as(this.nomeDasRotas.postLogin);
        cy.route('GET', '**api/tags').as(this.nomeDasRotas.getTags);
        cy.route('GET', '/api/articles/feed?limit=10&offset=0').as(this.nomeDasRotas.getFeed);
    }

    initCadastrar(){
        cy.server()
        cy.route('POST', '**/api/users**').as(this.nomeDasRotas.postUsers);
        cy.route('GET', '**/api/tags').as(this.nomeDasRotas.getTags);
        cy.route('GET', '**api/articles/feed?limit=10&offset=0').as(this.nomeDasRotas.getFeed);
    }
}

export default new Routes();