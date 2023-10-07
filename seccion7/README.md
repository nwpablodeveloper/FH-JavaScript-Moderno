## SECCIÓN 7
### Clases y ESNext propiedades privadas
* [Clases básicas en JS]( ./clases/clases.js )
> [ Las clases son plantillas para crear objetos ]( ./clases/clases.js )
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
* [ Metodos dentro de la clase ]( ./clases/clases.js )
> [ Los metodos son funciones dentro de la clase ]( ./clases/clases.js )
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
* Sets
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
* Get
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
* Propiedades, gets y metodos estáticos
> Nos permite la utilización de metodos y propiedades sin necesidad de instanciar la clase