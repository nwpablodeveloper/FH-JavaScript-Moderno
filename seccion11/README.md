## SECCIÓN 11
### Variables de entorno
Las variables de entorno, son variables que dependiendo del entorno o donde se este ejecutando la App van a tener un valor distingo. Por ejemplo si yo estoy trabajondo de manera local, mis variables pueden ser que apunten al LOCALHOST, pero cuando yo estoy en producción puedo cambiar a un URL especifico. 

Hay varias formas de trabajar con las variables de entorno, una de las mas populares es 
```npm insta dotenv```
Las variables de entorno en nuestra App se guardan en un archivo llamado: ```.env```

### Donde ver las variables de entorno en VITE
```js
    console.log( import.meta.env )
```

### Callbacks
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

### Promesas
Las promesas es una función  que ejecutan un callback con un "resolve" y un "reject" y siempre tienen un retorno
* resolve => va a tener el valor producto de mi promesa
* reject => va marcar el error si no se cumplio el resolve
* finally => este es opcional y siempre se ejecuta.

#### Declaración de la promesa
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
#### Ejecución de la promesa
```js

    const heros = [
        {
            "id": "5d86371f25a058e5b1c8a65e",
            "about": "Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.",
            "picture": "https://i.pinimg.com/736x/ba/9b/36/ba9b3623c9a639296e85f7ff09c3c205.jpg",
            "name": "Captain America"
        },
    ]

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

    findHero( id )
        .then( data => findHero( data ) ) // para capturar el Resolve de la promesa
        .catch( error => renderError( error )  ) // para capturar el reject de la promesa

```
#### Podemos optimizar el codigo si recibimos y enviamos la mismas cantidad de parametros
```js

    findHero( id )
        .then( renderHero )
        .catch( renderError )

```