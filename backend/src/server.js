require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
}));

const FRONTEND_PATH = path.resolve(__dirname, "../../frontend");

app.use(express.static(FRONTEND_PATH));

app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
  res.send("API funcionando 🚀");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/login.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/registro.html"));
});

app.get("/calculadora", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/calculadora.html"));
});

app.get("/dicas", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/dicas.html"));
});

app.get("/denuncia", (req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "pages/denuncia.html"));
});

// Fallback for .html links if any remain
app.get("/:page.html", (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(FRONTEND_PATH, `pages/${page}.html`));
});

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