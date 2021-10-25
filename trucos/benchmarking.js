let suma = 0;
let suma2 = 0;

// muestra el tiempo de ejecucion
console.time('todo');
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');
  
// segundo bucle para comparar tiempos
console.time('bucle 2');
for (let j = 0; j < 100000000000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle 2');

// Proceso asincrono
console.log('Empieza el proceso asingrono');
console.time('asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

// tiempo de ejecucion total de los 2 bucles
console.timeEnd('todo');


function asincrona() {
    return new Promise( (resolve) => {
        setTimeout( function() {
            console.log('Termina el proceso asincrono');
            resolve();
        }, );
    })
}