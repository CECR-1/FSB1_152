// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send({ message: "Bienvenido a la página principal con require" });
});

// Ruta 1
app.get("/ruta1", (req, res) => {
  res.send({ message: "Has accedido a la Ruta 1 con require" });
});

// Ruta 2
app.get("/ruta2", (req, res) => {
  res.send({ message: "Has accedido a la Ruta 2 con require" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
