const bcrypt = require('bcrypt');

const password = '1234Segura#'

// bycript puede funcional con promesas o callbacks
// cifrado de password
bcrypt.hash(password, 5, function (err, hash) {
    console.log(hash);
    // Compara el hash que se genero del password
    bcrypt.compare(password, hash, function (err, res) {
        // console.log(err);
        console.log(res);
    });
});