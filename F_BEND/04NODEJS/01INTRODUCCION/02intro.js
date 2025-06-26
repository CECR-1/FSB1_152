// 2. Servidor HTTP usando Express con require
const express = require("express"); // Importamos Express
const app = express(); // Creamos una instancia de Express

const PORT = 3000; // Definimos el puerto

// Definimos la ruta raíz
app.get("/", (req, res) => {
  res.send("Esta es una prueba unsando express con require (Common JS)"); // Mensaje de respuesta
});

// El servidor escucha en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`); // Mensaje en consola
});
