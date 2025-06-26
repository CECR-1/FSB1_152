// timers_example.js
const timers = require("timers");

// Usar setTimeout para ejecutar una función después de 2 segundos
timers.setTimeout(() => {
  console.log("Este mensaje aparece después de 2 segundos.");
}, 2000);

// Usar setInterval para ejecutar una función cada 1 segundo
const intervalId = timers.setInterval(() => {
  console.log("Este mensaje aparece cada segundo.");
}, 1000);

// Detener el intervalo después de 5 segundos
timers.setTimeout(() => {
  clearInterval(intervalId);
  console.log("El intervalo ha sido detenido.");
}, 5000);
