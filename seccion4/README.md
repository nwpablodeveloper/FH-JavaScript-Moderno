## SECCIÓN 4
### Ciclos y Estructuras de Control

* Paso de variables por valor y por referencia
```
    let juan = { nombre: 'Juan' };
    let ana = juan;
    ana.nombre = 'Ana';

    // juan.nombre pasa a valer Ana
    // ana.nombre tambien vale Ana
```
[ejemlo ](valor-referencia.js)
![alt text](objeto-valor-referencia.jpg)

* Romper referencia de objetos
Usamos el operador REST, que significa que unifique todos los elementos
en una sola variable y los transforme como un arreglo nuevo
```
    let juan = { nombre: 'Juan' };
    let ana = { ...juan };
    ana.nombre = 'Ana';

    // juan.nombre sigue valiendo Juan
    // ana.nombre va a valer Ana
```


* If y Else
* Un poco sobre lógica booleana
* Operadores y operadores de asignación
* Operador condicional ternario
* Diferentes usos del operador condicional ternario
* Switch
* While
* Do While
* For
* For in
* For of

| archivo | tema |
|-|-|
|

