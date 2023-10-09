## SECCIÓN 8

### BUNDLERS

Transforma nuestro codigo original, 
optimiza y lo deja listo para
producción, eso es lo que hace básicamente un Bundlers

### WEBPACK

Cuando trabajamos en una aplicación con muchos modulos o archivos
y modificamos alguno, WEBPACK vuelve a cargar todos esos modulos y los 
vuelve a generar en el Build, haciendo asi que el estado de la App
se pierda y se vuelva a montar


### VITE APP

Cuando modificamos un archivos, VITE Hace el cambio en el modulo en caliente

### VITE INSTALACIÓN 
    npm install vite

2. Vanilla ( Es trabajar con JS sin ningu Framework )
   - [ ] TypeScript
   - [x] JavaScript o Vanilla

3. Ejecutar lo sig.:
    - cd directorio
    - npm install
    - npm run dev

4. Vamos a http://localhost:5173 ( en este caso nos asigno el puerto 5173 )
    - Ya podemos ver la App y sus modificaciones en tiempo real

### PACKAGE.JSON
    - devDependencies
        - Son dependencias necesarias unicamente para construir la aplicación
    - dependencies
        - una ves generado el build de prouducción nuestra app va a hacer uso unicamente de las dependencias de producción

### BUILD DE PRODUCCIÓN
    npm run build
Los Assets que son los elemnentos estaticos de la app tienen que ir dentro
de una carpeta llamada public
    ```./public/assets```

### EXPORTACIÓN DE MODULOS dfdfdf
    
1. moudulo-externo.js
   + Ejemplo de exportación 1

```js

export const miFuncion = () => {

    // CODIGO DE MI FUNCIÓN

}

```
2. moudulo-externo.js
   + Ejemplo de exportación 2

```js

const miFuncion = () => {

    // CODIGO DE MI FUNCIÓN

}

export default miFuncion;


```

### IMPORTACIÓN DE MODULOS

1. archivos.js
   + Ejemplo de importación 1
```js

    import './src/modulo-externo';

    // la extención js no es necesaria ponerla

```

2. archivos.js
   + Ejemplo de importación 2
```js

    import miPaquete from './src/modulo-externo';

```

3. archivos.js
   + Ejemplo de importación 3 ( Desesctructurando )

```js

    import { miFuncion } from './src/modulo-externo';

```
### CAMBIAR EL NOMBRE AL MODULO IMPORTADO
```js

    import { miFuncion as nombreCambiado } from './src/modulo-externo';

```

### JSDOC
jsDocs es la forma en la que documentamos y comentamos nuestro codigo, es de 
suma importación aclarar con documentación la funcionalidad de nuestro codigo
para que otros desarrolladores lo pueda leer con facilidad...y el mismo
desarrollador en un futuro.
```js
    Al poner lo siguiente se generea automaticamente con la extención de VS Better Comments
    /**    

```
```js
/**
 * 
 * @param {Array<string>} dato1 
 * @param {Array<string>} dato2 
 * @returns {Array<string>}
 */
export const crearDeck = ( dato1, dato2 ) => {
    // CODIGO DE LA FUNCIÓN
}

```

