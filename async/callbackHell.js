function hola(nombre, miCaballck) {
    setTimeout(function() {
        console.log('Hola '+ nombre);
        miCaballck(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('bla bla bla....');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ', nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback);
    }
}
// --

 console.log('Iniciando proceso....');
 hola('Jesus', function (nombre) {
     conversacion(nombre, 3, function () {
         console.log('proceso terminado.......');
     });
 })
 /* hola('Jesus', function (nombre) {
    adios(nombre, function () {
        console.log('Terminamos');
    });
}); */

/* hola('Jesus', function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function () {
                    console.log('Terminando proceso...');
                });
            });
        });
    });
}); */