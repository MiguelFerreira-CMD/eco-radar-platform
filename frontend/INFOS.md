# Estrutura do Frontend

O diretório `frontend/` contém toda a **interface do usuário** da plataforma **EcoRadar**.

Essa parte do sistema é responsável por apresentar as funcionalidades ao usuário e permitir a interação com a aplicação através do navegador.

O frontend se comunica com o backend através de **requisições HTTP para a API**, enviando e recebendo dados relacionados a:

- autenticação de usuários  
- registro de denúncias ambientais  
- consulta de dados  
- exibição do ranking de usuários  
- cálculo de emissão de CO₂  

A separação entre **frontend e backend** permite que cada parte do sistema evolua de forma independente e facilita a manutenção do projeto.

---

# Pages

## pages/

A pasta `pages` contém as **principais páginas da aplicação**.

Cada arquivo HTML representa uma **tela do sistema** e define a estrutura visual e o conteúdo apresentado ao usuário.

Essas páginas utilizam **CSS e JavaScript** para fornecer estilo e interatividade.

---

## index.html

Página inicial da plataforma.

Esta página apresenta uma **visão geral do projeto** e serve como ponto de entrada para os usuários.

Entre os conteúdos exibidos estão:

- informações sobre conscientização ambiental  
- explicação sobre o funcionamento do EcoRadar  
- acesso às principais funcionalidades do sistema  
- navegação para outras páginas da plataforma  

---

## login.html

Página responsável pela **autenticação de usuários**.

Nela, o usuário pode inserir suas **credenciais** para acessar sua conta na plataforma.

**Funcionalidades principais:**

- formulário de login  
- envio de credenciais para a API  
- autenticação do usuário  

---

## register.html

Página de **cadastro de novos usuários**.

Permite que pessoas criem uma conta na plataforma **EcoRadar**.

**Dados normalmente solicitados:**

- nome  
- email  
- senha  

Após o cadastro, o usuário poderá acessar as **funcionalidades da plataforma**.

---

## esqueci.html

Página de **recuperação de senha**.

Permite que usuários que esqueceram sua senha solicitem um **link de redefinição** via URL.

**Dados normalmente solicitados:**

- email  

Após o envio, o usuário é redirecionado para a página **reset-senha** para recuperar o acesso à conta na plataforma **EcoRadar**.

---

## reset.html

Página de **redefinição de senha**.

Acessada a partir do link que redireciona para a página **reset-senha** após o envio do email na etapa de recuperação.

Permite que o usuário defina uma **nova senha** para sua conta na plataforma **EcoRadar**.

**Dados normalmente solicitados:**

- nova senha  
- confirmação da nova senha  

Após a redefinição, o usuário poderá fazer login com as **novas credenciais**.

---

## dicas.html

Página dedicada a **dicas de sustentabilidade e conscientização ambiental**.

Esta página tem como objetivo educar os usuários sobre práticas sustentáveis no dia a dia.

**Conteúdos comuns:**

- redução do consumo de energia  
- economia de água  
- reciclagem e descarte correto de resíduos  
- práticas sustentáveis no cotidiano  

---

## calculadora.html

Página responsável pela **calculadora de emissão de CO₂**.

Permite ao usuário inserir dados sobre seus hábitos e obter uma estimativa de impacto ambiental.

**Funcionalidades:**

- entrada de dados do usuário  
- cálculo de emissão de CO₂  
- exibição do resultado  
- envio de dados para o backend  

---

## denuncia.html

Página vinculada a um **formulário de denúncias ambientais**.

Permite que usuários registrem problemas ambientais observados.

**Funcionalidades principais:**

- formulário de denúncia  
- envio de informações para a API  
- registro de ocorrências ambientais  
- categorização do tipo de problema  

---

# CSS

## css/styles.css

Arquivo responsável pelos **estilos globais da aplicação**.

Ele define a base visual do sistema, como:

- cores principais
- tipografia padrão
- espaçamentos gerais
- layout estrutural das páginas

O projeto utiliza:

- **TailwindCSS** para estilização rápida e responsiva  
- **CSS personalizado** para ajustes específicos da interface  

Além disso, cada página possui seu próprio arquivo CSS para estilos específicos.

---

## css/login.css

Arquivo de estilos da **página de login (login.html)**.

Responsável por:

- centralização do formulário de login
- estilização dos campos de input
- botões de acesso
- feedback visual (erros e validações)

---

## css/registro.css

Arquivo de estilos da **página de cadastro (register.html)**.

Responsável por:

- layout do formulário de registro
- estilização dos campos de entrada
- botões de envio
- mensagens de sucesso ou erro

---

## css/esqueci.css

Arquivo de estilos da **página de recuperação de senha (esqueci.html)**.

Responsável por:

