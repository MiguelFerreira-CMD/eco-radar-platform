require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// 🔌 Conecta MongoDB
connectDB();

// 🛡 Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false, // Desativado para facilitar carregamento de scripts externos se houver
}));

// 📁 DEFINIR CAMINHOS
const FRONTEND_PATH = path.resolve(__dirname, "../../frontend");

// 📁 SERVIR ARQUIVOS ESTÁTICOS
// Isso permite acessar /css/style.css, /js/auth.js, etc.
app.use(express.static(FRONTEND_PATH));

// 🔐 ROTAS DA API
app.use("/api/auth", authRoutes);

// 🧪 TESTE API
app.get("/api/health", (req, res) => {
  res.send("API funcionando 🚀");
});

// 🏠 ROTA PRINCIPAL -> LOGIN
app.get("/", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/login.html"));
});

// 📄 ROTA PARA O DASHBOARD (Após login)
app.get("/home", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/index.html"));
});

// 📄 ROTA PARA REGISTRO
app.get("/registro", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/registro.html"));
});

// 🚀 PORTA
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
  ================================================
  🚀 Servidor rodando na porta ${PORT}
  🔗 http://localhost:${PORT}
  📁 Frontend: ${FRONTEND_PATH}
  ================================================
  `);
});