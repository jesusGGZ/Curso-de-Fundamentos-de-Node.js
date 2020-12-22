const { info, table, group, count } = require("console");
//
console.log('algo');
//
console.info('algo');
//
console.error('algo');
//
console.warn('Algo');

console.log('========================');
//
var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

console.table(tabla);

console.log('========================');
// Ejemplo de console.group
console.group('Conversacion: ');
console.log('Hola');
console.group('bla');
console.log('blabablabla');
console.log('blabablabla');
console.log('blabablabla');
console.log('blabablabla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversacion');

console.log('Otra cosa de otra funcion');

console.log('==========================');
// console.group dentro de funciones
function funcion1() {
    console.group('funcion 2');
    console.log('Esto es de a funcion 1');
    console.log('Esto tambien');
    console.log('Esto tambien');
    funcion2();
    console.log('He vueto a la 1');
    console.groupEnd('funcion 2');
}

function funcion2() {
    console.group('funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
funcion1();

console.log('=================');
// Contadores
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');