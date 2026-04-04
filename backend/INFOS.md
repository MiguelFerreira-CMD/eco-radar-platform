# Estrutura do Backend

O diretório `backend/` contém toda a aplicação do servidor do **EcoRadar**.  
Ele é responsável por processar requisições, executar regras de negócio e realizar a comunicação com o banco de dados.

Entre suas principais responsabilidades estão:

- autenticação de usuários
- gerenciamento de denúncias ambientais
- cálculo e atualização do ranking de usuários
- comunicação com o banco de dados MongoDB
- validação e processamento das requisições da API

---

# src

## backend/src/

O diretório `src` contém todo o código principal da aplicação backend.

Separar o código dentro de uma pasta `src` é uma prática comum em projetos profissionais, pois melhora a organização do projeto e separa o **código-fonte** de arquivos de configuração ou build.

Dentro dessa pasta estão organizados os módulos responsáveis pelas diferentes camadas da aplicação, como **controllers, models, rotas e middlewares**.

---

# Config

## config/db.js

Este arquivo é responsável por configurar e estabelecer a conexão com o banco de dados **MongoDB**.

Suas responsabilidades incluem:

- iniciar a conexão com o banco de dados
- configurar o **Mongoose**
- tratar possíveis erros de conexão
- garantir que o backend só inicie quando o banco estiver disponível

Essa separação facilita a manutenção e permite alterar a configuração do banco sem impactar outras partes da aplicação.

---

# Controllers

## controllers/

A pasta `controllers` contém os **controladores da aplicação**.

Os controllers são responsáveis por processar as requisições recebidas pelas rotas da API e executar a lógica correspondente.

Eles atuam como intermediários entre:

- os modelos de dados
- os serviços da aplicação

Cada controller geralmente representa um **domínio específico do sistema**.

---

## authController.js

Responsável por gerenciar toda a lógica de **autenticação de usuários**.

Entre suas funções estão:

- registro de novos usuários
- login de usuários existentes
- geração de tokens de autenticação

**Exemplos de endpoints relacionados:**


POST /login
POST /register


---

## controllers/calcController.js

Lógica do cálculo

*Faz:*

* Receber dados
* Calcular CO₂
* Salvar no banco

---

# Models

## models/

A pasta `models` define os **modelos de dados da aplicação**, que representam as estruturas armazenadas no banco de dados.

Esses modelos são criados utilizando **Mongoose**, que permite definir **esquemas para documentos do MongoDB**.

---

## models/user.js

Define a estrutura de dados de um **usuário da plataforma**.

**Exemplo de campos:**

- nome
- email
- senha
- pontos
- role

Essas informações permitem gerenciar:

- autenticação
- permissões
- pontuação no ranking

---

## models/Calculation.js

Modelo dos cálculos

*Define:*

* ID do usuário
* Valor de CO₂
* Data

---

# Routes

## routes/

A pasta `routes` define todos os **endpoints da API da aplicação**.

As rotas recebem as **requisições HTTP** e as direcionam para os controllers responsáveis por processar cada ação.

---

## routes/authRoutes.js

Rotas de autenticação

*Ex:*

* POST /login
* POST /register

---

## routes/calcRoutes.js

Rotas da calculadora

*Ex:*

* POST /calculate
* GET /history

---

# Middlewares

## middlewares/

Os **middlewares** são funções que interceptam as requisições HTTP **antes que elas cheguem aos controllers**.

Eles são usados para executar:

- verificações
- validações
- operações intermediárias

---

## 🔒 middleware/authMiddleware.js

👉 Proteção de rotas

*Faz:*

* Verifica token
* Libera acesso só pra usuários logados

---

## server.js

## server.js

Coração do backend

*Faz:*

* Inicializa o servidor
* Configura rotas
* Conecta ao banco