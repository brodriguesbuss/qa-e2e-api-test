const baseUrl = Cypress.env("API_BASE_URL");

export const Login = {
  realizarLogin(email, password) {
    return cy.request({
      method: "POST",
      url: `${baseUrl}login`,
      body: {
        email: email,
        password: password,
      },
      failOnStatusCode: false,
    });
  },
};
