/*

//Importo

const saludar = require('./saludos.js')
console.log(saludar("eze"))


//FS

const fs = require('fs')


fs.readFile('./notas.txt','utf8',(err,data)=>{
    if(err){
        console.log('Ocurrio error', err);
        return
    }else{
        console.log(`contenido de archivo: ${data}`)
    }
})


// Path

const path = require("path");

const ruta = path.join(__dirname, "archivos","texto.txt")

console.log(`usando path ruta: ${ruta}`)

// OS

const os = require("os")

const memoriaLibre = os.freemem()
const tipoSistema = os.type();

console.log(`usando os, memoria libre:${memoriaLibre} y tipo de sistema:${tipoSistema}`)


*/


// HTTP


const http = require('http')

const servidor = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type","text/plain")
    res.end("HOla mundo desde NODE")
})

servidor.listen(3000,()=>{
    console.log('Corriendo sv');
})