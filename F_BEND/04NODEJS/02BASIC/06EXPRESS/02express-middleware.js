const express = require('express');
const app = express();

// Middleware de registro
const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next(); // Pasa el control al siguiente middleware
};

// Middleware de autenticación (simulado)
const auth = (req, res, next) => {
    // Simulamos una verificación de autenticación
    const isAuthenticated = true; // En un caso real, esto se verificaría con una lógica de autenticación
    if (isAuthenticated) {
        next(); // Usuario autenticado, continúa al siguiente middleware o ruta
    } else {
        res.status(401).send('No autorizado');
    }
};

// Usamos el middleware de registro para todas las rutas
app.use(logger);

// Ruta pública
app.get('/publica', (req, res) => {
    res.send('Esta es una ruta pública');
});

// Ruta protegida que usa el middleware de autenticación
app.get('/protegida', auth, (req, res) => {
    res.send('Esta es una ruta protegida');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
