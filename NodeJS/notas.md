# NodeJS

**aprender aprender**

> * NVM (chusmear) 


## Verbos HTTP

* GET
* POST
* PUT
* DELETE


## Codigos de respuesta

* `2xx` : Exito
* `3xx` : Redireccion
* `4xx` : Error **cliente**
* `5xx` : Error **servidor**



## APIS

*Node.JS* al ejecutarse en el sistema operativo, comparte apis para `gestionar` el mismo

* *fs*: para manipular archivos
* *path*: para manipula rutas
* *os*: nos permite obtener informacion del s.o
* *http*
* *etc*


## Rutas

Utilizar *saludos.js* es *`!==`* *./saludos*

>Si no escribo ./ buscara el archivo dentro de node_modules

## Modulos

Sirve para separar el codigo y que no quede todo en un archivo.

```js
module.exports = fs;
export default fs;


const fs = require('fs')
import fs from "fs"

```

## EXPRESS

### ¿Que es?

Es un *framework minimalista* que nos permite crear y manipular servidores de una forma mas amigable

```bash
npm i express
```