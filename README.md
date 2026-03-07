# 🌍 EcoRadar

Plataforma web de **conscientização ambiental, monitoramento e ação comunitária**, onde usuários podem aprender práticas sustentáveis, acompanhar notícias ambientais, calcular seu impacto de CO₂, denunciar problemas ambientais e visualizar dados de **qualidade do ar coletados por sensores**.

O **EcoRadar** conecta **tecnologia, dados ambientais e participação da comunidade**, incentivando ações em defesa do meio ambiente.

---

# 🎯 Objetivo

O EcoRadar busca **educar, informar e engajar** a sociedade na proteção ambiental utilizando tecnologia.

A plataforma permite que qualquer pessoa possa:

- 🌱 Aprender hábitos sustentáveis  
- 📰 Acompanhar notícias ambientais  
- 🧮 Calcular seu impacto de carbono  
- 🚨 Denunciar problemas ambientais  
- 🌫️ Visualizar dados de qualidade do ar coletados por sensores  

---

# 🔬 Sistema de Monitoramento Ambiental (Arduino)

Além da plataforma web, o projeto conta com um sistema físico de **monitoramento da qualidade do ar utilizando Arduino**.

Esse dispositivo coleta **dados ambientais em tempo real** e ajuda a conscientizar a população sobre a poluição do ar.

## Componentes

- Sensor de qualidade do ar (ex: **MQ-135**)
- Arduino
- Display ou LEDs indicadores
- Alimentação via USB

## Funcionamento

O sistema realiza a **medição de gases e poluentes presentes no ar** e classifica a qualidade do ambiente.

### Exemplo de classificação

| Índice | Qualidade do Ar |
|------|------|
| 0 – 50 | 🟢 Boa |
| 51 – 100 | 🟡 Moderada |
| 101 – 150 | 🟠 Ruim |
| 151+ | 🔴 Perigosa |

---

# 📲 Integração com a Plataforma

O dispositivo Arduino será acompanhado de um **panfleto com QR Code**, incentivando as pessoas a acessarem o site para entender melhor os dados ambientais.

**Mensagem exemplo:**

> 🌫️ Este dispositivo mede a qualidade do ar do ambiente.  
>  
> Quer entender o que esses dados significam e como reduzir a poluição?  
>  
> **Acesse o EcoRadar para mais informações e dicas ambientais.**

O **QR Code leva diretamente para o site do projeto.**

---

# 🧩 Stack Tecnológica

## Front-end

- HTML5  
- CSS3  
- JavaScript  
- TypeScript  
- React (via Next.js)  
- React Router  
- Axios  
- TailwindCSS  

---

## Back-end

- Node.js  
- Express.js  
- JWT (autenticação)  
- Multer (upload de imagens)  
- Mongoose  

---

## Banco de Dados

- MongoDB  
- MongoDB Atlas  

---

# ⚙️ Funcionalidades

## 🏠 Página Inicial

Apresentação do projeto e acesso rápido às funcionalidades.

- Missão da plataforma  
- Importância da sustentabilidade  
- Acesso às principais áreas do site  

---

## 🌫️ Qualidade do Ar

Área dedicada ao **monitoramento ambiental**.

Conteúdos exibidos:

- Explicação sobre qualidade do ar  
- Níveis de poluição  
- Impacto na saúde  
- Funcionamento do sensor utilizado no projeto  
- Dados coletados pelo sistema Arduino (educativos ou simulados)

---

## 🌱 Dicas Sustentáveis

Área educativa com práticas ecológicas.

Exemplos:

- Economia de água  
- Reciclagem  
- Energia renovável  
- Transporte sustentável  

---

## 📰 Notícias Ambientais

Feed automático de notícias ambientais utilizando **APIs externas**.

### APIs possíveis

- NewsAPI  
- GNews  

Cada notícia exibe:

- Título  
- Imagem  
- Fonte  
- Link para a matéria  

---

## 🧮 Calculadora de CO₂

Ferramenta que estima o **impacto ambiental do usuário**.

### Dados utilizados

- Km percorridos  
- Consumo de energia  
- Uso de plástico  
- Tipo de alimentação  

### Resultado

- Estimativa de emissão de CO₂  
- Gráfico visual  
- Dicas para redução de impacto  

---

## 🚨 Denúncias Ambientais

Usuários podem **reportar problemas ambientais**.

### Campos da denúncia

- Título  
- Descrição  
- Categoria  
- Localização  
- Imagem  

### Exemplos de denúncias

- Lixo irregular  
- Poluição  
- Queimadas  
- Desmatamento  

### Status da denúncia

- Em análise  
- Investigando  
- Resolvido  
- Arquivado  

---

## 🏆 Sistema de Pontuação

Sistema de **gamificação** para incentivar participação.

Exemplos:

- 🌱 +10 pontos por denúncia enviada  
- 🌱 +5 pontos por usar a calculadora  
- 🌱 +3 pontos por interagir com conteúdo  

---

## 📊 Painel Administrativo

Área restrita para **administradores**.

Permite:

- Gerenciar denúncias  
- Alterar status  
- Visualizar relatórios  
- Moderar conteúdo  
