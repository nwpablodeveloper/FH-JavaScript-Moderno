
const miModulo = (() => {
    'use strict'
    
    let deck = [];

    const   tipos= ['C', 'D', 'H', 'S'],
            especiales = [ 'A' , 'J', 'Q', 'K' ];

    let puntosJugadores = [],
        puntosJugador = 0,
        puntosComputadora = 0;

    // Guardamos todo el modulo en una variable para luego modificar sus atributos haciendo uso de su referencia
    const   btnPedir = document.querySelector('#btnPedir'),
            btnNuevo = document.querySelector('#btnNuevo'),
            btnDetener = document.querySelector('#btnDetener');
    
    const   divJugadorCartas = document.querySelector('#jugador-cartas'),
            divCartasComputadora = document.querySelector('#computadora-cartas');

    const divCartasJugadores = document.querySelectorAll('.divCartas');

    const puntosHTML = document.querySelectorAll('small');

    const inicializarJuego = ( numJugadores = 2) => {
        
        deck = crearDeck();
        
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);         
        }

    }


    // Crear maso de cartas y mezclar con underscor.js ( _.shuffle )
    const crearDeck = () => {

        deck = [];
        for( let i = 2; i <= 10; i++ ) {
            tiposDeck( i );
        }

        for( let especial of especiales ) {
            tiposDeck( especial );
        }
        
        return _.shuffle( deck );

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

        // Devuelve el valor del ultimo lugar del array
        return deck.pop(); 

    }

    const turnoComputadora = ( puntosMinimos ) => {


        do {

            
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length -1 );
            console.log(puntosComputadora);

            crearCartas( carta, puntosJugadores.length -1  );
            
        } while ( ( puntosComputadora <= puntosMinimos ) && ( puntosComputadora < 21 ) );

        setTimeout(() => {
            determinarGanador();
        }, 10);
    }
    
    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
        
        
        ( puntosComputadora > 21 ) ? alert('Ganaste') :
        puntosMinimos > 21 ? alert('Perdiste') :  
        puntosComputadora > puntosMinimos && puntosComputadora <=21 ? alert('Perdiste') : 
        alert( 'Empate' )

    }

    const valorCarta = ( carta ) => {

        const valor = carta.substring( 0, carta.length - 1 );

        return ( !isNaN( valor ) ) ? valor * 1 :
                    valor === 'A'  ? 11 : 10;

    }
    
    // Turno: 0 = 1er jugador y el ultimo va a ser la computadora
    const acumularPuntos = ( carta, turno ) => {

        puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta( carta );
        puntosHTML[ turno ].innerHTML = puntosJugadores[ turno ];
        
        return puntosJugadores[ turno ];                          

    }

    const crearCartas = ( carta, turno ) => {
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[ turno ].append( imgCarta );

    }

    const pedircartaJuego = () => {   

        const carta = pedirCarta();
        puntosJugador = acumularPuntos( carta, 0 );        
        crearCartas( carta, 0 );

        if ( puntosJugador > 21 ) {

            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            console.warn('21, muy dificil para igualar');
            turnoComputadora( puntosJugador );
        }

    }

    btnPedir.addEventListener( 'click', () =>  {     

        pedircartaJuego()

    });

    btnDetener.addEventListener( 'click', () => {

        btnPedir.disabled = true;
        turnoComputadora( puntosJugador );

    });
    

    btnNuevo.addEventListener( 'click', () =>  {
        
        console.log('hola');
        puntosJugadores = [];
        inicializarJuego();
        
        // puntosHTML[0].innerText = 0;
        // puntosHTML[1].innerText = 0;
        puntosHTML.forEach( elem => elem.innerText = 0 )

        divCartasJugadores.forEach( elem => elem.innerHTML = '' )

        pedircartaJuego();

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        
    });

    return {
        nuevoJuego: inicializarJuego
    }

})();