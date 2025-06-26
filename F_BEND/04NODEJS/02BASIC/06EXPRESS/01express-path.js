// Importamos Express
const express = require('express');
const app = express();

// Definimos una ruta con un path específico
app.get('/usuarios/:id', (req, res) => {
    // :id es un parámetro de ruta
    const userId = req.params.id;
    res.send(`Mostrando información del usuario ${userId}`);
});

// Definimos una ruta con un path que incluye una expresión regular
app.get('/archivos/*.pdf', (req, res) => {
    // Esta ruta manejará cualquier solicitud que termine en .pdf
    res.send('Manejando un archivo PDF');
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
