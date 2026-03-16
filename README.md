# 🌱 EcoRadar

**EcoRadar** é uma plataforma digital criada para permitir que cidadãos identifiquem, registrem e acompanhem problemas ambientais em suas cidades.

A plataforma conecta tecnologia, participação social e conscientização ambiental para ajudar na identificação de problemas como poluição de rios, descarte irregular de lixo, esgoto a céu aberto e outros impactos ambientais.

O objetivo é transformar cidadãos em agentes ativos na proteção do meio ambiente através de tecnologia acessível.

---

# 🚀 Visão do Projeto

O EcoRadar busca criar um sistema onde qualquer pessoa possa contribuir com a preservação ambiental reportando problemas em sua região.

Através da plataforma, usuários podem registrar denúncias ambientais, acompanhar o status da análise dessas denúncias e contribuir para um sistema de monitoramento ambiental coletivo.

O projeto também promove educação ambiental através de ferramentas interativas e conteúdos informativos.

---

# 🌍 Problema

Em muitas cidades, problemas ambientais como:

- poluição de rios
- descarte irregular de lixo
- esgoto a céu aberto
- poluição do ar

demoram a ser identificados ou reportados aos órgãos responsáveis.

A falta de canais simples para denúncia e conscientização reduz a participação da população na preservação ambiental.

---

# 💡 Solução

O **EcoRadar** oferece uma plataforma digital onde cidadãos podem:

- registrar denúncias ambientais com fotos
- acompanhar o status da análise dessas denúncias
- visualizar informações educativas sobre sustentabilidade
- calcular sua emissão aproximada de CO₂
- participar de um ranking de contribuição ambiental

A plataforma transforma participação ambiental em uma experiência interativa e acessível.

---

# ✨ Principais Funcionalidades

## 👤 Sistema de Usuários

- Cadastro de usuários
- Login seguro
- Autenticação baseada em token
- Perfil de usuário

---

## 🚨 Sistema de Denúncias Ambientais

Usuários podem registrar denúncias contendo:

- título da denúncia
- descrição do problema
- imagem da ocorrência
- localização
- data do registro

Cada denúncia passa por um processo de análise e recebe um status:

- **Em análise**
- **Verificada**
- **Rejeitada**

As imagens enviadas ficam disponíveis apenas no painel administrativo.

---

## 🛠 Painel Administrativo

Administradores podem:

- visualizar denúncias enviadas
- analisar evidências
- verificar imagens enviadas
- aprovar ou rejeitar denúncias
- atualizar o status das ocorrências

---

## 🧮 Calculadora de Emissão de CO₂

Ferramenta educativa que permite aos usuários estimar sua emissão de carbono com base em hábitos cotidianos como:

- uso de transporte
- consumo energético
- estilo de vida

A calculadora também fornece recomendações para redução do impacto ambiental.

---

## 🏆 Sistema de Pontuação e Ranking

Para incentivar a participação da comunidade, o EcoRadar utiliza um sistema de gamificação.

Usuários recebem pontos por:

- registrar denúncias
- contribuir com registros válidos

O sistema exibe um ranking com os usuários mais ativos da plataforma.

---

## 📡 Monitoramento de Qualidade do Ar

O projeto também integra um protótipo com **Arduino**, responsável por medir dados ambientais como qualidade do ar.

Os dados são exibidos fisicamente junto a um **QR Code**, que direciona usuários para a plataforma EcoRadar.

Essa integração demonstra como tecnologia embarcada pode apoiar iniciativas de monitoramento ambiental.

---

# 🧱 Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript
- TailwindCSS

---

## Backend

- Node.js
- Express.js

---

## Banco de Dados

- MongoDB
- Mongoose

---

## Outras Ferramentas

- JWT para autenticação
- Multer para upload de imagens
- dotenv para variáveis de ambiente

---

# 📁 Estrutura do Projeto

ecoradar
│
├── backend
├── frontend
├── uploads
├── docs
├── arduino
├── package.json
├── .env
├── .gitignore
├── LICENSE
├── CONTRINUTING.md
└── README.md

O projeto está organizado seguindo boas práticas de separação entre **frontend**, **backend** e **armazenamento de arquivos**.

---

# ⚙️ Instalação

## 1. Clonar o repositório

git clone [https://github.com/seu-usuario/ecoradar.git](https://github.com/seu-usuario/ecoradar.git)

---

## 2. Acessar o diretório do projeto

cd ecoradar

---

## 3. Instalar dependências

npm install

---

## 4. Configurar variáveis de ambiente

Criar um arquivo `.env` na raiz do projeto:

PORT=3000
MONGO_URI=sua_string_do_mongodb
JWT_SECRET=sua_chave_secreta

---

## 5. Iniciar o servidor

npm run dev

---

# 🔒 Segurança

O projeto inclui práticas básicas de segurança como:

- autenticação baseada em token
- criptografia de senhas
- controle de acesso a rotas protegidas
- validação de requisições

---


# 🤝 Contribuição

Contribuições são bem-vindas.

Caso deseje contribuir:

1. Faça um fork do projeto
2. Crie uma nova branch
3. Envie suas alterações
4. Abra um pull request

---

# 📄 Licença

Este projeto está licenciado sob a **MIT License**.

---

# 🌱 EcoRadar

Tecnologia e participação social para um ambiente mais sustentável.

---