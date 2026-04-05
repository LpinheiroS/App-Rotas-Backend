const db = require("../../config/db");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) return res.status(400).json({ erro: "Preencha todos os campos" });

  // verifica se já existe
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ erro: "Erro de acesso ao banco de dados" });
    if (results.length > 0) return res.status(400).json({ erro: "Em-ail já cadastrado" });

    const senhaHash = await bcrypt.hash(senha, 10);

    db.query("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senhaHash], (err) => {
      if (err) return res.status(500).json({ erro: "Erro ao criar usuário" });
      res.json({ mensagem: "Usuário criado com sucesso" });
    });
  });
};