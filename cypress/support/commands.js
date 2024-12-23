import CadastroPage from "../e2e/pages/cadastroPage";
import LoginPage from "../e2e/pages/loginPage";
import { Login } from "../api/endpoints/login";
const baseUrl = Cypress.env("API_BASE_URL");

Cypress.Commands.add(
  "validarSeUsuarioExiste",
  (nome, email, senha, ehAdm = true) => {
    LoginPage.logarComo(email, senha);
    cy.wait(5000);

    cy.url().then((url) => {
      if (url.includes("/login")) {
        CadastroPage.criarUsuario(nome, email, senha, ehAdm);
        LoginPage.logarComo(email, senha);
      }
    });
  }
);

Cypress.Commands.add("login", (email, password) => {
  Login.realizarLogin(email, password).then((response) => {
    Cypress.env("TOKEN", response.body.authorization);
  });
});
