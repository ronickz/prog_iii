import express from "express";
import environments from "./src/api/config/environments.js";
import conn from "./src/api/database/db.js"

//creo la instancia express
const app = express();
const PORT = environments.port;

app.get("/",(req,res)=>{
    res.send("hola mundo")
})


app.get("/api/products", async(req,res)=>{
    try {
        const sql = 'SELECT * FROM products'
        const [rows] = await conn.query(sql)
        
        res.status(200).json({
            payload:rows
        })

    } catch (error) {
        console.log(`error obteniendo productos: ${error.message}`);
    }
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en: ${PORT}`)
})