import HomePage from "../../pages/homePage";

describe("Restrição de Acesso para Usuário Não Administrador", () => {
  beforeEach(() => {
    cy.readFile("cypress/fixtures/naoAdmin.json").then((user) => {
      cy.validarSeUsuarioExiste(user.nome, user.email, user.senha, user.ehAdm);
    });
  });

  it("Não deve permitir acesso a funcionalidades restritas de Admin", () => {
    HomePage.verificaTituloDaPagina();
    HomePage.verificarSeLinksRestritosNaoEstaoVisiveis();
  });
});
