class Persona {

    static _conteo = 0; 

    static get getConteo() {
        return Persona._conteo + ' Instancias creadas';
    }

    static mensaje() {
        console.log('Soy un mensaje de un metodo estatico si necesidad de crear una instancia')
    }

    nombre;
    codigo;
    frase;
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
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
console.warn('==============  CLASES EJEMPLO 1 ===============')

const spiderman = new Persona( 'Petter parker', 'Spiderman', 'Soy tu amigable vecino' );
// const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Iroman' );

console.log(spiderman);
// console.log(ironman);

spiderman.setComidaFavorita = 'El pie de la tia May';
spiderman.getComidaFavorita

console.log( Persona.getConteo )
Persona.mensaje();

console.log('')
console.warn('==============  SUB CLASES EJEMPLO 1 ===============')


class Heroe extends Persona {

    clan = 'Sin Clan'

    constructor( nombre, codigo, frase ){
        super( nombre, codigo, frase ); // la función super() es para llamar al construcro de la clase padre

        this.clan = 'The Avengers'
    }

    miFrase(){ // crear un metodo con el mismo nombre que tiene un metodo en la clase padre
        console.log(`Soy ${ this.codigo } y estoy en el clan: ${ this.clan }`)
        super.miFrase() // llamar a un metodo que esta dentro de la clase padre y tiene el mismo nombre
    }

}

const atman = new Persona();
const ironman = new Heroe( 'Tony stark', 'Ironman', 'yo soy Iroman' ); // creado desde la clases heredada

console.log(atman)
console.log(ironman)

ironman.miFrase();

