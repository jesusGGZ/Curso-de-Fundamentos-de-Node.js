// libreria moment

const moment = require('moment');

// fecha actua
let ahora = moment();

// ver funcionalidades
// console.log(ahora);

// muesta fecha actua en consola
console.log(ahora.toISOString());

// asignarle formato a la fecha
console.log(ahora.format('YYYY/MM/DD - HH:mm:ss'));

