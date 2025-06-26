// Importar el módulo http
const http = require("http");

// Crear el servidor
const server = http.createServer((req, res) => {
  // Configurar el encabezado de respuesta
  res.setHeader("Content-Type", "application/json");

  // Manejar las rutas
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Bienvenido a la página principal" }));
  } else if (req.url === "/ruta1") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Has accedido a la Ruta 1" }));
  } else if (req.url === "/ruta2") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Has accedido a la Ruta 2" }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Ruta no encontrada" }));
  }
});

// Establecer el puerto en el que escuchará el servidor
const PORT = 3000;

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
