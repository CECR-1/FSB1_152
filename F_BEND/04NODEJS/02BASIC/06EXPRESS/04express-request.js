const express = require('express');
const app = express();

// Habilitamos el parsing de JSON en el body
app.use(express.json());

app.post('/api/datos', (req, res) => {
    // Accedemos a los parámetros de la URL
    console.log('Query params:', req.query);

    // Accedemos a los parámetros de la ruta
    console.log('Route params:', req.params);

    // Accedemos al cuerpo de la petición
    console.log('Body:', req.body);

    // Accedemos a los headers
    console.log('Headers:', req.headers);

    // Accedemos al método HTTP
    console.log('Método:', req.method);

    // Accedemos a la URL completa
    console.log('URL:', req.url);

    res.send('Datos recibidos');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
