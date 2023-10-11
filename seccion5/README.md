## SECCIÓN 5
* Crear maso de cartas y mezclar
* Pedir carta
* DOM y su manipulación
  
  ### ducument 

```js
    document.querySelector('body');
    document.querySelector('body').innerText = 'Aca Texto';
    document.querySelector('body').innerHTML = '<b>Hola mundo</b>';
```
 - Al guardar el pedazo de DOM en una variable siempre vamos a tener acceso de forma referencial y asi manipular todas sus propiedades

```js
    const diBotones = document.querySelectero('#divBotones');
    divBotones.append('button')
```
 - Crear elementos y manipular sus atributos

```js
    // guardamos el modulo donde vamos a agregar un elemento en una variable.
    const elementoConId = decumento.querySelector('divBotones');

    // creamos un elemento y lo guaradmos en una variable
    const botonNuevo = documento.createElement('button');

    // Agregamos el  elemento nuevo al mudulo del HTML
    elementoConId.append('botonNuevo');

    // manipulamos los atributos del boton nuevo ya que al guardarlo en una 
    // variable anteriormente ahora todo lo que modifiquemos pasa por referencia
    botonNuevo.innterText = 'Eliminar todo';
    botonNuevo.classList.add('btn');
    botonNuevo.classList.add('btn-danger');

```

### Eventos ( Escuchar )
```js

    const elemtno = document.querySelector('#IdElemento');

    elemento.addEventListener( 'click', () => {
        // hacer cosas
    });

```
