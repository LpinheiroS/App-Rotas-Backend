require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth");
const optimizeRoutes = require("./routes/optimize/optmize");

app.use("/auth", authRoutes);
app.use("/optimize", optimizeRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));