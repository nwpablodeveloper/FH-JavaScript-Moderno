
// Declaramos las clase
class Persona {

    // Definimos las propiedades que vamos a usar en el objeto
    nombre;
    codigo;
    frase;
    comida;

    // El constructor siempre se va a ejecutar al momento que se 
    // crea una nueva instancia de la clase Persona
    constructor( nombre, codigo, frase ) {

        if ( !nombre ) throw Error('Falta el nombre')
        
        this.nombre = nombre;// con THIS le asignamos el valor a las propiedades que declaramos al inicio de la clase
        this.codigo = codigo; 
        this.frase = frase;

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
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' )

console.log(spiderman);
console.log(ironman);

// Ejecutando metodos de la clase
ironman.quienSoy();

// cargamos valores en los SETS creados, se cargan al igual que una propiedad
// spiderman.setComidaFavorita = 'Los pie de cereza de la tia May'

