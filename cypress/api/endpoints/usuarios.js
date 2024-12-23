const baseUrl = Cypress.env("API_BASE_URL");

export const Usuarios = {
  listarUsuarios() {
    return cy.request({
      method: "GET",
      url: `${baseUrl}usuarios`,
    });
  },

  cadastrarUsuario(usuario) {
    return cy.request({
      method: "POST",
      url: `${baseUrl}usuarios`,
      body: {
        nome: usuario.nome,
        email: usuario.email,
        password: usuario.password,
        administrador: usuario.administrador,
      },
      failOnStatusCode: false,
    });
  },

  buscarUsuarioPorId(id) {
    return cy.request({
      method: "GET",
      url: `${baseUrl}usuarios/${id}`,
    });
  },

  editarUsuario(id, usuarioAtualizado) {
    return cy.request({
      method: "PUT",
      url: `${baseUrl}usuarios/${id}`,
      body: {
        nome: usuarioAtualizado.nome,
        email: usuarioAtualizado.email,
        password: usuarioAtualizado.password,
        administrador: usuarioAtualizado.administrador,
      },
    });
  },

  excluirUsuario(id) {
    return cy.request({
      method: "DELETE",
      url: `${baseUrl}usuarios/${id}`,
    });
  },
};
