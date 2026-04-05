require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));