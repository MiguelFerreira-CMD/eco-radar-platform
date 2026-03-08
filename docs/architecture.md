# 🏗️ Architecture — EcoRadar

Este documento descreve a **arquitetura do sistema EcoRadar**, explicando como os diferentes componentes da plataforma se conectam para oferecer funcionalidades de conscientização ambiental, monitoramento e participação comunitária.

---

# 🌐 Visão Geral da Arquitetura

O EcoRadar utiliza uma **arquitetura web baseada em cliente-servidor**, combinando tecnologias modernas de front-end, back-end, banco de dados e um sistema físico de monitoramento ambiental.

Fluxo geral do sistema:

```
Usuário
   ↓
Front-end (Next.js)
   ↓
API (Node.js + Express)
   ↓
Banco de Dados (MongoDB)
```

Além disso, o projeto inclui um **dispositivo físico com Arduino** responsável por demonstrar a medição da qualidade do ar.

---

# 🖥️ Front-end

O **front-end** é responsável pela interface do usuário e pela interação com a API.

## Tecnologias

* HTML5
* CSS3
* JavaScript
* TypeScript
* React (via Next.js)
* TailwindCSS
* Axios

## Responsabilidades

* Renderizar as páginas da plataforma
* Exibir dados recebidos da API
* Enviar informações para o back-end
* Gerenciar navegação entre páginas
* Consumir APIs externas de notícias

## Principais páginas

* Página inicial
* Qualidade do ar
* Dicas sustentáveis
* Notícias ambientais
* Calculadora de CO₂
* Sistema de denúncias
* Área administrativa

---

# ⚙️ Back-end

O **back-end** é responsável por processar dados, gerenciar usuários e fornecer APIs para o front-end.

## Tecnologias

* Node.js
* Express.js
* JWT (autenticação)
* Multer (upload de imagens)
* Mongoose (ODM)

## Responsabilidades

* Criar APIs REST
* Gerenciar autenticação de usuários
* Armazenar denúncias ambientais
* Controlar sistema de pontuação
* Gerenciar conteúdo da plataforma
* Servir dados para o front-end
  
---

# 🗄️ Banco de Dados

O projeto utiliza um banco de dados **NoSQL** baseado em documentos.

## Tecnologia

* MongoDB
* MongoDB Atlas

---

# 🔬 Sistema de Monitoramento Ambiental

O EcoRadar também inclui um **dispositivo físico para medição da qualidade do ar** utilizando Arduino.

## Componentes

* Arduino
* Sensor MQ-135
* LEDs ou Display
* Alimentação via USB

## Funcionamento

O sensor detecta gases e partículas presentes no ar e classifica a qualidade ambiental.

Exemplo de classificação:

| Índice  | Qualidade |
| ------- | --------- |
| 0–50    | Boa       |
| 51–100  | Moderada  |
| 101–150 | Ruim      |
| 151+    | Perigosa  |

Esse dispositivo será utilizado como **ferramenta de conscientização**, acompanhado de um **QR Code direcionando os usuários para o site EcoRadar**.

---

# 🔗 Integrações Externas

O sistema utiliza APIs externas para complementar os dados da plataforma.

## APIs de notícias

* NewsAPI
* GNews

Essas APIs fornecem:

* notícias ambientais
* imagens
* fontes confiáveis
* links para matérias completas

---

# 📡 Comunicação entre Sistemas

A comunicação entre os componentes do sistema ocorre da seguinte forma:

```
Usuário
   ↓
Interface Web (Next.js)
   ↓
Requisições HTTP (Axios)
   ↓
API REST (Node.js / Express)
   ↓
Banco de Dados (MongoDB)
```

---

# 🔐 Segurança

O sistema utiliza alguns mecanismos básicos de segurança:

* Autenticação via JWT
* Proteção de rotas privadas
* Hash de senhas
* Validação de dados enviados pelo usuário
* Controle de acesso para administradores

---

# 📊 Escalabilidade

A arquitetura foi pensada para permitir futuras expansões, como:

* integração direta do Arduino com a plataforma
* dashboard de dados ambientais em tempo real
* mapas interativos de denúncias
* aplicativo mobile

---

# 🧠 Resumo da Arquitetura

| Camada         | Tecnologia        | Função                     |
| -------------- | ----------------- | -------------------------- |
| Front-end      | Next.js + React   | Interface do usuário       |
| Back-end       | Node.js + Express | API e lógica do sistema    |
| Banco de Dados | MongoDB           | Armazenamento de dados     |
| Hardware       | Arduino + MQ-135  | Medição da qualidade do ar |
| Integrações    | Dados Reais       | Informações ambientais     |
