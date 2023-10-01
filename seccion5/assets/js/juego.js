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

    const carta = deck[ deck.length - 1 ];
    deck.length = deck.length - 1;
    console.info(deck);

    return carta;

}


crearDeck(); // Crear maso de cartas y mezclar con underscor.js ( _.shuffle )
console.log(pedirCarta())