# JS => Operaciones Asincronas

### Que es una operacion asincrona?

>Una operacion asincrona, es aquella que se carga en el stack pero no frena la ejecucion. Se carga, al no finalziar en el momento, el hilo sigue y una vez que finalice la funcion asincrona se utiliza el valor devuelto

## CallBacks


Los Callbacks son funciones que se pasan como parametro otras funciones. Para que despues sean ejecutadas.


```js
    array.foreach(callback)
    setTimeOut(callback,time)
```

## Promesas

Para optimizar el uso de callbacks (en operaciones asincronas) y hacer que la lectura y el mantenimiento del código no sean tan complicados, se inventaron las promesas.

Las promesas tienen 3 estados:
1. Pending (pendiente).
2. Fullfilled(resolve).
3. Rejected (rechadaza => reject)

#### Creo mi propia promesa

>Tomá estas dos funciones. Cuando termines, llamame a una: si salió bien, usá resolve; si salió mal, usá reject.“Tomá estas dos funcione
```js
    function miPromesa(URL){

        return new Promise((resolve,reject)=>{

            const existeURL = URL ? true : false
            const datos = [
                {
                    id:1,
                    nombre:"Ezequiel"
                },
                {
                    id:2,
                    nombre:"Franco"
                }
            ]

            if(existeURL){
                resolve(datos)
            }
            else
            {
                reject("Peticion invalida")
            }
        })
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

### Async Await

Como **azucar sintactico**, se creo asyn await, que basicamente es lo mismo que promesas pero con diferente sintaxis (mas comoda " ")

```js
    const datos = await miPromesa("URL")

    datos.forEach(dato=>console.log(dato))

```