const baseUrl = Cypress.env("API_BASE_URL");

export const Produtos = {
  listarProdutos() {
    return cy.request({
      method: "GET",
      url: `${baseUrl}produtos`,
      headers: {
        Authorization: Cypress.env("TOKEN"),
      },
    });
  },

  cadastrarProdutos(produto) {
    return cy.request({
      method: "POST",
      url: `${baseUrl}produtos`,
      body: {
        nome: produto.nome,
        preco: produto.preco,
        descricao: produto.descricao,
        quantidade: produto.quantidade,
      },
      headers: {
        Authorization: Cypress.env("TOKEN"),
      },
      failOnStatusCode: false,
    });
  },

  buscarProdutoPorId(id) {
    return cy.request({
      method: "GET",
      url: `${baseUrl}produtos/${id}`,
    });
  },

  editarProduto(id, produtoAtualizado) {
    return cy.request({
      method: "PUT",
      url: `${baseUrl}produtos/${id}`,
      body: {
        nome: produtoAtualizado.nome,
        preco: produtoAtualizado.preco,
        descricao: produtoAtualizado.descricao,
        quantidade: produtoAtualizado.quantidade,
      },
      headers: {
        Authorization: Cypress.env("TOKEN"),
      },
    });
  },

  excluirProduto(id) {
    return cy.request({
      method: "DELETE",
      url: `${baseUrl}produtos/${id}`,
      headers: {
        Authorization: Cypress.env("TOKEN"),
      },
    });
  },
};
