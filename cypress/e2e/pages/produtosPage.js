class ProdutosPage {
  visit() {
    cy.visit("/admin/cadastrarprodutos");
  }
  preencherDadosDoProduto(nome, preco, descricao, quantidade, imagem) {
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="preco"]').type(preco);
    cy.get('[data-testid="descricao"]').type(descricao);
    cy.get('[data-testid="quantity"]').type(quantidade);
    cy.get('[data-testid="imagem"]').selectFile(imagem);
  }

  btnCadastrarProdutos() {
    cy.get('[data-testid="cadastarProdutos"]').click();
  }

  cadastrarProduto(nome, preco, descricao, quantidade, imagem) {
    this.visit();
    this.preencherDadosDoProduto(nome, preco, descricao, quantidade, imagem);
    this.btnCadastrarProdutos();
  }
}

export default new ProdutosPage();
