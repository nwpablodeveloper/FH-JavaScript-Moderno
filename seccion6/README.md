* Patron modúlo ( Encapsulamiento para que el usuario no pueda manipular el codigo )

```js

    ( () => {
/* 
        TODO aca va el codigo y queda encapsulado y de forma privada,
        con esto el usuario no puede modificar datos */

    } () )

```

* Enviar funciones de forma pública

```js

    const miCodigo = ( () => {
    
        const creaciónDeLaFuncion = () => {
            // codigo de la función
        }

        return {
            miFuncionPublica: creacionDeLaFuncion
        }

    } () )

```

* Hacer referencia y ejecutar una función
```js

        const creaciónDeLaFuncion = () => {
            // codigo de la función
        }

        return {
            miFuncionPublica: creacionDeLaFuncion // solo hacemos referencia
        }

        // si le ponemos los () la estamos ejecutando
        // creacionDeLaFuncion() 
```