
// Declaramos las clase
class Persona {

    // propiedades , metodos, get y set estaticos para usar sin necesidad de crear instancias
    static _conteo = 0;
    static _lugar = 'Barcelona';
    static get getConteo(){
        console.log( Persona._conteo, ' Instancias creadas' )
    }



    // Definimos las propiedades que vamos a usar en el objeto
    nombre;
    codigo;
    frase;
    comida;

    static mensaje() {
        console.log('mensaje: Soy un metodo estático y me llamaron sin instanciar la clase')
    }

    // El constructor siempre se va a ejecutar al momento que se 
    // crea una nueva instancia de la clase Persona
    constructor( nombre, codigo, frase ) {

        if ( !nombre ) throw Error('Falta el nombre')
        
        this.nombre = nombre;// con THIS le asignamos el valor a las propiedades que declaramos al inicio de la clase
        this.codigo = codigo; 
        this.frase = frase;

        Persona._conteo++; 
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de: ${ this.nombre } es: ${ this.comida }`
    }
    

    quienSoy() { // METODO
        console.log( `Soy ${ this.nombre }, mi codigo es ${ this.codigo }` )
    }

    miFrase() { // METODO
        // this.quienSoy(); Tambie puedo llamar un metodo dentro de otro metodo
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

// Creamos una instancia de la clase Persona para un heroe
// Se ejecuta la clase persona ejecutando el constructor creando un nuevo objeto
const spiderman = new Persona( 'Petter Paker', 'Spiderman', 'Soy tu amigable vecino'); 

// Ahora podemos craer todos los objetos que queramos usando la misma plantilla
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

console.log(spiderman);
// console.log(ironman);

// Ejecutando metodos de la clase
// ironman.quienSoy();

// cargamos valores en los SETS creados, se cargan al igual que una propiedad
// spiderman.setComidaFavorita = 'Los pie de cereza de la tia May'
console.log('Instancias creadas: ', Persona._conteo );

Persona.mensaje();
Persona.mensaje2;

console.log('=========================================');
console.log('=========================================');


console.log(ironman);
console.log(spiderman);

spiderman.setComidaFavorita = 'El pie de la tia May';
console.log(spiderman.getComidaFavorita);

Persona.getConteo;
Persona.mensaje();

