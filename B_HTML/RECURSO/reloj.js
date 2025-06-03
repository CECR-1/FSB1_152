//Archivo: reloj.js 
    // Muestra la hora actual en un elemento con id="hora"
    function mostrarHora() {
        const ahora = new Date();
        const hora = ahora.toLocaleTimeString();
        document.getElementById('hora').textContent = hora;
    }
    setInterval(mostrarHora, 1000);
    window.onload = mostrarHora;