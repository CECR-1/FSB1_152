const express = require('express');
const app = express();

// Middleware que siempre pasa al siguiente handler
app.use((req, res, next) => {
    console.log('Este middleware siempre se ejecuta');
    next();
});

// Middleware que pasa al siguiente handler solo si se cumple una condición
app.use((req, res, next) => {
    if (req.query.admin === 'true') {
        console.log('Acceso de administrador');
        next();
    } else {
        res.status(403).send('Acceso denegado');
    }
});

// Ruta final
app.get('/', (req, res) => {
    res.send('Bienvenido, administrador');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
