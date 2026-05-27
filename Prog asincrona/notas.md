# Operaciones Asíncronas

### Que es una operacion asincrona?

> Una operacion asincrona, **`es aquella que se carga en el stack pero no frena la ejecucion`**. Se carga, al no finalziar en el momento, el hilo sigue y una vez que finalice la funcion asincrona se utiliza el valor devuelto

## CallBacks

Los Callbacks son funciones que se pasan como parametro otras funciones. Para que despues sean ejecutadas (cuando lo determine la funcion).

```js
array.foreach(callback);
setTimeOut(callback, time);
```

## Promesas

Para optimizar el uso de callbacks (en operaciones asincronas) y hacer que la lectura y el mantenimiento del código no sean tan complicados, se inventaron las promesas.

**`Las promesas son un objeto que tienen 3 estados:`**

1. Pending (pendiente).
2. Fullfilled(resolve).
3. Rejected (rechadaza => reject)

### Creo mi propia promesa

> Tomá estas dos funciones. Cuando termines, llamame a una: si salió bien, usá resolve; si salió mal, usá reject.“Tomá estas dos funcione

```js
function miPromesa(URL) {
  return new Promise((resolve, reject) => {
    const existeURL = URL ? true : false;
    const datos = [
      {
        id: 1,
        nombre: "Ezequiel",
      },
      {
        id: 2,
        nombre: "Franco",
      },
    ];

    if (existeURL) {
      resolve(datos);
    } else {
      reject("Peticion invalida");
    }
  });
}
```

Para utilizar dicha promesa:

```js
    miPromesa("https://www.google.com")
        .then(datos => datos.forEach(datos=>{
            console.log(dato)
        })
        .catch(error=>console.error(error))
```

## Async Await

Como **`azucar sintactico`**, se creo async await, que basicamente es una forma mas facil de manejar `Promesas` (mas comoda " ")

> La palabra clave `await pausa la ejecucion` de la funcion async hasta que la Promesa sea resuelta

```js
const datos = await miPromesa("URL");

datos.forEach((dato) => console.log(dato));
```

## Fetch

> Es una funcion incorporada en los navegadores, que permite realizar peticiones HTTP de forma asincrona.
> **`Forma parte de las API WEB`**

- `Retorna un objeto Promise`.
- Soporta CORS, cabeceras (headers), envio JSON

Luego de realizar fetch, este retorna una promesa que una vez cumplida, nos brinda un objeto **`Response`** con los datos de la respuesta,(body,status,ok,etc).

> **`En el CATCH solo entra si hay algun fallo de red, pero no contempla errores 400`**

```js
//Uso de Fetch + then

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);

    // Filtramos el estatus del servidor
    if (!response.ok) {
      throw new Error("Error HTTP", response.status);
    }

    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      lista += `<li>${user.name}</li>`;
      mostrar(user);
    });
    lista += "</ul>";
    contenedorApi.innerHTML = lista;
  })
  .catch((error) => console.error);
```

```js
//Uso de Fetch + Async Await

async function obtenerPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log(`respuesta servidor: ${response}`);
    if (!response.ok) {
      throw new Error("Error HTTP", response.status);
    }

    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

obtenerPost();
```

### Try-Catch-Finally

>Con esto capturamos errores en `tiempos de ejecucion`

**`Donde finally siempre se ejecuta`** : Se suele utilizar para cerrar recursos, limpiar o terminar tareas (conexiones,indicadores)

```js
try{

}catch(error){
    console.error(error)
}finally{

}
```
**Throw**: Sirve para lanzar excepciones manualmente.
`throw new Error ("mi error")`