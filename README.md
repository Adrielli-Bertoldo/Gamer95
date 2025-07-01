# Loja do Gamer95 Backend com NestJS!

Este é um projeto backend para uma loja de games onde podemos guardar e manipular os dados dos produtos. Os produtos estão separados em categorias, assim fica mais fácil organizar.

### 1) Criar o projeto no NestJS
- O NestJS é uma ferramenta que ajuda a criar o esqueleto do site que guarda informações.

### 2) Configurar o banco de dados
- O banco de dados é como um caderno onde guardamos tudo.
- No arquivo `app.module.ts`, dizemos onde fica esse caderno e como o NestJS deve falar com ele.

### 3) Criar CRUD para Produto (6 métodos)
- CRUD é um conjunto de ações para mexer nos produtos:
  - Criar (Add um produto novo)
  - Ler (Ver os produtos)
  - Atualizar (Mudar o que tem no produto)
  - Apagar (Deletar um produto)
- Aqui criamos 6 jeitos diferentes de mexer com os produtos.

### 4) Criar CRUD para Categoria (6 métodos)
- Também fazemos as mesmas coisas para as categorias, que vão organizar os produtos.

### 5) Fazer o relacionamento One to Many
- Um tipo de categoria pode ter muitos produtos.
- Esse passo conecta as categorias com seus produtos, para saber quem pertence a quem.

### 6) Seguir as boas práticas no Nest (Entity, Service e Controller)
- Usamos três partes principais para organizar tudo direitinho:
  - Entity: Como é o produto ou categoria na nossa "linguagem"
  - Service: As regras para mexer com os dados
  - Controller: Onde respondemos quando as pessoas pedem algo

### 7) Testar com Insomnia
- O Insomnia é um programa para testar se as coisas estão funcionando, ou seja, se podemos criar, ler, atualizar e apagar os dados.

### 8) Validar as classes feitas para Produto
- No final, verificamos se nossas classes estão funcionando do jeito que pedimos e se as regras estão certas.

``` # Resumo do Projeto: Loja de Games Backend com NestJS

## **Objetivo**
O objetivo é criar um sistema eficiente e organizado para a gestão de produtos em uma loja de games, seguindo boas práticas de desenvolvimento.
