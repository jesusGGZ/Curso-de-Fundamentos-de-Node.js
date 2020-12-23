// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 3, 5]);
let buffer = Buffer.from('hola');

// console.log(buffer.toString());
console.log(buffer);

//--

/* Mediante buffer se modifico la informacion dato a dato para mostrar
el resultado deseado, en este caso, el abcedario. */
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());