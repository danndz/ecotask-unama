# EcoTask - Gerenciador Inteligente de Tarefas

## Sobre o Projeto
O **EcoTask** é uma aplicação web leve e funcional voltada para o gerenciamento de tarefas e acompanhamento de produtividade diária. O objetivo do sistema é oferecer uma interface simples e rápida para organização de rotinas individuais ou de pequenas equipes.

Este repositório foi utilizado como estudo de caso para a disciplina de **Arquitetura de Software e Computação em Nuvem** do curso de Análise e Desenvolvimento de Sistemas (UNAMA).

## Aluno
* **Carlos Danilo Dias da Silva**

## Disciplina
* **Curso:** Análise e Desenvolvimento de Sistemas - UNAMA
* **Disciplina:** Arquitetura de Software e Computação em Nuvem
* **Professor:** Rodrigo Medeiros Costa

## Tecnologias Utilizadas
* **Backend:** Node.js, Express.js, CORS, Body-Parser
* **Frontend:** HTML5, CSS3, JavaScript ES6 (Fetch API)
* **Arquitetura:** Monolítica simplificada com separação de responsabilidades em rotas/controladores

## Organização Atual do Sistema
* `server.js`: Ponto de entrada da aplicação Backend com rotas da API RESTful (CRUD de tarefas).
* `public/index.html`: Interface do usuário responsável por consumir a API REST e interagir com o estado do sistema.

## Como Executar o Projeto Localmente

### Pré-requisitos
* **Node.js** instalado (versão 14 ou superior)

### Passo a Passo

1. **Clonar este repositório:**
   ```bash
   git clone https://github.com/danndz/ecotask-unama.git
   cd ecotask-unama
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor:**
   ```bash
   npm start
   ```

4. **Acessar a aplicação:**
   Abra o seu navegador e acesse: `http://localhost:3000`
