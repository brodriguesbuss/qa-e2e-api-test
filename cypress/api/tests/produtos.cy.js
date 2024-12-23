import { Produtos } from "../endpoints/produtos";
import { Usuarios } from "../endpoints/usuarios";

describe("Testes da API - Produtos", () => {
  let produtoCriado;
  let nomeProdutoNovo;

  beforeEach(() => {
    const usuario = {
      nome: "João Silva",
      email: `joao.silva${Date.now()}@teste.com`,
      password: "senha123",
      administrador: "true",
    };
    Usuarios.cadastrarUsuario(usuario);
    cy.login(usuario.email, usuario.password);
  });

  it("Deve listar todos os produtos", () => {
    Produtos.listarProdutos().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("quantidade");
      expect(response.body).to.have.property("produtos");
      expect(response.body.produtos).to.be.an("array");
    });
  });

  it("Deve cadastrar um novo produto", () => {
    nomeProdutoNovo = `TekPix ${Date.now()}`;
    const novoProduto = {
      nome: nomeProdutoNovo,
      preco: 580,
      descricao: "Tekpix 2008",
      quantidade: 5,
    };

    Produtos.cadastrarProdutos(novoProduto).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("_id");
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
      produtoCriado = response.body;
    });
  });

  it("Não deve cadastrar produto com mesmo nome", () => {
    const produtoRepetido = {
      nome: nomeProdutoNovo,
      preco: 580,
      descricao: "Tekpix 2008",
      quantidade: 5,
    };

    Produtos.cadastrarProdutos(produtoRepetido).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Já existe produto com esse nome");
    });
  });

  it("Deve buscar um produto pelo ID", () => {
    expect(produtoCriado).to.not.be.undefined;

    Produtos.buscarProdutoPorId(produtoCriado._id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("nome", nomeProdutoNovo);
      expect(response.body).to.have.property("preco", 580);
      expect(response.body).to.have.property("descricao", "Tekpix 2008");
      expect(response.body).to.have.property("quantidade", 5);
    });
  });
});
