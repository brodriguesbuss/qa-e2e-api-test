import { Login } from "../endpoints/login";

describe("Testes da API - Login", () => {
  it("Deve alertar email e/ou senha invalidos", () => {
    Login.realizarLogin("ddddd@gmail.com", "aaaa").then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.equal("Email e/ou senha inválidos");
    });
  });
});
