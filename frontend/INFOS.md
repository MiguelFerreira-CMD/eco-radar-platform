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

## denuncias.html

Página dedicada ao **sistema de denúncias ambientais**.

Nela, os usuários podem:

- registrar novas denúncias ambientais  
- enviar imagens relacionadas à denúncia  
- visualizar denúncias registradas  

Essa página se comunica com a **API** para armazenar e recuperar informações das denúncias.

---

## ranking.html

Página responsável por exibir o **ranking de usuários da plataforma**.

O ranking apresenta os usuários que **mais contribuíram registrando denúncias ambientais**.

Essa funcionalidade faz parte do **sistema de gamificação**, incentivando a participação ativa da comunidade.

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
- realizam requisições para a API  
- atualizam dinamicamente os elementos da página  

---

## api.js

Arquivo responsável por **centralizar as chamadas para a API do backend**.

Ele contém funções que facilitam o envio de **requisições HTTP**, evitando repetição de código em diferentes partes do frontend.

**Exemplo de chamada para a API:**

```javascript
fetch("/api/denuncias")

Esse arquivo funciona como uma camada intermediária entre a interface e o backend.

auth.js

Responsável pelo gerenciamento de autenticação no frontend.

Entre suas funções estão:

envio de dados de login para a API

cadastro de novos usuários

controle de sessão do usuário

logout da aplicação

denuncias.js

Gerencia toda a interação do usuário com o sistema de denúncias.

Suas responsabilidades incluem:

envio de novas denúncias

upload de imagens

listagem de denúncias existentes

atualização das informações exibidas na interface

ranking.js

Responsável por carregar e exibir o ranking de usuários.

Esse script realiza requisições para a API e atualiza a interface com os dados retornados, mostrando os usuários mais ativos da plataforma.

Assets
assets/

A pasta assets armazena arquivos estáticos utilizados na interface do site.

Esses arquivos não contêm lógica de programação e são usados apenas para compor a interface visual.

images/

Contém imagens utilizadas no site, como:

imagens ilustrativas

banners

imagens de conteúdo ambiental

elementos visuais da interface

icons/

Contém ícones utilizados na interface da aplicação.

Esses ícones ajudam a melhorar a experiência do usuário e tornam a navegação mais intuitiva.

Uploads
uploads/

Diretório utilizado para armazenar arquivos enviados pelos usuários.

Nesse projeto, ele é utilizado principalmente para armazenar imagens associadas às denúncias ambientais.

uploads/denuncias/

Subpasta específica para armazenar as fotos enviadas pelos usuários ao registrar uma denúncia.

Essas imagens são utilizadas como evidência da ocorrência reportada.

Por motivos de moderação e controle, essas imagens não são exibidas publicamente no site, ficando disponíveis apenas dentro do sistema administrativo para análise das denúncias.