
// Cuando trabajamos con primitivos cualquier tipo de asignación como la sig:
// Lo estamos enviando por VALOR ( NO AFECTA AL MISMO LUGAR EN MEMORIA )

let a = 10;
let b = a;
a = 30;
console.log( { a, b } );


// Pasando valores por referencia
// En JavaScrit TODOS LOS OBJETOS SON PASADOS POR REFERENCIA
console.log('=== EJEMPLO REFERENCIADO 1 ===');

let juan = { nombre: 'Juan' };
let ana = juan;

ana.nombre = 'Ana';

console.log( 'Datos 2: ', { juan, ana } );

console.log('=== EJEMPLO REFERENCIADO CON UNA FUNCIÓN ===');

const cambiarNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );

console.log({ peter, tony });

console.log('=== EJEMPLO REFERENCIADO 2 ===');

let javier = { apellido: 'Veiga' };
let sol = javier;
sol.apellido = 'Dening';
console.log({ javier, sol });


// Como romper la referencia

console.log('=== ROMPER REFERENCIA usando el operado REST ===');

let pablo = { apelllido: 'Veiga' };
let romina = { ...pablo };

romina.apelllido = 'Diaz';

console.log({ pablo, romina });
