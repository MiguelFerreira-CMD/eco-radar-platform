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

# CSS

## css/styles.css

Arquivo responsável pelos **estilos visuais da aplicação**.

Ele define a aparência dos elementos da interface, como:

- cores  
- espaçamentos  
- tipografia  
- layout das páginas  

O projeto utiliza:

- **TailwindCSS** para estilização rápida e responsiva  
- **CSS personalizado** para ajustes específicos da interface  

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

*Faz:*

* Pegar dados do usuário
* Calcular emissão
* Mostrar resultado
* Enviar pro backend


## js/app.js

Controle geral da aplicação

*Faz:*

* Verifica se usuário está logado
* Bloqueia acesso sem login
* Controla o que aparece na tela

## js/auth.js

Autenticação

*Faz:*

* Enviar login pro backend
* Salvar token (localStorage)
* Logout

## Assets
assets/

A pasta assets armazena arquivos estáticos utilizados na interface do site.

Esses arquivos não contêm lógica de programação e são usados apenas para compor a interface visual.

## images/

Contém imagens utilizadas no site, como:

imagens ilustrativas

banners

imagens de conteúdo ambiental

elementos visuais da interface

## icons/

Contém ícones utilizados na interface da aplicação.

Esses ícones ajudam a melhorar a experiência do usuário e tornam a navegação mais intuitiva.