## SECCIÓN 8

### BUNDLERS

Transforma nuestro codigo original, 
optimiza y lo deja listo para
producción, eso es lo que hace básicamente un Bundlers

### WEBPACK

Cuando trabajamos en una aplicación con muchos modulos o archivos
y modificamos alguno, WEBPACK vuelve a cargar todos esos modulos y los 
vuelve a generar en el Build, haciendo asi que el estado de la App
se perdia y se volvia a montar


### VITE

Cuando modificamos un archivos, VITE Hace el cambi modulo en caliente

### VITE INSTALACIÓN 
    npm install vite

2. Vanilla ( Es trabajar con JS sin ningu Framework )
   - [ ] TypeScript
   - [x] JavaScript o Vanilla

3. Ejecutar lo sig.:
    1. cd directorio
    2. npm install
    3. npm run dev  

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
