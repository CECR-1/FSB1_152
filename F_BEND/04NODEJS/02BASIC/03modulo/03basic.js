// server.mjs
import express from "express";
const app = express();
const PORT = 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send({ message: "Bienvenido a la página principal con import" });
});

// Ruta 1
app.get("/ruta1", (req, res) => {
  res.send({ message: "Has accedido a la Ruta 1 con import" });
});

// Ruta 2
app.get("/ruta2", (req, res) => {
  res.send({ message: "Has accedido a la Ruta 2 con import" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
