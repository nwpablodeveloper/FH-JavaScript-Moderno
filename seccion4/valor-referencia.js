
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


console.log('=== EJEMPLO REFERENCIADO 2 ===');
let javier = { apellido: 'Veiga' };
let sol = javier;
sol.apellido = 'Dening';
console.log({ javier, sol });

console.log('=== ROMPER REFERENCIA usando el operado REST ===');
let pablo = { apelllido: 'Veiga' };
let romina = { ...pablo };
romina.apelllido = 'Diaz';
console.log({ pablo, romina });

console.log('=== EJEMPLO REFERENCIADO CON UNA FUNCIÓN ===');
const cambiarNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );
console.log({ peter, tony });


console.log('=== ROMPER REFERENCIA usando el operado REST EN UNA FUNCIÓN===');
const cambiarEdad = ( { ...persona } ) => {
    persona.edad = 40;
    return persona;
}

let patricia = { edad: 42 };
let valeria = cambiarEdad( patricia );
console.log({ patricia, valeria });

// EJEMPLO DE REFERENCIAS Y ROMPER REFERENCIA EN ARREGLOS

console.log('=== ARREGLOS REFERENCIADOS ===');
const frutas = [ 'Pera', 'Manzana', 'Sandia' ];
const otrasFrutas = frutas;
otrasFrutas.push( 'Kiwi' );
console.table( { frutas, otrasFrutas } );

console.log('=== ROMPER LAS REFERENCIAS EN LOS ARREGLOS ===');
const notebook = [ 'Mother', 'Ram', 'cpu' ];
const pc = [ ...notebook ];
pc.push( 'Mouse' )
console.table( { notebook, pc } )


console.log('TIEMPOS DE EJECUCIÓN PARA LA MISMA ROTURA DE REFERENCIA');

console.time('Slice');
const masFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('Spread');
const masFrutas2 = [ ...frutas ]
console.timeEnd('Spread');


