## SECCIÓN 7
### Clases y ESNext propiedades privadas
### [ CLASES BÁSICAS DE JS ]( ./clases/clases.js )
> Las clases son plantillas para crear objetos
```js

// Declaramos las clase
class Persona {

    nombre; // Definimos las propiedades del objeto
    codigo;
    frase;

    // cargamos el constructor para que se ejecute al momento de crear una instancia
    constructor( nombre, codigo, frase ) {

        if ( !nombre ) throw Error('Falta el nombre')
        
        this.nombre = nombre;// con THIS hacemos referencia a las propiedades de la clase
        this.codigo = codigo; 
        this.frase = frase;

    }

}

// Se ejecuta la clase persona ejecutando el constructor creando un nuevo objeto
const spiderman = new Persona( 'Petter Paker', 'Spiderman', 'Soy tu amigable vecino'); 
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' )

console.log(spiderman);
console.log(ironman);
```
### [ METODOS DENTRO DE LA CLASE ]( ./clases/clases.js )
> Los metodos son funciones dentro de la clase
```js
    class Persona {

        constructor() {
            // Codigo constructor 
        }

        // Metodo
        quienSoy() {
            console.log( `Soy ${ this.nombre }, mi codigo es ${ this.codigo } y mi frase es: ${ this.frase }` )
        }

    }
```
### SETS
> Los SETS son para cargar valores a las propiedades de la clase
```js
    class Vehiculo {
        color;
        puertas;
        marca;

        constructor(  ) {
        }

        set setCargarColor( color ) {
            this.color = color
        } 
    }

    const autoPablo = new Vehiculo();
    autoPablo.setCargarColor = 'Blanco';
```
### GETS
> Los GET son para recuperar el valor
```js
    class Vehiculo {
        color;
        puertas;
        marca;

        constructor( ) {
        }

        set setCargarColor( color ) {
            this.color = color
        } 

        get getColorAuto() {
            return `El color del auto es ${ this.color }`
        }
    }

    const autoPablo = new Vehiculo();
    autoPablo.setCargarColor = 'Blanco';
    console.log(autoPablo.getColorAuto)

```
### [PROPIEDADES, GETS Y MÉTODOS ESTÁTICOS ](./subclases/vehiculo.js)
> Nos permite la utilización de metodos y propiedades sin necesidad de instanciar la clase
```js
    class Vehiculo {
        
        static _lugarCircular = 'Europa';

        static set...
        static get...
        static metodos() {}

        stati mensaje() {
            console.log('soy un Metodo Estatico y me pueden llamar sin instanciar la clase')
        }

        constructor( ) {
        }
    }
    
    // Podemos llamar a cualquir cosa declarado como estatico sin necesidad de crear un instancia
    console.log( Vehiculo._lugarCircular )
    Vehiculo.get..
    Vehiculo.set.. // haciendo uso de los metodos estaticos
    Vehiculo.metodos(); // haciendo uso de los metodos estaticos

    Vehiculo.mensaje(); // haciendo uso de los metodos estaticos

```
### [ EXTENCIÓN DE CLASES, SUBCLASES ]( ./subclases/sub-clases.js )
> Heredamos todas las propiedades de la clase padre.
```js


class Vehiculo {

    marca; // Propiedades Padre
    tipo; // Propiedades Padre
    color; // Propiedades Padre

    constructor( marca = 'Vacio', tipo = 'Vacio', color = 'Vacio') {

        this.marca = marca;
        this.tipo = tipo;
        this.color = color;

    }

    // metdo padre
    utilidad( funcionalidad ) {
        console.log( `Este vehiculo se utiliza para: ${ funcionalidad }` )
    }

}

const familiar = new Vehiculo(); // Intanciamos un Vehiculo

familiar.tipo = 'Rural';     // cargamos sus propiedades
familiar.marca = 'Fiat';    // cargamos sus propiedades
familiar.color = 'Blanco';  // cargamos sus propiedades

// Hacemos uso del metodo que esta dentro de la Clase Padre
familiar.utilidad( 'Para ir a la escuela, al trabajo y pasear' );


// Creamos una nueva clase heredando las propiedades de la clase estendida o padre
class TransportePublico extends Vehiculo {

    ruta = ''; // creamos sus propias propiedades

    constructor( marca, tipo, color ){
        super( marca, tipo, color ); // cargamos las propiedades en común con la clase padre
    }

    // Podemos crear un metodo con el mismo nombre a un metedo que este en la clase padre
    utilidad( funcionalidad ){
        console.log(`Llevar pasajeros volando`);
        super.utilidad( funcionalidad ); // podemos llamar al metodo que tiene el mismo nombre de la clase padre
    }
}

const avion = new TransportePublico(); // Creamos la instancia de la sub-clase

avion.color = 'Rojo';   // Cargamos las propiedades en comun con la clase padre
avion.marca = 'Boing';  // Cargamos las propiedades en comun con la clase padre
avion.tipo = '777';   // Cargamos las propiedades en comun con la clase padre

avion.ruta = 'Aereo'    // Cargamos la propiedad que la diferencia de la clase padre

console.log(avion)
avion.utilidad( `Llevar muchos pasajeros` ); // 

```

### [ SINGLETON ]( ./singleton/singleton.js )
> El singleton es una instancia unica de mi clase

```js
    // DOBLE NEGACIÓN !!
    const a = undefined; 
    console.log( a ); //    undefined
    console.log( !a ); //   true
    console.log( !!a ); //  false
```
```js


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

```
### MULTIPLES CONSTRUCTORES
```js
class Persona {

    static porObjeto( obj ) {
        return new Persona( obj.nombre, obj.apellido )
    }
    
    constructor( nombre, apellido, edad, pais, viveEn ) {

        this.nombre     = nombre;
        this.apellido     = apellido;
    }

    mostrarDatos() {
        console.log(`${ this.nombre } ${ this.apellido } `)
    }
}

const   nombre      = 'Pablo',
        apellido    = 'Veiga',

const sophi = {
    nombre:     'Sophia',
    apellido:   'Veiga',
}

const persona1 = new Persona( nombre, apellido );
const persona2 = Pesrona.porObjeto( sophi );

persona1.mostrarDatos();
persona2.mostrarDatos();

```