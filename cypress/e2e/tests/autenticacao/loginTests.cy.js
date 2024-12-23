import LoginPage from "../../pages/loginPage";

describe("Login", () => {
  before(() => {
    cy.readFile("cypress/fixtures/admin.json").then((user) => {
      cy.validarSeUsuarioExiste(user.nome, user.email, user.senha, user.ehAdm);
    });
  });

  it("Deve realizar login com credenciais válidas", () => {
    cy.contains("Bem Vindo Admin Teste").should("be.visible");
    cy.url().should("include", "/admin/home", { timeout: 10000 });
  });

  it("Não deve permitir login com credenciais inválidas", () => {
    LoginPage.logarComo("invalido@teste.com", "senhaerrada");
    cy.contains("Email e/ou senha inválidos").should("be.visible");
    cy.url().should("include", "/login", { timeout: 10000 });
  });
});
