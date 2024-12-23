class LoginPage {
  visit() {
    cy.visit("/login");
  }

  preencherEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-testid="senha"]').type(senha);
  }

  btnEntrar() {
    cy.get('[data-testid="entrar"]').click();
  }

  logarComo(email, senha) {
    this.visit();
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.btnEntrar();
  }
}

export default new LoginPage();
