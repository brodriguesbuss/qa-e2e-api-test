import AdminDashboardPage from "../../e2e/pages/adminDashboardPage";

class HomePage {
  visit() {
    cy.visit("/home");
  }

  preencherPesquisa(texto) {
    cy.get('[data-testid="pesquisar"]').type(texto);
  }

  btnPesquisar() {
    cy.get('[data-testid="botaoPesquisar"]').click();
  }

  verificaTituloDaPagina() {
    cy.get("h1").should("contain.text", "Serverest Store");
  }

  verificarSeLinksRestritosNaoEstaoVisiveis() {
    AdminDashboardPage.validarOpcoesEmTela("not.exist");
  }
}

export default new HomePage();
