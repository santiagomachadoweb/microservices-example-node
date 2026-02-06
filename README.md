[README.md](https://github.com/user-attachments/files/25139869/README.md)
# Microservices Example - Node.js

Projeto para demonstrar arquitetura de microsserviços com
Node.js, utilizando dois serviços independentes que se comunicam via
HTTP.

## 🧱 Arquitetura

-   **user-service (porta 3001)**: responsável por gerenciar usuários.
-   **auth-service (porta 3002)**: responsável por autenticação e
    consome o user-service.

Fluxo: Cliente → auth-service → user-service → banco de dados (SQLite)

## 📦 Tecnologias

-   Node.js
-   Express
-   Axios
-   SQLite
-   dotenv

## 📁 Estrutura do Projeto

microsservices-example\
├── user-service\
│ └── src\
│ ├── routes\
│ ├── controllers\
│ ├── repositories\
│ └── server.js\
└── auth-service\
└── src\
└── server.js

## ▶️ Como executar

### 1. Clonar o repositório

``` bash
git clone https://github.com/SEU_USUARIO/microservices-example-node.git
cd microservices-example
```

### 2. Rodar o user-service

``` bash
cd user-service
npm install
node src/server.js
```

A API ficará disponível em: http://localhost:3001/users

### 3. Rodar o auth-service (em outro terminal)

``` bash
cd auth-service
npm install
node src/server.js
```

### 4. Testar autenticação

``` bash
curl -X POST http://localhost:3002/login -H "Content-Type: application/json" -d "{\"email\":\"teste@email.com\"}"
```

## 🎯 Objetivo do Projeto

Demonstrar: - Arquitetura de microsserviços - Separação de
responsabilidades - Comunicação entre serviços via HTTP - Base para
evolução com API Gateway, Docker e CI/CD

## 📚 Referências

-   Microservices Architecture: https://microservices.io\
-   Martin Fowler - Microservices:
    https://martinfowler.com/articles/microservices.html\
-   Node.js: https://nodejs.org\
-   Express: https://expressjs.com\
-   Axios: https://axios-http.com\
-   SQLite: https://www.sqlite.org\
-   GitHub Docs: https://docs.github.com
