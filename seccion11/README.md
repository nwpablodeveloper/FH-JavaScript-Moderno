## SECCIÓN 11
### Variables de entorno
Las variables de entorno, son variables que dependiendo del entorno o donde se este ejecutando la App van a tener un valor distingo. Por ejemplo si yo estoy trabajondo de manera local, mis variables pueden ser que apunten al LOCALHOST, pero cuando yo estoy en producción puedo cambiar a un URL especifico. 

Hay varias formas de trabajar con las variables de entorno, una de las mas populares es 
```npm install dotenv``` NO ES NECESARIO INSTALAR SI TRABAJAMOS CON VITE
Las variables de entorno en nuestra App se guardan en un archivo llamado: ```.env```

### Donde ver las variables de entorno en VITE
Las guardamos en un archivos .env y las llamamos con ```import.met.env```
```js
    console.log( import.meta.env )
```

### CALLBACKS
Un Calllbacks es una función que recibe un argúmento y ese argumento es una función que ustedes invocan dentro de su función
```js

export const callbacksComponent02 = ( element ) => {
    
    let parrilla = '🧔🏻';

    const prepararCarbon = ( callback ) => {
        parrilla = '💨💨💨💨💨';
        console.log(parrilla);
        
        setTimeout( () => {
            prenderCarbon( callback )
        }, 3000 )
    }

    const prenderCarbon = ( callback ) => {
        parrilla = '🔥🔥🔥🔥🔥🔥🔥';
        console.log(parrilla)
        setTimeout( callback, 2000);
    }

    const cocinarCarne = () => {
        parrilla = 'Tsssss 🥩🥩🥩'
        console.log(parrilla)
    }

    console.log(parrilla)

    prepararCarbon( cocinarCarne )
}


```

### [ PROMESAS ]( ./advanced/src/concepts/03-promises.js )
Las promesas es una función  que ejecutan un callback con un 'resolve' y un 'reject' y siempre tienen un retorno
* resolve => va a tener el valor producto de mi promesa
* reject => va marcar el error si no se cumplio el resolve
* finally => este es opcional y siempre se ejecuta.

#### [ Declaración de la promesa ]( ./advanced/src/concepts/03-promises.js )
```js

const findHero = ( id ) => {
   
    return new Promise( ( resolve, reject ) =>  {

        const hero = heroes.find( hero => hero.id == id );

        if( hero ) {
            resolve( hero );
            return
        }

        reject(`Hero with id ${ id } not found`)

    });


}
```
#### [ Ejecución de la promesa ]( ./advanced/src/concepts/03-promises.js )
```js

    // Data de relleno
    const heros = [
        {
            'id': '5d86371f25a058e5b1c8a65e',
            'about': 'Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.',
            'picture': 'https://i.pinimg.com/736x/ba/9b/36/ba9b3623c9a639296e85f7ff09c3c205.jpg',
            'name': 'Captain America'
        },
    ]

    // renderizado de la respuesta en el HTML
    const element = document.querySelector('#idElemento');

    

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderHerror = ( error ) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${ error }</h3>
        `
    }

    const id = '5d86371f25a058e5b1c8a65e'

    // EJECUCIÓN DE LA PROMESA
    findHero( id )
        .then( data => findHero( data ) ) // para capturar el Resolve de la promesa
        .catch( error => renderError( error )  ) // para capturar el reject de la promesa

```
#### [ Podemos optimizar el codigo si recibimos y enviamos la mismas cantidad de parametros ]( ./advanced/src/concepts/03-promises.js )
```js

    findHero( id )
        .then( renderHero )
        .catch( renderError )

```

#### [ Promise Hell ]( ./advanced/src/concepts/03-promises.js )
```js

    // Declaración de la promesa
    const findHero = ( id ) => {
    
        return new Promise( ( resolve, reject ) =>  {

            const hero = heroes.find( hero => hero.id == id );

            if( hero ) {
                resolve( hero );
                return
            }

            reject(`Hero with id ${ id } not found`)

        });


    }

    // EJEMPLO 1
    // Es ejecutar una promesa dentro de otra
    findHero(id1)
        .then( (  hero1  ) => {
            
            findHero( id2 )
                .then( ( hero2 ) => {
                    renderTwoHero( hero1.name, hero2.name )
                })
                .catch( error => renderError( error ) );
        })
        
        .catch( error => renderError(error) );

    
    // FACTORIZACIÓN DEL EJEMPLO 1
    let hero1, hero2;
    findHero( id1 )
        .then( hero => {
            hero1 = hero;
            return findHero( id2 )
        }).then( hero2 =>  {
            renderTwoHero( hero1.name, hero2.name )
        })
        .catch( error => renderError( error ) )

