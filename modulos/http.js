const { write } = require('fs');
const http = require('http');

http.createServer(router).listen(3000); // Puerto asignado

function router(req, res) {
    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end(); // Manda la peticion.
            break;
    
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }
    
/*     // Mandar cabecera
    res.writeHead(201, { 'Content-Type': 'text/pain'})

    // Escribir respuesta al usuario
    res.write('Hola, ya se usar HTTP de NodeJS');
    

    res.end(); */

}

console.log("Escuchando http en el puerto 3000");