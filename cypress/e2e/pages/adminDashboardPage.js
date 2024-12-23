class AdminDashboardPage {
  visit() {
    cy.visit("/admin/home");
  }
  cadastrarUsuarios() {
    cy.get('[data-testid="cadastrarUsuarios"]').click();
  }

  listarUsuarios() {
    cy.get('[data-testid="listarUsuarios"]').click();
  }

  cadastrarProdutos() {
    cy.get('[data-testid="cadastrarProdutos"]').click();
  }

  listarProdutos() {
    cy.get('[data-testid="listarProdutos"]').click();
  }

  btnLogout() {
    cy.get('[data-testid="logout"]').click();
  }

  validarOpcoesEmTela(condicao) {
    cy.contains('Cadastrar Usuários').should(condicao);
    cy.contains('Listar Usuários').should(condicao);
    cy.contains('Cadastrar Produtos').should(condicao);
    cy.contains('Listar Produtos').should(condicao);
    cy.contains('Relatórios').should(condicao);
  }
}

export default new AdminDashboardPage();
