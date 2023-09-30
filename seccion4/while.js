const coches = [ 'Chevrolet', 'Ford', 'Mercedes Benz', 'Ferrari', 'Lamborghini' ];

let i = 0;
console.warn('=== FORMA TRADICIONAL ===');
while( i < coches.length ){
    console.log( coches[i] );
    i++;
}


console.log(' ');
console.warn('=== simplificando  ===');
let b = 0;
while( coches[b] ) { // simplificando

    if ( b === 1 ) {
        b++;
        continue; // Saltea la vuelta del bucle ( Ford no va a ser impreso )
    }

    console.log(coches[b]);
    b++

}

console.log(' ');
console.warn('=== DO WHILE === ');

let j = 0;
do {
    console.log( coches[j] );
    j++;
} while ( j < coches.length );
