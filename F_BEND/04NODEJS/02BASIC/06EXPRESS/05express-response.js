const express = require('express');
const app = express();

app.get('/ejemplo', (req, res) => {
    // Enviamos una respuesta simple
    // res.send('Hola Mundo');

    // Enviamos un JSON
    // res.json({ mensaje: 'Hola Mundo' });

    // Establecemos el estado de la respuesta
    // res.status(201).send('Recurso creado');

    // Establecemos headers personalizados
    // res.set('Content-Type', 'text/html');
    // res.send('<h1>Hola Mundo</h1>');

    // Redirigimos a otra URL
    // res.redirect('/otra-pagina');

    // Renderizamos una vista (requiere configuración de motor de vistas)
    // res.render('index', { titulo: 'Mi Página' });

    // Enviamos un archivo
    res.sendFile('/ruta/al/archivo.pdf');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
