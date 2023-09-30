
// Cuando trabajamos con primitivos cualquier tipo de asignación como la sig:
// Lo estamos enviando por VALOR ( NO AFECTA AL MISMO LUGAR EN MEMORIA )

let a = 10;
let b = a;
a = 30;
console.log( { a, b } );


// Pasando valores por referencia
// En JavaScrit TODOS LOS OBJETOS SON PASADOS POR REFERENCIA

let juan = { nombre: 'Juan' };
let ana = juan;

ana.nombre = 'Ana';

console.log( 'Datos 2: ', { juan, ana } );


