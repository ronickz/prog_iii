const express = require('express')


const app = express();


app.get('/',(req,res)=>{
    res.send("hola mundo desde express")
})


app.get('/saludos',(req,res)=>{
    res.send("hola mundo desde /saludosw")
})

app.listen(3000,()=>{
    console.log('Escuchando desde puerto 3000');
})