- centralização do formulário de recuperação
- estilização do campo de input de email
- botão de envio do link
- feedback visual (confirmação de envio e erros)

---

## css/reset.css

Arquivo de estilos da **página de redefinição de senha (reset.html)**.

Responsável por:

- centralização do formulário de redefinição
- estilização dos campos de nova senha e confirmação
- botão de salvar nova senha
- feedback visual (erros de validação e sucesso na redefinição)

---

## css/dicas.css

Arquivo de estilos da **página de dicas (dicas.html)**.

Responsável por:

- organização das seções de conteúdo educativo
- cards de dicas sustentáveis
- estilização de textos informativos
- layout de leitura

---

## css/calculadora.css

Arquivo de estilos da **página da calculadora de CO₂ (calculadora.html)**.

Responsável por:

- layout do formulário de cálculo
- organização dos inputs de consumo
- estilização do resultado da emissão
- destaque visual dos dados calculados

---

## css/denuncia.css

Arquivo de estilos da **página de denúncias ambientais (denuncia.html)**.

Responsável por:

- layout do formulário de denúncia
- campos de descrição e categoria
- estilização de upload (se houver)
- organização visual para facilitar o envio de informações

---

# JavaScript do Frontend

## js/

A pasta `js` contém os **scripts responsáveis pela lógica e comportamento da interface do usuário**.

Esses scripts:

- manipulam eventos  
- atualizam dinamicamente os elementos da página  

---

## 🧮 js/calculator.js

👉 Calculadora de CO₂

**Faz:**

- Pegar dados do usuário  
- Calcular emissão  
- Mostrar resultado  
- Enviar pro backend  

---

## js/login.js

Arquivo responsável pela **lógica da página de login**.

**Funções principais:**

- capturar dados do formulário de login  
- validar informações inseridas pelo usuário  
- enviar requisição de login para a API  
- lidar com respostas de sucesso ou erro  

---

## js/registro.js

Arquivo responsável pela **lógica da página de cadastro (registro)**.

**Funções principais:**

- capturar dados do formulário de registro  
- validar informações do usuário (nome, email, senha)  
- enviar dados para a API de criação de conta  
- exibir mensagens de sucesso ou erro  

---

## js/logout.js

Arquivo responsável pela **função de logout (sair da conta)**.

**Funções principais:**

- remover token de autenticação  
- limpar dados do usuário armazenados no navegador  
- redirecionar para a página de login ou inicial  
- encerrar sessão do usuário  

---

## js/navbar.js

Arquivo responsável pelo **comportamento da barra de navegação (navbar)**.

**Funções principais:**

- controlar exibição dinâmica de itens do menu  
- adaptar navbar conforme estado do usuário (logado/deslogado)  
- ativar links da página atual  
- melhorar a navegação entre seções do sistema  

---

## js/toggle.js

Arquivo responsável por controlar **alternância de elementos da interface (toggle UI)**.

**Funções principais:**

- mostrar/ocultar menus ou componentes  
- alternar estados de botões (ativo/inativo)  
- melhorar a interação do usuário com a interface  

---

# frontend/auth.js

Arquivo responsável pela lógica central de autenticação do sistema.

## Funções principais

- Gerenciar o estado de autenticação do usuário na aplicação
- Armazenar e recuperar tokens de acesso (`localStorage` / `sessionStorage`)
- Validar se o usuário está autenticado antes de acessar rotas protegidas
- Redirecionar automaticamente para login caso a sessão expire
- Realizar logout, limpando credenciais e encerrando a sessão ativa

---

# frontend/esqueci.js

Arquivo responsável pela lógica da aba de "Esqueceu sua senha?".

## Funções principais

- Capturar o e-mail informado pelo usuário no formulário
- Validar se o e-mail possui formato correto antes do envio
- Enviar requisição para a API solicitando o link de recuperação de senha pela URL
- Exibir mensagem de sucesso ou erro conforme resposta da API
- Desabilitar o botão de envio durante o processamento para evitar múltiplos cliques

---    

# frontend/reset.js

Arquivo responsável pela lógica da aba de redefinição de senha.

## Funções principais

- Capturar a nova senha e a confirmação de senha informadas pelo usuário
- Validar se as senhas coincidem e atendem aos critérios mínimos de segurança
- Extrair o token de redefinição presente na URL da página
- Enviar requisição para a API com o token e a nova senha definida
- Redirecionar o usuário para o login após a redefinição bem-sucedida

# Assets

## assets/

A pasta `assets` armazena arquivos estáticos utilizados na interface do site.

Esses arquivos não contêm lógica de programação e são usados apenas para compor a interface visual.

---

## img/

Contém imagens utilizadas no site, como:

- imagens ilustrativas  
- banners  
- imagens de conteúdo ambiental  
- elementos visuais da interface  