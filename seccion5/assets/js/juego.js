/*
    2C - Trebol
    2D - Diamante
    2H - Corazones
    2S - Espada 
*/

let deck = [];
const tipos= ['C', 'D', 'H', 'S'];
const especiales = [ 'A' , 'J', 'Q', 'K' ];
let puntosJugador = 0;
let puntosComputadora = 0;

// Guardamos todo el modulo en una variable para luego modificar sus atributos haciendo uso de su referencia
const divJugadorCartas = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas')

const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');

const puntosHTML = document.querySelectorAll('small');    


const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ) {
        tiposDeck( i );
    }

    for( let especial of especiales ) {
        tiposDeck( especial );
    }
    
    deck = _.shuffle( deck );

}

const tiposDeck = ( cart ) => {

    for( let tipo of tipos ) {
        deck.push( cart + tipo );
    }

}

const pedirCarta = () => {


    if ( deck.length === 0 ) {
        throw 'No hay más cartas en el deck'
    }

    // console.info(deck);
    const carta = deck.pop();

    return carta;


}

const valorCarta = ( carta ) => {

    btnDetener.disabled = false;

    const valor = carta.substring( 0, carta.length - 1 );

    return ( !isNaN( valor ) ) ? valor * 1 :
                valor === 'A'  ? 11 : 10;

}

const turnoComputadora = ( puntosMinimos ) => {
    
    do {
                
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerHTML = puntosComputadora;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }
        
    } while ( ( puntosComputadora <= puntosMinimos ) && ( puntosMinimos <=21 ) );

    setTimeout(() => {
        
        
        ( puntosComputadora > 21 ) ? alert('Ganaste') :
        puntosMinimos > 21 ? alert('Perdiste') :  
        puntosComputadora > puntosMinimos && puntosComputadora <=21 ? alert('Perdiste') : alert( 'Empate' )
        
    }, 10);
}


crearDeck(); // Crear maso de cartas y mezclar con underscor.js ( _.shuffle )


btnPedir.addEventListener( 'click', () =>  {

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;


    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divJugadorCartas.append( imgCarta )

    if ( puntosJugador > 21 ) {
        console.warn('Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador);
    } else if ( puntosJugador === 21 ) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        console.warn('21, muy dificil para igualar');
        turnoComputadora( puntosJugador);
    }


});

btnNuevo.addEventListener( 'click', () =>  {

    deck = [];
    crearDeck();
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasComputadora.innerText = '';
    divJugadorCartas.innerText = '';
    btnPedir.disabled = false;
    puntosComputadora = 0;
    puntosJugador = 0;

});

btnDetener.addEventListener( 'click', () => {
    btnPedir.disabled = true;
    turnoComputadora( puntosJugador );
});