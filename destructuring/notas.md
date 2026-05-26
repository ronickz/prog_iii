# Destructuring

> Destructuring, significa desarmar o descomponer

## Arrays

>En los arrays, lo que importa es la **posicion**.

```js
const numeros = [5,10,15];

const [primero,segundo,tercero] = numeros;
```

Se puede saltear los lugares.

```js
const [primero, ,tercero] = numeros;
```

>`operador REST` sirve para dejar una copia de los valores

```js
const arrayUno = [1,2,3,4,5]
const arrayDos = ...arrayUno
```

```js

const [primero,segundo,...resto] = numeros
```


## Objetos

>En objetos, la destructuracion funciona por **nombre de propiedad**.

```js
const objetoUno = {
    nombre: "Ezequiel",
    apellido: "Perez"
}

const { nombre, apellido } = objetoUno
```

