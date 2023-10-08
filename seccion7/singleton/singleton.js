

class Singleton {
    
    // Esto es opcional ponerlo
    static instancia;  // Esta va a ser la instancia inicializada de mi clase
    nombre = '';
    

    constructor( nombre = 'Sin nombre' ) {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this; // this hace referencia a toda la instancia
        this.nombre = nombre;

        // no es necesario hacer un return en el constructor por que siempre retorna la instancia
        // return this

    }

}

const instancia1 = new Singleton('Sophi');
const instancia2 = new Singleton('Pablo');
const instancia3 = new Singleton('Pablo');
console.log(`El nombre en la instancia1 es: ${ instancia1.nombre }`)
console.log(`El nombre en la instancia2 es: ${ instancia2.nombre }`)
console.log(`El nombre en la instancia3 es: ${ instancia3.nombre }`)