import { Usuarios } from "../endpoints/usuarios";

describe("Testes da API - Usuários", () => {
  let usuarioCriado;
  let emailJaUtilizado;

  it("Deve listar todos os usuários cadastrados", () => {
    Usuarios.listarUsuarios().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("usuarios");
      expect(response.body.usuarios).to.be.an("array");
    });
  });

  it("Deve cadastrar um novo usuário", () => {
    let emailNovo = `joao.silva${Date.now()}@teste.com`;
    const novoUsuario = {
      nome: "João Silva",
      email: emailNovo,
      password: "senha123",
      administrador: "true",
    };

    emailJaUtilizado = emailNovo;

    Usuarios.cadastrarUsuario(novoUsuario).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("_id");
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
      usuarioCriado = response.body;
    });
  });

  it("Não deve cadastrar usuário com mesmo email", () => {
    const usuarioRepetido = {
      nome: "João Silva",
      email: emailJaUtilizado,
      password: "senha123",
      administrador: "true",
    };

    Usuarios.cadastrarUsuario(usuarioRepetido).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Este email já está sendo usado");
    });
  });

  it("Deve buscar um usuário pelo ID", () => {
    expect(usuarioCriado).to.not.be.undefined;

    Usuarios.buscarUsuarioPorId(usuarioCriado._id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("nome", "João Silva");
      expect(response.body).to.have.property("password", "senha123");
      expect(response.body).to.have.property("administrador", "true");
    });
  });
});
