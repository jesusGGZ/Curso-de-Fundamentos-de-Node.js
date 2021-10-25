const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

// stream de lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8');

/* readableStream.on('data', function (chunk) {
    // console.log(chunk);
    data += chunk;
});

readableStream.on('end', function () {
    console.log(data);
}) */

// stream de escritura
/* process.stdout.write('hola');
process.stdout.write('como');
process.stdout.write('estas'); */

// Stream de transformacion
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb;
}

let mayus = new Mayus();

// Mostrar la transformacion a mayusculas
readableStream
        .pipe(mayus)
        .pipe(process.stdout);