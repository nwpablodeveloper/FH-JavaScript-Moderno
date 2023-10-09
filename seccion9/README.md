## SECCIÓN 9
1. [ Instalación de GitHub Link ](https://git-scm.com/)
 * [ Comandos básicos ](../RECURUSOS/official-github-git-cheat-sheet.pdf)
3. Configuración del git
```
    git config -g user.name "Pablo Veiga"
    git config -g user.email "nwpablodeveloper@gmail.com"
    git config -g 
```
4. Crear archivo ```.gitignore``` 
```github

    node_modules
    dist

```
5. Crear archivo ```README.md```

6. crear el archivos ```vit.config.js```

```js
    import { defineConfig } from 'vite'
    /* 
        Esta funcion espera un objeto para definir cual va a ser el 
        directorio o añadir un directorio público o culquier otro 
        cambio de deploy,
     */
    export default defineConfig({
        base '/'
    });
```



6. Desplegar el proyecto como una web en "github pages"
    * Renombrar la carpeta "dist" por "docs"

