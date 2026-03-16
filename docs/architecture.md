# Arquitetura do Sistema - EcoRadar

## Visão Geral

O **EcoRadar** é uma plataforma web criada para permitir que cidadãos registrem e acompanhem denúncias ambientais em suas regiões, promovendo conscientização e participação da comunidade na preservação do meio ambiente.

A aplicação segue uma arquitetura **cliente-servidor**, onde o frontend é responsável pela interface do usuário e o backend gerencia a lógica da aplicação, autenticação, armazenamento de dados e processamento das denúncias.

---

# Estrutura Geral da Arquitetura

A comunicação do sistema ocorre da seguinte forma:

Usuário → Frontend → API Backend → Banco de Dados

1. O usuário interage com a interface do site.
2. O frontend envia requisições para a API do backend.
3. O backend processa os dados e executa regras de negócio.
4. As informações são armazenadas no banco de dados.
5. A API retorna a resposta para o frontend.

---

# Tecnologias Utilizadas

## Frontend

Responsável pela interface e experiência do usuário.

Tecnologias:

- HTML5
- CSS3
- JavaScript
- TailwindCSS

O frontend apresenta:

- layout moderno e responsivo
- páginas informativas sobre preservação ambiental
- formulário de denúncias
- calculadora de emissão de CO₂
- ranking de usuários

---

## Backend

Responsável pela lógica da aplicação e comunicação com o banco de dados.

Tecnologias:

- Node.js
- Express.js

Funções do backend:

<<<<<<< HEAD
- autenticação de usuários
- registro de denúncias
- gerenciamento de status das denúncias
- sistema de pontuação
- controle administrativo

=======
* Criar APIs REST
* Gerenciar autenticação de usuários
* Armazenar denúncias ambientais
* Controlar sistema de pontuação
* Gerenciar conteúdo da plataforma
* Servir dados para o front-end
  
>>>>>>> 9cc0ea7d45724ec35d96f499cab6ab6427458d5a
---

## Banco de Dados

Tecnologia utilizada:

MongoDB

O banco de dados é responsável por armazenar:

- usuários
- denúncias ambientais
- status das denúncias
- pontuação dos usuários

A modelagem dos dados é feita utilizando **Mongoose**.

---

# Funcionalidades do Sistema

## Sistema de Login

Usuários podem:

- criar conta
- realizar login
- acessar funcionalidades da plataforma

A autenticação garante que apenas usuários registrados possam enviar denúncias.

---

## Sistema de Denúncias Ambientais

Os usuários podem registrar denúncias sobre problemas ambientais como:

- rios poluídos
- esgoto irregular
- descarte de lixo
- outros tipos de poluição

Cada denúncia pode conter:

- título
- descrição
- foto da ocorrência
- data do registro
- status da análise

As imagens enviadas **não são exibidas publicamente no site**.

Elas ficam disponíveis apenas para **administradores no sistema interno**, garantindo controle e moderação das denúncias.

---

## Status das Denúncias

Cada denúncia possui um status que indica seu estado de análise:

- Em análise
- Verificada

Isso permite que usuários acompanhem o andamento das denúncias realizadas.

---

## Calculadora de Emissão de CO₂

O sistema possui uma ferramenta interativa que permite aos usuários calcular uma estimativa de emissão de dióxido de carbono baseada em hábitos cotidianos.

Essa funcionalidade tem como objetivo promover **educação ambiental e conscientização sobre impacto climático**.

---

## Sistema de Pontuação e Ranking

Para incentivar a participação da comunidade, o EcoRadar possui um sistema de pontuação.

Usuários recebem pontos ao realizar denúncias.

Um **ranking de usuários** é exibido no site, mostrando quem mais contribuiu com denúncias ambientais.

Esse ranking pode ser exibido em uma área lateral da interface do site.

---

## Integração com Arduino

<<<<<<< HEAD
O projeto também inclui um protótipo com **Arduino** responsável por medir a qualidade do ar.

Os dados coletados pelo sensor são exibidos em um dispositivo físico junto a um **QR Code**.

Esse QR Code direciona usuários para o site do EcoRadar, incentivando o acesso à plataforma e ampliando a conscientização ambiental.

---

# Estrutura do Projeto

O projeto é dividido em duas partes principais:

Frontend  
Responsável pela interface do usuário.

Backend  
Responsável pela lógica da aplicação e comunicação com o banco de dados.

Essa separação melhora a organização do projeto e facilita a manutenção e evolução do sistema.
=======
| Camada         | Tecnologia        | Função                     |
| -------------- | ----------------- | -------------------------- |
| Front-end      | Next.js + React   | Interface do usuário       |
| Back-end       | Node.js + Express | API e lógica do sistema    |
| Banco de Dados | MongoDB           | Armazenamento de dados     |
| Hardware       | Arduino + MQ-135  | Medição da qualidade do ar |
| Integrações    | Dados Reais       | Informações ambientais     |
>>>>>>> 9cc0ea7d45724ec35d96f499cab6ab6427458d5a
