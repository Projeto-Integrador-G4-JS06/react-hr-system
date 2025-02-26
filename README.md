# PeopleHub App - Frontend

<br />

<div align="center">
    <img src="https://ik.imagekit.io/czhooyc3x/PeopleHub%20-%20Frontend/imagem_readme.png?updatedAt=1740593705623" title="Tela " width="50%"/>
</div>

<br /><br />

## 1. Descrição

O **PeopleHub** é um **Frontend** desenvolvido com o **Vite** e o **React** para consumir a API de um sistema de Recursos Humanos, contendo uma entidade chamada `Colaborador`, na qual esta possui os seguintes atributos: `id`, `cpf`, `nome`, `cargo`, `email`, `foto`, `salario`, `data_nascimento`, `data_contratacao` e `data` de cadastro do registro no Banco de Dados. O Back-end da aplicação foi desenvolvida utilizando o Framework **NestJS**. A aplicação permite o gerenciamento da entidade **Colaborador**, e listagem de todas as informações pertinentes a cada cada um dos colaboradores persistidos no Banco de Dados. Essas informações serão mostradas em formato de cards na página **Colaboradores**, no site.

### 1.1. Principais Funcionalidades

- **CRUD de Colaboradores**: Embora o nosso Back-end permita o gerenciamento de todas as informações dos colaboradores através do CRUD, nesta aplicação focaremos somente nos recursos visuais do Front-end.

------

## 2. Tecnologias

| Item                         | Descrição  |
| ---------------------------- | ---------- |
| **Servidor**                 | Node JS    |
| **Linguagem de programação** | TypeScript |
| **Biblioteca**               | React JS   |
| **Build**                    | Vite       |
| **Estilização**              | Tailwind   |

---

## 3. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- [yarn](https://yarnpkg.com/)
- Backend da API NestJS rodando ([Repositório da API](https://github.com/rafaelq80/delivery-nest))

---

## 4. Instalação - Ambiente Local

### 4.1. Clonando o repositório

```bash
git clone git@github.com:Projeto-Integrador-G4-JS06/react-hr-system.git
cd react-hr-system
```

### 4.2. Instalando as dependências

Utilize o comando abaixo para instalar todas as bibliotecas através do yarn:

```bash
yarn
```

### 4.3. Configuração do ambiente

A URL da API NestJS deve estar apontando para o endereço abaixo:

```bash
http://localhost:4000
```

### 4.4. Executando o projeto

Inicie o servidor de desenvolvimento com o yarn:

```bash
yarn dev
```

A aplicação estará disponível no enderço: `http://localhost:5173`

---

## 5. Estrutura do Projeto

```plaintext
src/
│
├── components/       # Componentes reutilizáveis
├── contexts/         # Gerenciamento de estado global (ex: autenticação)
├── models/           # Estrutura de dados da aplicação
├── pages/            # Páginas da aplicação
├── services/         # Integração com a API (requisições HTTP)
├── utils/            # Funções auxiliares (alerts)
└── App.tsx           # Componente principal da aplicação
```

---

## 6. Implementações Futuras

- [x] Consumo do Recurso Colaborador
- [x] Autenticação JWT
