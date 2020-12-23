const sharp = require('sharp');

// creando nueva imagen con un formato especifico
sharp('./original.png')
    .resize(80) // Redimencionar
    .grayscale // blanco y negro
    .toFile('resized.png'); // guardar imagen