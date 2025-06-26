// 1. Servidor HTTP simple que responde "Esta es una prueba"
const http = require("http"); // Importamos el módulo http

const host = "localhost"; // Definimos el host
const port = 3000; // Definimos el puerto

// Creamos el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código de estado 200 (OK)
  res.setHeader("Content-Type", "text/plain"); // Tipo de contenido
  res.end("Esta es una prueba con un servidor estándar\n"); // Mensaje de respuesta
});

// El servidor escucha en el puerto y host definidos
server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/`); // Mensaje en consola
});