```

### [ PromIse All - Solución a Promises Hell ]( ./advanced/src/concepts/03-promises.js )

```js

    promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then( ( [ hero1, hero2 ] ) => renderTwoHero( hero1, hero2 ))
    .catch( renderError )
```
### [ Promise.race ]( ./advanced/src/concepts/03-promises.js )
El ```promise.race([ promesa1, promesa2, ... ])``` Ejecuta un arreglo de promesas y solo devuelve el resultado de la promesa que fue mas rapido en resolverse

```js
export const promisesRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        ediumPromise(),
        fastPromise(),
        slowPromise(),
        slowPromise(),
        fastPromise(),
        slowPromise(),
        fastPromise(),
        mediumPromise(),
        mediumPromise(),
    ])
    .then( renderValue )

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve( 'Slow Promises' )
    }, 2000);
})

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve( 'Medium Promises' )
    }, 1500);
})

const fastPromise = () => new Promise( resolve =>  {
    setTimeout(() => {
        resolve( 'Fast promise' )
    }, 1000);
})

```

### [ ASYNC ]( ./advanced/src/concepts/05-async.js )
#### 2 Fomras de declarar funciones asincronas
Las funciones asincronas se resuelven como una promesa sin interrumpir la fluidez del codigo
```js
async function () {

}

const miFuncion = async () => {

}
```
### [ ASYNC/AWAIT ]( ./advanced/src/concepts/05-async-await.js )
Las funciones Async/Await se ejecutan haciendo una pausa justo donde esta el await. Hastá que la misma no se resuelva no va a continuar con la lectura del codigo. Esto es muy usado para ir a buscar info a servidores
```JS

    const registro = async ( element )  => {

        try{

            const id = '5d86371fd55e2e2a30fe1ccb';

            const registro = await buscarData( id );
            
            element.innerHTML = registro;

        }catch( error ){
            element.innerHTML = error;
        }

    }


    const buscarData = async ( id ) => {

        const info = baseDeDatos.find( registro => registro.id == id )

        if( !info )
            throw `Info con id ${ id } no existe`;

        return info;

    }

```
#### Ejemplo de promesas Async/Await SECUENCIALES
Son secuenciales con una promesa necesita ser resuelta para poder continuar con la ejecución de la próxima
```JS

    const registro = async ( element )  => {

        try{

            const id = '5d86371fd55e2e2a30fe1ccb';

            // Son secuenciales con una promesa necesita ser resuelta para poder continuar con la ejecución de la próxima
            const registro = await buscarData( id );
            const ventas = await buscarMasData( registro.ventas );
            
            element.innerHTML = registro;

        }catch( error ){
            element.innerHTML = error;
        }

    }


    const buscarData = async ( id ) => {

        const info = baseDeDatos.find( registro => registro.id == id )

        if( !info )
            throw `Info con id ${ id } no existe`;

        return info;

    }

```

### [ FUNCIONES GENERADORAS video 146 ]( ./advanced/src/concepts/09-function-generator.js )
#### Ejemplo 1
```js

const acaLaFuncion = funcionGeneradora();

console.log( acaLaFuncion.next() )
console.log( acaLaFuncion.next() )
console.log( acaLaFuncion.next() )
console.log( acaLaFuncion.next() )
console.log( acaLaFuncion.next() )
console.log( acaLaFuncion.next() )

function* funcionGeneradora() {

    yield '1er resultado';
    yield '2do resultado';
    yield '3er resultado';
    yield '4to resultado';
    yield '5to resultado';
    yield '6to resultado';

    return 'No ha mas nada por aquì';

}

```

#### Ejemplo 2
```js
 
export const generatorFunctionsComponent = ( element ) => {

    const button = document.createElement('button');
    button.innerText = 'Click Me';
    element.append( button );

    // Guardo mi función generadora
    const contador = myFirstGeneratorFunction();

    const renderButton = () => {
        const { value } = contador.next();
        button.innerText = `Click Me ${ value }`
    }

    button.addEventListener( 'click', renderButton )
    
}


// Declaro mi funciòn generadora
function* myFirstGeneratorFunction() {

    let count = 0;
    while( true ) {
        yield ++count;
    }

}

```