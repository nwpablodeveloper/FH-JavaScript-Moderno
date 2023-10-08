## SECCIÓN 8

* Bundlers
> Transforma nuestro codigo original, 
> optimiza y lo deja listo para
> producción, eso es lo que hace básicamente un Bundlers

* Webpack
> Cuando trabajamos en una aplicación con muchos modulos o archivos
> y modificamos alguno, WEBPACK vuelve a cargar todos esos modulos y los 
> vuelve a generar en el Build, haciendo asi que el estado de la App
> se perdia y se volvia a montar


* Vite
> Cuando modificamos un archivos, VITE Hace el cambi modulo en caliente

#### INSTALACIÓN 
    npm install vite

2. Vanilla ( Es trabajar con JS sin ningu Framework )
   - [ ] TypeScript
   - [x] JavaScript o Vanilla

3. Entrar al directorio creado y ejecutar lo sig.:
    - cd directorio
    - npm install
    - npm run dev  

4. Vamos a http://localhost:5173 ( en este caso nos asigno el puerto 5173 )
    - Listo ya podemos ver la App en tiempo real

* Package.json
    - devDependencies
        - Son dependencias necesarias unicamente para construir la aplicación
    - dependencies
        - una ves generado el build de prouducción nuestra app va a hacer uso unicamente de las dependencias de producción
