import AdminDashboardPage from "../../pages/adminDashboardPage";
import ProdutosPage from "../../pages/produtosPage";

describe("Cadastro de Produtos", () => {
  const nomeUnico = `Produto Teste ${Date.now()}`;

  beforeEach(() => {
    cy.readFile("cypress/fixtures/admin.json").then((user) => {
      cy.validarSeUsuarioExiste(user.nome, user.email, user.senha, user.ehAdm);
    });
  });

  it("Deve cadastrar um novo produto com sucesso", () => {
    AdminDashboardPage.cadastrarProdutos();
    ProdutosPage.cadastrarProduto(
      nomeUnico,
      100,
      "Descrição do produto",
      10,
      "produtoTeste.png"
    );

    cy.url().should("include", "/admin/listarprodutos", { timeout: 10000 });
    cy.contains("Lista dos Produtos").should("be.visible");
    cy.contains(nomeUnico)
      .parent("tr")
      .within(() => {
        cy.get("td").eq(1).contains("100");
        cy.get("td").eq(2).contains("Descrição do produto");
        cy.get("td").eq(3).contains(10);
        cy.get("td").eq(4).contains("produtoTeste.png");
      });
  });

  it("Deve validar campos obrigatórios no formulário de cadastro de produtos", () => {
    AdminDashboardPage.cadastrarProdutos();
    ProdutosPage.btnCadastrarProdutos();
    cy.contains("Nome é obrigatório").should("be.visible");
    cy.contains("Preco é obrigatório").should("be.visible");
    cy.contains("Descricao é obrigatório").should("be.visible");
    cy.contains("Quantidade é obrigatório").should("be.visible");
  });
});
