// os_example.js
const os = require("os");

// Obtener información del sistema
console.log("Plataforma:", os.platform());
console.log("Arquitectura:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Memoria Total:", os.totalmem() / (1024 * 1024), "MB");
console.log("Memoria Libre:", os.freemem() / (1024 * 1024), "MB");
console.log("Número de CPUs:", os.cpus().length);
console.log("Interfaces de Red:", os.networkInterfaces());
console.log("Uptime del Sistema:", os.uptime(), "segundos");
