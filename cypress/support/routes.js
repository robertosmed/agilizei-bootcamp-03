class Routes{

    nomeDasRotas = {
       postArticles: 'POSTArticles',
       getArticlesTitle: 'GETArticlesTitle',
       getArticlesComments: 'GETArticlesComments'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.nomeDasRotas.postArticles);
        cy.route('GET', '**/api/articles/artigo-agilizei-title-**').as(this.nomeDasRotas.getArticlesTitle);
        cy.route('GET', '**/api/articles/artigo-agilizei-title-**/comments').as(this.nomeDasRotas.getArticlesComments);
    }
}

export default new Routes();