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

## config/database.js

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

- as rotas da API
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

## denunciaController.js

Gerencia todas as operações relacionadas às **denúncias ambientais** registradas na plataforma.

Entre suas responsabilidades estão:

- criação de novas denúncias
- listagem de denúncias registradas
- atualização do status das denúncias
- comunicação com o banco de dados para armazenamento das informações

**Exemplos de endpoints:**


POST /denuncia
GET /denuncias
PUT /denuncia/:id


---

## rankingController.js

Responsável por gerar e fornecer o **ranking de usuários mais ativos** na plataforma.

Esse ranking é baseado na **pontuação acumulada pelos usuários** ao registrar denúncias ambientais.

**Exemplo de endpoint:**


GET /ranking


---

# Models

## models/

A pasta `models` define os **modelos de dados da aplicação**, que representam as estruturas armazenadas no banco de dados.

Esses modelos são criados utilizando **Mongoose**, que permite definir **esquemas para documentos do MongoDB**.

---

## User.js

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

## Denuncia.js

Define a estrutura de uma **denúncia ambiental registrada no sistema**.

**Exemplo de campos:**

- titulo
- descricao
- imagem
- localizacao
- usuarioId
- status
- data

Esses dados permitem **registrar, analisar e acompanhar ocorrências ambientais** reportadas pelos usuários.

---

# Routes

## routes/

A pasta `routes` define todos os **endpoints da API da aplicação**.

As rotas recebem as **requisições HTTP** e as direcionam para os controllers responsáveis por processar cada ação.

---

## authRoutes.js

Define as rotas relacionadas à **autenticação de usuários**.

**Exemplos de endpoints:**


POST /api/login
POST /api/register


---

## denunciaRoutes.js

Define as rotas responsáveis por manipular as **denúncias ambientais**.

**Exemplos de endpoints:**


POST /api/denuncias
GET /api/denuncias


---

## rankingRoutes.js

Define os endpoints responsáveis por fornecer os dados do **ranking de usuários**.

**Exemplo:**


GET /api/ranking


---

# Middlewares

## middlewares/

Os **middlewares** são funções que interceptam as requisições HTTP **antes que elas cheguem aos controllers**.

Eles são usados para executar:

- verificações
- validações
- operações intermediárias

---

## authMiddleware.js

Middleware responsável por verificar se o **usuário está autenticado**.

Suas funções incluem:

- validar tokens **JWT**
- verificar permissões de acesso
- bloquear requisições não autorizadas

---

## uploadMiddleware.js

Responsável por processar o **upload de arquivos**, como imagens enviadas nas denúncias.

Geralmente utiliza a biblioteca:


multer


Esse middleware garante que os arquivos enviados sejam **processados corretamente antes de serem armazenados**.

---

# Services

## services/

A pasta `services` contém **regras de negócio mais complexas** que não devem ficar diretamente nos controllers.

Essa separação ajuda a manter o código **mais organizado e reutilizável**.

---

## pontuacaoService.js

Responsável por calcular e atualizar a **pontuação dos usuários** com base em suas atividades no sistema.

**Exemplo de lógica aplicada:**

- +10 pontos por denúncia enviada
- +20 pontos se a denúncia for verificada

Esses pontos são utilizados para gerar o **ranking de usuários da plataforma**.

---

# Utils

## utils/

Contém **funções auxiliares reutilizáveis** utilizadas em diferentes partes da aplicação.

Essas funções ajudam a:

- evitar duplicação de código
- tornar o sistema mais modular

---

## generateToken.js

Responsável por gerar **tokens de autenticação JWT** utilizados no sistema de login.

Esse token é enviado ao usuário após **autenticação bem-sucedida** e utilizado para validar **requisições protegidas**.

---

# Arquivos Principais da Aplicação

## app.js

Arquivo responsável por **configurar a aplicação Express**.

Aqui são definidos:

- middlewares globais
- configuração da API
- registro das rotas da aplicação

Esse arquivo organiza e prepara o **servidor antes de ele ser iniciado**.

---

## server.js

Este arquivo é responsável por **iniciar o servidor da aplicação**.

Ele executa o método:


app.listen(PORT)


e define a **porta onde a API ficará disponível**.

Após iniciar, o backend passa a **aceitar requisições HTTP da aplicação frontend**.