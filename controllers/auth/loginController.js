const db = require("../../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

exports.login = (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) return res.status(400).json({ erro: "Preencha todos os campos" });

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ erro: "Erro de acesso ao banco de dados" });
    if (results.length === 0) return res.status(400).json({ erro: "Usuário não encontrado" });

    const user = results[0];
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) return res.status(401).json({ erro: "Senha inválida" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.json({ mensagem: "Login realizado", token });
  });
};