function hola(nombre, miCaballck) {
    setTimeout(function() {
        console.log('Hola '+ nombre);
        miCaballck(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ', nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso....');
hola('Jesus', function (nombre) {
    adios(nombre, function () {
        console.log('Terminando proceso...');
    });
});

