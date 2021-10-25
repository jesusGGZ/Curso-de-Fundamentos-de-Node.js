// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar.');
})

// Se desconecta del eventloop
process.on('exit', () => {
    console.log('Uff, el proceso acabó.');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
})

setTimeout(() => {
    console.log('Esto se va a ver');
}, 0);

// Manejo de exepciones
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos ha olvidado capturar un error');
    // console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
})

 funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');

/* Se utiiza para ver distintas señales del sistema
process.on('');  */