const express = require('express');
const app = express();

// Definimos una función de callback para manejar una ruta
const handleUserProfile = (req, res) => {
    // Simulamos obtener datos del usuario
    const user = {
        id: req.params.id,
        name: 'Usuario Ejemplo',
        email: 'usuario@ejemplo.com'
    };
    res.json(user);
};

// Usamos la función de callback en una ruta
app.get('/usuario/:id', handleUserProfile);

// También podemos definir el callback directamente en la ruta
app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
