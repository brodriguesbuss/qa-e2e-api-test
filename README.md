# QA-E2E-API-TEST

Repositório de testes end-to-end (E2E) utilizando Cypress, estruturado para gerenciar testes automatizados de APIs e interfaces. Este README fornece uma visão geral da organização do projeto e detalhes sobre as pastas e arquivos.

---

### 📂 Estrutura do Projeto

```
├── cypress/
│   ├── e2e/                       # Testes E2E
│   │   ├── pages/                 # Page Objects para facilitar a manutenção dos testes
│   │   │   ├── adminDashboardPage.js
│   │   │   ├── cadastroPage.js
│   │   │   ├── homePage.js
│   │   │   ├── loginPage.js
│   │   │   ├── produtosPage.js
│   │   ├── tests/                 # Testes agrupados por funcionalidade
│   │       ├── admin/
│   │       │   ├── cadastrarProdutos.cy.js
│   │       ├── autenticacao/
│   │       │   ├── loginTests.cy.js
│   │       ├── home/
│   │           ├── restricao-acesso.cy.js
│   │ 
│   ├── api/                         # Testes de API
│   │   ├── endpoints/               # Requisições e métodos para os endpoints
│   │   │   ├── usuarios.js      
│   │   │   ├── login.js           
│   │   │   └── produtos.js        
│   │   └── tests/                   # Testes organizados por cenários
│   │       ├── usuarios.cy.js   
│   │       ├── login.cy.js     
│   │       └── produtos.cy.js     
│   │ 
│   ├── fixtures/                    # Dados mockados (fixtures) para os testes
│   ├── support/                     # Comandos e configurações customizadas do Cypress
│       ├── commands.js
│       ├── e2e.js
│ 
├── node_modules/                    # Dependências gerenciadas pelo Node.js
├── .gitignore                       # Arquivos e pastas ignorados pelo Git
├── LICENSE                          # Arquivo de licença do projeto
├── cypress.config.js                # Configurações globais do Cypress
├── package.json                     # Configuração de dependências e scripts do projeto
├── produtoTeste.png                 # Arquivo de mídia utilizado nos testes E2E
├── README.md                        # Documentação do repositório
```
---

### 📄 Descrição das Pastas

- #### `cypress/e2e/pages`
Esta pasta contém arquivos que encapsulam interações específicas com páginas do sistema. Cada arquivo representa uma página e inclui métodos para facilitar a reutilização de ações durante os testes.

- #### `cypress/e2e/tests`
Os testes estão organizados por módulos ou funcionalidades, como:

**Admin**: Testes relacionados à administração do sistema (ex.: cadastro de produtos).\
**Autenticação**: Testes de login e gerenciamento de sessão.\
**Home**: Testes de acesso e navegação na página inicial.

- #### `cypress/api/endpoints`
Essa pasta contém os arquivos de API. Separados por endpoints.

- #### `cypress/api/tests`
Essa pasta contém os testes que utilizam os metodos criados em cada endpoint na pasta /api/endpoints. 

- #### `cypress/fixtures`
Contém dados estáticos ou mockados em formato JSON utilizados durante os testes para simular requisições e preencher formulários.

- #### `cypress/support`
Inclui configurações e comandos personalizados do Cypress para facilitar a execução de testes e reduzir redundâncias.

---
### 🚀 Como Executar o Projeto

1. **Instale as dependências:**
    > npm install
2. **Execute os testes no Cypress:**

- Modo interativo:
    > npx cypress open

- Modo headless:
    > npx cypress run

---
### 🛠 Tecnologias Utilizadas
- Cypress
- Node.js
---
### 🗂 Recursos
- **Configuração Cypress**: Configurações específicas no arquivo cypress.config.js.
- **Mock de Dados**: Utilização de fixtures para testar funcionalidades com dados simulados.
- **Comandos Personalizados**: Métodos utilitários para ações frequentes, configurados no arquivo commands.js.
---
### 📌 Licença
Este projeto está licenciado sob a Licença MIT.

---
