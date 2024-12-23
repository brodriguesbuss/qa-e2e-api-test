class CadastroPage {
  visit() {
    cy.visit("/cadastrarusuarios");
  }

  preencherFormulario(nome, email, senha, ehAdm = false) {
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(senha);
    if (ehAdm) {
      cy.get('[data-testid="checkbox"]').check();
    }
  }

  btnCadastrar() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  criarUsuario(nome, email, senha, ehAdm = false) {
    this.visit();
    this.preencherFormulario(nome, email, senha, ehAdm);
    this.btnCadastrar();
    cy.contains("Cadastro realizado com sucesso").should("be.visible", { timeout: 10000 });
  }
}

export default new CadastroPage();
