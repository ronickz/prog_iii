//================================================
//---------------- 1-----------------------------
//===============================================


function saludar() {
    console.log("hola ezeee")
}

setTimeout(saludar, 3000)

//-----------------------------------------------

//================================================
//---------------- 2DOM-----------------------------
//===============================================
const boton = document.getElementById("boton")

boton.addEventListener("click", (event) => {

    //Obtengo informacion del evento
    console.log(event.type)


    // Obtengo el id del evento
    console.log(event.target.id)
})


//===============================================


//================================================
//---------------- 3 Arrays-----------------------------
//==============================================

const numeros = [1, 2, 3, 4]

function imprimirNumeros(numero) {
    console.log(numero)
}

//numeros.forEach(imprimirNumeros)

/*
numeros.forEach((valor) => {
    console.log(`Desde flecha ${valor}`)
})
*/



//================================================
//----------------4 Peticiones HTTP--------------
//===============================================


// Promesas

/*
fetch("https://jsonplaceholder.typicode.com/posts") //Peticion HTTP
    .then(response => {
        return response.json();
    })

    .then(data => {
        console.table(data)
    })

    .catch(error => {
        console.error(error)
    })
*/

//Creo mi propia promesa

//Promise crea 2 funciones y te las brinda para notificar si sale bien o si sale mal.

function buscarPersonas(URL){
    return new Promise((resolve,reject)=>{
        const personas = [
            {
                id:1,
                nombre:"Eze",
                apellido: "Perez"
            },
            {
                id:2,
                nombre: "Mica",
                apellido: "Gonzalez"
            }
        ];
        let peticionCorrecta = URL ? true : false;

        if(peticionCorrecta){
            resolve(personas)
        }else{
            resolve("Error en la peticion")
        }
    })
}


/*
buscarPersonas("URLURL")
    .then(response => {response.forEach((persona)=>{
        console.log(`${persona.id}-${persona.nombre} ${persona.apellido}`)
    })})
    .catch(error => console.error(error))

*/

//Async await
//Azucar sintactico

async function obtenerPost(params) {
    try {        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos = await response.json()
    
        console.table(datos)
    } catch (error) {
        console.error(error)
    }
}


//obtenerPost()


//console.log('sali')



//destructuring: Descomponer objetos o arrays en variables


