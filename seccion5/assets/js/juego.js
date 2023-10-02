/*
    2C - Trebol
    2D - Diamante
    2H - Corazones
    2S - Espada 
*/

let deck = [];
const tipos= ['C', 'D', 'H', 'S'];
const especiales = [ 'A' , 'J', 'Q', 'K' ];

const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ) {
        tiposDeck( i );
    }

    for( let especial of especiales ) {
        tiposDeck( especial );
    }
    
    deck = _.shuffle( deck )
    console.warn(  deck);

}

const tiposDeck = ( cart ) => {

    for( let tipo of tipos ) {
        deck.push( cart + tipo );
    }

}

const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck'
    }

    console.info(deck);
    const carta = deck.pop();

    return carta;

}

const valorCarta = ( carta ) => {

    const valor = carta.substring( 0, carta.length - 1 );

    return ( !isNaN( valor ) ) ? valor * 1 :
                valor === 'A'  ? 11 : 10;

}


crearDeck(); // Crear maso de cartas y mezclar con underscor.js ( _.shuffle )


const valor = valorCarta( pedirCarta() );
console.log(valor);