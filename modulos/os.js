const os = require('os');

// console.log(os.arch());

// console.log(os.platform());

// console.log(os.cpus().length);

// console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

// Memoria libre
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// Memoria disponibe
console.log(gb(os.totalmem()));

// Directorio del usuario
console.log(os.homedir());
// Directorio para los archivos temporales
console.log(os.tmpdir());

// Nombre del host de a maquina
console.log(os.hostname());

// Interfaces de la red
console.log(os.networkInterfaces());

// Para el manejo de interfaces de bajo nivel